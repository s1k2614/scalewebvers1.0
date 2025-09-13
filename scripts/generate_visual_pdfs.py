#!/usr/bin/env python3
"""
Visual PDF Generator - Anschauliche PDFs mit Website-Farben und echten visuellen Elementen
"""

import os
from reportlab.lib.pagesizes import A4
from reportlab.platypus import SimpleDocTemplate, Spacer
from reportlab.platypus.flowables import Flowable
from reportlab.lib.colors import Color, white, black
from reportlab.lib.units import cm, mm
import math

# Website Color Palette - Direkt von der Website übernommen
class WebsiteColors:
    # Hauptfarben
    EMERALD = Color(0.059, 0.729, 0.388)  # from-emerald-500 #10B981
    TEAL = Color(0.078, 0.682, 0.686)     # to-teal-500 #14B8A6
    BLUE = Color(0.145, 0.424, 0.969)     # from-blue-600 #2563EB
    INDIGO = Color(0.373, 0.224, 0.898)   # to-indigo-600 #5F56E8
    PURPLE = Color(0.557, 0.267, 0.678)   # from-purple-600 #9333EA
    PINK = Color(0.925, 0.392, 0.675)     # to-pink-600 #EC4899
    GREEN = Color(0.047, 0.569, 0.235)    # from-green-600 #0C9142
    CYAN = Color(0.024, 0.733, 0.855)     # from-cyan-500 #06BBDA
    ROSE = Color(0.957, 0.263, 0.404)     # from-rose-500 #F43F5E
    AMBER = Color(0.984, 0.659, 0.039)    # from-amber-500 #F59E0B
    ORANGE = Color(0.976, 0.494, 0.047)   # to-orange-500 #F97316
    YELLOW = Color(0.933, 0.800, 0.051)   # from-yellow-500 #EAB308
    
    # Basis Farben
    WHITE = Color(1.0, 1.0, 1.0)
    BLACK = Color(0.0, 0.0, 0.0)
    GRAY_LIGHT = Color(0.918, 0.933, 0.949)  # from-gray-50 #F9FAFB
    GRAY_DARK = Color(0.282, 0.325, 0.388)   # from-gray-600 #4B5563

