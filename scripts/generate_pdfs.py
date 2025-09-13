#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from reportlab.lib.pagesizes import A4
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Image, Table, TableStyle, KeepTogether, PageBreak
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch, cm
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_JUSTIFY, TA_RIGHT
from reportlab.pdfgen import canvas
from reportlab.graphics.shapes import Drawing, Rect, Circle, String, Line
from reportlab.graphics import renderPDF
import os

def create_header_footer(canvas, doc):
    """Header und Footer für alle PDFs - angepasst an Website-Design"""
    canvas.saveState()
    
    # Gradient-ähnlicher Header-Bereich (Website-inspiriert)
    canvas.setFillColor(colors.HexColor('#0f172a'))  # slate-900
    canvas.rect(0, A4[1] - 3*cm, A4[0], 3*cm, fill=1, stroke=0)
    
    # Gradient-Effekt durch überlappende Rechtecke
    canvas.setFillColor(colors.HexColor('#1e293b'))  # slate-800
    canvas.rect(0, A4[1] - 2.5*cm, A4[0], 2*cm, fill=1, stroke=0)
    
    canvas.setFillColor(colors.HexColor('#7c2d12'))  # red-900 (dunkleres Rot)
    canvas.rect(0, A4[1] - 2*cm, A4[0], 1.5*cm, fill=1, stroke=0)
    
    # Abgerundete Ecken-Effekt durch zusätzliche Formen
    canvas.setFillColor(colors.HexColor('#dc2626'))  # red-600
    canvas.rect(0, A4[1] - 1.8*cm, A4[0], 1*cm, fill=1, stroke=0)
    
    # Logo-Bereich (ScaleWeb branding)
    canvas.setFont('Helvetica-Bold', 18)
    canvas.setFillColor(colors.white)
    canvas.drawString(2*cm, A4[1] - 1.5*cm, "ScaleWeb")
    
    # Subtitle mit Corporate-Farbe
    canvas.setFont('Helvetica', 12)
    canvas.setFillColor(colors.HexColor('#06b6d4'))  # cyan-600 (wie Website)
    canvas.drawString(2*cm, A4[1] - 1.8*cm, "Solutions")
    
    # Decorative Elements (Website-inspiriert)
    canvas.setStrokeColor(colors.HexColor('#64748b'))  # slate-600
    canvas.setLineWidth(2)
    canvas.line(2*cm, A4[1] - 2.2*cm, A4[0] - 2*cm, A4[1] - 2.2*cm)
    
    # Footer mit Website-Farbschema
    canvas.setFillColor(colors.HexColor('#475569'))  # slate-600
    canvas.rect(0, 0, A4[0], 2*cm, fill=1, stroke=0)
    
    canvas.setFont('Helvetica', 9)
    canvas.setFillColor(colors.white)
    canvas.drawString(2*cm, 1*cm, "ScaleWeb Solutions | Professionelle IT-Lösungen | info@scaleweb.de | www.scaleweb.de")
    
    # Decorative border elements
    canvas.setStrokeColor(colors.HexColor('#dc2626'))  # red-600
    canvas.setLineWidth(3)
    canvas.line(0, 2*cm, A4[0], 2*cm)
    
    canvas.restoreState()

def get_styles():
    """Definiert die Styles für die PDFs - angepasst an Website-Design"""
    styles = getSampleStyleSheet()
    
    # Titel Style (Website-inspiriert mit Gradient-Farben)
    title_style = ParagraphStyle(
        'CustomTitle',
        parent=styles['Title'],
        fontSize=28,
        spaceAfter=25,
        textColor=colors.HexColor('#0f172a'),  # slate-900 (wie Website)
        alignment=TA_CENTER,
        fontName='Helvetica-Bold',
        spaceBefore=15
    )
    
    # Untertitel Style mit Website-Farben
    subtitle_style = ParagraphStyle(
        'CustomSubtitle',
        parent=styles['Heading2'],
        fontSize=18,
        spaceAfter=15,
        textColor=colors.HexColor('#dc2626'),  # red-600 (Corporate Rot)
        alignment=TA_LEFT,
        fontName='Helvetica-Bold',
        spaceBefore=10
    )
    
    # Haupttext Style (verbesserter Kontrast)
    body_style = ParagraphStyle(
        'CustomBody',
        parent=styles['Normal'],
        fontSize=11,
        spaceAfter=8,
        textColor=colors.HexColor('#1e293b'),  # slate-800 (dunkler für bessere Lesbarkeit)
        alignment=TA_JUSTIFY,
        fontName='Helvetica',
        leading=14
    )
    
    # Highlight-Style für wichtige Infos (Website-Cyan)
    highlight_style = ParagraphStyle(
        'CustomHighlight',
        parent=styles['Normal'],
        fontSize=12,
        spaceAfter=10,
        textColor=colors.HexColor('#0891b2'),  # cyan-600 (wie Website)
        alignment=TA_LEFT,
        fontName='Helvetica-Bold',
        backColor=colors.HexColor('#f0f9ff'),  # cyan-50 (heller Hintergrund)
        borderColor=colors.HexColor('#06b6d4'),  # cyan-500
        borderWidth=1,
        leftIndent=10,
        rightIndent=10,
        topPadding=8,
        bottomPadding=8
    )
    
    # Buzzword Style (Website-inspiriert)
    buzzword_style = ParagraphStyle(
        'CustomBuzzword',
        parent=styles['Normal'],
        fontSize=10,
        spaceAfter=6,
        textColor=colors.white,
        alignment=TA_CENTER,
        fontName='Helvetica-Bold',
        backColor=colors.HexColor('#dc2626'),  # red-600
        borderRadius=8,  # Rounded corners (Website-Stil)
        leftIndent=8,
        rightIndent=8,
        topPadding=6,
        bottomPadding=6
    )
    
    # Feature Style (Website-Grau-Töne)
    feature_style = ParagraphStyle(
        'CustomFeature',
        parent=styles['Normal'],
        fontSize=11,
        spaceAfter=5,
        textColor=colors.HexColor('#475569'),  # slate-600
        alignment=TA_LEFT,
        fontName='Helvetica',
        leftIndent=15,
        bulletIndent=5,
        bulletColor=colors.HexColor('#dc2626'),  # red-600
        bulletFontName='Symbol'
    )
    
    return {
        'title': title_style,
        'subtitle': subtitle_style,
        'body': body_style,
        'highlight': highlight_style,
        'buzzword': buzzword_style,
        'feature': feature_style
    }

