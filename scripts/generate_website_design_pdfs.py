#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from reportlab.lib.pagesizes import A4
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch, cm
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_JUSTIFY, TA_RIGHT
from reportlab.pdfgen import canvas
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
    
    return {
        'title': title_style,
        'subtitle': subtitle_style,
        'body': body_style,
        'highlight': highlight_style
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
    ])

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
    
    # Buzzwords in 2 Spalten anordnen
    buzzword_data = []
    for i in range(0, len(buzzwords), 2):
        row = []
        # Erste Spalte
        if i < len(buzzwords):
            row.append(f"• {buzzwords[i]}")
        else:
            row.append("")
            
        # Zweite Spalte
        if i + 1 < len(buzzwords):
            row.append(f"• {buzzwords[i + 1]}")
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
        ('TEXTCOLOR', (0, 0), (-1, -1), colors.HexColor('#dc2626')),  # red-600
        ('FONTNAME', (0, 0), (-1, -1), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, -1), 10),
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
    
    # Statistiken in Grid-Layout
    stats_table_data = []
    for i in range(0, len(stats_data), 3):
        row = []
        for j in range(3):
            if i + j < len(stats_data):
                stat = stats_data[i + j]
                # Statistik-Box-Inhalt
                stat_text = f"""
                <para alignment="center">
                    <font size="20" color="#dc2626"><b>{stat['value']}</b></font><br/>
                    <font size="10" color="#64748b">{stat['label']}</font>
                </para>
                """
                row.append(stat_text)
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
        ('BOX', (0, 0), (-1, -1), 3, colors.HexColor('#06b6d4')),  # cyan-500 border
    ]))
    
    stats_content.append(stats_table)
    return stats_content

def create_acmp_pdf():
    """Erstellt ACMP PDF im Website-Design"""
    doc = SimpleDocTemplate(
        "c:/Users/Martin/source/repos/scaleweb/public/pdfs/acmp-produktinfo.pdf",
        pagesize=A4,
        topMargin=4*cm,
        bottomMargin=3*cm,
        leftMargin=2*cm,
        rightMargin=2*cm
    )
    
    styles = get_styles()
    story = []
    
    # Hero Section im Website-Stil
    story.append(Paragraph("ACMP", styles['title']))
    story.append(Paragraph("Advanced Client Management Platform", styles['subtitle']))
    story.append(Spacer(1, 0.5*cm))
    
    # Einführung mit Website-Farben
    intro_text = """
    <para alignment="justify">
    <font color="#1e293b"><b>ACMP</b></font> ist die ultimative 
    <font color="#dc2626"><b>Client-Management-Plattform</b></font> für moderne IT-Umgebungen. 
    Verwalten Sie Ihre gesamte IT-Infrastruktur mit 
    <font color="#0891b2"><b>einem einzigen Tool</b></font>.
    </para>
    """
    story.append(Paragraph(intro_text, styles['body']))
    story.append(Spacer(1, 0.4*cm))
    
    # ACMP Buzzwords
    acmp_buzzwords = [
        "COMPLETE IT CONTROL", "AUTOMATED DEPLOYMENT", 
        "ZERO-TOUCH PROVISIONING", "ENTERPRISE SCALABILITY",
        "COMPLIANCE READY", "CLOUD-FIRST ARCHITECTURE"
    ]
    
    buzzword_section = create_buzzword_box(acmp_buzzwords, styles)
    for item in buzzword_section:
        story.append(item)
    
    story.append(Spacer(1, 0.6*cm))
    
    # ACMP Statistics
    acmp_stats = [
        {"value": "1000+", "label": "Managed Clients"},
        {"value": "95%", "label": "Automation Rate"},
        {"value": "< 30sec", "label": "Deploy Time"},
        {"value": "24/7", "label": "Monitoring"},
        {"value": "99.9%", "label": "Uptime"},
        {"value": "80%", "label": "Cost Savings"}
    ]
    
    stats_section = create_stats_section(acmp_stats)
    for item in stats_section:
        story.append(item)
    
    story.append(Spacer(1, 0.5*cm))
    
    # ACMP Kernfunktionen
    story.append(Paragraph("⚙️ ACMP KERNFUNKTIONEN", styles['subtitle']))
    
    acmp_features_data = [
        ["Funktion", "Beschreibung", "Vorteile"],
        ["🖥️ Asset Management", "Vollständige Hardware-/Software-Inventarisierung", "100% Transparenz"],
        ["🚀 Software Deployment", "Automatisierte Softwareverteilung", "Zero-Touch Installation"],
        ["👥 User Lifecycle", "Komplettes On-/Offboarding", "Compliance-sicher"],
        ["📊 Reporting & Analytics", "Echtzeit-Dashboards & Reports", "Datengetriebene Entscheidungen"],
        ["🔧 Remote Management", "Fernwartung & -konfiguration", "Minimale Ausfallzeiten"],
    ]
    
    acmp_features_table = Table(acmp_features_data, colWidths=[4*cm, 6*cm, 4*cm])
    acmp_features_table.setStyle(get_modern_table_style())
    
    story.append(acmp_features_table)
    story.append(Spacer(1, 0.4*cm))
    
    # ACMP Module
    story.append(Paragraph("🎯 ACMP MODULE", styles['subtitle']))
    
    modules_data = [
        ["Modul", "Funktion", "Use Case"],
        ["AD Integration", "Active Directory Synchronisation", "Benutzer-Management"],
        ["Software Shop", "Self-Service Software Portal", "Anwender-Autonomie"],
        ["Bitlocker Mgmt", "Verschlüsselungs-Management", "Datenschutz"],
        ["Printer Mgmt", "Drucker-Verwaltung", "Campus-weite Installation"],
        ["O365 License", "Microsoft 365 Lizenzen", "Cost Optimization"],
    ]
    
    modules_table = Table(modules_data, colWidths=[4*cm, 6*cm, 4*cm])
    modules_table.setStyle(get_modern_table_style())
    
    story.append(modules_table)
    story.append(Spacer(1, 0.4*cm))
    
    # Abschluss
    conclusion_style = ParagraphStyle(
        'Conclusion',
        fontSize=12,
        textColor=colors.HexColor('#0f172a'),
        alignment=TA_CENTER,
        fontName='Helvetica-Bold',
        backColor=colors.HexColor('#f0f9ff'),
        borderColor=colors.HexColor('#06b6d4'),
        borderWidth=2,
        topPadding=15,
        bottomPadding=15,
        leftPadding=20,
        rightPadding=20
    )
    
    conclusion_text = """
    🚀 <b>READY FOR SMART IT MANAGEMENT?</b><br/>
    <font color="#dc2626">Transformieren Sie Ihre IT mit ACMP!</font>
    """
    
    story.append(Paragraph(conclusion_text, conclusion_style))
    
    doc.build(story, onFirstPage=create_header_footer, onLaterPages=create_header_footer)

