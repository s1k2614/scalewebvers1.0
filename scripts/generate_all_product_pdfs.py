#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from reportlab.lib.pagesizes import A4
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, KeepTogether
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch, cm
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_JUSTIFY, TA_RIGHT
from reportlab.pdfgen import canvas
from reportlab.graphics.shapes import Drawing, Rect, Circle, Line, String, Group
from reportlab.graphics import renderPDF
import os

# === IMPORT FUNCTIONS FROM MAIN SCRIPT ===
def create_website_hero_header(canvas, doc):
    """Erstellt 1:1 Website Hero Header"""
    canvas.saveState()
    
    # === GRADIENT BACKGROUND (wie Website) ===
    # from-slate-900 via-slate-800 to-red-900
    canvas.setFillColor(colors.HexColor('#0f172a'))  # slate-900
    canvas.rect(0, A4[1] - 4*cm, A4[0], 4*cm, fill=1, stroke=0)
    
    canvas.setFillColor(colors.HexColor('#1e293b'))  # slate-800
    canvas.rect(0, A4[1] - 3.5*cm, A4[0], 3*cm, fill=1, stroke=0)
    
    canvas.setFillColor(colors.HexColor('#7c2d12'))  # red-900
    canvas.rect(0, A4[1] - 3*cm, A4[0], 2.5*cm, fill=1, stroke=0)
    
    # === FLOATING CIRCLES (Website Animation nachgestellt) ===
    # Red circle (top-left)
    canvas.setFillColor(colors.HexColor('#dc262620'))  # red-600/20
    canvas.circle(3*cm, A4[1] - 2*cm, 1*cm, fill=1, stroke=0)
    
    # Slate circle (top-right)  
    canvas.setFillColor(colors.HexColor('#47556920'))  # slate-600/20
    canvas.circle(A4[0] - 3*cm, A4[1] - 1.5*cm, 1.2*cm, fill=1, stroke=0)
    
    # Cyan circle (bottom)
    canvas.setFillColor(colors.HexColor('#0891b220'))  # cyan-600/20
    canvas.circle(A4[0]/2, A4[1] - 3.5*cm, 1*cm, fill=1, stroke=0)
    
    # === LOGO BOX (wie Website bg-white/10 backdrop-blur) ===
    # Semi-transparenter weißer Hintergrund
    canvas.setFillColor(colors.HexColor('#ffffff20'))  # white/10
    canvas.setStrokeColor(colors.HexColor('#ffffff40'))  # white/20 border
    canvas.setLineWidth(1)
    canvas.roundRect(2*cm, A4[1] - 2.5*cm, 8*cm, 1.5*cm, 0.3*cm, fill=1, stroke=1)
    
    # Logo Icon Box (gradient red to slate)
    canvas.setFillColor(colors.HexColor('#dc2626'))  # red-600
    canvas.roundRect(2.3*cm, A4[1] - 2.3*cm, 1*cm, 1*cm, 0.2*cm, fill=1, stroke=0)
    
    # Logo Text
    canvas.setFont('Helvetica-Bold', 20)
    canvas.setFillColor(colors.white)
    canvas.drawString(3.8*cm, A4[1] - 2*cm, "ScaleITS")
    
    canvas.setFont('Helvetica', 12)
    canvas.setFillColor(colors.HexColor('#fca5a5'))  # red-300
    canvas.drawString(3.8*cm, A4[1] - 2.3*cm, "IT Solutions & Services")
    
    # === FOOTER (Corporate Style) ===
    canvas.setFillColor(colors.HexColor('#1e293b'))  # slate-800
    canvas.rect(0, 0, A4[0], 2*cm, fill=1, stroke=0)
    
    # Footer Content
    canvas.setFont('Helvetica-Bold', 10)
    canvas.setFillColor(colors.white)
    canvas.drawString(2*cm, 1.3*cm, "ScaleITS Solutions")
    
    canvas.setFont('Helvetica', 8)
    canvas.setFillColor(colors.HexColor('#94a3b8'))  # slate-400
    canvas.drawString(2*cm, 1*cm, "📧 info@scaleits.de  🌐 www.scaleits.de  📞 Kostenlose Beratung")
    canvas.drawRightString(A4[0] - 2*cm, 1*cm, "Enterprise Ready • Security First • Future Proof")
    
    # Footer accent line
    canvas.setStrokeColor(colors.HexColor('#dc2626'))  # red-600
    canvas.setLineWidth(3)
    canvas.line(0, 2*cm, A4[0], 2*cm)
    
    canvas.restoreState()