class HeroHeaderFlowable(Flowable):
    """Anschauliche Hero-Section mit Gradienten und Icons"""
    
    def __init__(self, title, subtitle, service_type, width=A4[0], height=180):
        self.title = title
        self.subtitle = subtitle
        self.service_type = service_type
        self.width = width
        self.height = height
    
    def draw(self):
        canvas = self.canv
        
        # Service-spezifische Farben
        colors = {
            "acmp": (WebsiteColors.EMERALD, WebsiteColors.TEAL),
            "arctic-wolf": (WebsiteColors.CYAN, WebsiteColors.BLUE),
            "hornetsecurity": (WebsiteColors.AMBER, WebsiteColors.ORANGE),
            "microsoft": (WebsiteColors.BLUE, WebsiteColors.INDIGO)
        }
        
        color1, color2 = colors.get(self.service_type, (WebsiteColors.BLUE, WebsiteColors.INDIGO))
        
        # Gradient Background (simuliert mit mehreren Rechtecken)
        steps = 20
        for i in range(steps):
            progress = i / steps
            # Gradient von color1 zu color2
            r = color1.red + (color2.red - color1.red) * progress
            g = color1.green + (color2.green - color1.green) * progress
            b = color1.blue + (color2.blue - color1.blue) * progress
            
            gradient_color = Color(r, g, b)
            canvas.setFillColor(gradient_color)
            
            rect_height = self.height / steps
            canvas.rect(0, i * rect_height, self.width, rect_height, fill=1, stroke=0)
        
        # Decorative circles (floating elements)
        canvas.setFillColor(Color(1, 1, 1, 0.1))  # Semi-transparent white
        
        # Large floating circle
        canvas.circle(self.width - 100, self.height - 50, 60, fill=1, stroke=0)
        
        # Medium floating circles
        canvas.circle(80, 40, 30, fill=1, stroke=0)
        canvas.circle(self.width - 150, 30, 25, fill=1, stroke=0)
        
        # Small floating circles
        canvas.circle(200, self.height - 30, 15, fill=1, stroke=0)
        canvas.circle(self.width - 50, 100, 12, fill=1, stroke=0)
        
        # Icon/Logo Area (service-specific)
        icon_x = 40
        icon_y = self.height - 80
        icon_size = 50
        
        # Service Icon Background
        canvas.setFillColor(WebsiteColors.WHITE)
        canvas.rect(icon_x, icon_y, icon_size, icon_size, fill=1, stroke=0)
        
        # Icon border
        canvas.setStrokeColor(color2)
        canvas.setLineWidth(3)
        canvas.rect(icon_x, icon_y, icon_size, icon_size, fill=0, stroke=1)
        
        # Service Icon (simplified representation)
        canvas.setFillColor(color1)
        if self.service_type == "acmp":
            # Shield icon
            canvas.circle(icon_x + 25, icon_y + 25, 15, fill=1, stroke=0)
        elif self.service_type == "arctic-wolf":
            # Wolf paw icon
            canvas.rect(icon_x + 15, icon_y + 15, 20, 20, fill=1, stroke=0)
        elif self.service_type == "hornetsecurity":
            # Hornet icon
            canvas.circle(icon_x + 25, icon_y + 25, 12, fill=1, stroke=0)
            canvas.rect(icon_x + 20, icon_y + 35, 10, 8, fill=1, stroke=0)
        else:  # microsoft
            # Microsoft squares
            canvas.rect(icon_x + 10, icon_y + 10, 12, 12, fill=1, stroke=0)
            canvas.rect(icon_x + 28, icon_y + 10, 12, 12, fill=1, stroke=0)
            canvas.rect(icon_x + 10, icon_y + 28, 12, 12, fill=1, stroke=0)
            canvas.rect(icon_x + 28, icon_y + 28, 12, 12, fill=1, stroke=0)
        
        # Title
        canvas.setFillColor(WebsiteColors.WHITE)
        canvas.setFont("Helvetica-Bold", 36)
        canvas.drawString(icon_x + 70, self.height - 50, self.title)
        
        # Subtitle
        canvas.setFont("Helvetica", 16)
        canvas.setFillColor(Color(1, 1, 1, 0.9))  # Slightly transparent white
        canvas.drawString(icon_x + 70, self.height - 75, self.subtitle)
        
        # Status Badge
        badge_x = self.width - 200
        badge_y = self.height - 40
        canvas.setFillColor(WebsiteColors.WHITE)
        canvas.rect(badge_x, badge_y, 120, 25, fill=1, stroke=0)
        
        # Badge border with rounded effect
        canvas.setStrokeColor(color2)
        canvas.setLineWidth(2)
        canvas.rect(badge_x, badge_y, 120, 25, fill=0, stroke=1)
        
        # Status dot
        canvas.setFillColor(WebsiteColors.GREEN)
        canvas.circle(badge_x + 15, badge_y + 12, 6, fill=1, stroke=0)
        
        # Status text
        canvas.setFillColor(WebsiteColors.BLACK)
        canvas.setFont("Helvetica-Bold", 10)
        canvas.drawString(badge_x + 30, badge_y + 8, "FULLY OPERATIONAL")