def get_modern_table_style():
    """Moderne Tabellen-Styles angepasst an Website-Design"""
    return TableStyle([
        # Header mit Website-Gradient-Farben
        ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#0f172a')),  # slate-900
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, 0), 12),
        ('ALIGN', (0, 0), (-1, 0), 'CENTER'),
        ('VALIGN', (0, 0), (-1, 0), 'MIDDLE'),
        
        # Abwechselnde Zeilen-Farben (Website-inspiriert)
        ('BACKGROUND', (0, 1), (-1, -1), colors.HexColor('#f8fafc')),  # slate-50
        ('BACKGROUND', (0, 2), (-1, -1), colors.white),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.white, colors.HexColor('#f1f5f9')]),  # slate-100
        
        # Text-Styling
        ('TEXTCOLOR', (0, 1), (-1, -1), colors.HexColor('#1e293b')),  # slate-800
        ('FONTNAME', (0, 1), (-1, -1), 'Helvetica'),
        ('FONTSIZE', (0, 1), (-1, -1), 10),
        ('ALIGN', (0, 1), (-1, -1), 'LEFT'),
        ('VALIGN', (0, 1), (-1, -1), 'TOP'),
        
        # Moderne Rahmen (Website-Stil)
        ('GRID', (0, 0), (-1, -1), 1, colors.HexColor('#e2e8f0')),  # slate-200
        ('LINEBELOW', (0, 0), (-1, 0), 2, colors.HexColor('#dc2626')),  # red-600 Akzent
        
        # Padding für bessere Lesbarkeit
        ('LEFTPADDING', (0, 0), (-1, -1), 12),
        ('RIGHTPADDING', (0, 0), (-1, -1), 12),
        ('TOPPADDING', (0, 0), (-1, -1), 8),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 8),
        
        # Rounded corner effect (visuell)
        ('BORDERRADIUS', (0, 0), (-1, -1), 4),
    ])
    
    # ScaleWeb Logo Bereich
    canvas.setFillColor(colors.white)
    canvas.setFont('Helvetica-Bold', 16)
    canvas.drawString(2*cm, A4[1] - 1*cm, "ScaleWeb")
    canvas.setFont('Helvetica', 10)
    canvas.drawString(4.5*cm, A4[1] - 1*cm, "Solutions")
    
    # Tagline rechts
    canvas.setFont('Helvetica-Bold', 10)
    canvas.drawRightString(A4[0] - 2*cm, A4[1] - 1*cm, "IT MADE SIMPLE")
    
    # Moderner Footer
    canvas.setFillColor(colors.HexColor('#f3f4f6'))  # Gray-100
    canvas.rect(0, 0, A4[0], 2*cm, fill=1, stroke=0)
    
    canvas.setFillColor(colors.HexColor('#6b7280'))  # Gray-500
    canvas.setFont('Helvetica-Bold', 9)
    canvas.drawString(2*cm, 1.2*cm, "ScaleWeb Solutions")
    canvas.setFont('Helvetica', 8)
    canvas.drawString(2*cm, 0.8*cm, "📧 info@scaleweb.de   🌐 www.scaleweb.de   📞 +49 (0) XXX XXXXXXX")
    
    # Moderne Akzentlinie
    canvas.setStrokeColor(colors.HexColor('#dc2626'))
    canvas.setLineWidth(3)
    canvas.line(2*cm, 0.4*cm, A4[0] - 2*cm, 0.4*cm)
    
    canvas.restoreState()

def create_buzzword_box(buzzwords, styles):
    """Erstellt moderne Buzzword-Boxen im Website-Stil"""
    buzzword_content = []
    
    # Header für Buzzwords mit Website-Styling
    header_style = ParagraphStyle(
        'BuzzwordHeader',
        fontSize=14,
        textColor=colors.white,
        alignment=TA_CENTER,
        fontName='Helvetica-Bold',
        backColor=colors.HexColor('#0f172a'),  # slate-900
        topPadding=8,
        bottomPadding=8,
        leftPadding=15,
        rightPadding=15
    )
    
    buzzword_content.append(Paragraph("🚀 SCHLÜSSEL-TECHNOLOGIEN", header_style))
    buzzword_content.append(Spacer(1, 0.3*cm))
    
    # Buzzwords in 2 Spalten anordnen (Website-Layout)
    buzzword_data = []
    for i in range(0, len(buzzwords), 2):
        row = []
        # Erste Spalte
        if i < len(buzzwords):
            buzzword_style = ParagraphStyle(
                'BuzzwordItem',
                fontSize=10,
                textColor=colors.white,
                alignment=TA_CENTER,
                fontName='Helvetica-Bold',
                backColor=colors.HexColor('#dc2626'),  # red-600
                topPadding=6,
                bottomPadding=6,
                leftPadding=10,
                rightPadding=10
            )
            row.append(Paragraph(f"• {buzzwords[i]}", buzzword_style))
        else:
            row.append("")
            
        # Zweite Spalte
        if i + 1 < len(buzzwords):
            row.append(Paragraph(f"• {buzzwords[i + 1]}", buzzword_style))
        else:
            row.append("")
            
        buzzword_data.append(row)
    
    # Moderne Tabelle mit Website-Farben
    buzzword_table = Table(buzzword_data, colWidths=[7*cm, 7*cm])
    buzzword_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), colors.HexColor('#f8fafc')),  # slate-50
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('LEFTPADDING', (0, 0), (-1, -1), 8),
        ('RIGHTPADDING', (0, 0), (-1, -1), 8),
        ('TOPPADDING', (0, 0), (-1, -1), 6),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
        ('GRID', (0, 0), (-1, -1), 1, colors.HexColor('#e2e8f0')),  # slate-200
        ('BORDERRADIUS', (0, 0), (-1, -1), 8),  # Rounded corners
    ]))
    
    buzzword_content.append(buzzword_table)
    return buzzword_content

def create_stats_section(stats_data):
    """Erstellt moderne Statistik-Boxen im Website-Stil"""
    stats_content = []
    
    # Header für Statistiken
    stats_header_style = ParagraphStyle(
        'StatsHeader',
        fontSize=16,
        textColor=colors.HexColor('#0f172a'),  # slate-900
        alignment=TA_CENTER,
        fontName='Helvetica-Bold',
        spaceAfter=15
    )
    
    stats_content.append(Paragraph("📊 PERFORMANCE & VORTEILE", stats_header_style))
    
    # Statistiken in Grid-Layout (Website-inspiriert)
    stats_table_data = []
    for i in range(0, len(stats_data), 3):
        row = []
        for j in range(3):
            if i + j < len(stats_data):
                stat = stats_data[i + j]
                stat_style = ParagraphStyle(
                    'StatItem',
                    fontSize=9,
                    textColor=colors.HexColor('#1e293b'),  # slate-800
                    alignment=TA_CENTER,
                    fontName='Helvetica-Bold'
                )
                
                # Statistik-Box-Inhalt
                stat_text = f"""
                <para alignment="center">
                    <font size="20" color="#dc2626"><b>{stat['value']}</b></font><br/>
                    <font size="10" color="#64748b">{stat['label']}</font>
                </para>
                """
                row.append(Paragraph(stat_text, stat_style))
            else:
                row.append("")
        stats_table_data.append(row)
    
    # Moderne Statistik-Tabelle
    stats_table = Table(stats_table_data, colWidths=[4.7*cm, 4.7*cm, 4.7*cm])
    stats_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), colors.white),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('LEFTPADDING', (0, 0), (-1, -1), 15),
        ('RIGHTPADDING', (0, 0), (-1, -1), 15),
        ('TOPPADDING', (0, 0), (-1, -1), 20),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 20),
        ('GRID', (0, 0), (-1, -1), 2, colors.HexColor('#e2e8f0')),  # slate-200
        ('BACKGROUND', (0, 0), (-1, -1), colors.HexColor('#f8fafc')),  # slate-50
        ('BORDERRADIUS', (0, 0), (-1, -1), 12),  # Rounded corners
        ('BOX', (0, 0), (-1, -1), 3, colors.HexColor('#06b6d4')),  # cyan-500 border
    ]))
    
    stats_content.append(stats_table)
    return stats_content
    drawing.add(icon_circle)
    
    return drawing