def create_stats_cards_graphic(stats_data):
    """Erstellt echte grafische Statistik-Cards wie auf der Website"""
    drawing = Drawing(15*cm, 6*cm)
    
    # Hintergrund (transparent wie Website)
    bg_rect = Rect(0, 0, 15*cm, 6*cm, fillColor=colors.HexColor('#ffffff10'), strokeColor=None)
    drawing.add(bg_rect)
    
    # 3 Cards nebeneinander (wie Website Grid)
    card_width = 4.5*cm
    card_height = 4*cm
    spacing = 0.75*cm
    
    for i, stat in enumerate(stats_data[:3]):  # Nur erste 3 Stats
        x_pos = i * (card_width + spacing)
        
        # Card Background (bg-white/10 backdrop-blur)
        card_bg = Rect(x_pos, 1*cm, card_width, card_height, 
                      fillColor=colors.HexColor('#ffffff15'), 
                      strokeColor=colors.HexColor('#ffffff30'),
                      strokeWidth=1)
        drawing.add(card_bg)
        
        # Großer Wert (red-400 Gradient Text)
        value_text = String(x_pos + card_width/2, 3.5*cm, stat['value'], 
                           fontSize=24, fillColor=colors.HexColor('#f87171'),  # red-400
                           textAnchor='middle', fontName='Helvetica-Bold')
        drawing.add(value_text)
        
        # Label (slate-300)
        label_text = String(x_pos + card_width/2, 2*cm, stat['label'], 
                           fontSize=10, fillColor=colors.HexColor('#cbd5e1'),  # slate-300
                           textAnchor='middle', fontName='Helvetica')
        drawing.add(label_text)
        
        # Icon Circle (red-600)
        icon_circle = Circle(x_pos + card_width/2, 4.5*cm, 0.3*cm, 
                           fillColor=colors.HexColor('#dc2626'), strokeColor=None)
        drawing.add(icon_circle)
    
    return drawing

def create_feature_cards_graphic(features):
    """Erstellt Feature-Cards wie auf der Website"""
    drawing = Drawing(15*cm, 8*cm)
    
    # 3 Feature Cards
    card_width = 4.5*cm
    card_height = 6*cm
    spacing = 0.75*cm
    
    icons = ['🛡️', '⚡', '🚀']  # Shield, Zap, Rocket
    colors_list = [
        colors.HexColor('#dc2626'),  # red-600
        colors.HexColor('#0891b2'),  # cyan-600  
        colors.HexColor('#475569')   # slate-600
    ]
    
    for i, feature in enumerate(features[:3]):
        x_pos = i * (card_width + spacing)
        card_color = colors_list[i]
        
        # Card Background (wie Website bg-white/10)
        card_bg = Rect(x_pos, 1*cm, card_width, card_height,
                      fillColor=colors.HexColor('#ffffff15'),
                      strokeColor=colors.HexColor('#ffffff30'), 
                      strokeWidth=1)
        drawing.add(card_bg)
        
        # Hover Effect Border (red-400/50)
        hover_border = Rect(x_pos, 1*cm, card_width, card_height,
                           fillColor=None,
                           strokeColor=colors.HexColor('#f87171'),  # red-400
                           strokeWidth=2)
        drawing.add(hover_border)
        
        # Icon Background Circle
        icon_bg = Circle(x_pos + card_width/2, 6*cm, 0.6*cm,
                        fillColor=card_color, strokeColor=None)
        drawing.add(icon_bg)
        
        # Feature Title (white)
        title_text = String(x_pos + card_width/2, 4.5*cm, feature['title'],
                           fontSize=12, fillColor=colors.white,
                           textAnchor='middle', fontName='Helvetica-Bold')
        drawing.add(title_text)
        
        # Feature Description (slate-300)
        desc_lines = feature['description'].split(' ')
        line1 = ' '.join(desc_lines[:3])
        line2 = ' '.join(desc_lines[3:]) if len(desc_lines) > 3 else ''
        
        desc1_text = String(x_pos + card_width/2, 3.5*cm, line1,
                           fontSize=9, fillColor=colors.HexColor('#cbd5e1'),
                           textAnchor='middle', fontName='Helvetica')
        drawing.add(desc1_text)
        
        if line2:
            desc2_text = String(x_pos + card_width/2, 3*cm, line2,
                               fontSize=9, fillColor=colors.HexColor('#cbd5e1'),
                               textAnchor='middle', fontName='Helvetica')
            drawing.add(desc2_text)
    
    return drawing

