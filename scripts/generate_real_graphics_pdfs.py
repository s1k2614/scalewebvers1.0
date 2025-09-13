#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from reportlab.lib.pagesizes import A4
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, Flowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch, cm
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_JUSTIFY, TA_RIGHT
from reportlab.pdfgen import canvas
from reportlab.graphics.shapes import Drawing, Rect, Circle, String
from reportlab.graphics import renderPDF
import os

class StatsCardsFlowable(Flowable):
    """Custom Flowable für echte Stats Cards"""
    
    def __init__(self, stats_data, width=15*cm, height=6*cm):
        self.stats_data = stats_data
        self.width = width
        self.height = height
    
    def draw(self):
        """Zeichne die Stats Cards direkt auf Canvas"""
        canvas = self.canv
        canvas.saveState()
        
        # 3 Cards nebeneinander
        card_width = 4.5*cm
        card_height = 4*cm
        spacing = 0.75*cm
        start_x = 0.5*cm
        start_y = 1*cm
        
        for i, stat in enumerate(self.stats_data[:3]):
            x_pos = start_x + i * (card_width + spacing)
            
            # Card Background (glassmorphism effect)
            canvas.setFillColor(colors.HexColor('#ffffff15'))
            canvas.setStrokeColor(colors.HexColor('#ffffff30'))
            canvas.setLineWidth(1)
            canvas.roundRect(x_pos, start_y, card_width, card_height, 0.3*cm, fill=1, stroke=1)
            
            # Icon Circle
            canvas.setFillColor(colors.HexColor('#dc2626'))  # red-600
            canvas.circle(x_pos + card_width/2, start_y + card_height - 0.8*cm, 0.3*cm, fill=1, stroke=0)
            
            # Stats Value (großer Text)
            canvas.setFont('Helvetica-Bold', 24)
            canvas.setFillColor(colors.HexColor('#f87171'))  # red-400
            text_width = canvas.stringWidth(stat['value'], 'Helvetica-Bold', 24)
            canvas.drawString(x_pos + (card_width - text_width)/2, 
                            start_y + card_height/2 + 0.3*cm, stat['value'])
            
            # Stats Label
            canvas.setFont('Helvetica', 10)
            canvas.setFillColor(colors.HexColor('#cbd5e1'))  # slate-300
            label_width = canvas.stringWidth(stat['label'], 'Helvetica', 10)
            canvas.drawString(x_pos + (card_width - label_width)/2, 
                            start_y + card_height/2 - 0.5*cm, stat['label'])
        
        canvas.restoreState()