class VisualStatsFlowable(Flowable):
    """Visuell ansprechende Statistiken mit Charts und Graphs"""
    
    def __init__(self, stats_data, service_type, width=A4[0], height=200):
        self.stats_data = stats_data
        self.service_type = service_type
        self.width = width
        self.height = height
    
    def draw(self):
        canvas = self.canv
        
        # Background mit subtiler Textur
        canvas.setFillColor(WebsiteColors.GRAY_LIGHT)
        canvas.rect(0, 0, self.width, self.height, fill=1, stroke=0)
        
        # Title Section
        canvas.setFillColor(WebsiteColors.GRAY_DARK)
        canvas.setFont("Helvetica-Bold", 20)
        canvas.drawString(40, self.height - 30, "Performance Dashboard")
        
        # Service-spezifische Farben
        colors = {
            "acmp": [WebsiteColors.EMERALD, WebsiteColors.TEAL, WebsiteColors.GREEN],
            "arctic-wolf": [WebsiteColors.CYAN, WebsiteColors.BLUE, WebsiteColors.INDIGO],
            "hornetsecurity": [WebsiteColors.AMBER, WebsiteColors.ORANGE, WebsiteColors.YELLOW],
            "microsoft": [WebsiteColors.BLUE, WebsiteColors.INDIGO, WebsiteColors.PURPLE]
        }
        
        service_colors = colors.get(self.service_type, colors["microsoft"])
        
        # Chart Area
        chart_y = self.height - 160
        chart_height = 100
        
        # Bar Charts für jede Statistik
        bar_width = (self.width - 100) / len(self.stats_data)
        
        for i, (label, value, percentage) in enumerate(self.stats_data):
            x = 50 + i * bar_width
            
            # Bar Background
            canvas.setFillColor(Color(0.9, 0.9, 0.9))
            canvas.rect(x + 20, chart_y, bar_width - 40, chart_height, fill=1, stroke=0)
            
            # Actual Bar (height based on percentage)
            bar_height = (percentage / 100) * chart_height
            canvas.setFillColor(service_colors[i % len(service_colors)])
            canvas.rect(x + 20, chart_y, bar_width - 40, bar_height, fill=1, stroke=0)
            
            # Gloss effect on top of bar
            canvas.setFillColor(Color(1, 1, 1, 0.3))
            canvas.rect(x + 20, chart_y + bar_height - 10, bar_width - 40, 10, fill=1, stroke=0)
            
            # Value Label on Bar
            canvas.setFillColor(WebsiteColors.WHITE)
            canvas.setFont("Helvetica-Bold", 14)
            value_width = canvas.stringWidth(value, "Helvetica-Bold", 14)
            canvas.drawString(x + (bar_width - value_width) / 2, chart_y + bar_height - 25, value)
            
            # Percentage at top
            canvas.setFillColor(WebsiteColors.BLACK)
            canvas.setFont("Helvetica", 10)
            perc_text = f"{percentage}%"
            perc_width = canvas.stringWidth(perc_text, "Helvetica", 10)
            canvas.drawString(x + (bar_width - perc_width) / 2, chart_y + chart_height + 10, perc_text)
            
            # Label at bottom
            canvas.setFillColor(WebsiteColors.GRAY_DARK)
            canvas.setFont("Helvetica-Bold", 9)
            # Text wrapping für lange Labels
            words = label.split()
            if len(words) > 2:
                line1 = " ".join(words[:2])
                line2 = " ".join(words[2:])
                label1_width = canvas.stringWidth(line1, "Helvetica-Bold", 9)
                label2_width = canvas.stringWidth(line2, "Helvetica-Bold", 9)
                canvas.drawString(x + (bar_width - label1_width) / 2, chart_y - 20, line1)
                canvas.drawString(x + (bar_width - label2_width) / 2, chart_y - 32, line2)
            else:
                label_width = canvas.stringWidth(label, "Helvetica-Bold", 9)
                canvas.drawString(x + (bar_width - label_width) / 2, chart_y - 20, label)