def get_modern_styles():
    """Definiert moderne Styles für die PDFs"""
    styles = getSampleStyleSheet()
    
    # Hero Titel Style
    hero_title = ParagraphStyle(
        'HeroTitle',
        parent=styles['Title'],
        fontSize=32,
        spaceAfter=15,
        textColor=colors.HexColor('#dc2626'),
        alignment=TA_CENTER,
        fontName='Helvetica-Bold',
        leading=36
    )
    
    # Buzzword Style
    buzzword_style = ParagraphStyle(
        'BuzzwordStyle',
        parent=styles['Normal'],
        fontSize=14,
        spaceAfter=8,
        textColor=colors.HexColor('#059669'),  # Green-600
        fontName='Helvetica-Bold',
        alignment=TA_CENTER,
        backColor=colors.HexColor('#d1fae5'),  # Green-100
        borderColor=colors.HexColor('#059669'),
        borderWidth=1,
        borderPadding=8,
        borderRadius=20
    )
    
    # Feature Style mit Icons
    feature_style = ParagraphStyle(
        'FeatureStyle',
        parent=styles['Normal'],
        fontSize=11,
        spaceAfter=6,
        leftIndent=25,
        textColor=colors.HexColor('#374151'),
        fontName='Helvetica'
    )
    
    # Stats Style
    stats_style = ParagraphStyle(
        'StatsStyle',
        parent=styles['Normal'],
        fontSize=20,
        spaceAfter=4,
        textColor=colors.HexColor('#dc2626'),
        fontName='Helvetica-Bold',
        alignment=TA_CENTER
    )
    
    # Subtitle modern
    subtitle_modern = ParagraphStyle(
        'SubtitleModern',
        parent=styles['Heading2'],
        fontSize=18,
        spaceAfter=12,
        textColor=colors.HexColor('#1f2937'),
        fontName='Helvetica-Bold',
        borderColor=colors.HexColor('#dc2626'),
        borderWidth=2,
        borderPadding=6,
        alignment=TA_LEFT
    )
    
    return {
        'hero_title': hero_title,
        'buzzword': buzzword_style,
        'feature': feature_style,
        'stats': stats_style,
        'subtitle': subtitle_modern,
        'normal': styles['Normal']
    }

def create_acmp_pdf():
    """Erstellt visuelles ACMP PDF mit Grafiken"""
    doc = SimpleDocTemplate(
        "c:/Users/Martin/source/repos/scaleweb/public/pdfs/acmp-produktinfo.pdf",
        pagesize=A4,
        topMargin=3*cm,
        bottomMargin=3*cm,
        leftMargin=2*cm,
        rightMargin=2*cm
    )
    
    styles = get_modern_styles()
    story = []
    
    # Hero Section
    story.append(Paragraph("ACMP", styles['hero_title']))
    story.append(Paragraph("Asset & Configuration Management Platform", styles['subtitle']))
    story.append(Spacer(1, 0.3*cm))
    
    # Buzzwords in Boxen
    buzzwords = [
        "🔥 COMPLETE IT CONTROL", "⚡ ZERO-TOUCH DEPLOYMENT", 
        "🛡️ ENTERPRISE SECURITY", "📊 REAL-TIME ANALYTICS"
    ]
    
    for buzzword in buzzwords:
        story.append(Paragraph(buzzword, styles['buzzword']))
        story.append(Spacer(1, 0.2*cm))
    
    story.append(Spacer(1, 0.5*cm))
    
    # Power Stats
    story.append(Paragraph("ACMP POWER STATS", styles['subtitle']))
    
    stats_data = [
        ["🚀 40%", "📉 60%", "⚡ 99.9%"],
        ["Cost Reduction", "Faster Deployment", "Uptime"],
        ["💻 10,000+", "🔧 20+", "👥 24/7"],
        ["Managed Assets", "Modules", "Support"]
    ]
    
    stats_table = Table(stats_data, colWidths=[5*cm, 5*cm, 5*cm])
    stats_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 1), colors.HexColor('#dc262620')),
        ('TEXTCOLOR', (0, 0), (-1, -1), colors.HexColor('#1f2937')),
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('FONTNAME', (0, 0), (-1, 1), 'Helvetica-Bold'),
        ('FONTNAME', (0, 2), (-1, -1), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, 1), 16),
        ('FONTSIZE', (0, 2), (-1, -1), 14),
        ('GRID', (0, 0), (-1, -1), 2, colors.HexColor('#dc2626')),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('ROWBACKGROUNDS', (0, 0), (-1, -1), [colors.white, colors.HexColor('#f9fafb')])
    ]))
    
    story.append(stats_table)
    story.append(Spacer(1, 0.5*cm))
    
    # Core Modules visuell
    story.append(Paragraph("CORE POWER MODULES", styles['subtitle']))
    
    modules_data = [
        ["🎯 ASSET DISCOVERY", "📦 SOFTWARE DEPLOYMENT", "🔑 LICENSE OPTIMIZATION"],
        ["Auto-detect all devices", "Zero-touch installation", "Cost optimization"],
        ["📱 MOBILE MANAGEMENT", "🖥️ REMOTE DESKTOP", "📊 COMPLIANCE MONITORING"],
        ["BYOD control", "Instant support", "Audit-ready reports"]
    ]
    
    modules_table = Table(modules_data, colWidths=[5*cm, 5*cm, 5*cm])
    modules_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), colors.HexColor('#f0fdf4')),
        ('TEXTCOLOR', (0, 0), (-1, -1), colors.HexColor('#1f2937')),
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('FONTNAME', (0, 0), (-1, -1), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, -1), 10),
        ('GRID', (0, 0), (-1, -1), 1, colors.HexColor('#22c55e')),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('ROWBACKGROUNDS', (0, 0), (-1, -1), [colors.HexColor('#dcfce7'), colors.white])
    ]))
    
    story.append(modules_table)
    story.append(Spacer(1, 0.5*cm))
    
    # ROI Grafik (simuliert)
    story.append(Paragraph("ROI TIMELINE", styles['subtitle']))
    story.append(Paragraph("📈 Month 1-3: Implementation → Month 6: Break-even → Month 12: 300% ROI", styles['feature']))
    
    doc.build(story, onFirstPage=create_header_footer, onLaterPages=create_header_footer)