def get_website_styles():
    """Website-identische Styles"""
    styles = getSampleStyleSheet()
    
    # Hero Title (wie Website text-5xl md:text-7xl)
    hero_title = ParagraphStyle(
        'HeroTitle',
        parent=styles['Title'],
        fontSize=36,  # entspricht text-5xl
        spaceAfter=20,
        spaceBefore=15,
        textColor=colors.white,
        alignment=TA_CENTER,
        fontName='Helvetica-Bold'
    )
    
    # Gradient Text (bg-gradient-to-r from-red-400 to-slate-400)
    gradient_subtitle = ParagraphStyle(
        'GradientSubtitle',
        parent=styles['Heading2'],
        fontSize=24,
        spaceAfter=15,
        textColor=colors.HexColor('#f87171'),  # red-400 (Gradient Start)
        alignment=TA_CENTER,
        fontName='Helvetica-Bold'
    )
    
    # Lead Text (text-xl md:text-2xl text-slate-300)
    lead_text = ParagraphStyle(
        'LeadText',
        parent=styles['Normal'],
        fontSize=14,  # entspricht text-xl
        spaceAfter=12,
        textColor=colors.HexColor('#cbd5e1'),  # slate-300
        alignment=TA_CENTER,
        fontName='Helvetica',
        leading=20
    )
    
    # Body Text (Website-Style)
    body_text = ParagraphStyle(
        'BodyText',
        parent=styles['Normal'],
        fontSize=11,
        spaceAfter=8,
        textColor=colors.HexColor('#475569'),  # slate-600
        alignment=TA_JUSTIFY,
        fontName='Helvetica',
        leading=16
    )
    
    return {
        'hero_title': hero_title,
        'gradient_subtitle': gradient_subtitle,
        'lead_text': lead_text,
        'body_text': body_text
    }

# === ALLE PRODUCT PDFs ===

def create_acmp_pdf():
    """ACMP PDF mit Website-Elementen"""
    doc = SimpleDocTemplate(
        "c:/Users/Martin/source/repos/scaleweb/public/pdfs/acmp-produktinfo.pdf",
        pagesize=A4,
        topMargin=5*cm,
        bottomMargin=3*cm,
        leftMargin=2*cm,
        rightMargin=2*cm
    )
    
    styles = get_website_styles()
    story = []
    
    # Hero Section
    story.append(Paragraph("ACMP", styles['hero_title']))
    story.append(Paragraph("Advanced Cloud Management Platform", styles['gradient_subtitle']))
    story.append(Spacer(1, 0.6*cm))
    
    # Lead Text
    lead_text = """
    ACMP revolutioniert das Multi-Cloud-Management mit intelligenter Automatisierung 
    und ermöglicht eine nahtlose Verwaltung Ihrer gesamten Cloud-Infrastruktur aus einer zentralen Plattform.
    """
    story.append(Paragraph(lead_text, styles['lead_text']))
    story.append(Spacer(1, 0.8*cm))
    
    # ACMP Features
    acmp_features = [
        {
            'title': 'Multi-Cloud Orchestration',
            'description': 'Einheitliche Verwaltung von AWS, Azure, Google Cloud'
        },
        {
            'title': 'Smart Automation',
            'description': 'KI-gestützte Automatisierung wiederkehrender Aufgaben'
        },
        {
            'title': 'Cost Optimization',
            'description': 'Intelligente Kostenanalyse und -optimierung'
        }
    ]
    
    acmp_cards = create_feature_cards_graphic(acmp_features)
    story.append(acmp_cards)
    story.append(Spacer(1, 0.8*cm))
    
    # Performance Stats
    acmp_stats = [
        {'value': '75%', 'label': 'Kosteneinsparung'},
        {'value': '90%', 'label': 'Zeitersparnis'},
        {'value': '99.9%', 'label': 'Verfügbarkeit'}
    ]
    
    acmp_stats_cards = create_stats_cards_graphic(acmp_stats)
    story.append(Paragraph("ACMP LEISTUNGSKENNZAHLEN", styles['hero_title']))
    story.append(Spacer(1, 0.4*cm))
    story.append(acmp_stats_cards)
    
    doc.build(story, onFirstPage=create_website_hero_header, onLaterPages=create_website_hero_header)