class ProcessVisualizationFlowable(Flowable):
    """Visueller Prozessablauf mit Pfeilen und Icons"""
    
    def __init__(self, process_steps, service_type, width=A4[0], height=160):
        self.process_steps = process_steps
        self.service_type = service_type
        self.width = width
        self.height = height
    
    def draw(self):
        canvas = self.canv
        
        # Background
        canvas.setFillColor(WebsiteColors.WHITE)
        canvas.rect(0, 0, self.width, self.height, fill=1, stroke=0)
        
        # Subtle shadow at bottom
        canvas.setFillColor(Color(0.9, 0.9, 0.9))
        canvas.rect(0, 0, self.width, 5, fill=1, stroke=0)
        
        # Title
        canvas.setFillColor(WebsiteColors.GRAY_DARK)
        canvas.setFont("Helvetica-Bold", 18)
        canvas.drawString(40, self.height - 25, "Workflow Process")
        
        # Service-spezifische Farben
        colors = {
            "acmp": [WebsiteColors.EMERALD, WebsiteColors.TEAL, WebsiteColors.GREEN],
            "arctic-wolf": [WebsiteColors.CYAN, WebsiteColors.BLUE, WebsiteColors.INDIGO],
            "hornetsecurity": [WebsiteColors.AMBER, WebsiteColors.ORANGE, WebsiteColors.YELLOW],
            "microsoft": [WebsiteColors.BLUE, WebsiteColors.INDIGO, WebsiteColors.PURPLE]
        }
        
        service_colors = colors.get(self.service_type, colors["microsoft"])
        
        # Process line
        process_y = self.height - 80
        line_start = 80
        line_end = self.width - 80
        
        # Main process line
        canvas.setStrokeColor(WebsiteColors.GRAY_DARK)
        canvas.setLineWidth(3)
        canvas.line(line_start, process_y, line_end, process_y)
        
        # Process steps
        step_width = (line_end - line_start) / (len(self.process_steps) - 1)
        
        for i, (step_name, status) in enumerate(self.process_steps):
            x = line_start + i * step_width
            
            # Step Circle Background (larger for visual impact)
            canvas.setFillColor(WebsiteColors.WHITE)
            canvas.circle(x, process_y, 25, fill=1, stroke=0)
            
            # Step Circle Border
            canvas.setStrokeColor(service_colors[i % len(service_colors)])
            canvas.setLineWidth(4)
            canvas.circle(x, process_y, 25, fill=0, stroke=1)
            
            # Step Circle Fill
            canvas.setFillColor(service_colors[i % len(service_colors)])
            canvas.circle(x, process_y, 20, fill=1, stroke=0)
            
            # Step Number
            canvas.setFillColor(WebsiteColors.WHITE)
            canvas.setFont("Helvetica-Bold", 16)
            num_width = canvas.stringWidth(str(i+1), "Helvetica-Bold", 16)
            canvas.drawString(x - num_width/2, process_y - 8, str(i+1))
            
            # Arrow to next step (except for last step)
            if i < len(self.process_steps) - 1:
                arrow_start = x + 25
                arrow_end = x + step_width - 25
                
                # Arrow line
                canvas.setStrokeColor(service_colors[i % len(service_colors)])
                canvas.setLineWidth(2)
                canvas.line(arrow_start, process_y, arrow_end, process_y)
                
                # Arrow head
                canvas.line(arrow_end - 10, process_y - 5, arrow_end, process_y)
                canvas.line(arrow_end - 10, process_y + 5, arrow_end, process_y)
            
            # Step title
            canvas.setFillColor(WebsiteColors.BLACK)
            canvas.setFont("Helvetica-Bold", 12)
            title_width = canvas.stringWidth(step_name, "Helvetica-Bold", 12)
            canvas.drawString(x - title_width/2, process_y - 50, step_name)
            
            # Status
            canvas.setFont("Helvetica", 10)
            canvas.setFillColor(service_colors[i % len(service_colors)])
            status_width = canvas.stringWidth(status, "Helvetica", 10)
            canvas.drawString(x - status_width/2, process_y - 65, status)