def create_hornetsecurity_pdf():
    """Erstellt visuelles Hornetsecurity PDF im Website-Design"""
    doc = SimpleDocTemplate(
        "c:/Users/Martin/source/repos/scaleweb/public/pdfs/hornetsecurity-produktinfo.pdf",
        pagesize=A4,
        topMargin=4*cm,  # Mehr Platz für modernen Header
        bottomMargin=3*cm,
        leftMargin=2*cm,
        rightMargin=2*cm
    )
    
    styles = get_styles()
    story = []
    
    # Hero Section im Website-Stil
    story.append(Paragraph("HORNETSECURITY", styles['title']))
    story.append(Paragraph("E-Mail Security & Backup Excellence", styles['subtitle']))
    story.append(Spacer(1, 0.5*cm))
    
    # Einführung mit Website-Farben
    intro_text = """
    <para alignment="justify">
    <font color="#1e293b"><b>Hornetsecurity</b></font> revolutioniert die E-Mail-Sicherheit mit 
    <font color="#dc2626"><b>AI-gestützter Bedrohungserkennung</b></font> und bietet Ihrem Unternehmen 
    <font color="#0891b2"><b>360°-Schutz</b></font> vor modernen Cyber-Bedrohungen.
    </para>
    """
    story.append(Paragraph(intro_text, styles['body']))
    story.append(Spacer(1, 0.4*cm))
    
    # Moderne Buzzword-Sektion
    buzzwords = [
        "AI-POWERED THREAT DETECTION", "99.9% SPAM BLOCKING", 
        "ZERO-DAY PROTECTION", "UNLIMITED BACKUP",
        "REAL-TIME SCANNING", "CLOUD-NATIVE ARCHITECTURE"
    ]
    
    buzzword_section = create_buzzword_box(buzzwords, styles)
    for item in buzzword_section:
        story.append(item)
    
    story.append(Spacer(1, 0.6*cm))
    
    # Performance Statistics im Website-Design
    stats_data = [
        {"value": "99.9%", "label": "Malware Detection"},
        {"value": "< 1sec", "label": "Scan Time"},
        {"value": "100%", "label": "Zero-Day Block"},
        {"value": "10M+", "label": "Threats/Day"},
        {"value": "24/7", "label": "Monitoring"},
        {"value": "50,000+", "label": "Companies Protected"}
    ]
    
    stats_section = create_stats_section(stats_data)
    for item in stats_section:
        story.append(item)
    
    story.append(Spacer(1, 0.5*cm))
    
    # Produktfeatures mit Website-Styling
    story.append(Paragraph("🔐 KERNFUNKTIONEN", styles['subtitle']))
    
    features_data = [
        ["Feature", "Beschreibung", "Nutzen"],
        ["🛡️ Advanced Threat Protection", "KI-basierte Malware-Erkennung", "99.9% Schutzrate"],
        ["📧 Email Continuity", "Unterbrechungsfreie E-Mail-Kommunikation", "100% Verfügbarkeit"],
        ["� Encryption Services", "End-to-End Verschlüsselung", "DSGVO-konform"],
        ["📊 Security Awareness", "Phishing-Simulationen & Training", "85% weniger Incidents"],
        ["💾 Email Archiving", "Compliance-konforme Archivierung", "Rechtssicher"],
    ]
    
    features_table = Table(features_data, colWidths=[4*cm, 6*cm, 4*cm])
    features_table.setStyle(get_modern_table_style())
    
    story.append(features_table)
    story.append(Spacer(1, 0.4*cm))
    
    # Abschluss mit Website-Corporate-Design
    conclusion_style = ParagraphStyle(
        'Conclusion',
        fontSize=12,
        textColor=colors.HexColor('#0f172a'),  # slate-900
        alignment=TA_CENTER,
        fontName='Helvetica-Bold',
        backColor=colors.HexColor('#f0f9ff'),  # cyan-50
        borderColor=colors.HexColor('#06b6d4'),  # cyan-500
        borderWidth=2,
        topPadding=15,
        bottomPadding=15,
        leftPadding=20,
        rightPadding=20
    )
    
    conclusion_text = """
    🚀 <b>READY FOR ENTERPRISE SECURITY?</b><br/>
    <font color="#dc2626">Schützen Sie Ihr Unternehmen mit Hornetsecurity!</font>
    """
    
    story.append(Paragraph(conclusion_text, conclusion_style))
    
    # PDF erstellen mit Website-Header/Footer
    doc.build(story, onFirstPage=create_header_footer, onLaterPages=create_header_footer)
    story.append(Spacer(1, 0.5*cm))
    
    # Security Modules
    story.append(Paragraph("SECURITY ARSENAL", styles['subtitle']))
    
    security_data = [
        ["🎣 ANTI-PHISHING", "🦠 MALWARE SHIELD", "🔗 URL PROTECTION"],
        ["Block social engineering", "AI-powered detection", "Real-time scanning"],
        ["📧 EMAIL BACKUP", "📋 COMPLIANCE", "📱 MOBILE SECURITY"],
        ["Instant recovery", "Audit-ready", "Device protection"]
    ]
    
    security_table = Table(security_data, colWidths=[5*cm, 5*cm, 5*cm])
    security_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), colors.HexColor('#fef3c7')),
        ('TEXTCOLOR', (0, 0), (-1, -1), colors.HexColor('#1f2937')),
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('FONTNAME', (0, 0), (-1, -1), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, -1), 10),
        ('GRID', (0, 0), (-1, -1), 1, colors.HexColor('#f59e0b')),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('ROWBACKGROUNDS', (0, 0), (-1, -1), [colors.HexColor('#fbbf24'), colors.white])
    ]))
    
    story.append(security_table)
    story.append(Spacer(1, 0.3*cm))
    
    # Business Impact
    story.append(Paragraph("BUSINESS IMPACT", styles['subtitle']))
    story.append(Paragraph("💰 60% Cost Reduction • ⚡ 6 Month ROI • 🛡️ 95% Risk Reduction", styles['feature']))
    
    doc.build(story, onFirstPage=create_header_footer, onLaterPages=create_header_footer)

def create_arctic_wolf_pdf():
    """Erstellt visuelles Arctic Wolf PDF"""
    doc = SimpleDocTemplate(
        "c:/Users/Martin/source/repos/scaleweb/public/pdfs/arctic-wolf-produktinfo.pdf",
        pagesize=A4,
        topMargin=3*cm,
        bottomMargin=3*cm,
        leftMargin=2*cm,
        rightMargin=2*cm
    )
    
    styles = get_modern_styles()
    story = []
    
    # Hero Section
    story.append(Paragraph("ARCTIC WOLF", styles['hero_title']))
    story.append(Paragraph("24/7 Managed Detection & Response", styles['subtitle']))
    story.append(Spacer(1, 0.3*cm))
    
    # Elite Buzzwords
    buzzwords = [
        "🎯 500+ CYBER EXPERTS", "⚡ < 30min DETECTION", 
        "🛡️ 24/7/365 SOC", "🧠 AI-POWERED MDR"
    ]
    
    for buzzword in buzzwords:
        story.append(Paragraph(buzzword, styles['buzzword']))
        story.append(Spacer(1, 0.2*cm))
    
    story.append(Spacer(1, 0.5*cm))
    
    # Performance Metrics
    story.append(Paragraph("ELITE PERFORMANCE METRICS", styles['subtitle']))
    
    perf_data = [
        ["⚡ < 30min", "🚀 < 2hrs", "🎯 99.7%"],
        ["Mean Detection", "Mean Response", "Accuracy Rate"],
        ["🔍 10M+", "⚡ 0.1%", "🌍 24/7/365"],
        ["IOCs Daily", "False Positives", "Global Coverage"]
    ]
    
    perf_table = Table(perf_data, colWidths=[5*cm, 5*cm, 5*cm])
    perf_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 1), colors.HexColor('#dc2626')),
        ('TEXTCOLOR', (0, 0), (-1, 1), colors.white),
        ('TEXTCOLOR', (0, 2), (-1, -1), colors.HexColor('#1f2937')),
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('FONTNAME', (0, 0), (-1, -1), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, 1), 14),
        ('FONTSIZE', (0, 2), (-1, -1), 12),
        ('GRID', (0, 0), (-1, -1), 2, colors.HexColor('#dc2626')),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('ROWBACKGROUNDS', (0, 2), (-1, -1), [colors.HexColor('#fef2f2'), colors.white])
    ]))
    
    story.append(perf_table)
    story.append(Spacer(1, 0.5*cm))
    
    # Service Arsenal
    story.append(Paragraph("MDR SERVICE ARSENAL", styles['subtitle']))
    
    service_data = [
        ["🔍 THREAT HUNTING", "⚡ INCIDENT RESPONSE", "🛡️ VULNERABILITY MGMT"],
        ["Proactive hunting", "Instant containment", "Risk prioritization"],
        ["📊 THREAT INTEL", "📚 SECURITY TRAINING", "📋 COMPLIANCE"],
        ["Global insights", "Phishing simulation", "Audit reports"]
    ]
    
    service_table = Table(service_data, colWidths=[5*cm, 5*cm, 5*cm])
    service_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), colors.HexColor('#f1f5f9')),
        ('TEXTCOLOR', (0, 0), (-1, -1), colors.HexColor('#1f2937')),
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('FONTNAME', (0, 0), (-1, -1), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, -1), 10),
        ('GRID', (0, 0), (-1, -1), 1, colors.HexColor('#64748b')),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('ROWBACKGROUNDS', (0, 0), (-1, -1), [colors.HexColor('#e2e8f0'), colors.white])
    ]))
    
    story.append(service_table)
    story.append(Spacer(1, 0.3*cm))
    
    # Value Proposition
    story.append(Paragraph("ENTERPRISE VALUE", styles['subtitle']))
    story.append(Paragraph("🚀 Instant Enterprise SOC • 💰 No CAPEX Investment • 🎯 Expert Team Access", styles['feature']))
    
    doc.build(story, onFirstPage=create_header_footer, onLaterPages=create_header_footer)