def create_arctic_wolf_pdf():
    """Erstellt Arctic Wolf PDF im Website-Design"""
    doc = SimpleDocTemplate(
        "c:/Users/Martin/source/repos/scaleweb/public/pdfs/arctic-wolf-produktinfo.pdf",
        pagesize=A4,
        topMargin=4*cm,
        bottomMargin=3*cm,
        leftMargin=2*cm,
        rightMargin=2*cm
    )
    
    styles = get_styles()
    story = []
    
    # Hero Section
    story.append(Paragraph("ARCTIC WOLF", styles['title']))
    story.append(Paragraph("Elite Managed Detection & Response", styles['subtitle']))
    story.append(Spacer(1, 0.5*cm))
    
    # Einführung
    intro_text = """
    <para alignment="justify">
    <font color="#1e293b"><b>Arctic Wolf</b></font> bietet 
    <font color="#dc2626"><b>Elite-MDR-Services</b></font> mit 24/7 
    <font color="#0891b2"><b>Security Operations Center</b></font> 
    für enterprise-grade Cyber-Security.
    </para>
    """
    story.append(Paragraph(intro_text, styles['body']))
    story.append(Spacer(1, 0.4*cm))
    
    # Arctic Wolf Buzzwords
    aw_buzzwords = [
        "24/7 SOC EXPERTS", "THREAT HUNTING", 
        "INCIDENT RESPONSE", "CONTINUOUS MONITORING",
        "ELITE MDR SERVICE", "PROACTIVE DEFENSE"
    ]
    
    buzzword_section = create_buzzword_box(aw_buzzwords, styles)
    for item in buzzword_section:
        story.append(item)
    
    story.append(Spacer(1, 0.6*cm))
    
    # Arctic Wolf Statistics
    aw_stats = [
        {"value": "24/7", "label": "SOC Monitoring"},
        {"value": "< 15min", "label": "Response Time"},
        {"value": "99.8%", "label": "Threat Detection"},
        {"value": "1000+", "label": "Security Experts"},
        {"value": "4000+", "label": "Customers"},
        {"value": "15sec", "label": "Mean Detection"}
    ]
    
    stats_section = create_stats_section(aw_stats)
    for item in stats_section:
        story.append(item)
    
    story.append(Spacer(1, 0.5*cm))
    
    # Services
    story.append(Paragraph("🛡️ ARCTIC WOLF SERVICES", styles['subtitle']))
    
    services_data = [
        ["Service", "Beschreibung", "Vorteile"],
        ["🔍 Managed Detection", "24/7 Threat Hunting & Detection", "Proaktive Bedrohungserkennung"],
        ["⚡ Incident Response", "Sofortige Reaktion auf Incidents", "Minimaler Business Impact"],
        ["📊 Security Analytics", "Advanced SIEM & Behavioral Analysis", "Präzise Threat Intelligence"],
        ["🎓 Security Awareness", "Training & Compliance Management", "Human Firewall"],
        ["🔧 Managed Risk", "Vulnerability & Risk Assessment", "Kontinuierliche Verbesserung"],
    ]
    
    services_table = Table(services_data, colWidths=[4*cm, 6*cm, 4*cm])
    services_table.setStyle(get_modern_table_style())
    
    story.append(services_table)
    story.append(Spacer(1, 0.4*cm))
    
    # Abschluss
    conclusion_style = ParagraphStyle(
        'Conclusion',
        fontSize=12,
        textColor=colors.HexColor('#0f172a'),
        alignment=TA_CENTER,
        fontName='Helvetica-Bold',
        backColor=colors.HexColor('#f0f9ff'),
        borderColor=colors.HexColor('#06b6d4'),
        borderWidth=2,
        topPadding=15,
        bottomPadding=15,
        leftPadding=20,
        rightPadding=20
    )
    
    conclusion_text = """
    🚀 <b>READY FOR ELITE SECURITY?</b><br/>
    <font color="#dc2626">Schützen Sie Ihr Unternehmen mit Arctic Wolf!</font>
    """
    
    story.append(Paragraph(conclusion_text, conclusion_style))
    
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
        ["🔒 Encryption Services", "End-to-End Verschlüsselung", "DSGVO-konform"],
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

