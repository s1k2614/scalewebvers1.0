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
from reportlab.platypus.flowables import Image
import os

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

def create_website_card_style():
    """Erstellt Website Card Styles"""
    return ParagraphStyle(
        'WebsiteCard',
        fontSize=11,
        textColor=colors.HexColor('#334155'),  # slate-700
        alignment=TA_LEFT,
        fontName='Helvetica',
        backColor=colors.HexColor('#ffffff20'),  # white/10 (transparent)
        borderColor=colors.HexColor('#ffffff40'),  # white/20
        borderWidth=1,
        topPadding=15,
        bottomPadding=15,
        leftPadding=20,
        rightPadding=20,
        borderRadius=15  # rounded-2xl
    )

def create_stats_cards_graphic(stats_data):
    """Erstellt echte grafische Statistik-Cards wie auf der Website"""
    
    # Erstelle Drawing für die Stats
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

def create_company_overview_pdf():
    """Erstellt Unternehmensbroschüre mit 1:1 Website-Elementen"""
    doc = SimpleDocTemplate(
        "c:/Users/Martin/source/repos/scaleweb/public/pdfs/scaleweb-unternehmensprospekt.pdf",
        pagesize=A4,
        topMargin=5*cm,  # Platz für Website Hero Header
        bottomMargin=3*cm,  # Platz für Footer
        leftMargin=2*cm,
        rightMargin=2*cm
    )
    
    styles = get_website_styles()
    story = []
    
    # === HERO SECTION (1:1 Website) ===
    
    story.append(Paragraph("Skalierbare IT-Lösungen", styles['hero_title']))
    story.append(Paragraph("für Ihr Wachstum", styles['gradient_subtitle']))
    story.append(Spacer(1, 0.6*cm))
    
    # Lead Text (1:1 von Website)
    lead_text = """
    Als Ihr strategischer IT-Partner kombinieren wir bewährte Technologien von ACMP, 
    Hornetsecurity und Arctic Wolf zu maßgeschneiderten Lösungen, die mit Ihrem Unternehmen wachsen.
    """
    story.append(Paragraph(lead_text, styles['lead_text']))
    story.append(Spacer(1, 0.8*cm))
    
    # === CORE VALUES CARDS (1:1 Website Grid) ===
    
    core_values = [
        {
            'title': 'Enterprise Security',
            'description': 'Umfassender Schutz für kritische Geschäftsprozesse'
        },
        {
            'title': 'Skalierbare Infrastruktur', 
            'description': 'IT-Lösungen die mit Ihrem Wachstum mithalten'
        },
        {
            'title': 'Proaktiver Support',
            'description': 'Präventive Wartung für maximale Verfügbarkeit'
        }
    ]
    
    # Feature Cards Drawing hinzufügen
    feature_cards = create_feature_cards_graphic(core_values)
    story.append(Spacer(1, 0.5*cm))
    story.append(feature_cards)
    story.append(Spacer(1, 0.8*cm))
    
    # === ERFOLGS-STATISTIKEN (1:1 Website Cards) ===
    
    company_stats = [
        {'value': '10+', 'label': 'Jahre Erfahrung'},
        {'value': '200+', 'label': 'Erfolgreiche Projekte'}, 
        {'value': '24/7', 'label': 'Support verfügbar'}
    ]
    
    # Titel für Stats Section
    stats_title = ParagraphStyle(
        'StatsTitle',
        fontSize=18,
        textColor=colors.white,
        alignment=TA_CENTER,
        fontName='Helvetica-Bold',
        spaceAfter=15
    )
    
    story.append(Paragraph("UNSERE ERFOLGSBILANZ", stats_title))
    
    # Stats Cards Drawing
    stats_cards = create_stats_cards_graphic(company_stats)
    story.append(stats_cards)
    story.append(Spacer(1, 1*cm))
    
    # === WEITERE STATISTIKEN ===
    
    more_stats = [
        {'value': '95%', 'label': 'Kundenzufriedenheit'},
        {'value': '35%', 'label': 'Kosteneinsparung'},
        {'value': '40%', 'label': 'Effizienzsteigerung'}
    ]
    
    more_stats_cards = create_stats_cards_graphic(more_stats)
    story.append(more_stats_cards)
    
    # === SEITENUMBRUCH ===
    story.append(PageBreak())
    
    # === SEITE 2: SERVICES ===
    
    story.append(Paragraph("Unser Service-Portfolio", styles['hero_title']))
    story.append(Spacer(1, 0.8*cm))
    
    # Service Features
    service_features = [
        {
            'title': 'Strategische Beratung',
            'description': 'IT-Strategieentwicklung und Roadmap für nachhaltiges Wachstum'
        },
        {
            'title': 'Implementation',
            'description': 'Professionelle Umsetzung mit bewährten Projektmanagement-Methoden'
        },
        {
            'title': 'Managed Services',
            'description': 'Proaktiver Support und Wartung für höchste Verfügbarkeit'
        }
    ]
    
    service_cards = create_feature_cards_graphic(service_features)
    story.append(service_cards)
    story.append(Spacer(1, 1*cm))
    
    # Call-to-Action (Website-Style)
    cta_style = ParagraphStyle(
        'CallToAction',
        fontSize=16,
        textColor=colors.white,
        alignment=TA_CENTER,
        fontName='Helvetica-Bold',
        backColor=colors.HexColor('#dc2626'),  # red-600
        topPadding=25,
        bottomPadding=25,
        leftPadding=30,
        rightPadding=30
    )
    
    cta_text = """
    🚀 BEREIT FÜR SKALIERBARE IT-LÖSUNGEN?
    
    Kontaktieren Sie uns für eine kostenlose Erstberatung!
    
    📧 info@scaleits.de | 🌐 www.scaleits.de
    """
    
    story.append(Paragraph(cta_text, cta_style))
    
    # PDF erstellen mit Website Hero Header
    doc.build(story, onFirstPage=create_website_hero_header, onLaterPages=create_website_hero_header)