def create_arctic_wolf_pdf():
    """Arctic Wolf PDF mit Website-Elementen"""
    doc = SimpleDocTemplate(
        "c:/Users/Martin/source/repos/scaleweb/public/pdfs/arctic-wolf-produktinfo.pdf",
        pagesize=A4,
        topMargin=5*cm,
        bottomMargin=3*cm,
        leftMargin=2*cm,
        rightMargin=2*cm
    )
    
    styles = get_website_styles()
    story = []
    
    # Hero Section
    story.append(Paragraph("ARCTIC WOLF", styles['hero_title']))
    story.append(Paragraph("Security Operations Cloud", styles['gradient_subtitle']))
    story.append(Spacer(1, 0.6*cm))
    
    # Lead Text
    lead_text = """
    Arctic Wolf transformiert Cybersecurity mit einer cloudnativen Security Operations Platform, 
    die 24/7-Überwachung, Bedrohungsjagd und Incident Response aus einer Hand bietet.
    """
    story.append(Paragraph(lead_text, styles['lead_text']))
    story.append(Spacer(1, 0.8*cm))
    
    # Arctic Wolf Features
    aw_features = [
        {
            'title': '24/7 SOC-as-a-Service',
            'description': 'Rund-um-die-Uhr Überwachung durch Sicherheitsexperten'
        },
        {
            'title': 'Managed Detection Response',
            'description': 'Proaktive Bedrohungserkennung und -reaktion'
        },
        {
            'title': 'Cloud-Native Platform',
            'description': 'Skalierbare Sicherheitsarchitektur in der Cloud'
        }
    ]
    
    aw_cards = create_feature_cards_graphic(aw_features)
    story.append(aw_cards)
    story.append(Spacer(1, 0.8*cm))
    
    # Security Stats
    aw_stats = [
        {'value': '15min', 'label': 'Avg. Response Time'},
        {'value': '99.5%', 'label': 'Threat Detection'},
        {'value': '24/7', 'label': 'SOC Monitoring'}
    ]
    
    aw_stats_cards = create_stats_cards_graphic(aw_stats)
    story.append(Paragraph("ARCTIC WOLF SECURITY METRICS", styles['hero_title']))
    story.append(Spacer(1, 0.4*cm))
    story.append(aw_stats_cards)
    
    doc.build(story, onFirstPage=create_website_hero_header, onLaterPages=create_website_hero_header)