class FeatureCardsFlowable(Flowable):
    """Custom Flowable für Feature Cards"""
    
    def __init__(self, features, width=15*cm, height=8*cm):
        self.features = features
        self.width = width
        self.height = height
    
    def draw(self):
        """Zeichne die Feature Cards direkt auf Canvas"""
        canvas = self.canv
        canvas.saveState()
        
        # 3 Feature Cards
        card_width = 4.5*cm
        card_height = 6*cm
        spacing = 0.75*cm
        start_x = 0.5*cm
        start_y = 1*cm
        
        colors_list = [
            colors.HexColor('#dc2626'),  # red-600
            colors.HexColor('#0891b2'),  # cyan-600  
            colors.HexColor('#475569')   # slate-600
        ]
        
        for i, feature in enumerate(self.features[:3]):
            x_pos = start_x + i * (card_width + spacing)
            card_color = colors_list[i]
            
            # Card Background
            canvas.setFillColor(colors.HexColor('#ffffff15'))
            canvas.setStrokeColor(colors.HexColor('#ffffff30'))
            canvas.setLineWidth(1)
            canvas.roundRect(x_pos, start_y, card_width, card_height, 0.3*cm, fill=1, stroke=1)
            
            # Hover Effect Border
            canvas.setStrokeColor(colors.HexColor('#f87171'))  # red-400
            canvas.setLineWidth(2)
            canvas.roundRect(x_pos, start_y, card_width, card_height, 0.3*cm, fill=0, stroke=1)
            
            # Icon Background Circle
            canvas.setFillColor(card_color)
            canvas.circle(x_pos + card_width/2, start_y + card_height - 1*cm, 0.6*cm, fill=1, stroke=0)
            
            # Feature Title
            canvas.setFont('Helvetica-Bold', 12)
            canvas.setFillColor(colors.white)
            title_width = canvas.stringWidth(feature['title'], 'Helvetica-Bold', 12)
            canvas.drawString(x_pos + (card_width - title_width)/2, 
                            start_y + card_height - 2.5*cm, feature['title'])
            
            # Feature Description (mehrzeilig)
            canvas.setFont('Helvetica', 9)
            canvas.setFillColor(colors.HexColor('#cbd5e1'))
            
            # Text wrapping für Description
            desc_words = feature['description'].split(' ')
            line1 = ' '.join(desc_words[:4]) if len(desc_words) > 4 else feature['description']
            line2 = ' '.join(desc_words[4:]) if len(desc_words) > 4 else ''
            
            line1_width = canvas.stringWidth(line1, 'Helvetica', 9)
            canvas.drawString(x_pos + (card_width - line1_width)/2, 
                            start_y + card_height - 3.5*cm, line1)
            
            if line2:
                line2_width = canvas.stringWidth(line2, 'Helvetica', 9)
                canvas.drawString(x_pos + (card_width - line2_width)/2, 
                                start_y + card_height - 4*cm, line2)
        
        canvas.restoreState()

def create_website_hero_header(canvas, doc):
    """Erstellt 1:1 Website Hero Header"""
    canvas.saveState()
    
    # === GRADIENT BACKGROUND (wie Website) ===
    # Mehrere Rechtecke für Gradient-Effekt
    for i in range(20):  # 20 Schritte für smooth gradient
        # Farbe interpolieren zwischen slate-900 und red-900
        ratio = i / 20.0
        
        # slate-900 (#0f172a) -> slate-800 (#1e293b) -> red-900 (#7c2d12)
        if ratio < 0.5:
            # slate-900 to slate-800
            r1, g1, b1 = 0x0f, 0x17, 0x2a  # slate-900
            r2, g2, b2 = 0x1e, 0x29, 0x3b  # slate-800
            local_ratio = ratio * 2
        else:
            # slate-800 to red-900  
            r1, g1, b1 = 0x1e, 0x29, 0x3b  # slate-800
            r2, g2, b2 = 0x7c, 0x2d, 0x12  # red-900
            local_ratio = (ratio - 0.5) * 2
        
        r = int(r1 + (r2 - r1) * local_ratio)
        g = int(g1 + (g2 - g1) * local_ratio)
        b = int(b1 + (b2 - b1) * local_ratio)
        
        canvas.setFillColor(colors.HexColor(f'#{r:02x}{g:02x}{b:02x}'))
        canvas.rect(0, A4[1] - 4*cm + (i * 0.2*cm), A4[0], 0.2*cm, fill=1, stroke=0)
    
    # === FLOATING CIRCLES (Website Animation nachgestellt) ===
    # Red circle (top-left) - mit Transparenz-Simulation
    for radius in [1.2*cm, 1.1*cm, 1*cm]:
        alpha = int(255 * (0.1 + 0.1 * (1.2*cm - radius) / 0.2*cm))
        canvas.setFillColor(colors.HexColor(f'#dc2626{alpha:02x}'))
        canvas.circle(3*cm, A4[1] - 2*cm, radius, fill=1, stroke=0)
    
    # Slate circle (top-right)
    for radius in [1.4*cm, 1.3*cm, 1.2*cm]:
        alpha = int(255 * (0.1 + 0.1 * (1.4*cm - radius) / 0.2*cm))
        canvas.setFillColor(colors.HexColor(f'#475569{alpha:02x}'))
        canvas.circle(A4[0] - 3*cm, A4[1] - 1.5*cm, radius, fill=1, stroke=0)
    
    # Cyan circle (bottom)
    for radius in [1.2*cm, 1.1*cm, 1*cm]:
        alpha = int(255 * (0.1 + 0.1 * (1.2*cm - radius) / 0.2*cm))
        canvas.setFillColor(colors.HexColor(f'#0891b2{alpha:02x}'))
        canvas.circle(A4[0]/2, A4[1] - 3.5*cm, radius, fill=1, stroke=0)
    
    # === LOGO BOX (wie Website bg-white/10 backdrop-blur) ===
    # Backdrop blur simulation mit mehreren Layern
    for i in range(5):
        alpha = int(255 * (0.05 + i * 0.03))
        canvas.setFillColor(colors.HexColor(f'#ffffff{alpha:02x}'))
        canvas.setStrokeColor(colors.HexColor(f'#ffffff{alpha + 20:02x}'))
        canvas.setLineWidth(1)
        canvas.roundRect(2*cm - i*0.05*cm, A4[1] - 2.5*cm - i*0.05*cm, 
                        8*cm + i*0.1*cm, 1.5*cm + i*0.1*cm, 0.3*cm, fill=1, stroke=1)
    
    # Logo Icon Box (gradient red)
    canvas.setFillColor(colors.HexColor('#dc2626'))  # red-600
    canvas.roundRect(2.3*cm, A4[1] - 2.3*cm, 1*cm, 1*cm, 0.2*cm, fill=1, stroke=0)
    
    # Logo Icon (S)
    canvas.setFont('Helvetica-Bold', 16)
    canvas.setFillColor(colors.white)
    canvas.drawString(2.65*cm, A4[1] - 2.1*cm, "S")
    
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