class FeatureGridFlowable(Flowable):
    """Anschauliches Feature-Grid mit Icons und visuellen Elementen"""
    
    def __init__(self, features, service_type, width=A4[0], height=280):
        self.features = features
        self.service_type = service_type
        self.width = width
        self.height = height
    
    def draw(self):
        canvas = self.canv
        
        # Background
        canvas.setFillColor(WebsiteColors.GRAY_LIGHT)
        canvas.rect(0, 0, self.width, self.height, fill=1, stroke=0)
        
        # Title
        canvas.setFillColor(WebsiteColors.GRAY_DARK)
        canvas.setFont("Helvetica-Bold", 20)
        canvas.drawString(40, self.height - 30, "Key Features & Benefits")
        
        # Service-spezifische Farben
        colors = {
            "acmp": [WebsiteColors.EMERALD, WebsiteColors.TEAL, WebsiteColors.GREEN],
            "arctic-wolf": [WebsiteColors.CYAN, WebsiteColors.BLUE, WebsiteColors.INDIGO],
            "hornetsecurity": [WebsiteColors.AMBER, WebsiteColors.ORANGE, WebsiteColors.YELLOW],
            "microsoft": [WebsiteColors.BLUE, WebsiteColors.INDIGO, WebsiteColors.PURPLE]
        }
        
        service_colors = colors.get(self.service_type, colors["microsoft"])
        
        # Grid Layout (2x3)
        cols = 2
        rows = 3
        
        card_width = (self.width - 120) / cols
        card_height = (self.height - 80) / rows
        
        for i, (title, description) in enumerate(self.features[:6]):
            if i >= 6:
                break
                
            row = i // cols
            col = i % cols
            
            x = 60 + col * card_width
            y = self.height - 80 - (row + 1) * card_height
            
            card_w = card_width - 20
            card_h = card_height - 15
            
            # Card Shadow
            canvas.setFillColor(Color(0.8, 0.8, 0.8))
            canvas.rect(x + 5, y - 5, card_w, card_h, fill=1, stroke=0)
            
            # Main Card
            canvas.setFillColor(WebsiteColors.WHITE)
            canvas.rect(x, y, card_w, card_h, fill=1, stroke=0)
            
            # Card Border
            canvas.setStrokeColor(service_colors[i % len(service_colors)])
            canvas.setLineWidth(2)
            canvas.rect(x, y, card_w, card_h, fill=0, stroke=1)
            
            # Icon Area
            icon_size = 40
            icon_x = x + 15
            icon_y = y + card_h - icon_size - 15
            
            # Icon Background
            canvas.setFillColor(service_colors[i % len(service_colors)])
            canvas.circle(icon_x + icon_size/2, icon_y + icon_size/2, icon_size/2, fill=1, stroke=0)
            
            # Simple Icon (geometric shapes)
            canvas.setFillColor(WebsiteColors.WHITE)
            if i % 4 == 0:
                # Shield
                canvas.rect(icon_x + 10, icon_y + 8, 20, 24, fill=1, stroke=0)
            elif i % 4 == 1:
                # Gear
                canvas.circle(icon_x + icon_size/2, icon_y + icon_size/2, 12, fill=1, stroke=0)
                canvas.circle(icon_x + icon_size/2, icon_y + icon_size/2, 6, fill=0, stroke=1)
            elif i % 4 == 2:
                # Chart
                canvas.rect(icon_x + 8, icon_y + 20, 8, 12, fill=1, stroke=0)
                canvas.rect(icon_x + 18, icon_y + 15, 8, 17, fill=1, stroke=0)
                canvas.rect(icon_x + 28, icon_y + 10, 8, 22, fill=1, stroke=0)
            else:
                # Lock
                canvas.rect(icon_x + 12, icon_y + 18, 16, 14, fill=1, stroke=0)
                canvas.circle(icon_x + 20, icon_y + 22, 6, fill=0, stroke=1)
            
            # Title
            canvas.setFillColor(WebsiteColors.BLACK)
            canvas.setFont("Helvetica-Bold", 13)
            canvas.drawString(x + 15, icon_y - 15, title)
            
            # Description (mit Zeilenumbruch)
            canvas.setFont("Helvetica", 9)
            canvas.setFillColor(WebsiteColors.GRAY_DARK)
            
            # Text wrapping
            words = description.split()
            lines = []
            current_line = []
            line_width = card_w - 30
            
            for word in words:
                current_line.append(word)
                test_line = " ".join(current_line)
                if canvas.stringWidth(test_line, "Helvetica", 9) > line_width:
                    if len(current_line) > 1:
                        current_line.pop()
                        lines.append(" ".join(current_line))
                        current_line = [word]
                    else:
                        lines.append(word)
                        current_line = []
            
            if current_line:
                lines.append(" ".join(current_line))
            
            # Nur die ersten 3-4 Zeilen anzeigen
            for j, line in enumerate(lines[:4]):
                canvas.drawString(x + 15, icon_y - 35 - j * 12, line)
            
            # Feature Status Indicator
            status_x = x + card_w - 30
            status_y = y + 15
            
            canvas.setFillColor(WebsiteColors.GREEN)
            canvas.circle(status_x, status_y, 6, fill=1, stroke=0)
            
            canvas.setFillColor(WebsiteColors.WHITE)
            canvas.setFont("Helvetica-Bold", 8)
            canvas.drawString(status_x - 2, status_y - 3, "✓")

