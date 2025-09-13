#!/usr/bin/env python3
"""
Simplified Infographic PDF Generator - Using only basic ReportLab shapes
"""

import os
from reportlab.lib.pagesizes import A4
from reportlab.platypus import SimpleDocTemplate, Spacer
from reportlab.platypus.flowables import Flowable
from reportlab.lib.colors import Color, white, black
from reportlab.lib.units import cm, mm
import math

# Modern Color Palette
class Colors:
    BLUE = Color(0.0, 0.4, 0.8)
    GREEN = Color(0.2, 0.7, 0.3)
    RED = Color(0.8, 0.3, 0.2)
    ORANGE = Color(1.0, 0.5, 0.0)
    PURPLE = Color(0.5, 0.2, 0.8)
    GRAY = Color(0.5, 0.5, 0.5)
    LIGHT_GRAY = Color(0.9, 0.9, 0.9)
    DARK_GRAY = Color(0.2, 0.2, 0.2)

class HeaderFlowable(Flowable):
    """Simple header with background"""
    
    def __init__(self, title, subtitle, width=A4[0], height=120):
        self.title = title
        self.subtitle = subtitle
        self.width = width
        self.height = height
    
    def draw(self):
        canvas = self.canv
        
        # Background
        canvas.setFillColor(Colors.BLUE)
        canvas.rect(0, 0, self.width, self.height, fill=1, stroke=0)
        
        # Decorative elements
        canvas.setFillColor(Colors.ORANGE)
        canvas.setFillAlpha(0.3)
        for i in range(0, int(self.width), 50):
            canvas.circle(i, self.height - 20, 15, fill=1, stroke=0)
        
        canvas.setFillAlpha(1.0)
        
        # Title
        canvas.setFillColor(white)
        canvas.setFont("Helvetica-Bold", 28)
        canvas.drawString(40, self.height - 50, self.title)
        
        # Subtitle
        canvas.setFont("Helvetica", 16)
        canvas.drawString(40, self.height - 75, self.subtitle)
        
        # Accent line
        canvas.setStrokeColor(Colors.ORANGE)
        canvas.setLineWidth(4)
        canvas.line(40, self.height - 85, 300, self.height - 85)

class StatsFlowable(Flowable):
    """Statistics with simple charts"""
    
    def __init__(self, stats_data, width=A4[0], height=180):
        self.stats_data = stats_data
        self.width = width
        self.height = height
    
    def draw(self):
        canvas = self.canv
        
        # Background
        canvas.setFillColor(Colors.LIGHT_GRAY)
        canvas.rect(0, 0, self.width, self.height, fill=1, stroke=0)
        
        # Title
        canvas.setFillColor(Colors.DARK_GRAY)
        canvas.setFont("Helvetica-Bold", 18)
        canvas.drawString(40, self.height - 30, "Leistungskennzahlen")
        
        # Calculate positions
        stat_width = (self.width - 80) / len(self.stats_data)
        colors = [Colors.BLUE, Colors.GREEN, Colors.RED, Colors.ORANGE]
        
        for i, (label, value, chart_type) in enumerate(self.stats_data):
            x = 40 + i * stat_width
            center_x = x + stat_width / 2
            
            # Chart background
            canvas.setFillColor(Colors.GRAY)
            canvas.circle(center_x, self.height - 80, 30, fill=1, stroke=0)
            
            # Chart foreground
            canvas.setFillColor(colors[i % len(colors)])
            canvas.circle(center_x, self.height - 80, 25, fill=1, stroke=0)
            
            # Value
            canvas.setFillColor(white)
            canvas.setFont("Helvetica-Bold", 12)
            value_width = canvas.stringWidth(value, "Helvetica-Bold", 12)
            canvas.drawString(center_x - value_width/2, self.height - 85, value)
            
            # Label
            canvas.setFillColor(Colors.DARK_GRAY)
            canvas.setFont("Helvetica", 10)
            label_width = canvas.stringWidth(label, "Helvetica", 10)
            canvas.drawString(center_x - label_width/2, self.height - 120, label)