# Hauptfunktion zum Generieren aller PDFs
if __name__ == "__main__":
    # Erstelle public/pdfs Verzeichnis falls es nicht existiert
    os.makedirs("c:/Users/Martin/source/repos/scaleweb/public/pdfs", exist_ok=True)
    
    print("🚀 Generiere PDFs im Website-Design...")
    
    try:
        create_acmp_pdf()
        print("✅ ACMP PDF im Website-Design erstellt")
        
        create_arctic_wolf_pdf()
        print("✅ Arctic Wolf PDF im Website-Design erstellt")
        
        create_hornetsecurity_pdf()
        print("✅ Hornetsecurity PDF im Website-Design erstellt")
        
        create_company_overview_pdf()
        print("✅ Unternehmensbroschüre im Website-Design erstellt")
        
        print("\n🎉 Alle PDFs erfolgreich im Website-Design erstellt!")
        print("📁 Speicherort: public/pdfs/")
        print("\n📋 Erstellt wurden:")
        print("  • acmp-produktinfo.pdf (Website-Design)")
        print("  • arctic-wolf-produktinfo.pdf (Website-Design)")
        print("  • hornetsecurity-produktinfo.pdf (Website-Design)")
        print("  • scaleweb-unternehmensprospekt.pdf (Website-Design)")
        print("\n🎨 Design-Features:")
        print("  • Slate-900 zu Red-900 Gradient Header")
        print("  • Corporate Colors (red-600, cyan-600, slate-600)")
        print("  • Moderne Tabellen mit Website-Styling")
        print("  • Buzzword-Boxen im Website-Layout")
        print("  • Statistik-Sections mit Website-Farben")
        print("  • Einheitliches Corporate Design")
        print("  • Responsive Typography")
        print("  • Professional Footer mit Kontaktdaten")
        
    except Exception as e:
        print(f"❌ Fehler beim Erstellen der PDFs: {e}")
        import traceback
        traceback.print_exc()