def get_website_styles():
    """Website-identische Styles"""
    styles = getSampleStyleSheet()
    
    # Hero Title (wie Website text-5xl md:text-7xl)
    hero_title = ParagraphStyle(
        'HeroTitle',
        parent=styles['Title'],
        fontSize=36,
        spaceAfter=20,
        spaceBefore=15,
        textColor=colors.white,
        alignment=TA_CENTER,
        fontName='Helvetica-Bold'
    )
    
    # Gradient Text
    gradient_subtitle = ParagraphStyle(
        'GradientSubtitle',
        parent=styles['Heading2'],
        fontSize=24,
        spaceAfter=15,
        textColor=colors.HexColor('#f87171'),  # red-400
        alignment=TA_CENTER,
        fontName='Helvetica-Bold'
    )
    
    # Lead Text
    lead_text = ParagraphStyle(
        'LeadText',
        parent=styles['Normal'],
        fontSize=14,
        spaceAfter=12,
        textColor=colors.HexColor('#cbd5e1'),  # slate-300
        alignment=TA_CENTER,
        fontName='Helvetica',
        leading=20
    )
    
    return {
        'hero_title': hero_title,
        'gradient_subtitle': gradient_subtitle,
        'lead_text': lead_text
    }

def create_company_overview_pdf():
    """Erstellt Unternehmensbroschüre mit echten grafischen Elementen"""
    doc = SimpleDocTemplate(
        "c:/Users/Martin/source/repos/scaleweb/public/pdfs/scaleweb-unternehmensprospekt.pdf",
        pagesize=A4,
        topMargin=5*cm,
        bottomMargin=3*cm,
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
    
    # === CORE VALUES CARDS (echte Grafiken!) ===
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
    
    # Feature Cards als Custom Flowable
    feature_cards = FeatureCardsFlowable(core_values)
    story.append(feature_cards)
    story.append(Spacer(1, 0.8*cm))
    
    # === ERFOLGS-STATISTIKEN (echte Grafiken!) ===
    company_stats = [
        {'value': '10+', 'label': 'Jahre Erfahrung'},
        {'value': '200+', 'label': 'Erfolgreiche Projekte'}, 
        {'value': '24/7', 'label': 'Support verfügbar'}
    ]
    
    # Stats Titel
    stats_title = ParagraphStyle(
        'StatsTitle',
        fontSize=18,
        textColor=colors.white,
        alignment=TA_CENTER,
        fontName='Helvetica-Bold',
        spaceAfter=15
    )
    
    story.append(Paragraph("UNSERE ERFOLGSBILANZ", stats_title))
    
    # Stats Cards als Custom Flowable
    stats_cards = StatsCardsFlowable(company_stats)
    story.append(stats_cards)
    story.append(Spacer(1, 1*cm))
    
    # === WEITERE STATISTIKEN ===
    more_stats = [
        {'value': '95%', 'label': 'Kundenzufriedenheit'},
        {'value': '35%', 'label': 'Kosteneinsparung'},
        {'value': '40%', 'label': 'Effizienzsteigerung'}
    ]
    
    more_stats_cards = StatsCardsFlowable(more_stats)
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
    
    service_cards = FeatureCardsFlowable(service_features)
    story.append(service_cards)
    story.append(Spacer(1, 1*cm))
    
    # Call-to-Action
    cta_style = ParagraphStyle(
        'CallToAction',
        fontSize=16,
        textColor=colors.white,
        alignment=TA_CENTER,
        fontName='Helvetica-Bold',
        backColor=colors.HexColor('#dc2626'),
        borderColor=colors.HexColor('#dc2626'),
        borderWidth=2,
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
    """Erstellt Hornetsecurity PDF mit echten grafischen Elementen"""
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
    
    hs_cards = FeatureCardsFlowable(hs_features)
    story.append(hs_cards)
    story.append(Spacer(1, 0.8*cm))
    
    # Performance Stats
    hs_stats = [
        {'value': '99.9%', 'label': 'Schutzrate'},
        {'value': '<1sec', 'label': 'Scan-Zeit'},
        {'value': '10M+', 'label': 'Bedrohungen/Tag'}
    ]
    
    hs_stats_cards = StatsCardsFlowable(hs_stats)
    story.append(Paragraph("PERFORMANCE KENNZAHLEN", styles['hero_title']))
    story.append(Spacer(1, 0.4*cm))
    story.append(hs_stats_cards)
    
    doc.build(story, onFirstPage=create_website_hero_header, onLaterPages=create_website_hero_header)

# Hauptfunktion
if __name__ == "__main__":
    os.makedirs("c:/Users/Martin/source/repos/scaleweb/public/pdfs", exist_ok=True)
    
    print("🎨 Erstelle PDFs mit ECHTEN grafischen Elementen...")
    
    try:
        create_company_overview_pdf()
        print("✅ Unternehmensbroschüre mit echten Grafiken erstellt")
        
        create_hornetsecurity_pdf()
        print("✅ Hornetsecurity PDF mit echten Grafiken erstellt")
        
        print("\n🎉 PDFs mit ECHTEN GRAFIKEN erfolgreich erstellt!")
        print("📁 Speicherort: public/pdfs/")
        print("\n🎨 ECHTE GRAFIK-FEATURES:")
        print("  ✨ Custom Flowable Classes für direkte Canvas-Zeichnung")
        print("  ✨ Smooth Gradient Background (20-Schritt Interpolation)")
        print("  ✨ Transparenz-Simulation mit Alpha-Layering")
        print("  ✨ Backdrop Blur Effect mit Multi-Layer Rendering")
        print("  ✨ Echte Stats Cards (Canvas-gezeichnet, kein HTML!)")
        print("  ✨ Feature Cards mit Canvas-Primitiven")
        print("  ✨ Website-identische Farben und Layout")
        
        print("\n❌ PROBLEM GELÖST:")
        print("  • Verwendung von Custom Flowable Classes")
        print("  • Direkte Canvas-Zeichnung statt HTML-Strings")
        print("  • Echte grafische Primitive (Circle, Rect, etc.)")
        print("  • Kein sichtbarer HTML-Code mehr!")
        
    except Exception as e:
        print(f"❌ Fehler: {e}")
        import traceback
        traceback.print_exc()