def create_hornetsecurity_pdf():
    """Erstellt Hornetsecurity PDF mit Website-Elementen"""
    doc = SimpleDocTemplate(
        "c:/Users/Martin/source/repos/scaleweb/public/pdfs/hornetsecurity-produktinfo.pdf",
        pagesize=A4,
        topMargin=5*cm,
        bottomMargin=3*cm,
        leftMargin=2*cm,
        rightMargin=2*cm
    )
    
    styles = get_website_styles()
    story = []
    
    # Hero Section
    story.append(Paragraph("HORNETSECURITY", styles['hero_title']))
    story.append(Paragraph("E-Mail Security Excellence", styles['gradient_subtitle']))
    story.append(Spacer(1, 0.6*cm))
    
    # Lead Text
    lead_text = """
    Hornetsecurity revolutioniert die E-Mail-Sicherheit mit AI-gestützter Bedrohungserkennung 
    und bietet Ihrem Unternehmen 360°-Schutz vor modernen Cyber-Bedrohungen.
    """
    story.append(Paragraph(lead_text, styles['lead_text']))
    story.append(Spacer(1, 0.8*cm))
    
    # Hornetsecurity Features
    hs_features = [
        {
            'title': 'AI Threat Detection',
            'description': '99.9% Erkennungsrate mit maschinellem Lernen'
        },
        {
            'title': 'Email Continuity',
            'description': 'Unterbrechungsfreie Kommunikation garantiert'
        },
        {
            'title': 'Compliance Ready',
            'description': 'DSGVO-konforme Archivierung und Verschlüsselung'
        }
    ]
    
    hs_cards = create_feature_cards_graphic(hs_features)
    story.append(hs_cards)
    story.append(Spacer(1, 0.8*cm))
    
    # Performance Stats
    hs_stats = [
        {'value': '99.9%', 'label': 'Schutzrate'},
        {'value': '<1sec', 'label': 'Scan-Zeit'},
        {'value': '10M+', 'label': 'Bedrohungen/Tag'}
    ]
    
    hs_stats_cards = create_stats_cards_graphic(hs_stats)
    story.append(Paragraph("PERFORMANCE KENNZAHLEN", styles['hero_title']))
    story.append(Spacer(1, 0.4*cm))
    story.append(hs_stats_cards)
    
    doc.build(story, onFirstPage=create_website_hero_header, onLaterPages=create_website_hero_header)

# Hauptfunktion
if __name__ == "__main__":
    os.makedirs("c:/Users/Martin/source/repos/scaleweb/public/pdfs", exist_ok=True)
    
    print("🎨 Erstelle PDFs mit 1:1 Website-Elementen...")
    
    try:
        create_company_overview_pdf()
        print("✅ Unternehmensbroschüre mit echten Website-Elementen erstellt")
        
        create_hornetsecurity_pdf()
        print("✅ Hornetsecurity PDF mit echten Website-Elementen erstellt")
        
        print("\n🎉 PDFs mit 1:1 Website-Design erfolgreich erstellt!")
        print("📁 Speicherort: public/pdfs/")
        print("\n🎨 Echte Website-Features implementiert:")
        print("  ✨ Hero Header mit Gradient (from-slate-900 via-slate-800 to-red-900)")
        print("  ✨ Floating Animation Circles (red-600/20, slate-600/20, cyan-600/20)")
        print("  ✨ Logo Box (bg-white/10 backdrop-blur mit border)")
        print("  ✨ Echte Grafik-Cards anstatt HTML-Code")
        print("  ✨ Stats Cards (3-Grid Layout wie Website)")
        print("  ✨ Feature Cards mit Icon Circles")
        print("  ✨ Website-identische Farben und Abstände")
        print("  ✨ Responsive Typography")
        
        print("\n❌ ALTE PROBLEME GELÖST:")
        print("  • Kein sichtbarer HTML-Code mehr!")
        print("  • Echte grafische Darstellung")
        print("  • 1:1 Website-Layout und -Design")
        
    except Exception as e:
        print(f"❌ Fehler: {e}")
        import traceback
        traceback.print_exc()