class CompanyFooterFlowable(Flowable):
    """Anschaulicher Footer mit Firmenlogo und Design-Elementen"""
    
    def __init__(self, service_type, width=A4[0], height=100):
        self.service_type = service_type
        self.width = width
        self.height = height
    
    def draw(self):
        canvas = self.canv
        
        # Service-spezifische Farben
        colors = {
            "acmp": (WebsiteColors.EMERALD, WebsiteColors.TEAL),
            "arctic-wolf": (WebsiteColors.CYAN, WebsiteColors.BLUE),
            "hornetsecurity": (WebsiteColors.AMBER, WebsiteColors.ORANGE),
            "microsoft": (WebsiteColors.BLUE, WebsiteColors.INDIGO)
        }
        
        color1, color2 = colors.get(self.service_type, colors["microsoft"])
        
        # Footer Background Gradient
        steps = 10
        for i in range(steps):
            progress = i / steps
            r = color1.red + (color2.red - color1.red) * progress
            g = color1.green + (color2.green - color1.green) * progress
            b = color1.blue + (color2.blue - color1.blue) * progress
            
            gradient_color = Color(r, g, b)
            canvas.setFillColor(gradient_color)
            
            rect_height = self.height / steps
            canvas.rect(0, i * rect_height, self.width, rect_height, fill=1, stroke=0)
        
        # Decorative Elements
        canvas.setFillColor(Color(1, 1, 1, 0.1))
        canvas.circle(50, 50, 30, fill=1, stroke=0)
        canvas.circle(self.width - 50, 70, 25, fill=1, stroke=0)
        
        # Company Logo Area
        logo_size = 60
        logo_x = 40
        logo_y = self.height - logo_size - 20
        
        # Logo Background
        canvas.setFillColor(WebsiteColors.WHITE)
        canvas.rect(logo_x, logo_y, logo_size, logo_size, fill=1, stroke=0)
        
        # Logo Border
        canvas.setStrokeColor(color2)
        canvas.setLineWidth(3)
        canvas.rect(logo_x, logo_y, logo_size, logo_size, fill=0, stroke=1)
        
        # Logo Content (SW)
        canvas.setFillColor(color1)
        canvas.setFont("Helvetica-Bold", 24)
        canvas.drawString(logo_x + 12, logo_y + 20, "SW")
        
        # Company Name
        canvas.setFillColor(WebsiteColors.WHITE)
        canvas.setFont("Helvetica-Bold", 18)
        canvas.drawString(logo_x + 80, logo_y + 35, "ScaleWeb IT Solutions")
        
        # Tagline
        canvas.setFont("Helvetica", 12)
        canvas.drawString(logo_x + 80, logo_y + 15, "Enterprise Security & Cloud Infrastructure")
        
        # Contact Info (rechtsbündig)
        contact_x = self.width - 250
        canvas.setFont("Helvetica", 10)
        canvas.drawString(contact_x, logo_y + 45, "info@scaleweb.de")
        canvas.drawString(contact_x, logo_y + 30, "+49 (0) 123 456 789")
        canvas.drawString(contact_x, logo_y + 15, "www.scaleweb.de")

# Verbesserte Content-Daten für anschaulichere PDFs
VISUAL_CONTENT = {
    "acmp": {
        "title": "ACMP Security",
        "subtitle": "Advanced Cyber Management Platform",
        "stats": [
            ("Threat Detection Rate", "99.8%", 99),
            ("Response Time", "< 2min", 95),
            ("System Uptime", "99.99%", 100),
            ("Security Score", "A+", 98)
        ],
        "process": [
            ("Detection", "Active"),
            ("Analysis", "Running"),
            ("Response", "Ready"),
            ("Recovery", "Standby")
        ],
        "features": [
            ("AI-Powered Threat Detection", "Machine learning algorithms continuously monitor and identify potential security threats in real-time"),
            ("24/7 Security Operations Center", "Round-the-clock monitoring by certified security experts ensuring immediate response to incidents"),
            ("Automated Incident Response", "Instant automated response protocols minimize damage and reduce manual intervention requirements"),
            ("Compliance Management", "Comprehensive compliance tracking for GDPR, ISO 27001, and other regulatory requirements"),
            ("Risk Assessment & Scoring", "Continuous security risk evaluation with actionable insights and improvement recommendations"),
            ("Advanced Reporting Suite", "Detailed security reports and dashboards for executive-level decision making")
        ]
    },
    "arctic-wolf": {
        "title": "Arctic Wolf",
        "subtitle": "Managed Detection & Response",
        "stats": [
            ("Detection Rate", "99.9%", 100),
            ("Mean Time to Response", "8min", 92),
            ("SOC Coverage", "24/7", 100),
            ("Threats Neutralized", "2,547", 88)
        ],
        "process": [
            ("Deploy Sensors", "Complete"),
            ("Threat Hunting", "Active"),
            ("Investigation", "Ongoing"),
            ("Remediation", "Ready")
        ],
        "features": [
            ("Dedicated SOC Team", "Elite security analysts provide personalized monitoring and response services for your organization"),
            ("Proactive Threat Hunting", "Advanced hunting techniques identify sophisticated threats before they cause significant damage"),
            ("Digital Forensics & Investigation", "Comprehensive incident investigation and forensic analysis for complete understanding"),
            ("Custom Security Playbooks", "Tailored response procedures designed specifically for your business environment and needs"),
            ("Executive Security Reporting", "Business-focused security insights and recommendations for strategic decision making"),
            ("Regulatory Compliance Support", "Expert assistance with meeting complex regulatory requirements and audit preparations")
        ]
    },
    "hornetsecurity": {
        "title": "Hornetsecurity",
        "subtitle": "Cloud Security & Data Protection",
        "stats": [
            ("Email Protection", "99.99%", 100),
            ("Backup Success Rate", "100%", 100),
            ("Recovery Time Objective", "<1hr", 95),
            ("Data Encryption Level", "256-bit", 100)
        ],
        "process": [
            ("Cloud Migration", "Complete"),
            ("Protection Setup", "Active"),
            ("Backup Running", "Continuous"),
            ("Recovery Available", "Ready")
        ],
        "features": [
            ("Advanced Email Security Gateway", "Multi-layered protection against spam, phishing, malware, and advanced email threats"),
            ("Automated Cloud Backup Service", "Reliable, secure, and automated backup solutions for all your critical business data"),
            ("Business Continuity & Disaster Recovery", "Comprehensive disaster recovery solutions ensuring minimal downtime and data loss"),
            ("Legal Compliance Email Archiving", "Automated email archiving meeting legal requirements and regulatory compliance standards"),
            ("Advanced Web Security Protection", "Complete web filtering and security solutions protecting against online threats"),
            ("Mobile Device Security Management", "Comprehensive mobile device management and security for BYOD environments")
        ]
    },
    "microsoft": {
        "title": "Microsoft 365",
        "subtitle": "Cloud Productivity & Security Suite",
        "stats": [
            ("Productivity Increase", "+42%", 85),
            ("Security Score", "847/1000", 85),
            ("Service Availability", "99.9%", 100),
            ("User Satisfaction", "94%", 94)
        ],
        "process": [
            ("Migration Planning", "Complete"),
            ("System Integration", "Active"),
            ("User Training", "Ongoing"),
            ("Optimization", "Continuous")
        ],
        "features": [
            ("Complete Office 365 Suite", "Full productivity suite including Word, Excel, PowerPoint, and other essential business applications"),
            ("Microsoft Teams Collaboration", "Unified communication platform combining chat, video conferencing, and file collaboration"),
            ("Advanced Threat Protection", "Enterprise-grade security with AI-powered threat detection and response capabilities"),
            ("OneDrive for Business Storage", "Secure cloud storage with advanced sharing controls and real-time collaboration features"),
            ("Exchange Online Email Service", "Professional email hosting with advanced security features and large mailbox capacity"),
            ("SharePoint Online Collaboration", "Modern document management and team collaboration platform with version control")
        ]
    }
}

