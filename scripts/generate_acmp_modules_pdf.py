#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from reportlab.lib.pagesizes import A4
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak, Flowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch, cm
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_JUSTIFY, TA_RIGHT
from reportlab.pdfgen import canvas
import os

class ACMPModulesFlowable(Flowable):
    """Custom Flowable für ACMP-Module Kacheln"""
    
    def __init__(self, modules, width=18*cm, height=12*cm):
        self.modules = modules
        self.width = width
        self.height = height
    
    def draw(self):
        """Zeichne die ACMP-Module als Grid von Kacheln"""
        canvas = self.canv
        canvas.saveState()
        
        # Grid Layout: 3 Spalten, 2 Zeilen
        cols = 3
        rows = 2
        card_width = 5.5*cm
        card_height = 5*cm
        spacing_x = 0.5*cm
        spacing_y = 0.5*cm
        start_x = 0.5*cm
        start_y = 1*cm
        
        # Modul-Farben (von Website)
        module_colors = [
            colors.HexColor('#6b7280'),  # gray-500 (AD Logon Timestamp)
            colors.HexColor('#059669'),  # emerald-600 (AD Security Group)
            colors.HexColor('#d97706'),  # amber-600 (Bitlocker)
            colors.HexColor('#2563eb'),  # blue-600 (Outlook Signature)
            colors.HexColor('#9333ea'),  # purple-600 (First Step Wizard)
            colors.HexColor('#059669'),  # green-600 (Next Free Computername)
        ]
        
        for i, module in enumerate(self.modules[:6]):  # Maximal 6 Module (3x2 Grid)
            if i >= 6:
                break
                
            row = i // cols
            col = i % cols
            
            x_pos = start_x + col * (card_width + spacing_x)
            y_pos = start_y + (rows - 1 - row) * (card_height + spacing_y)
            
            module_color = module_colors[i % len(module_colors)]
            
            # Kachel Hintergrund (glassmorphism)
            canvas.setFillColor(colors.HexColor('#ffffff15'))
            canvas.setStrokeColor(colors.HexColor('#ffffff30'))
            canvas.setLineWidth(1)
            canvas.roundRect(x_pos, y_pos, card_width, card_height, 0.3*cm, fill=1, stroke=1)
            
            # Gradient Effect (simuliert mit mehreren Layern)
            for j in range(3):
                alpha = 40 - j * 10
                canvas.setFillColor(colors.HexColor(f'{module_color.hexval()}{alpha:02x}'))
                canvas.roundRect(x_pos + j*0.05*cm, y_pos + j*0.05*cm, 
                               card_width - j*0.1*cm, card_height - j*0.1*cm, 0.3*cm, fill=1, stroke=0)
            
            # Icon Bereich (oben)
            icon_y = y_pos + card_height - 1.2*cm
            canvas.setFillColor(module_color)
            canvas.circle(x_pos + card_width/2, icon_y, 0.4*cm, fill=1, stroke=0)
            
            # Icon Symbol (vereinfacht)
            canvas.setFont('Helvetica-Bold', 12)
            canvas.setFillColor(colors.white)
            icon_symbols = ['AD', 'GRP', 'BIT', 'SIG', 'WIZ', 'PC']
            symbol = icon_symbols[i % len(icon_symbols)]
            symbol_width = canvas.stringWidth(symbol, 'Helvetica-Bold', 12)
            canvas.drawString(x_pos + card_width/2 - symbol_width/2, icon_y - 0.2*cm, symbol)
            
            # Modul Name (Titel)
            canvas.setFont('Helvetica-Bold', 10)
            canvas.setFillColor(colors.white)
            
            # Text wrapping für lange Namen
            name_words = module['name'].split(' ')
            if len(module['name']) > 18:  # Lange Namen aufteilen
                line1 = ' '.join(name_words[:2])
                line2 = ' '.join(name_words[2:]) if len(name_words) > 2 else ''
            else:
                line1 = module['name']
                line2 = ''
            
            line1_width = canvas.stringWidth(line1, 'Helvetica-Bold', 10)
            canvas.drawString(x_pos + (card_width - line1_width)/2, 
                            y_pos + card_height - 2.2*cm, line1)
            
            if line2:
                line2_width = canvas.stringWidth(line2, 'Helvetica-Bold', 10)
                canvas.drawString(x_pos + (card_width - line2_width)/2, 
                                y_pos + card_height - 2.5*cm, line2)
            
            # Beschreibung (kleiner Text)
            canvas.setFont('Helvetica', 8)
            canvas.setFillColor(colors.HexColor('#cbd5e1'))  # slate-300
            
            # Beschreibung wrapping (maximal 3 Zeilen)
            desc_words = module['description'].split(' ')
            desc_lines = []
            current_line = []
            
            for word in desc_words:
                test_line = ' '.join(current_line + [word])
                if canvas.stringWidth(test_line, 'Helvetica', 8) <= card_width - 1*cm:
                    current_line.append(word)
                else:
                    if current_line:
                        desc_lines.append(' '.join(current_line))
                        current_line = [word]
                    if len(desc_lines) >= 2:  # Maximal 2 Zeilen
                        break
            
            if current_line and len(desc_lines) < 2:
                desc_lines.append(' '.join(current_line))
            
            # Zeichne Beschreibungszeilen
            for j, line in enumerate(desc_lines):
                line_width = canvas.stringWidth(line, 'Helvetica', 8)
                canvas.drawString(x_pos + (card_width - line_width)/2, 
                                y_pos + card_height - 3.2*cm - j*0.3*cm, line)
            
            # Status Badge (Available/Coming Soon)
            badge_y = y_pos + 0.2*cm
            badge_width = 2*cm
            badge_height = 0.4*cm
            
            if module.get('comingSoon', False):
                canvas.setFillColor(colors.HexColor('#f59e0b'))  # amber-500
                badge_text = 'Coming Soon'
            else:
                canvas.setFillColor(colors.HexColor('#059669'))  # emerald-600
                badge_text = 'Available'
            
            canvas.roundRect(x_pos + (card_width - badge_width)/2, badge_y, 
                           badge_width, badge_height, 0.1*cm, fill=1, stroke=0)
            
            canvas.setFont('Helvetica-Bold', 7)
            canvas.setFillColor(colors.white)
            badge_text_width = canvas.stringWidth(badge_text, 'Helvetica-Bold', 7)
            canvas.drawString(x_pos + (card_width - badge_text_width)/2, 
                            badge_y + 0.1*cm, badge_text)
        
        canvas.restoreState()

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