def create_microsoft_pdf():
    """Erstellt visuelles Microsoft PDF"""
    doc = SimpleDocTemplate(
        "c:/Users/Martin/source/repos/scaleweb/public/pdfs/microsoft-produktinfo.pdf",
        pagesize=A4,
        topMargin=3*cm,
        bottomMargin=3*cm,
        leftMargin=2*cm,
        rightMargin=2*cm
    )
    
    styles = get_modern_styles()
    story = []
    
    # Hero Section
    story.append(Paragraph("MICROSOFT", styles['hero_title']))
    story.append(Paragraph("365 • Azure • Dynamics Excellence", styles['subtitle']))
    story.append(Spacer(1, 0.3*cm))
    
    # Microsoft Buzzwords
    buzzwords = [
        "☁️ CLOUD-FIRST STRATEGY", "🔒 ZERO-TRUST SECURITY", 
        "🚀 GLOBAL SCALE", "🤖 AI-POWERED PRODUCTIVITY"
    ]
    
    for buzzword in buzzwords:
        story.append(Paragraph(buzzword, styles['buzzword']))
        story.append(Spacer(1, 0.2*cm))
    
    story.append(Spacer(1, 0.5*cm))
    
    # Solution Portfolio
    story.append(Paragraph("SOLUTION PORTFOLIO", styles['subtitle']))
    
    solution_data = [
        ["💼 MICROSOFT 365", "☁️ AZURE CLOUD", "📊 DYNAMICS 365"],
        ["Complete productivity", "Enterprise platform", "Business intelligence"],
        ["• Teams collaboration", "• Virtual machines", "• Sales automation"],
        ["• Exchange online", "• App services", "• Customer service"],
        ["• SharePoint sites", "• SQL database", "• Marketing tools"],
        ["• OneDrive storage", "• AI & ML services", "• Finance operations"]
    ]
    
    solution_table = Table(solution_data, colWidths=[5*cm, 5*cm, 5*cm])
    solution_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 1), colors.HexColor('#0078d4')),
        ('TEXTCOLOR', (0, 0), (-1, 1), colors.white),
        ('TEXTCOLOR', (0, 2), (-1, -1), colors.HexColor('#1f2937')),
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('FONTNAME', (0, 0), (-1, 1), 'Helvetica-Bold'),
        ('FONTNAME', (0, 2), (-1, -1), 'Helvetica'),
        ('FONTSIZE', (0, 0), (-1, 1), 12),
        ('FONTSIZE', (0, 2), (-1, -1), 9),
        ('GRID', (0, 0), (-1, -1), 1, colors.HexColor('#0078d4')),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('ROWBACKGROUNDS', (0, 2), (-1, -1), [colors.HexColor('#e6f3ff'), colors.white])
    ]))
    
    story.append(solution_table)
    story.append(Spacer(1, 0.5*cm))
    
    # Security Features
    story.append(Paragraph("ENTERPRISE SECURITY", styles['subtitle']))
    
    security_data = [
        ["🛡️ Zero Trust", "🔐 Identity Mgmt", "📋 Compliance"],
        ["Never trust, verify", "Single sign-on", "Industry standards"],
        ["🚨 Threat Protection", "🔒 Data Loss Prevention", "📱 Device Security"],
        ["AI detection", "Sensitive data protection", "Mobile device management"]
    ]
    
    security_table = Table(security_data, colWidths=[5*cm, 5*cm, 5*cm])
    security_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), colors.HexColor('#fff4e6')),
        ('TEXTCOLOR', (0, 0), (-1, -1), colors.HexColor('#1f2937')),
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('FONTNAME', (0, 0), (-1, -1), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, -1), 10),
        ('GRID', (0, 0), (-1, -1), 1, colors.HexColor('#f59e0b')),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('ROWBACKGROUNDS', (0, 0), (-1, -1), [colors.HexColor('#fbbf24'), colors.white])
    ]))
    
    story.append(security_table)
    story.append(Spacer(1, 0.3*cm))
    
    # Business Value
    story.append(Paragraph("BUSINESS VALUE", styles['subtitle']))
    story.append(Paragraph("📈 25% Productivity Boost • 💰 30% Cost Reduction • 🌍 Global Availability", styles['feature']))
    
    doc.build(story, onFirstPage=create_header_footer, onLaterPages=create_header_footer)