def create_visual_pdf(content_key, filename):
    """Erstelle ein visuell ansprechendes PDF"""
    
    if content_key not in VISUAL_CONTENT:
        print(f"Content key '{content_key}' not found!")
        return
    
    content = VISUAL_CONTENT[content_key]
    
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
    
    # Hero Header
    story.append(HeroHeaderFlowable(content["title"], content["subtitle"], content_key))
    story.append(Spacer(1, 10))
    
    # Visual Stats
    story.append(VisualStatsFlowable(content["stats"], content_key))
    story.append(Spacer(1, 10))
    
    # Process Visualization
    story.append(ProcessVisualizationFlowable(content["process"], content_key))
    story.append(Spacer(1, 10))
    
    # Feature Grid
    story.append(FeatureGridFlowable(content["features"], content_key))
    story.append(Spacer(1, 10))
    
    # Company Footer
    story.append(CompanyFooterFlowable(content_key))
    
    # Build PDF
    doc.build(story)
    print(f"✅ Visual PDF created: {filename}")

def main():
    """Generate all visual PDFs"""
    
    # Create output directory
    output_dir = "pdfs_visual"
    os.makedirs(output_dir, exist_ok=True)
    
    print("🎨 Generating Visual PDFs with Website Colors...")
    print("=" * 60)
    
    # Generate PDFs for each service
    services = ["acmp", "arctic-wolf", "hornetsecurity", "microsoft"]
    
    for service in services:
        filename = os.path.join(output_dir, f"{service}_visual.pdf")
        create_visual_pdf(service, filename)
    
    print("=" * 60)
    print("✅ All visual PDFs generated successfully!")
    print(f"📁 Output directory: {os.path.abspath(output_dir)}")
    print("\n🎯 Features:")
    print("   • Website color palette used")
    print("   • Visual charts and graphs")
    print("   • Service-specific icons")
    print("   • Gradient backgrounds")
    print("   • Professional layout design")

if __name__ == "__main__":
    main()