def create_acmp_modules_pdf():
    """Erstellt ACMP PDF mit allen Modul-Kacheln"""
    doc = SimpleDocTemplate(
        "c:/Users/Martin/source/repos/scaleweb/public/pdfs/acmp-produktinfo.pdf",
        pagesize=A4,
        topMargin=5*cm,
        bottomMargin=3*cm,
        leftMargin=1*cm,  # Weniger Rand für breitere Kacheln
        rightMargin=1*cm
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
    
    # === ACMP MODULES GRID (Website 1:1) ===
    
    # Titel für Module Section
    modules_title = ParagraphStyle(
        'ModulesTitle',
        fontSize=18,
        textColor=colors.white,
        alignment=TA_CENTER,
        fontName='Helvetica-Bold',
        spaceAfter=15
    )
    
    story.append(Paragraph("VERFÜGBARE ACMP-MODULE", modules_title))
    story.append(Spacer(1, 0.4*cm))
    
    # ACMP Module (von der Website)
    acmp_modules = [
        {
            'name': 'AD Logon Timestamp',
            'description': 'Neues Anzeigefeld: AD Last Logon',
            'comingSoon': False
        },
        {
            'name': 'AD Security Group Management',
            'description': 'Steuern Sie Ihre ACMP Clients auf Basis von vorhandenen AD Gruppen',
            'comingSoon': False
        },
        {
            'name': 'Bitlocker Management',
            'description': 'Bitlocker Steuerung mit ACMP',
            'comingSoon': False
        },
        {
            'name': 'Deploy Outlook Signatur',
            'description': 'Zentrale Verteilung von Outlook Signaturen mit Kontaktdaten aus dem AD',
            'comingSoon': False
        },
        {
            'name': 'First Step Wizard',
            'description': 'Vorbereitung Ihrer ACMP Umgebung für die Client Commands',
            'comingSoon': False
        },
        {
            'name': 'Next Free Computername',
            'description': 'ACMP schlägt automatisch den nächsten Computernamen vor',
            'comingSoon': False
        }
    ]
    
    # ACMP Module als Kacheln-Grid
    modules_grid = ACMPModulesFlowable(acmp_modules)
    story.append(modules_grid)
    story.append(Spacer(1, 1*cm))
    
    # === ACMP PERFORMANCE STATS ===
    acmp_stats = [
        {'value': '75%', 'label': 'Kosteneinsparung'},
        {'value': '90%', 'label': 'Zeitersparnis'},
        {'value': '99.9%', 'label': 'Verfügbarkeit'}
    ]
    
    acmp_stats_cards = StatsCardsFlowable(acmp_stats)
    story.append(Paragraph("ACMP LEISTUNGSKENNZAHLEN", modules_title))
    story.append(Spacer(1, 0.4*cm))
    story.append(acmp_stats_cards)
    
    # Call-to-Action
    cta_style = ParagraphStyle(
        'CallToAction',
        fontSize=14,
        textColor=colors.white,
        alignment=TA_CENTER,
        fontName='Helvetica-Bold',
        backColor=colors.HexColor('#dc2626'),
        borderColor=colors.HexColor('#dc2626'),
        borderWidth=2,
        topPadding=20,
        bottomPadding=20,
        leftPadding=25,
        rightPadding=25
    )
    
    cta_text = """
    🚀 BEREIT FÜR ACMP?
    
    Entdecken Sie alle Module und Commands in unserem ACMP-Shop!
    
    📧 Kostenlose ACMP-Beratung: info@scaleits.de
    """
    
    story.append(Spacer(1, 1*cm))
    story.append(Paragraph(cta_text, cta_style))
    
    doc.build(story, onFirstPage=create_website_hero_header, onLaterPages=create_website_hero_header)

# Hauptfunktion
if __name__ == "__main__":
    os.makedirs("c:/Users/Martin/source/repos/scaleweb/public/pdfs", exist_ok=True)
    
    print("🎨 Erstelle ACMP PDF mit Modul-Kacheln...")
    
    try:
        create_acmp_modules_pdf()
        print("✅ ACMP PDF mit Modul-Kacheln erstellt")
        
        print("\n🎉 ACMP PDF mit echten Modul-Kacheln erfolgreich erstellt!")
        print("📁 Speicherort: public/pdfs/acmp-produktinfo.pdf")
        print("\n🎨 NEUE FEATURES:")
        print("  ✨ 3x2 Grid Layout für ACMP-Module (wie Website)")
        print("  ✨ Farbkodierte Modul-Kacheln mit Gradient-Effekten")
        print("  ✨ Icon-Symbole für jeden Modul-Typ") 
        print("  ✨ Status-Badges (Available/Coming Soon)")
        print("  ✨ Text-Wrapping für lange Modulnamen")
        print("  ✨ Glassmorphism Design (bg-white/10 backdrop-blur)")
        print("  ✨ Website-identische Farben und Layout")
        
        print("\n📋 ANGEZEIGTE ACMP-MODULE:")
        print("  📦 AD Logon Timestamp")
        print("  👥 AD Security Group Management")  
        print("  🔒 Bitlocker Management")
        print("  📧 Deploy Outlook Signatur")
        print("  🧙 First Step Wizard")
        print("  💻 Next Free Computername")
        
    except Exception as e:
        print(f"❌ Fehler: {e}")
        import traceback
        traceback.print_exc()