def create_microsoft_pdf():
    """Microsoft PDF mit Website-Elementen"""
    doc = SimpleDocTemplate(
        "c:/Users/Martin/source/repos/scaleweb/public/pdfs/microsoft-produktinfo.pdf",
        pagesize=A4,
        topMargin=5*cm,
        bottomMargin=3*cm,
        leftMargin=2*cm,
        rightMargin=2*cm
    )
    
    styles = get_website_styles()
    story = []
    
    # Hero Section
    story.append(Paragraph("MICROSOFT", styles['hero_title']))
    story.append(Paragraph("Enterprise Cloud Solutions", styles['gradient_subtitle']))
    story.append(Spacer(1, 0.6*cm))
    
    # Lead Text
    lead_text = """
    Microsoft Azure und Microsoft 365 bilden das Rückgrat moderner Unternehmens-IT 
    mit nahtloser Integration, Enterprise-Sicherheit und weltweiter Skalierbarkeit.
    """
    story.append(Paragraph(lead_text, styles['lead_text']))
    story.append(Spacer(1, 0.8*cm))
    
    # Microsoft Features
    ms_features = [
        {
            'title': 'Azure Cloud Platform',
            'description': 'Globale Cloud-Infrastruktur mit 200+ Services'
        },
        {
            'title': 'Microsoft 365',
            'description': 'Integrierte Produktivitäts- und Collaboration-Suite'
        },
        {
            'title': 'Enterprise Security',
            'description': 'Zero Trust Sicherheitsarchitektur und Compliance'
        }
    ]
    
    ms_cards = create_feature_cards_graphic(ms_features)
    story.append(ms_cards)
    story.append(Spacer(1, 0.8*cm))
    
    # Microsoft Stats
    ms_stats = [
        {'value': '200+', 'label': 'Azure Services'},
        {'value': '54', 'label': 'Regionen weltweit'},
        {'value': '345M', 'label': 'M365 Nutzer'}
    ]
    
    ms_stats_cards = create_stats_cards_graphic(ms_stats)
    story.append(Paragraph("MICROSOFT ECOSYSTEM", styles['hero_title']))
    story.append(Spacer(1, 0.4*cm))
    story.append(ms_stats_cards)
    
    doc.build(story, onFirstPage=create_website_hero_header, onLaterPages=create_website_hero_header)

def create_services_beratung_pdf():
    """Services - Beratung PDF"""
    doc = SimpleDocTemplate(
        "c:/Users/Martin/source/repos/scaleweb/public/pdfs/services-beratung.pdf",
        pagesize=A4,
        topMargin=5*cm,
        bottomMargin=3*cm,
        leftMargin=2*cm,
        rightMargin=2*cm
    )
    
    styles = get_website_styles()
    story = []
    
    # Hero Section
    story.append(Paragraph("IT-BERATUNG", styles['hero_title']))
    story.append(Paragraph("Strategische Transformation", styles['gradient_subtitle']))
    story.append(Spacer(1, 0.6*cm))
    
    # Lead Text
    lead_text = """
    Unsere strategische IT-Beratung unterstützt Sie bei der digitalen Transformation 
    mit maßgeschneiderten Roadmaps und bewährten Best Practices für nachhaltigen Erfolg.
    """
    story.append(Paragraph(lead_text, styles['lead_text']))
    story.append(Spacer(1, 0.8*cm))
    
    # Beratung Features
    beratung_features = [
        {
            'title': 'IT-Strategie Entwicklung',
            'description': 'Langfristige Roadmap für digitale Transformation'
        },
        {
            'title': 'Technology Assessment',
            'description': 'Bewertung bestehender Systeme und Architekturen'
        },
        {
            'title': 'Change Management',
            'description': 'Begleitung bei organisatorischen Veränderungen'
        }
    ]
    
    beratung_cards = create_feature_cards_graphic(beratung_features)
    story.append(beratung_cards)
    story.append(Spacer(1, 0.8*cm))
    
    # Beratung Stats
    beratung_stats = [
        {'value': '85%', 'label': 'Erfolgsrate Projekte'},
        {'value': '3-6Mo', 'label': 'Avg. Projektdauer'},
        {'value': '50%', 'label': 'ROI Steigerung'}
    ]
    
    beratung_stats_cards = create_stats_cards_graphic(beratung_stats)
    story.append(Paragraph("BERATUNGSERFOLG IN ZAHLEN", styles['hero_title']))
    story.append(Spacer(1, 0.4*cm))
    story.append(beratung_stats_cards)
    
    doc.build(story, onFirstPage=create_website_hero_header, onLaterPages=create_website_hero_header)