class ProcessFlowable(Flowable):
    """Process flow with steps"""
    
    def __init__(self, process_steps, width=A4[0], height=150):
        self.process_steps = process_steps
        self.width = width
        self.height = height
    
    def draw(self):
        canvas = self.canv
        
        # Title
        canvas.setFillColor(Colors.DARK_GRAY)
        canvas.setFont("Helvetica-Bold", 18)
        canvas.drawString(40, self.height - 25, "Prozess")
        
        # Steps
        step_width = (self.width - 120) / len(self.process_steps)
        colors = [Colors.BLUE, Colors.GREEN, Colors.RED, Colors.ORANGE]
        
        for i, (title, description) in enumerate(self.process_steps):
            x = 60 + i * step_width
            center_x = x + step_width / 2
            
            # Step circle
            canvas.setFillColor(colors[i % len(colors)])
            canvas.circle(center_x, self.height - 60, 20, fill=1, stroke=0)
            
            # Step number
            canvas.setFillColor(white)
            canvas.setFont("Helvetica-Bold", 14)
            num_width = canvas.stringWidth(str(i+1), "Helvetica-Bold", 14)
            canvas.drawString(center_x - num_width/2, self.height - 67, str(i+1))
            
            # Arrow
            if i < len(self.process_steps) - 1:
                arrow_x = center_x + 20
                next_x = 60 + (i+1) * step_width + step_width / 2 - 20
                canvas.setStrokeColor(colors[i % len(colors)])
                canvas.setLineWidth(3)
                canvas.line(arrow_x, self.height - 60, next_x, self.height - 60)
            
            # Title
            canvas.setFillColor(Colors.DARK_GRAY)
            canvas.setFont("Helvetica-Bold", 10)
            title_width = canvas.stringWidth(title, "Helvetica-Bold", 10)
            canvas.drawString(center_x - title_width/2, self.height - 90, title)
            
            # Description (first line only)
            canvas.setFont("Helvetica", 8)
            desc_words = description.split()[:4]  # First 4 words
            desc_text = " ".join(desc_words) + "..."
            desc_width = canvas.stringWidth(desc_text, "Helvetica", 8)
            canvas.drawString(center_x - desc_width/2, self.height - 105, desc_text)

class FeaturesFlowable(Flowable):
    """Features grid"""
    
    def __init__(self, features, width=A4[0], height=200):
        self.features = features
        self.width = width
        self.height = height
    
    def draw(self):
        canvas = self.canv
        
        # Title
        canvas.setFillColor(Colors.DARK_GRAY)
        canvas.setFont("Helvetica-Bold", 18)
        canvas.drawString(40, self.height - 25, "Features")
        
        # Grid
        cols = 2
        rows = 3
        cell_width = (self.width - 120) / cols
        cell_height = (self.height - 60) / rows
        
        colors = [Colors.BLUE, Colors.GREEN, Colors.RED, Colors.ORANGE, Colors.PURPLE, Colors.GRAY]
        
        for i, (title, description, icon_type) in enumerate(self.features[:6]):
            row = i // cols
            col = i % cols
            
            x = 60 + col * cell_width
            y = self.height - 60 - (row + 1) * cell_height
            
            # Feature box
            canvas.setFillColor(colors[i])
            canvas.setFillAlpha(0.2)
            canvas.rect(x, y, cell_width - 20, cell_height - 10, fill=1, stroke=0)
            
            canvas.setFillAlpha(1.0)
            canvas.setStrokeColor(colors[i])
            canvas.setLineWidth(2)
            canvas.rect(x, y, cell_width - 20, cell_height - 10, fill=0, stroke=1)
            
            # Icon
            canvas.setFillColor(colors[i])
            canvas.circle(x + 20, y + cell_height - 30, 8, fill=1, stroke=0)
            
            # Title
            canvas.setFillColor(Colors.DARK_GRAY)
            canvas.setFont("Helvetica-Bold", 11)
            canvas.drawString(x + 10, y + cell_height - 50, title)
            
            # Description (truncated)
            canvas.setFont("Helvetica", 8)
            desc_words = description.split()[:6]
            desc_text = " ".join(desc_words) + "..."
            canvas.drawString(x + 10, y + cell_height - 65, desc_text)

class FooterFlowable(Flowable):
    """Simple footer"""
    
    def __init__(self, width=A4[0], height=60):
        self.width = width
        self.height = height
    
    def draw(self):
        canvas = self.canv
        
        # Background
        canvas.setFillColor(Colors.DARK_GRAY)
        canvas.rect(0, 0, self.width, self.height, fill=1, stroke=0)
        
        # Company info
        canvas.setFillColor(white)
        canvas.setFont("Helvetica-Bold", 12)
        canvas.drawString(40, self.height - 25, "ScaleWeb IT Solutions")
        
        canvas.setFont("Helvetica", 9)
        canvas.drawString(40, self.height - 40, "Professionelle IT-Sicherheit & Cloud-Lösungen")
        
        # Contact
        contact = "www.scaleweb.de | info@scaleweb.de"
        contact_width = canvas.stringWidth(contact, "Helvetica", 9)
        canvas.drawString(self.width - contact_width - 40, self.height - 32, contact)