def create_projekt_pdf():
    """Erstellt visuelles IT-Projekte PDF"""
    doc = SimpleDocTemplate(
        "c:/Users/Martin/source/repos/scaleweb/public/pdfs/it-projekte-produktinfo.pdf",
        pagesize=A4,
        topMargin=3*cm,
        bottomMargin=3*cm,
        leftMargin=2*cm,
        rightMargin=2*cm
    )
    
    styles = get_modern_styles()
    story = []
    
    # Hero Section
    story.append(Paragraph("IT PROJECTS", styles['hero_title']))
    story.append(Paragraph("Enterprise Transformation Excellence", styles['subtitle']))
    story.append(Spacer(1, 0.3*cm))
    
    # Project Buzzwords
    buzzwords = [
        "🎯 200+ PROJECTS DELIVERED", "⚡ AGILE METHODOLOGY", 
        "🚀 95% ON-TIME DELIVERY", "💡 INNOVATION DRIVEN"
    ]
    
    for buzzword in buzzwords:
        story.append(Paragraph(buzzword, styles['buzzword']))
        story.append(Spacer(1, 0.2*cm))
    
    story.append(Spacer(1, 0.5*cm))
    
    # Project Types
    story.append(Paragraph("PROJECT PORTFOLIO", styles['subtitle']))
    
    project_data = [
        ["☁️ CLOUD MIGRATION", "🛡️ SECURITY UPGRADE", "🤖 AUTOMATION"],
        ["Microsoft 365 & Azure", "Zero-trust architecture", "Process optimization"],
        ["📱 DIGITAL WORKPLACE", "🏗️ INFRASTRUCTURE", "🔧 MODERNIZATION"],
        ["Modern collaboration", "Server & network", "Legacy system upgrade"]
    ]
    
    project_table = Table(project_data, colWidths=[5*cm, 5*cm, 5*cm])
    project_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), colors.HexColor('#f0f9ff')),
        ('TEXTCOLOR', (0, 0), (-1, -1), colors.HexColor('#1f2937')),
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('FONTNAME', (0, 0), (-1, -1), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, -1), 10),
        ('GRID', (0, 0), (-1, -1), 1, colors.HexColor('#0ea5e9')),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('ROWBACKGROUNDS', (0, 0), (-1, -1), [colors.HexColor('#bae6fd'), colors.white])
    ]))
    
    story.append(project_table)
    story.append(Spacer(1, 0.5*cm))
    
    # Success Metrics
    story.append(Paragraph("SUCCESS METRICS", styles['subtitle']))
    
    success_data = [
        ["🎯 95%", "💰 35%", "🚀 40%"],
        ["On-time delivery", "Cost reduction", "Efficiency gain"],
        ["⚡ 6 months", "👥 100%", "🛡️ Zero"],
        ["Avg. ROI time", "Client satisfaction", "Security incidents"]
    ]
    
    success_table = Table(success_data, colWidths=[5*cm, 5*cm, 5*cm])
    success_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 1), colors.HexColor('#059669')),
        ('TEXTCOLOR', (0, 0), (-1, 1), colors.white),
        ('TEXTCOLOR', (0, 2), (-1, -1), colors.HexColor('#1f2937')),
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('FONTNAME', (0, 0), (-1, -1), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, 1), 16),
        ('FONTSIZE', (0, 2), (-1, -1), 12),
        ('GRID', (0, 0), (-1, -1), 2, colors.HexColor('#059669')),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('ROWBACKGROUNDS', (0, 2), (-1, -1), [colors.HexColor('#d1fae5'), colors.white])
    ]))
    
    story.append(success_table)
    story.append(Spacer(1, 0.3*cm))
    
    # Methodology
    story.append(Paragraph("PROJECT EXCELLENCE", styles['subtitle']))
    story.append(Paragraph("📋 Detailed Planning • ⚡ Agile Delivery • 🎯 Risk Management • 📚 Knowledge Transfer", styles['feature']))
    
    doc.build(story, onFirstPage=create_header_footer, onLaterPages=create_header_footer)

def create_services_pdfs():
    """Erstellt visuelle Service-PDFs"""
    
    # === BERATUNG PDF ===
    doc = SimpleDocTemplate(
        "c:/Users/Martin/source/repos/scaleweb/public/pdfs/beratung-produktinfo.pdf",
        pagesize=A4,
        topMargin=3*cm,
        bottomMargin=3*cm,
        leftMargin=2*cm,
        rightMargin=2*cm
    )
    
    styles = get_modern_styles()
    story = []
    
    story.append(Paragraph("STRATEGIC", styles['hero_title']))
    story.append(Paragraph("IT Consulting Excellence", styles['subtitle']))
    story.append(Spacer(1, 0.3*cm))
    
    # Consulting Buzzwords
    buzzwords = [
        "🎯 STRATEGIC ROADMAPS", "⚡ DIGITAL TRANSFORMATION", 
        "🛡️ SECURITY ASSESSMENT", "☁️ CLOUD STRATEGY"
    ]
    
    for buzzword in buzzwords:
        story.append(Paragraph(buzzword, styles['buzzword']))
        story.append(Spacer(1, 0.2*cm))
    
    story.append(Spacer(1, 0.5*cm))
    
    # Consulting Services
    story.append(Paragraph("CONSULTING SERVICES", styles['subtitle']))
    
    consulting_data = [
        ["💡 STRATEGY", "🔍 ASSESSMENT", "🚀 TRANSFORMATION"],
        ["IT roadmap & planning", "Current state analysis", "Digital evolution"],
        ["📊 OPTIMIZATION", "🛡️ SECURITY", "☁️ CLOUD STRATEGY"],
        ["Process improvement", "Risk evaluation", "Migration planning"]
    ]
    
    consulting_table = Table(consulting_data, colWidths=[5*cm, 5*cm, 5*cm])
    consulting_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), colors.HexColor('#f0f9ff')),
        ('TEXTCOLOR', (0, 0), (-1, -1), colors.HexColor('#1f2937')),
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('FONTNAME', (0, 0), (-1, -1), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, -1), 10),
        ('GRID', (0, 0), (-1, -1), 1, colors.HexColor('#3b82f6')),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('ROWBACKGROUNDS', (0, 0), (-1, -1), [colors.HexColor('#93c5fd'), colors.white])
    ]))
    
    story.append(consulting_table)
    story.append(Spacer(1, 0.3*cm))
    
    story.append(Paragraph("EXPERT CONSULTATION", styles['subtitle']))
    story.append(Paragraph("🎯 Free Initial Analysis • 📊 Strategic Planning • 🚀 Implementation Roadmap", styles['feature']))
    
    doc.build(story, onFirstPage=create_header_footer, onLaterPages=create_header_footer)
    
    # === IMPLEMENTATION PDF ===
    doc = SimpleDocTemplate(
        "c:/Users/Martin/source/repos/scaleweb/public/pdfs/implementation-produktinfo.pdf",
        pagesize=A4,
        topMargin=3*cm,
        bottomMargin=3*cm,
        leftMargin=2*cm,
        rightMargin=2*cm
    )
    
    story = []
    story.append(Paragraph("IMPLEMENTATION", styles['hero_title']))
    story.append(Paragraph("Expert Deployment Services", styles['subtitle']))
    story.append(Spacer(1, 0.3*cm))
    
    # Implementation Buzzwords
    impl_buzzwords = [
        "🚀 RAPID DEPLOYMENT", "⚡ ZERO DOWNTIME", 
        "🎯 PROJECT MANAGEMENT", "📚 KNOWLEDGE TRANSFER"
    ]
    
    for buzzword in impl_buzzwords:
        story.append(Paragraph(buzzword, styles['buzzword']))
        story.append(Spacer(1, 0.2*cm))
    
    story.append(Spacer(1, 0.5*cm))
    
    # Implementation Services
    story.append(Paragraph("IMPLEMENTATION SERVICES", styles['subtitle']))
    
    impl_data = [
        ["🎯 ACMP DEPLOY", "🛡️ SECURITY SETUP", "☁️ CLOUD MIGRATION"],
        ["Complete platform", "Advanced protection", "Microsoft 365 & Azure"],
        ["📱 MOBILITY", "🔧 INTEGRATION", "📊 MONITORING"],
        ["Device management", "System connectivity", "Performance tracking"]
    ]
    
    impl_table = Table(impl_data, colWidths=[5*cm, 5*cm, 5*cm])
    impl_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), colors.HexColor('#f0fdf4')),
        ('TEXTCOLOR', (0, 0), (-1, -1), colors.HexColor('#1f2937')),
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('FONTNAME', (0, 0), (-1, -1), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, -1), 10),
        ('GRID', (0, 0), (-1, -1), 1, colors.HexColor('#22c55e')),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('ROWBACKGROUNDS', (0, 0), (-1, -1), [colors.HexColor('#86efac'), colors.white])
    ]))
    
    story.append(impl_table)
    story.append(Spacer(1, 0.3*cm))
    
    story.append(Paragraph("PROFESSIONAL DEPLOYMENT", styles['subtitle']))
    story.append(Paragraph("📋 Project Planning • ⚡ Expert Installation • 🎓 User Training • 🚀 Go-Live Support", styles['feature']))
    
    doc.build(story, onFirstPage=create_header_footer, onLaterPages=create_header_footer)
    
    # === WARTUNG PDF ===
    doc = SimpleDocTemplate(
        "c:/Users/Martin/source/repos/scaleweb/public/pdfs/wartung-produktinfo.pdf",
        pagesize=A4,
        topMargin=3*cm,
        bottomMargin=3*cm,
        leftMargin=2*cm,
        rightMargin=2*cm
    )
    
    story = []
    story.append(Paragraph("MANAGED", styles['hero_title']))
    story.append(Paragraph("IT Services & Support", styles['subtitle']))
    story.append(Spacer(1, 0.3*cm))
    
    # Wartung Buzzwords
    maint_buzzwords = [
        "⚡ 24/7 MONITORING", "🛡️ PROACTIVE CARE", 
        "📊 PERFORMANCE OPTIMIZATION", "🔧 PREVENTIVE MAINTENANCE"
    ]
    
    for buzzword in maint_buzzwords:
        story.append(Paragraph(buzzword, styles['buzzword']))
        story.append(Spacer(1, 0.2*cm))
    
    story.append(Spacer(1, 0.5*cm))
    
    # Wartung Services
    story.append(Paragraph("MANAGED SERVICES", styles['subtitle']))
    
    maint_data = [
        ["📊 MONITORING", "🔧 MAINTENANCE", "🛡️ SECURITY"],
        ["24/7 system watch", "Preventive care", "Threat protection"],
        ["📦 BACKUP", "🚀 UPDATES", "📞 SUPPORT"],
        ["Data protection", "System patches", "Expert helpdesk"]
    ]
    
    maint_table = Table(maint_data, colWidths=[5*cm, 5*cm, 5*cm])
    maint_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), colors.HexColor('#fff7ed')),
        ('TEXTCOLOR', (0, 0), (-1, -1), colors.HexColor('#1f2937')),
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('FONTNAME', (0, 0), (-1, -1), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, -1), 10),
        ('GRID', (0, 0), (-1, -1), 1, colors.HexColor('#f97316')),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('ROWBACKGROUNDS', (0, 0), (-1, -1), [colors.HexColor('#fed7aa'), colors.white])
    ]))
    
    story.append(maint_table)
    story.append(Spacer(1, 0.3*cm))
    
    story.append(Paragraph("MANAGED IT EXCELLENCE", styles['subtitle']))
    story.append(Paragraph("📊 Proactive Monitoring • 🔧 Regular Maintenance • 🛡️ Security Updates • 📞 24/7 Support", styles['feature']))
    
    doc.build(story, onFirstPage=create_header_footer, onLaterPages=create_header_footer)