def create_services_implementation_pdf():
    """Services - Implementation PDF"""
    doc = SimpleDocTemplate(
        "c:/Users/Martin/source/repos/scaleweb/public/pdfs/services-implementation.pdf",
        pagesize=A4,
        topMargin=5*cm,
        bottomMargin=3*cm,
        leftMargin=2*cm,
        rightMargin=2*cm
    )
    
    styles = get_website_styles()
    story = []
    
    # Hero Section
    story.append(Paragraph("IMPLEMENTATION", styles['hero_title']))
    story.append(Paragraph("Professional Services", styles['gradient_subtitle']))
    story.append(Spacer(1, 0.6*cm))
    
    # Lead Text
    lead_text = """
    Professionelle Implementierung Ihrer IT-Lösungen mit bewährten Projektmanagement-Methoden, 
    minimalen Ausfallzeiten und nahtloser Integration in bestehende Systeme.
    """
    story.append(Paragraph(lead_text, styles['lead_text']))
    story.append(Spacer(1, 0.8*cm))
    
    # Implementation Features
    impl_features = [
        {
            'title': 'Agile Projektumsetzung',
            'description': 'Iterative Entwicklung mit kontinuierlichem Feedback'
        },
        {
            'title': 'Zero-Downtime Migration',
            'description': 'Nahtlose Systemübergänge ohne Unterbrechungen'
        },
        {
            'title': 'Quality Assurance',
            'description': 'Umfassende Tests und Qualitätssicherung'
        }
    ]
    
    impl_cards = create_feature_cards_graphic(impl_features)
    story.append(impl_cards)
    story.append(Spacer(1, 0.8*cm))
    
    # Implementation Stats
    impl_stats = [
        {'value': '98%', 'label': 'On-Time Delivery'},
        {'value': '<2h', 'label': 'Avg. Downtime'},
        {'value': '100%', 'label': 'Quality Tests'}
    ]
    
    impl_stats_cards = create_stats_cards_graphic(impl_stats)
    story.append(Paragraph("IMPLEMENTATION QUALITÄT", styles['hero_title']))
    story.append(Spacer(1, 0.4*cm))
    story.append(impl_stats_cards)
    
    doc.build(story, onFirstPage=create_website_hero_header, onLaterPages=create_website_hero_header)

def create_services_wartung_pdf():
    """Services - Wartung PDF"""
    doc = SimpleDocTemplate(
        "c:/Users/Martin/source/repos/scaleweb/public/pdfs/services-wartung.pdf",
        pagesize=A4,
        topMargin=5*cm,
        bottomMargin=3*cm,
        leftMargin=2*cm,
        rightMargin=2*cm
    )
    
    styles = get_website_styles()
    story = []
    
    # Hero Section
    story.append(Paragraph("WARTUNG & SUPPORT", styles['hero_title']))
    story.append(Paragraph("Managed Services Excellence", styles['gradient_subtitle']))
    story.append(Spacer(1, 0.6*cm))
    
    # Lead Text
    lead_text = """
    Proaktive Systemwartung und 24/7-Support sorgen für maximale Verfügbarkeit 
    Ihrer IT-Infrastruktur mit präventiven Maßnahmen und schneller Problemlösung.
    """
    story.append(Paragraph(lead_text, styles['lead_text']))
    story.append(Spacer(1, 0.8*cm))
    
    # Wartung Features
    wartung_features = [
        {
            'title': 'Proactive Monitoring',
            'description': '24/7 Überwachung mit intelligenten Alerts'
        },
        {
            'title': 'Preventive Maintenance',
            'description': 'Planmäßige Wartung zur Ausfallvermeidung'
        },
        {
            'title': 'Rapid Response',
            'description': 'Schnelle Incident-Response und Problemlösung'
        }
    ]
    
    wartung_cards = create_feature_cards_graphic(wartung_features)
    story.append(wartung_cards)
    story.append(Spacer(1, 0.8*cm))
    
    # Wartung Stats
    wartung_stats = [
        {'value': '99.9%', 'label': 'System Uptime'},
        {'value': '<15min', 'label': 'Response Time'},
        {'value': '24/7', 'label': 'Support verfügbar'}
    ]
    
    wartung_stats_cards = create_stats_cards_graphic(wartung_stats)
    story.append(Paragraph("WARTUNG & SUPPORT KENNZAHLEN", styles['hero_title']))
    story.append(Spacer(1, 0.4*cm))
    story.append(wartung_stats_cards)
    
    doc.build(story, onFirstPage=create_website_hero_header, onLaterPages=create_website_hero_header)