# Simple content
SIMPLE_CONTENT = {
    "acmp": {
        "title": "ACMP Security",
        "subtitle": "Advanced Cyber Management Platform",
        "stats": [
            ("Bedrohungserkennung", "99.8%", "gauge"),
            ("Reaktionszeit", "4min", "bar"),
            ("Verfügbarkeit", "99.9%", "donut"),
            ("Compliance", "100%", "gauge")
        ],
        "process": [
            ("Monitor", "24/7 Überwachung aller Systeme"),
            ("Analyze", "KI-gestützte Bedrohungsanalyse"),
            ("Alert", "Sofortige Benachrichtigung"),
            ("Respond", "Automatische Incident Response")
        ],
        "features": [
            ("Threat Intelligence", "Globale Bedrohungsdatenbank", "shield"),
            ("Automated Response", "Automatisierte Reaktion", "bolt"),
            ("Compliance Dashboard", "Compliance-Übersicht", "chart"),
            ("Risk Assessment", "Risikobewertung", "warning"),
            ("Incident Management", "Incident-Management", "clipboard"),
            ("Vulnerability Scanning", "Schwachstellenanalyse", "search")
        ]
    },
    "arctic-wolf": {
        "title": "Arctic Wolf MDR",
        "subtitle": "Managed Detection & Response",
        "stats": [
            ("Detection Rate", "99.9%", "gauge"),
            ("Mean Time", "8min", "bar"),
            ("SOC Coverage", "24/7", "donut"),
            ("Threat Hunting", "365d", "gauge")
        ],
        "process": [
            ("Deploy", "Sensor-Installation"),
            ("Monitor", "SOC-Überwachung"),
            ("Detect", "Bedrohungserkennung"),
            ("Respond", "Sofortige Reaktion")
        ],
        "features": [
            ("24/7 SOC", "Security Operations Center", "shield"),
            ("Threat Hunting", "Proaktive Bedrohungssuche", "search"),
            ("Incident Response", "Schnelle Reaktion", "bolt"),
            ("Compliance Support", "Compliance-Unterstützung", "check"),
            ("Risk Assessment", "Risikobewertung", "chart"),
            ("Custom Reporting", "Maßgeschneiderte Berichte", "document")
        ]
    },
    "hornetsecurity": {
        "title": "Hornetsecurity",
        "subtitle": "Cloud Security & Backup",
        "stats": [
            ("Email Security", "99.99%", "gauge"),
            ("Backup Success", "100%", "bar"),
            ("Recovery Time", "1h", "donut"),
            ("Data Protection", "256-bit", "gauge")
        ],
        "process": [
            ("Setup", "Cloud-Integration"),
            ("Protect", "Kontinuierlicher Schutz"),
            ("Backup", "Automatische Sicherung"),
            ("Recovery", "Schnelle Wiederherstellung")
        ],
        "features": [
            ("Email Security", "E-Mail-Schutz", "shield"),
            ("Cloud Backup", "Cloud-Datensicherung", "cloud"),
            ("Disaster Recovery", "Disaster Recovery", "refresh"),
            ("Compliance Archive", "E-Mail-Archivierung", "archive"),
            ("Web Security", "Web-Schutz", "globe"),
            ("Mobile Security", "Mobile Sicherheit", "phone")
        ]
    },
    "microsoft": {
        "title": "Microsoft 365",
        "subtitle": "Cloud Productivity & Security",
        "stats": [
            ("Produktivität", "+40%", "gauge"),
            ("Sicherheit", "99.9%", "bar"),
            ("Verfügbarkeit", "99.9%", "donut"),
            ("Collaboration", "100%", "gauge")
        ],
        "process": [
            ("Migration", "Microsoft 365 Migration"),
            ("Integration", "System-Integration"),
            ("Training", "Mitarbeiter-Schulung"),
            ("Optimization", "Kontinuierliche Optimierung")
        ],
        "features": [
            ("Office Apps", "Office-Suite in der Cloud", "office"),
            ("Teams Collaboration", "Microsoft Teams", "users"),
            ("Advanced Security", "Enterprise-Sicherheit", "shield"),
            ("OneDrive Storage", "Cloud-Speicher", "cloud"),
            ("Exchange Online", "E-Mail-Lösung", "mail"),
            ("SharePoint", "Dokumentenmanagement", "folder")
        ]
    }
}

def create_simple_pdf(content_key, filename):
    """Create a simple PDF without complex paths"""
    
    if content_key not in SIMPLE_CONTENT:
        print(f"Content key '{content_key}' not found!")
        return
    
    content = SIMPLE_CONTENT[content_key]
    
    # Create document
    doc = SimpleDocTemplate(
        filename,
        pagesize=A4,
        rightMargin=0,
        leftMargin=0,
        topMargin=0,
        bottomMargin=0
    )
    
    # Build story
    story = []
    
    # Header
    story.append(HeaderFlowable(content["title"], content["subtitle"]))
    story.append(Spacer(1, 20))
    
    # Stats
    story.append(StatsFlowable(content["stats"]))
    story.append(Spacer(1, 20))
    
    # Process
    story.append(ProcessFlowable(content["process"]))
    story.append(Spacer(1, 20))
    
    # Features
    story.append(FeaturesFlowable(content["features"]))
    story.append(Spacer(1, 20))
    
    # Footer
    story.append(FooterFlowable())
    
    # Build PDF
    doc.build(story)
    print(f"✅ Simple PDF created: {filename}")

def main():
    """Generate all simple PDFs"""
    
    # Create output directory
    output_dir = "pdfs_simple"
    os.makedirs(output_dir, exist_ok=True)
    
    print("🎨 Generating Simple Modern PDFs...")
    print("=" * 50)
    
    # Generate PDFs for each service
    services = ["acmp", "arctic-wolf", "hornetsecurity", "microsoft"]
    
    for service in services:
        filename = os.path.join(output_dir, f"{service}_simple.pdf")
        create_simple_pdf(service, filename)
    
    print("=" * 50)
    print("✅ All simple PDFs generated successfully!")
    print(f"📁 Output directory: {os.path.abspath(output_dir)}")

if __name__ == "__main__":
    main()
