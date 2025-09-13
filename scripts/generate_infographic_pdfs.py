#!/usr/bin/env python3
"""
Infographic PDF Generator - Completely New Visual Approach
Using timeline-based storytelling with modern data visualization
"""

import os
from reportlab.lib.pagesizes import A4
from reportlab.platypus import SimpleDocTemplate, Spacer
from reportlab.platypus.flowables import Flowable
from reportlab.lib.colors import Color, white, black
from reportlab.lib.units import cm, mm
from reportlab.pdfgen import canvas
import math

# Fresh Color Scheme - Inspired by modern tech companies
class InfographicColors:
    ELECTRIC_BLUE = Color(0.0, 0.749, 1.0)  # #00BFFF
    NEON_GREEN = Color(0.196, 0.804, 0.196)  # #32CD32
    CORAL_RED = Color(1.0, 0.498, 0.314)  # #FF7F50
    GOLDEN_YELLOW = Color(1.0, 0.843, 0.0)  # #FFD700
    DEEP_PURPLE = Color(0.294, 0.0, 0.510)  # #4B0082
    SILVER = Color(0.753, 0.753, 0.753)  # #C0C0C0
    CHARCOAL = Color(0.184, 0.184, 0.184)  # #2F2F2F
    SNOW_WHITE = Color(0.98, 0.98, 0.98)  # #FAFAFA