def create_contact_pdf():
    """Contact PDF"""
    doc = SimpleDocTemplate(
        "c:/Users/Martin/source/repos/scaleweb/public/pdfs/kontakt-scaleits.pdf",
        pagesize=A4,
        topMargin=5*cm,
        bottomMargin=3*cm,
        leftMargin=2*cm,
        rightMargin=2*cm
    )
    
    styles = get_website_styles()
    story = []
    
    # Hero Section
    story.append(Paragraph("KONTAKT", styles['hero_title']))
    story.append(Paragraph("Ihr Partner für IT-Excellence", styles['gradient_subtitle']))
    story.append(Spacer(1, 0.6*cm))
    
    # Lead Text
    lead_text = """
    Sprechen Sie mit unseren IT-Experten und entdecken Sie, 
    wie ScaleITS Ihr Unternehmen in die digitale Zukunft führen kann.
    """
    story.append(Paragraph(lead_text, styles['lead_text']))
    story.append(Spacer(1, 0.8*cm))
    
    # Contact Features
    contact_features = [
        {
            'title': 'Kostenlose Beratung',
            'description': 'Unverbindliches Erstgespräch zu Ihren Anforderungen'
        },
        {
            'title': 'Schnelle Antwort',
            'description': 'Rückmeldung innerhalb von 24 Stunden'
        },
        {
            'title': 'Persönlicher Service',
            'description': 'Direkter Draht zu unseren Experten'
        }
    ]
    
    contact_cards = create_feature_cards_graphic(contact_features)
    story.append(contact_cards)
    story.append(Spacer(1, 0.8*cm))
    
    # Contact Stats
    contact_stats = [
        {'value': '<24h', 'label': 'Response Time'},
        {'value': '100%', 'label': 'Kostenlose Beratung'},
        {'value': '10+', 'label': 'Jahre Erfahrung'}
    ]
    
    contact_stats_cards = create_stats_cards_graphic(contact_stats)
    story.append(Paragraph("WARUM SCALEITS?", styles['hero_title']))
    story.append(Spacer(1, 0.4*cm))
    story.append(contact_stats_cards)
    
    doc.build(story, onFirstPage=create_website_hero_header, onLaterPages=create_website_hero_header)

# Hauptfunktion
if __name__ == "__main__":
    os.makedirs("c:/Users/Martin/source/repos/scaleweb/public/pdfs", exist_ok=True)
    
    print("🎨 Erstelle alle Produktbroschüren mit 1:1 Website-Design...")
    
    try:
        create_acmp_pdf()
        print("✅ ACMP Produktbroschüre erstellt")
        
        create_arctic_wolf_pdf()
        print("✅ Arctic Wolf Produktbroschüre erstellt")
        
        create_microsoft_pdf()
        print("✅ Microsoft Produktbroschüre erstellt")
        
        create_services_beratung_pdf()
        print("✅ Services - Beratung Broschüre erstellt")
        
        create_services_implementation_pdf()
        print("✅ Services - Implementation Broschüre erstellt")
        
        create_services_wartung_pdf()
        print("✅ Services - Wartung Broschüre erstellt")
        
        create_contact_pdf()
        print("✅ Kontakt Broschüre erstellt")
        
        print("\n🎉 ALLE PRODUKTBROSCHÜREN ERFOLGREICH ERSTELLT!")
        print("📁 Speicherort: public/pdfs/")
        print("\n📋 Erstellte PDFs:")
        print("  📄 acmp-produktinfo.pdf")
        print("  📄 arctic-wolf-produktinfo.pdf") 
        print("  📄 microsoft-produktinfo.pdf")
        print("  📄 services-beratung.pdf")
        print("  📄 services-implementation.pdf")
        print("  📄 services-wartung.pdf")
        print("  📄 kontakt-scaleits.pdf")
        
        print("\n🎨 DESIGN-FEATURES:")
        print("  ✨ 1:1 Website Hero Header mit Gradient")
        print("  ✨ Floating Animation Circles")
        print("  ✨ Logo Box mit backdrop-blur Effect")
        print("  ✨ Echte Stats Cards (keine HTML-Codes!)")
        print("  ✨ Feature Cards mit Icon Circles")
        print("  ✨ Website-identische Farben und Typography")
        print("  ✨ Responsive Layout und Spacing")
        
    except Exception as e:
        print(f"❌ Fehler: {e}")
        import traceback
        traceback.print_exc()