def create_company_overview_pdf():
    """Erstellt visuell ansprechende 2-seitige Unternehmensbroschüre im Website-Design"""
    doc = SimpleDocTemplate(
        "c:/Users/Martin/source/repos/scaleweb/public/pdfs/scaleweb-unternehmensprospekt.pdf",
        pagesize=A4,
        topMargin=4*cm,  # Mehr Platz für Website-Header
        bottomMargin=3*cm,
        leftMargin=2*cm,
        rightMargin=2*cm
    )
    
    styles = get_styles()
    story = []
    
    # === SEITE 1: UNTERNEHMEN ===
    
    # Hero Section im Website-Stil
    story.append(Paragraph("SCALEWEB", styles['title']))
    story.append(Paragraph("IT Solutions & Digital Transformation", styles['subtitle']))
    story.append(Spacer(1, 0.5*cm))
    
    # Einführungstext mit Website-Farben
    intro_text = """
    <para alignment="center">
    <font color="#0f172a" size="14"><b>Ihr Partner für professionelle IT-Lösungen</b></font><br/>
    <font color="#64748b" size="11">Wir machen IT einfach, sicher und effizient.</font>
    </para>
    """
    story.append(Paragraph(intro_text, styles['body']))
    story.append(Spacer(1, 0.4*cm))
    
    # Company Buzzwords im Website-Design
    company_buzzwords = [
        "IT MADE SIMPLE", "ENTERPRISE READY", 
        "SECURITY FIRST", "DATA DRIVEN",
        "CLOUD NATIVE", "FUTURE PROOF"
    ]
    
    company_buzzword_section = create_buzzword_box(company_buzzwords, styles)
    for item in company_buzzword_section:
        story.append(item)
    
    story.append(Spacer(1, 0.6*cm))
    
    # Company Statistics im Website-Design
    company_stats = [
        {"value": "10+", "label": "Years Experience"},
        {"value": "200+", "label": "Projects Delivered"},
        {"value": "24/7", "label": "Support"},
        {"value": "95%", "label": "Client Satisfaction"},
        {"value": "35%", "label": "Cost Reduction"},
        {"value": "40%", "label": "Efficiency Gain"}
    ]
    
    company_stats_section = create_stats_section(company_stats)
    for item in company_stats_section:
        story.append(item)
    
    story.append(Spacer(1, 0.5*cm))
    
    # Kernkompetenzen mit Website-Styling
    story.append(Paragraph("🎯 UNSERE KERNKOMPETENZEN", styles['subtitle']))
    
    competencies_data = [
        ["Bereich", "Spezialisierung", "Vorteile"],
        ["🛡️ Security Solutions", "ACMP, Arctic Wolf, Hornetsecurity", "360° IT-Sicherheit"],
        ["☁️ Cloud Services", "Microsoft 365, Azure", "Skalierbare Infrastruktur"],
        ["🔧 Implementation", "Beratung & Umsetzung", "Turnkey Solutions"],
        ["🛠️ Maintenance", "Proaktiver Support", "Minimale Ausfallzeiten"],
    ]
    
    competencies_table = Table(competencies_data, colWidths=[4*cm, 6*cm, 4*cm])
    competencies_table.setStyle(get_modern_table_style())
    
    story.append(competencies_table)
    
    # Seitenumbruch
    story.append(PageBreak())
    
    # === SEITE 2: SERVICES & KONTAKT ===
    
    story.append(Paragraph("🚀 UNSERE SERVICES", styles['title']))
    story.append(Spacer(1, 0.4*cm))
    
    # Service-Portfolio mit Website-Design
    services_data = [
        ["Service", "Beschreibung", "Nutzen"],
        ["📋 Beratung", "IT-Strategieentwicklung", "Optimale Lösungsarchitektur"],
        ["⚙️ Implementation", "Professionelle Umsetzung", "Reibungsloser Projektablauf"],
        ["🔧 Wartung", "Proaktiver IT-Support", "Höchste Verfügbarkeit"],
        ["🎓 Training", "Anwenderschulungen", "Maximale Produktivität"],
    ]
    
    services_table = Table(services_data, colWidths=[3*cm, 6*cm, 5*cm])
    services_table.setStyle(get_modern_table_style())
    
    story.append(services_table)
    story.append(Spacer(1, 0.6*cm))
    
    # Partner-Ökosystem
    story.append(Paragraph("🤝 ZERTIFIZIERTE PARTNER", styles['subtitle']))
    
    partners_data = [
        ["Partner", "Zertifizierung", "Expertise"],
        ["Microsoft", "Gold Partner", "Cloud & Productivity"],
        ["ACMP", "Certified Partner", "Client Management"],
        ["Arctic Wolf", "Authorized Partner", "Security Operations"],
        ["Hornetsecurity", "Premium Partner", "Email Security"],
    ]
    
    partners_table = Table(partners_data, colWidths=[4*cm, 5*cm, 5*cm])
    partners_table.setStyle(get_modern_table_style())
    
    story.append(partners_table)
    story.append(Spacer(1, 0.6*cm))
    
    # Kontakt-Sektion im Website-Design
    contact_style = ParagraphStyle(
        'ContactSection',
        fontSize=12,
        textColor=colors.white,
        alignment=TA_CENTER,
        fontName='Helvetica-Bold',
        backColor=colors.HexColor('#0f172a'),  # slate-900
        topPadding=20,
        bottomPadding=20,
        leftPadding=25,
        rightPadding=25
    )
    
    contact_text = """
    📞 <b>BEREIT FÜR DEN NÄCHSTEN SCHRITT?</b><br/>
    <font color="#06b6d4">Kontaktieren Sie uns für eine kostenlose Beratung!</font><br/>
    📧 info@scaleweb.de | 🌐 www.scaleweb.de
    """
    
    story.append(Paragraph(contact_text, contact_style))
    
    # PDF erstellen mit Website-Header/Footer
    doc.build(story, onFirstPage=create_header_footer, onLaterPages=create_header_footer)
        ["Microsoft • Arctic Wolf • Hornetsecurity", "Fast implementation", "Zero-trust architecture"],
        ["💡 INNOVATION FOCUS", "🤝 TRANSPARENT PRICING", "📈 SCALABLE SOLUTIONS"],
        ["Latest technology", "No hidden costs", "Grows with you"]
    ]
    
    why_table = Table(why_data, colWidths=[5*cm, 5*cm, 5*cm])
    why_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), colors.HexColor('#f0f9ff')),
        ('TEXTCOLOR', (0, 0), (-1, -1), colors.HexColor('#1f2937')),
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('FONTNAME', (0, 0), (-1, -1), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, -1), 9),
        ('GRID', (0, 0), (-1, -1), 1, colors.HexColor('#0ea5e9')),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('ROWBACKGROUNDS', (0, 0), (-1, -1), [colors.HexColor('#bae6fd'), colors.white])
    ]))
    
    story.append(why_table)
    
    # Seitenumbruch für Seite 2
    story.append(Spacer(1, 2*cm))
    
    # === SEITE 2: SERVICES & PRODUCTS ===
    
    story.append(Paragraph("OUR SERVICE PORTFOLIO", styles['hero_title']))
    story.append(Spacer(1, 0.3*cm))
    
    # Product Lineup
    story.append(Paragraph("ENTERPRISE PRODUCTS", styles['subtitle']))
    
    products_data = [
        ["🎯 ACMP PLATFORM", "🛡️ HORNETSECURITY", "🔍 ARCTIC WOLF"],
        ["Complete IT control", "Email security leader", "Elite MDR service"],
        ["• Asset Management", "• Anti-phishing AI", "• 24/7 SOC experts"],
        ["• Software deployment", "• Backup unlimited", "• Threat hunting"],
        ["• License optimization", "• Compliance ready", "• Incident response"],
        ["• Mobile device mgmt", "• Zero-day protection", "• Vulnerability mgmt"]
    ]
    
    products_table = Table(products_data, colWidths=[5*cm, 5*cm, 5*cm])
    products_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 1), colors.HexColor('#dc2626')),
        ('TEXTCOLOR', (0, 0), (-1, 1), colors.white),
        ('TEXTCOLOR', (0, 2), (-1, -1), colors.HexColor('#1f2937')),
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('FONTNAME', (0, 0), (-1, 1), 'Helvetica-Bold'),
        ('FONTNAME', (0, 2), (-1, -1), 'Helvetica'),
        ('FONTSIZE', (0, 0), (-1, 1), 12),
        ('FONTSIZE', (0, 2), (-1, -1), 8),
        ('GRID', (0, 0), (-1, -1), 1, colors.HexColor('#dc2626')),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('ROWBACKGROUNDS', (0, 2), (-1, -1), [colors.HexColor('#fef2f2'), colors.white])
    ]))
    
    story.append(products_table)
    story.append(Spacer(1, 0.5*cm))
    
    # Professional Services
    story.append(Paragraph("PROFESSIONAL SERVICES", styles['subtitle']))
    
    services_data = [
        ["💡 STRATEGIC CONSULTING", "🚀 IMPLEMENTATION", "🔧 MANAGED SERVICES"],
        ["IT strategy & roadmap", "Project management", "Proactive monitoring"],
        ["Digital transformation", "Expert deployment", "24/7 support"],
        ["Security assessment", "Change management", "Maintenance & updates"],
        ["Cloud strategy", "Training & adoption", "Performance optimization"]
    ]
    
    services_table = Table(services_data, colWidths=[5*cm, 5*cm, 5*cm])
    services_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 1), colors.HexColor('#059669')),
        ('TEXTCOLOR', (0, 0), (-1, 1), colors.white),
        ('TEXTCOLOR', (0, 2), (-1, -1), colors.HexColor('#1f2937')),
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('FONTNAME', (0, 0), (-1, 1), 'Helvetica-Bold'),
        ('FONTNAME', (0, 2), (-1, -1), 'Helvetica'),
        ('FONTSIZE', (0, 0), (-1, 1), 11),
        ('FONTSIZE', (0, 2), (-1, -1), 9),
        ('GRID', (0, 0), (-1, -1), 1, colors.HexColor('#059669')),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('ROWBACKGROUNDS', (0, 2), (-1, -1), [colors.HexColor('#d1fae5'), colors.white])
    ]))
    
    story.append(services_table)
    story.append(Spacer(1, 0.3*cm))
    
    # Call to Action
    story.append(Paragraph("READY TO SCALE YOUR IT?", styles['subtitle']))
    story.append(Paragraph("🎯 Free Consultation • ⚡ Rapid Assessment • 🚀 Custom Solutions", styles['feature']))
    story.append(Spacer(1, 0.2*cm))
    story.append(Paragraph("Transform your IT infrastructure with enterprise-grade solutions.", styles['feature']))
    
    doc.build(story, onFirstPage=create_header_footer, onLaterPages=create_header_footer)

if __name__ == "__main__":
    print("Generiere PDFs...")
    
    try:
        create_acmp_pdf()
        print("✓ ACMP PDF erstellt")
        
        create_hornetsecurity_pdf()
        print("✓ Hornetsecurity PDF erstellt")
        
        create_arctic_wolf_pdf()
        print("✓ Arctic Wolf PDF erstellt")
        
        create_microsoft_pdf()
        print("✓ Microsoft PDF erstellt")
        
        create_projekt_pdf()
        print("✓ IT-Projekte PDF erstellt")
        
        create_services_pdfs()
        print("✓ Service PDFs erstellt")
        
        create_company_overview_pdf()
        print("✓ Unternehmens-PDF erstellt")
        
        print("\nAlle PDFs erfolgreich generiert!")
        print("Speicherort: c:/Users/Martin/source/repos/scaleweb/public/pdfs/")
        
    except Exception as e:
        print(f"Fehler beim Generieren der PDFs: {e}")