class HeroSectionFlowable(Flowable):
    """Large hero section with dramatic visual impact"""
    
    def __init__(self, title, tagline, width=A4[0], height=180):
        self.title = title
        self.tagline = tagline
        self.width = width
        self.height = height
    
    def draw(self):
        canvas = self.canv
        
        # Dramatic diagonal background
        canvas.setFillColor(InfographicColors.DEEP_PURPLE)
        
        # Simplified background - just rectangles instead of complex paths
        canvas.rect(0, 0, self.width, self.height, fill=1, stroke=0)
        
        # Gradient effect with overlapping rectangles
        canvas.setFillColor(InfographicColors.ELECTRIC_BLUE)
        canvas.setFillAlpha(0.3)
        canvas.rect(self.width - 200, 0, 200, self.height, fill=1, stroke=0)
        
        canvas.setFillAlpha(1.0)
        
        # Overlay pattern - hexagons
        canvas.setFillColor(InfographicColors.ELECTRIC_BLUE)
        canvas.setFillAlpha(0.15)
        
        hex_size = 25
        for row in range(0, int(self.height // (hex_size * 0.866)) + 1):
            for col in range(0, int(self.width // (hex_size * 1.5)) + 1):
                x = col * hex_size * 1.5
                y = row * hex_size * 0.866
                if row % 2:
                    x += hex_size * 0.75
                
                self._draw_hexagon(canvas, x, y, hex_size // 3)
        
        canvas.setFillAlpha(1.0)
        
        # Title with shadow effect
        canvas.setFillColor(InfographicColors.CHARCOAL)
        canvas.setFont("Helvetica-Bold", 38)
        canvas.drawString(42, self.height - 55, self.title)  # Shadow
        
        canvas.setFillColor(white)
        canvas.drawString(40, self.height - 53, self.title)  # Main text
        
        # Tagline
        canvas.setFont("Helvetica", 18)
        canvas.setFillColor(InfographicColors.GOLDEN_YELLOW)
        canvas.drawString(40, self.height - 85, self.tagline)
        
        # Decorative elements
        canvas.setFillColor(InfographicColors.NEON_GREEN)
        canvas.circle(self.width - 80, self.height - 60, 30, fill=1, stroke=0)
        
        canvas.setFillColor(white)
        canvas.setFont("Helvetica-Bold", 20)
        canvas.drawString(self.width - 90, self.height - 67, "IT")
    
    def _draw_hexagon(self, canvas, x, y, size):
        """Draw a hexagon at given position - simplified as circle"""
        canvas.circle(x, y, size, fill=1, stroke=0)

class MetricsVisualizationFlowable(Flowable):
    """Data visualization using charts and meters"""
    
    def __init__(self, metrics_data, width=A4[0], height=220):
        self.metrics_data = metrics_data
        self.width = width
        self.height = height
    
    def draw(self):
        canvas = self.canv
        
        # Background with subtle grid
        canvas.setFillColor(InfographicColors.SNOW_WHITE)
        canvas.rect(0, 0, self.width, self.height, fill=1, stroke=0)
        
        # Grid pattern
        canvas.setStrokeColor(InfographicColors.SILVER)
        canvas.setLineWidth(0.5)
        for i in range(0, int(self.width), 40):
            canvas.line(i, 0, i, self.height)
        for i in range(0, self.height, 20):
            canvas.line(0, i, self.width, i)
        
        # Title
        canvas.setFillColor(InfographicColors.CHARCOAL)
        canvas.setFont("Helvetica-Bold", 20)
        canvas.drawString(40, self.height - 35, "Performance Metriken")
        
        # Calculate metric positions
        metric_width = (self.width - 120) / len(self.metrics_data)
        colors = [InfographicColors.ELECTRIC_BLUE, InfographicColors.NEON_GREEN, 
                 InfographicColors.CORAL_RED, InfographicColors.GOLDEN_YELLOW]
        
        for i, (label, value, chart_type) in enumerate(self.metrics_data):
            x = 60 + i * metric_width
            center_x = x + metric_width / 2
            
            # Draw different chart types
            if chart_type == "gauge":
                self._draw_gauge_chart(canvas, center_x, self.height - 120, 
                                     min(int(value.replace('%', '').replace('+', '').replace('<', '').replace('min', '').replace('h', '')), 100),
                                     colors[i % len(colors)])
            elif chart_type == "bar":
                self._draw_bar_chart(canvas, center_x, self.height - 120, 
                                   min(int(value.replace('%', '').replace('+', '').replace('<', '').replace('min', '').replace('h', '')), 100),
                                   colors[i % len(colors)])
            else:
                self._draw_donut_chart(canvas, center_x, self.height - 120, 
                                     min(int(value.replace('%', '').replace('+', '').replace('<', '').replace('min', '').replace('h', '')), 100),
                                     colors[i % len(colors)])
            
            # Value display
            canvas.setFillColor(InfographicColors.CHARCOAL)
            canvas.setFont("Helvetica-Bold", 28)
            value_width = canvas.stringWidth(value, "Helvetica-Bold", 28)
            canvas.drawString(center_x - value_width/2, self.height - 160, value)
            
            # Label
            canvas.setFont("Helvetica", 12)
            canvas.setFillColor(InfographicColors.CHARCOAL)
            label_width = canvas.stringWidth(label, "Helvetica", 12)
            canvas.drawString(center_x - label_width/2, self.height - 180, label)
    
    def _draw_gauge_chart(self, canvas, x, y, percentage, color):
        """Draw a semi-circular gauge"""
        canvas.setStrokeColor(InfographicColors.SILVER)
        canvas.setLineWidth(8)
        
        # Background arc
        canvas.arc(x-30, y-30, x+30, y+30, 0, 180, stroke=1, fill=0)
        
        # Progress arc
        canvas.setStrokeColor(color)
        canvas.setLineWidth(8)
        arc_angle = 180 * percentage / 100
        canvas.arc(x-30, y-30, x+30, y+30, 0, arc_angle, stroke=1, fill=0)
        
        # Center indicator
        canvas.setFillColor(color)
        canvas.circle(x, y, 5, fill=1, stroke=0)
    
    def _draw_bar_chart(self, canvas, x, y, percentage, color):
        """Draw a vertical bar chart"""
        bar_height = 60
        bar_width = 20
        
        # Background bar
        canvas.setFillColor(InfographicColors.SILVER)
        canvas.rect(x - bar_width/2, y - bar_height/2, bar_width, bar_height, fill=1, stroke=0)
        
        # Progress bar
        progress_height = bar_height * percentage / 100
        canvas.setFillColor(color)
        canvas.rect(x - bar_width/2, y - bar_height/2, bar_width, progress_height, fill=1, stroke=0)
    
    def _draw_donut_chart(self, canvas, x, y, percentage, color):
        """Draw a donut chart"""
        # Outer circle
        canvas.setFillColor(InfographicColors.SILVER)
        canvas.circle(x, y, 35, fill=1, stroke=0)
        
        # Progress section (simplified as partial circle)
        canvas.setFillColor(color)
        for i in range(int(360 * percentage / 100)):
            angle = math.radians(i - 90)
            px = x + 35 * math.cos(angle)
            py = y + 35 * math.sin(angle)
            canvas.circle(px, py, 2, fill=1, stroke=0)
        
        # Inner circle (donut hole)
        canvas.setFillColor(InfographicColors.SNOW_WHITE)
        canvas.circle(x, y, 20, fill=1, stroke=0)

class ProcessFlowFlowable(Flowable):
    """Modern process flow with arrows and steps"""
    
    def __init__(self, process_steps, width=A4[0], height=200):
        self.process_steps = process_steps
        self.width = width
        self.height = height
    
    def draw(self):
        canvas = self.canv
        
        # Title
        canvas.setFillColor(InfographicColors.CHARCOAL)
        canvas.setFont("Helvetica-Bold", 20)
        canvas.drawString(40, self.height - 30, "Prozess-Flow")
        
        # Calculate step positions
        step_width = (self.width - 120) / len(self.process_steps)
        colors = [InfographicColors.ELECTRIC_BLUE, InfographicColors.NEON_GREEN, 
                 InfographicColors.CORAL_RED, InfographicColors.GOLDEN_YELLOW]
        
        for i, (title, description) in enumerate(self.process_steps):
            x = 60 + i * step_width
            center_x = x + step_width / 2
            step_y = self.height - 100
            
            # Step circle
            canvas.setFillColor(colors[i % len(colors)])
            canvas.circle(center_x, step_y, 25, fill=1, stroke=0)
            
            # Step number
            canvas.setFillColor(white)
            canvas.setFont("Helvetica-Bold", 16)
            num_width = canvas.stringWidth(str(i+1), "Helvetica-Bold", 16)
            canvas.drawString(center_x - num_width/2, step_y - 8, str(i+1))
            
            # Arrow to next step
            if i < len(self.process_steps) - 1:
                arrow_start_x = center_x + 25
                arrow_end_x = 60 + (i+1) * step_width + step_width / 2 - 25
                self._draw_arrow(canvas, arrow_start_x, step_y, arrow_end_x, step_y, colors[i % len(colors)])
            
            # Title
            canvas.setFillColor(InfographicColors.CHARCOAL)
            canvas.setFont("Helvetica-Bold", 12)
            title_width = canvas.stringWidth(title, "Helvetica-Bold", 12)
            canvas.drawString(center_x - title_width/2, step_y - 50, title)
            
            # Description
            canvas.setFont("Helvetica", 9)
            canvas.setFillColor(InfographicColors.CHARCOAL)
            
            # Text wrapping for description
            max_width = step_width - 20
            words = description.split()
            lines = []
            current_line = []
            
            for word in words:
                current_line.append(word)
                line_text = " ".join(current_line)
                if canvas.stringWidth(line_text, "Helvetica", 9) > max_width:
                    if len(current_line) > 1:
                        current_line.pop()
                        lines.append(" ".join(current_line))
                        current_line = [word]
                    else:
                        lines.append(word)
                        current_line = []
            
            if current_line:
                lines.append(" ".join(current_line))
            
            for j, line in enumerate(lines[:3]):
                line_width = canvas.stringWidth(line, "Helvetica", 9)
                canvas.drawString(center_x - line_width/2, step_y - 70 - j*10, line)
    
    def _draw_arrow(self, canvas, x1, y1, x2, y2, color):
        """Draw an arrow between two points"""
        canvas.setStrokeColor(color)
        canvas.setLineWidth(3)
        canvas.line(x1, y1, x2, y2)
        
        # Arrow head
        canvas.setFillColor(color)
        arrow_size = 8
        canvas.beginPath()
        canvas.moveTo(x2, y2)
        canvas.lineTo(x2 - arrow_size, y2 + arrow_size/2)
        canvas.lineTo(x2 - arrow_size, y2 - arrow_size/2)
        canvas.closePath()
        canvas.fillPath()

class FeatureShowcaseFlowable(Flowable):
    """Showcase features with modern card design"""
    
    def __init__(self, features, width=A4[0], height=280):
        self.features = features
        self.width = width
        self.height = height
    
    def draw(self):
        canvas = self.canv
        
        # Title
        canvas.setFillColor(InfographicColors.CHARCOAL)
        canvas.setFont("Helvetica-Bold", 20)
        canvas.drawString(40, self.height - 30, "Feature Highlights")
        
        # Grid layout
        cols = 3
        rows = 2
        
        card_width = (self.width - 120) / cols
        card_height = (self.height - 80) / rows
        
        colors = [InfographicColors.ELECTRIC_BLUE, InfographicColors.NEON_GREEN, 
                 InfographicColors.CORAL_RED, InfographicColors.GOLDEN_YELLOW,
                 InfographicColors.DEEP_PURPLE, InfographicColors.CHARCOAL]
        
        for i, (title, description, icon_type) in enumerate(self.features[:6]):
            row = i // cols
            col = i % cols
            
            x = 60 + col * card_width
            y = self.height - 80 - (row + 1) * card_height
            
            # Card background with gradient effect
            canvas.setFillColor(colors[i])
            canvas.setFillAlpha(0.1)
            canvas.roundRect(x, y, card_width - 15, card_height - 15, 15, fill=1, stroke=0)
            
            # Card border
            canvas.setFillAlpha(1.0)
            canvas.setStrokeColor(colors[i])
            canvas.setLineWidth(2)
            canvas.roundRect(x, y, card_width - 15, card_height - 15, 15, fill=0, stroke=1)
            
            # Icon section
            icon_x = x + 15
            icon_y = y + card_height - 45
            
            canvas.setFillColor(colors[i])
            canvas.roundRect(icon_x, icon_y - 15, 40, 30, 5, fill=1, stroke=0)
            
            # Simple geometric icon
            canvas.setFillColor(white)
            if icon_type == "shield":
                # Shield
                canvas.beginPath()
                canvas.moveTo(icon_x + 20, icon_y + 10)
                canvas.lineTo(icon_x + 10, icon_y)
                canvas.lineTo(icon_x + 10, icon_y - 10)
                canvas.lineTo(icon_x + 20, icon_y - 15)
                canvas.lineTo(icon_x + 30, icon_y - 10)
                canvas.lineTo(icon_x + 30, icon_y)
                canvas.closePath()
                canvas.fillPath()
            elif icon_type == "cloud":
                # Cloud
                canvas.circle(icon_x + 15, icon_y, 8, fill=1, stroke=0)
                canvas.circle(icon_x + 25, icon_y, 6, fill=1, stroke=0)
                canvas.circle(icon_x + 20, icon_y + 5, 10, fill=1, stroke=0)
            else:
                # Default: diamond
                canvas.beginPath()
                canvas.moveTo(icon_x + 20, icon_y + 10)
                canvas.lineTo(icon_x + 10, icon_y)
                canvas.lineTo(icon_x + 20, icon_y - 10)
                canvas.lineTo(icon_x + 30, icon_y)
                canvas.closePath()
                canvas.fillPath()
            
            # Title
            canvas.setFillColor(InfographicColors.CHARCOAL)
            canvas.setFont("Helvetica-Bold", 12)
            canvas.drawString(x + 15, y + card_height - 70, title)
            
            # Description
            canvas.setFont("Helvetica", 9)
            max_width = card_width - 40
            words = description.split()
            lines = []
            current_line = []
            
            for word in words:
                current_line.append(word)
                line_text = " ".join(current_line)
                if canvas.stringWidth(line_text, "Helvetica", 9) > max_width:
                    if len(current_line) > 1:
                        current_line.pop()
                        lines.append(" ".join(current_line))
                        current_line = [word]
                    else:
                        lines.append(word)
                        current_line = []
            
            if current_line:
                lines.append(" ".join(current_line))
            
            for j, line in enumerate(lines[:3]):
                canvas.drawString(x + 15, y + card_height - 90 - j*10, line)

class BrandedFooterFlowable(Flowable):
    """Professional footer with contact information"""
    
    def __init__(self, width=A4[0], height=80):
        self.width = width
        self.height = height
    
    def draw(self):
        canvas = self.canv
        
        # Background
        canvas.setFillColor(InfographicColors.CHARCOAL)
        canvas.rect(0, 0, self.width, self.height, fill=1, stroke=0)
        
        # Accent stripe
        canvas.setFillColor(InfographicColors.ELECTRIC_BLUE)
        canvas.rect(0, self.height - 8, self.width, 8, fill=1, stroke=0)
        
        # Company logo area
        canvas.setFillColor(InfographicColors.ELECTRIC_BLUE)
        canvas.circle(50, self.height - 40, 20, fill=1, stroke=0)
        
        canvas.setFillColor(white)
        canvas.setFont("Helvetica-Bold", 14)
        canvas.drawString(40, self.height - 45, "SW")
        
        # Company name
        canvas.setFillColor(white)
        canvas.setFont("Helvetica-Bold", 16)
        canvas.drawString(80, self.height - 35, "ScaleWeb IT Solutions")
        
        canvas.setFont("Helvetica", 11)
        canvas.drawString(80, self.height - 55, "Ihre Experten für IT-Sicherheit und Cloud-Lösungen")
        
        # Contact information
        canvas.setFont("Helvetica", 10)
        contact_info = "📧 info@scaleweb.de | 🌐 www.scaleweb.de | 📞 +49 (0) 123 456789"
        contact_width = canvas.stringWidth(contact_info, "Helvetica", 10)
        canvas.drawString(self.width - contact_width - 40, self.height - 45, contact_info)

# Content definitions for new approach
INFOGRAPHIC_CONTENT = {
    "acmp": {
        "title": "ACMP Security Platform",
        "tagline": "Advanced Cyber Management & Protection",
        "metrics": [
            ("Threat Detection", "99.8%", "gauge"),
            ("Response Time", "4min", "bar"),
            ("Uptime", "99.99%", "donut"),
            ("Compliance", "100%", "gauge")
        ],
        "process": [
            ("Monitor", "Kontinuierliche Überwachung aller Netzwerkaktivitäten"),
            ("Analyze", "KI-basierte Analyse von Bedrohungsmustern"),
            ("Alert", "Sofortige Benachrichtigung bei kritischen Ereignissen"),
            ("Respond", "Automatisierte Gegenmaßnahmen und Eindämmung")
        ],
        "features": [
            ("AI Threat Detection", "Machine Learning für präzise Bedrohungserkennung", "shield"),
            ("Real-time Monitoring", "24/7 Überwachung kritischer Systeme", "eye"),
            ("Automated Response", "Sofortige automatisierte Reaktion auf Incidents", "bolt"),
            ("Compliance Reports", "Detaillierte Berichte für Audit-Zwecke", "document"),
            ("Risk Assessment", "Kontinuierliche Bewertung der Sicherheitslage", "chart"),
            ("Incident Management", "Strukturierte Behandlung von Sicherheitsvorfällen", "clipboard")
        ]
    },
    "arctic-wolf": {
        "title": "Arctic Wolf MDR",
        "tagline": "Managed Detection & Response Excellence",
        "metrics": [
            ("Detection Rate", "99.9%", "gauge"),
            ("MTTR", "8min", "bar"),
            ("SOC Coverage", "24/7", "donut"),
            ("Incidents", "2500+", "gauge")
        ],
        "process": [
            ("Deploy", "Sensor-Installation und Baseline-Erstellung"),
            ("Hunt", "Proaktive Suche nach versteckten Bedrohungen"),
            ("Investigate", "Forensische Analyse verdächtiger Aktivitäten"),
            ("Remediate", "Schnelle Bereinigung und Wiederherstellung")
        ],
        "features": [
            ("24/7 SOC", "Dedicated Security Operations Center", "shield"),
            ("Threat Hunting", "Proaktive Jagd nach Advanced Threats", "search"),
            ("Digital Forensics", "Detaillierte Incident-Untersuchung", "magnifier"),
            ("Custom Playbooks", "Maßgeschneiderte Response-Strategien", "book"),
            ("Executive Reports", "Management-taugliche Sicherheitsberichte", "chart"),
            ("Compliance Support", "Unterstützung für Regulatory Requirements", "check")
        ]
    },
    "hornetsecurity": {
        "title": "Hornetsecurity Suite",
        "tagline": "Cloud Security & Data Protection",
        "metrics": [
            ("Email Security", "99.99%", "gauge"),
            ("Backup Success", "100%", "bar"),
            ("Recovery Time", "30min", "donut"),
            ("Data Protection", "256bit", "gauge")
        ],
        "process": [
            ("Secure", "Schutz vor E-Mail-Bedrohungen und Malware"),
            ("Backup", "Automatische Datensicherung in der Cloud"),
            ("Monitor", "Kontinuierliche Überwachung der Systeme"),
            ("Restore", "Schnelle Wiederherstellung bei Datenverlust")
        ],
        "features": [
            ("Advanced Email Security", "Schutz vor Phishing und Malware", "shield"),
            ("Cloud Backup", "Sichere Datensicherung mit Versionierung", "cloud"),
            ("Disaster Recovery", "Komplette Business Continuity Lösung", "refresh"),
            ("Compliance Archive", "Rechtskonforme E-Mail-Archivierung", "archive"),
            ("Web Protection", "Schutz vor webbasierten Bedrohungen", "globe"),
            ("Mobile Security", "Sicherheit für mobile Endgeräte", "smartphone")
        ]
    },
    "microsoft": {
        "title": "Microsoft 365 Enterprise",
        "tagline": "Cloud Productivity & Advanced Security",
        "metrics": [
            ("Productivity", "+45%", "gauge"),
            ("Security Score", "95%", "bar"),
            ("Collaboration", "100%", "donut"),
            ("Uptime", "99.9%", "gauge")
        ],
        "process": [
            ("Migrate", "Seamless Migration zu Microsoft 365 Cloud"),
            ("Integrate", "Integration bestehender Systeme und Daten"),
            ("Secure", "Implementation fortgeschrittener Sicherheitsfeatures"),
            ("Optimize", "Kontinuierliche Optimierung und Schulungen")
        ],
        "features": [
            ("Teams Collaboration", "Moderne Zusammenarbeit mit Video und Chat", "users"),
            ("Advanced Threat Protection", "Schutz vor Zero-Day-Attacken", "shield"),
            ("OneDrive Business", "Sichere Cloud-Speicherlösung", "cloud"),
            ("Exchange Online", "Enterprise E-Mail mit Anti-Spam", "mail"),
            ("SharePoint Online", "Dokumentenmanagement und Workflows", "folder"),
            ("Power Platform", "Low-Code Entwicklungsplattform", "code")
        ]
    }
}

def create_infographic_pdf(content_key, filename):
    """Create an infographic-style PDF with modern visual elements"""
    
    if content_key not in INFOGRAPHIC_CONTENT:
        print(f"Content key '{content_key}' not found!")
        return
    
    content = INFOGRAPHIC_CONTENT[content_key]
    
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
    
    # Hero Section
    story.append(HeroSectionFlowable(content["title"], content["tagline"]))
    story.append(Spacer(1, 20))
    
    # Metrics Visualization
    story.append(MetricsVisualizationFlowable(content["metrics"]))
    story.append(Spacer(1, 15))
    
    # Process Flow
    story.append(ProcessFlowFlowable(content["process"]))
    story.append(Spacer(1, 15))
    
    # Feature Showcase
    story.append(FeatureShowcaseFlowable(content["features"]))
    story.append(Spacer(1, 20))
    
    # Footer
    story.append(BrandedFooterFlowable())
    
    # Build PDF
    doc.build(story)
    print(f"✅ Infographic PDF created: {filename}")

def main():
    """Generate all infographic PDFs"""
    
    # Create output directory
    output_dir = "pdfs_infographic"
    os.makedirs(output_dir, exist_ok=True)
    
    print("📊 Generating Infographic-Style PDFs...")
    print("=" * 50)
    
    # Generate PDFs for each service
    services = ["acmp", "arctic-wolf", "hornetsecurity", "microsoft"]
    
    for service in services:
        filename = os.path.join(output_dir, f"{service}_infographic.pdf")
        create_infographic_pdf(service, filename)
    
    print("=" * 50)
    print("✅ All infographic PDFs generated successfully!")
    print(f"📁 Output directory: {os.path.abspath(output_dir)}")

if __name__ == "__main__":
    main()
