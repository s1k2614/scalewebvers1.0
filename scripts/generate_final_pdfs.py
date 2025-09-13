#!/usr/bin/env python3
"""
Modern PDF Generator - Klar strukturierte und anschauliche PDFs
"""

import os
from reportlab.lib.pagesizes import A4
from reportlab.platypus import SimpleDocTemplate, Spacer, Paragraph
from reportlab.platypus.flowables import Flowable
from reportlab.lib.colors import Color, white, black
from reportlab.lib.units import cm, mm
from reportlab.lib.styles import getSampleStyleSheet
import math

# Modern Color Palette
class ModernColors:
    # Primary Colors
    PRIMARY_BLUE = Color(0.145, 0.424, 0.969)      # #2563EB
    PRIMARY_RED = Color(0.937, 0.224, 0.224)       # #EF4444
    
    # Service Colors (von der Website)
    EMERALD = Color(0.059, 0.729, 0.388)           # #10B981
    TEAL = Color(0.078, 0.682, 0.686)              # #14B8A6
    BLUE = Color(0.145, 0.424, 0.969)              # #2563EB
    INDIGO = Color(0.373, 0.224, 0.898)            # #5F56E8
    PURPLE = Color(0.557, 0.267, 0.678)            # #9333EA
    PINK = Color(0.925, 0.392, 0.675)              # #EC4899
    GREEN = Color(0.047, 0.569, 0.235)             # #0C9142
    CYAN = Color(0.024, 0.733, 0.855)              # #06BBDA
    AMBER = Color(0.984, 0.659, 0.039)             # #F59E0B
    ORANGE = Color(0.976, 0.494, 0.047)            # #F97316
    
    # Neutral Colors
    WHITE = Color(1.0, 1.0, 1.0)
    BLACK = Color(0.0, 0.0, 0.0)
    GRAY_50 = Color(0.980, 0.980, 0.984)           # #FAFAFA
    GRAY_100 = Color(0.961, 0.961, 0.965)          # #F5F5F5
    GRAY_200 = Color(0.898, 0.898, 0.918)          # #E5E5E5
    GRAY_600 = Color(0.282, 0.325, 0.388)          # #4B5563
    GRAY_700 = Color(0.216, 0.255, 0.322)          # #374151
    GRAY_800 = Color(0.133, 0.161, 0.212)          # #1F2937
    GRAY_900 = Color(0.067, 0.082, 0.125)          # #111827

class ModernHeaderFlowable(Flowable):
    """Moderner Header mit klarer Struktur"""
    
    def __init__(self, title, subtitle, service_type, width=A4[0], height=200):
        self.title = title
        self.subtitle = subtitle
        self.service_type = service_type
        self.width = width
        self.height = height
    
    def draw(self):
        canvas = self.canv
        
        # Service-spezifische Farben
        service_colors = {
            "acmp": (ModernColors.EMERALD, ModernColors.TEAL),
            "arctic-wolf": (ModernColors.CYAN, ModernColors.BLUE),
            "hornetsecurity": (ModernColors.AMBER, ModernColors.ORANGE),
            "microsoft": (ModernColors.BLUE, ModernColors.INDIGO)
        }
        
        primary_color, secondary_color = service_colors.get(self.service_type, 
                                                           (ModernColors.PRIMARY_BLUE, ModernColors.PRIMARY_RED))
        
        # Header Background mit Gradient-Effekt
        steps = 30
        for i in range(steps):
            progress = i / steps
            r = primary_color.red + (secondary_color.red - primary_color.red) * progress
            g = primary_color.green + (secondary_color.green - primary_color.green) * progress
            b = primary_color.blue + (secondary_color.blue - primary_color.blue) * progress
            
            gradient_color = Color(r, g, b)
            canvas.setFillColor(gradient_color)
            rect_height = self.height / steps
            canvas.rect(0, i * rect_height, self.width, rect_height, fill=1, stroke=0)
        
        # Top Status Bar
        canvas.setFillColor(ModernColors.GRAY_800)
        canvas.rect(0, self.height - 15, self.width, 15, fill=1, stroke=0)
        
        # Status Indicators
        canvas.setFillColor(ModernColors.WHITE)
        canvas.setFont("Helvetica", 8)
        canvas.drawString(30, self.height - 11, "SCALEWEB IT SOLUTIONS")
        
        canvas.drawString(self.width - 200, self.height - 11, f"SERVICE: {self.service_type.upper()}")
        canvas.drawString(self.width - 80, self.height - 11, "ACTIVE")
        
        # Green status dot
        canvas.setFillColor(ModernColors.GREEN)
        canvas.circle(self.width - 25, self.height - 7, 3, fill=1, stroke=0)
        
        # Company Logo Area
        logo_size = 80
        logo_x = 40
        logo_y = self.height - logo_size - 40
        
        # Logo Background
        canvas.setFillColor(ModernColors.WHITE)
        canvas.roundRect(logo_x, logo_y, logo_size, logo_size, 10, fill=1, stroke=0)
        
        # Logo Content
        canvas.setFillColor(primary_color)
        canvas.setFont("Helvetica-Bold", 32)
        canvas.drawString(logo_x + 15, logo_y + 25, "SW")
        
        # Main Title
        canvas.setFillColor(ModernColors.WHITE)
        canvas.setFont("Helvetica-Bold", 42)
        title_x = logo_x + logo_size + 30
        canvas.drawString(title_x, self.height - 60, self.title)
        
        # Subtitle
        canvas.setFont("Helvetica", 18)
        canvas.setFillColor(Color(1, 1, 1, 0.9))
        canvas.drawString(title_x, self.height - 85, self.subtitle)
        
        # Service Badge
        badge_width = 180
        badge_height = 35
        badge_x = self.width - badge_width - 40
        badge_y = self.height - badge_height - 40
        
        # Badge Background
        canvas.setFillColor(ModernColors.WHITE)
        canvas.roundRect(badge_x, badge_y, badge_width, badge_height, 8, fill=1, stroke=0)
        
        # Badge Text
        canvas.setFillColor(primary_color)
        canvas.setFont("Helvetica-Bold", 14)
        canvas.drawString(badge_x + 15, badge_y + 12, "ENTERPRISE READY")
        
        # Badge Icon
        canvas.setFillColor(ModernColors.GREEN)
        canvas.circle(badge_x + badge_width - 20, badge_y + badge_height/2, 8, fill=1, stroke=0)
        canvas.setFillColor(ModernColors.WHITE)
        canvas.setFont("Helvetica-Bold", 10)
        canvas.drawString(badge_x + badge_width - 24, badge_y + badge_height/2 - 4, "✓")

class KPICardFlowable(Flowable):
    """Anschauliche KPI-Karten"""
    
    def __init__(self, kpi_data, service_type, width=A4[0], height=180):
        self.kpi_data = kpi_data
        self.service_type = service_type
        self.width = width
        self.height = height
    
    def draw(self):
        canvas = self.canv
        
        # Background
        canvas.setFillColor(ModernColors.GRAY_50)
        canvas.rect(0, 0, self.width, self.height, fill=1, stroke=0)
        
        # Section Title
        canvas.setFillColor(ModernColors.GRAY_800)
        canvas.setFont("Helvetica-Bold", 22)
        canvas.drawString(40, self.height - 35, "Key Performance Indicators")
        
        # Service-spezifische Farben
        service_colors = {
            "acmp": [ModernColors.EMERALD, ModernColors.TEAL, ModernColors.GREEN, ModernColors.CYAN],
            "arctic-wolf": [ModernColors.CYAN, ModernColors.BLUE, ModernColors.INDIGO, ModernColors.PURPLE],
            "hornetsecurity": [ModernColors.AMBER, ModernColors.ORANGE, ModernColors.PRIMARY_RED, ModernColors.PINK],
            "microsoft": [ModernColors.BLUE, ModernColors.INDIGO, ModernColors.PURPLE, ModernColors.PINK]
        }
        
        colors = service_colors.get(self.service_type, service_colors["microsoft"])
        
        # KPI Cards
        card_width = (self.width - 120) / len(self.kpi_data)
        card_height = 100
        card_y = self.height - 140
        
        for i, (label, value, change, status) in enumerate(self.kpi_data):
            card_x = 60 + i * card_width
            card_color = colors[i % len(colors)]
            
            # Card Shadow
            canvas.setFillColor(ModernColors.GRAY_200)
            canvas.roundRect(card_x + 3, card_y - 3, card_width - 20, card_height, 12, fill=1, stroke=0)
            
            # Card Background
            canvas.setFillColor(ModernColors.WHITE)
            canvas.roundRect(card_x, card_y, card_width - 20, card_height, 12, fill=1, stroke=0)
            
            # Card Top Accent
            canvas.setFillColor(card_color)
            canvas.roundRect(card_x, card_y + card_height - 8, card_width - 20, 8, 4, fill=1, stroke=0)
            
            # KPI Value
            canvas.setFillColor(ModernColors.GRAY_800)
            canvas.setFont("Helvetica-Bold", 24)
            value_width = canvas.stringWidth(value, "Helvetica-Bold", 24)
            canvas.drawString(card_x + (card_width - 20 - value_width)/2, card_y + card_height - 35, value)
            
            # KPI Label
            canvas.setFont("Helvetica", 11)
            canvas.setFillColor(ModernColors.GRAY_600)
            label_width = canvas.stringWidth(label, "Helvetica", 11)
            canvas.drawString(card_x + (card_width - 20 - label_width)/2, card_y + card_height - 55, label)
            
            # Change Indicator
            change_color = ModernColors.GREEN if "+" in change or "up" in change.lower() else ModernColors.PRIMARY_RED
            canvas.setFillColor(change_color)
            canvas.setFont("Helvetica-Bold", 10)
            change_width = canvas.stringWidth(change, "Helvetica-Bold", 10)
            canvas.drawString(card_x + (card_width - 20 - change_width)/2, card_y + 15, change)
            
            # Status Icon
            icon_x = card_x + card_width - 35
            icon_y = card_y + card_height - 25
            
            if status == "excellent":
                canvas.setFillColor(ModernColors.GREEN)
            elif status == "good":
                canvas.setFillColor(ModernColors.AMBER)
            else:
                canvas.setFillColor(ModernColors.PRIMARY_RED)
                
            canvas.circle(icon_x, icon_y, 8, fill=1, stroke=0)
            
            # Status Symbol
            canvas.setFillColor(ModernColors.WHITE)
            canvas.setFont("Helvetica-Bold", 8)
            if status == "excellent":
                canvas.drawString(icon_x - 3, icon_y - 3, "★")
            elif status == "good":
                canvas.drawString(icon_x - 3, icon_y - 3, "!")
            else:
                canvas.drawString(icon_x - 3, icon_y - 3, "⚠")

class ProcessTimelineFlowable(Flowable):
    """Anschauliche Prozess-Timeline"""
    
    def __init__(self, process_steps, service_type, width=A4[0], height=160):
        self.process_steps = process_steps
        self.service_type = service_type
        self.width = width
        self.height = height
    
    def draw(self):
        canvas = self.canv
        
        # Background
        canvas.setFillColor(ModernColors.WHITE)
        canvas.rect(0, 0, self.width, self.height, fill=1, stroke=0)
        
        # Bottom accent line
        service_colors = {
            "acmp": ModernColors.EMERALD,
            "arctic-wolf": ModernColors.CYAN,
            "hornetsecurity": ModernColors.AMBER,
            "microsoft": ModernColors.BLUE
        }
        
        accent_color = service_colors.get(self.service_type, ModernColors.PRIMARY_BLUE)
        canvas.setFillColor(accent_color)
        canvas.rect(0, 0, self.width, 5, fill=1, stroke=0)
        
        # Section Title
        canvas.setFillColor(ModernColors.GRAY_800)
        canvas.setFont("Helvetica-Bold", 20)
        canvas.drawString(40, self.height - 30, "Implementation Timeline")
        
        # Timeline Line
        timeline_y = self.height - 80
        line_start = 80
        line_end = self.width - 80
        
        # Main timeline
        canvas.setStrokeColor(ModernColors.GRAY_200)
        canvas.setLineWidth(4)
        canvas.line(line_start, timeline_y, line_end, timeline_y)
        
        # Active timeline portion
        canvas.setStrokeColor(accent_color)
        canvas.setLineWidth(6)
        canvas.line(line_start, timeline_y, line_start + (line_end - line_start) * 0.7, timeline_y)
        
        # Process Steps
        step_width = (line_end - line_start) / (len(self.process_steps) - 1)
        step_colors = [accent_color, accent_color, ModernColors.GRAY_200, ModernColors.GRAY_200]
        
        for i, (step_name, status, duration) in enumerate(self.process_steps):
            x = line_start + i * step_width
            step_color = step_colors[i] if i < len(step_colors) else ModernColors.GRAY_200
            
            # Step Circle Background
            canvas.setFillColor(ModernColors.WHITE)
            canvas.circle(x, timeline_y, 20, fill=1, stroke=0)
            
            # Step Circle Border
            canvas.setStrokeColor(step_color)
            canvas.setLineWidth(4)
            canvas.circle(x, timeline_y, 20, fill=0, stroke=1)
            
            # Step Circle Fill
            canvas.setFillColor(step_color)
            canvas.circle(x, timeline_y, 15, fill=1, stroke=0)
            
            # Step Number
            canvas.setFillColor(ModernColors.WHITE)
            canvas.setFont("Helvetica-Bold", 14)
            num_width = canvas.stringWidth(str(i+1), "Helvetica-Bold", 14)
            canvas.drawString(x - num_width/2, timeline_y - 7, str(i+1))
            
            # Step Title
            canvas.setFillColor(ModernColors.GRAY_800)
            canvas.setFont("Helvetica-Bold", 12)
            title_width = canvas.stringWidth(step_name, "Helvetica-Bold", 12)
            canvas.drawString(x - title_width/2, timeline_y - 45, step_name)
            
            # Status
            canvas.setFont("Helvetica", 10)
            canvas.setFillColor(step_color)
            status_width = canvas.stringWidth(status, "Helvetica", 10)
            canvas.drawString(x - status_width/2, timeline_y - 60, status)
            
            # Duration
            canvas.setFont("Helvetica", 8)
            canvas.setFillColor(ModernColors.GRAY_600)
            duration_width = canvas.stringWidth(duration, "Helvetica", 8)
            canvas.drawString(x - duration_width/2, timeline_y - 75, duration)

class FeatureMatrixFlowable(Flowable):
    """Anschauliche Feature-Matrix"""
    
    def __init__(self, feature_categories, service_type, width=A4[0], height=280):
        self.feature_categories = feature_categories
        self.service_type = service_type
        self.width = width
        self.height = height
    
    def draw(self):
        canvas = self.canv
        
        # Background
        canvas.setFillColor(ModernColors.GRAY_50)
        canvas.rect(0, 0, self.width, self.height, fill=1, stroke=0)
        
        # Section Title
        canvas.setFillColor(ModernColors.GRAY_800)
        canvas.setFont("Helvetica-Bold", 22)
        canvas.drawString(40, self.height - 35, "Feature Overview")
        
        # Service-spezifische Farben
        service_colors = {
            "acmp": [ModernColors.EMERALD, ModernColors.TEAL, ModernColors.GREEN],
            "arctic-wolf": [ModernColors.CYAN, ModernColors.BLUE, ModernColors.INDIGO],
            "hornetsecurity": [ModernColors.AMBER, ModernColors.ORANGE, ModernColors.PRIMARY_RED],
            "microsoft": [ModernColors.BLUE, ModernColors.INDIGO, ModernColors.PURPLE]
        }
        
        colors = service_colors.get(self.service_type, service_colors["microsoft"])
        
        # Feature Categories
        category_height = (self.height - 80) / len(self.feature_categories)
        
        for i, (category_name, features, coverage) in enumerate(self.feature_categories):
            category_y = self.height - 80 - (i + 1) * category_height
            category_color = colors[i % len(colors)]
            
            # Category Header
            header_height = 40
            canvas.setFillColor(category_color)
            canvas.roundRect(40, category_y + category_height - header_height, self.width - 80, header_height, 8, fill=1, stroke=0)
            
            # Category Title
            canvas.setFillColor(ModernColors.WHITE)
            canvas.setFont("Helvetica-Bold", 16)
            canvas.drawString(60, category_y + category_height - 25, category_name)
            
            # Coverage Badge
            coverage_width = 80
            canvas.setFillColor(ModernColors.WHITE)
            canvas.roundRect(self.width - 140, category_y + category_height - 35, coverage_width, 25, 6, fill=1, stroke=0)
            
            canvas.setFillColor(category_color)
            canvas.setFont("Helvetica-Bold", 12)
            coverage_text = f"{coverage}%"
            coverage_text_width = canvas.stringWidth(coverage_text, "Helvetica-Bold", 12)
            canvas.drawString(self.width - 140 + (coverage_width - coverage_text_width)/2, 
                            category_y + category_height - 23, coverage_text)
            
            # Feature Items
            feature_area_height = category_height - header_height - 10
            canvas.setFillColor(ModernColors.WHITE)
            canvas.roundRect(40, category_y + 5, self.width - 80, feature_area_height, 8, fill=1, stroke=0)
            
            # Feature List
            feature_cols = 2
            feature_rows = (len(features) + feature_cols - 1) // feature_cols
            col_width = (self.width - 120) / feature_cols
            
            for j, feature in enumerate(features):
                col = j % feature_cols
                row = j // feature_cols
                
                feature_x = 60 + col * col_width
                feature_y = category_y + feature_area_height - 20 - row * 20
                
                # Feature Bullet
                canvas.setFillColor(category_color)
                canvas.circle(feature_x, feature_y + 5, 4, fill=1, stroke=0)
                
                # Feature Text
                canvas.setFillColor(ModernColors.GRAY_700)
                canvas.setFont("Helvetica", 10)
                canvas.drawString(feature_x + 12, feature_y, feature)

class ModernFooterFlowable(Flowable):
    """Moderner Footer mit Firmeninformationen"""
    
    def __init__(self, service_type, width=A4[0], height=120):
        self.service_type = service_type
        self.width = width
        self.height = height
    
    def draw(self):
        canvas = self.canv
        
        # Service-spezifische Farben
        service_colors = {
            "acmp": ModernColors.EMERALD,
            "arctic-wolf": ModernColors.CYAN,
            "hornetsecurity": ModernColors.AMBER,
            "microsoft": ModernColors.BLUE
        }
        
        accent_color = service_colors.get(self.service_type, ModernColors.PRIMARY_BLUE)
        
        # Footer Background
        canvas.setFillColor(ModernColors.GRAY_800)
        canvas.rect(0, 0, self.width, self.height, fill=1, stroke=0)
        
        # Top Accent Line
        canvas.setFillColor(accent_color)
        canvas.rect(0, self.height - 5, self.width, 5, fill=1, stroke=0)
        
        # Company Logo
        logo_size = 60
        logo_x = 40
        logo_y = self.height - logo_size - 30
        
        # Logo Background
        canvas.setFillColor(accent_color)
        canvas.roundRect(logo_x, logo_y, logo_size, logo_size, 8, fill=1, stroke=0)
        
        # Logo Text
        canvas.setFillColor(ModernColors.WHITE)
        canvas.setFont("Helvetica-Bold", 20)
        canvas.drawString(logo_x + 12, logo_y + 20, "SW")
        
        # Company Information
        info_x = logo_x + logo_size + 30
        
        canvas.setFillColor(ModernColors.WHITE)
        canvas.setFont("Helvetica-Bold", 18)
        canvas.drawString(info_x, logo_y + 40, "ScaleWeb IT Solutions")
        
        canvas.setFont("Helvetica", 12)
        canvas.drawString(info_x, logo_y + 20, "Enterprise IT Services & Cloud Solutions")
        
        canvas.setFont("Helvetica", 10)
        canvas.setFillColor(ModernColors.GRAY_200)
        canvas.drawString(info_x, logo_y, "Ihr zuverlässiger Partner für moderne IT-Infrastruktur")
        
        # Contact Information
        contact_x = self.width - 250
        
        canvas.setFillColor(ModernColors.WHITE)
        canvas.setFont("Helvetica-Bold", 12)
        canvas.drawString(contact_x, logo_y + 40, "Kontakt")
        
        canvas.setFont("Helvetica", 10)
        canvas.setFillColor(ModernColors.GRAY_200)
        canvas.drawString(contact_x, logo_y + 25, "📧 info@scaleweb.de")
        canvas.drawString(contact_x, logo_y + 10, "📞 +49 (0) 123 456 789")
        canvas.drawString(contact_x, logo_y - 5, "🌐 www.scaleweb.de")
        
        # Service Badge
        badge_x = self.width - 120
        badge_y = self.height - 25
        
        canvas.setFillColor(accent_color)
        canvas.roundRect(badge_x, badge_y - 15, 100, 20, 10, fill=1, stroke=0)
        
        canvas.setFillColor(ModernColors.WHITE)
        canvas.setFont("Helvetica-Bold", 10)
        canvas.drawString(badge_x + 15, badge_y - 7, f"{self.service_type.upper()}")

# Detaillierte Content-Daten für anschauliche PDFs
MODERN_CONTENT = {
    "acmp": {
        "title": "ACMP Security",
        "subtitle": "Advanced Client Management Platform",
        "kpis": [
            ("Threat Detection", "99.8%", "+0.3% ↗", "excellent"),
            ("System Health", "Optimal", "Stable →", "excellent"),
            ("Patch Coverage", "100%", "+2% ↗", "excellent"),
            ("Uptime", "99.99%", "Stable →", "excellent")
        ],
        "process": [
            ("Assessment", "Completed", "2 weeks"),
            ("Deployment", "In Progress", "1 week"),
            ("Configuration", "Pending", "3 days"),
            ("Go-Live", "Scheduled", "1 day")
        ],
        "features": [
            ("Security Management", [
                "Real-time Threat Detection",
                "Automated Security Updates",
                "Vulnerability Scanning",
                "Compliance Monitoring",
                "Incident Response",
                "Security Reporting"
            ], 98),
            ("Asset Management", [
                "Hardware Inventory",
                "Software License Tracking",
                "Automated Discovery",
                "Lifecycle Management",
                "Cost Optimization",
                "Performance Monitoring"
            ], 95),
            ("System Operations", [
                "Patch Management",
                "Remote Administration",
                "Backup Automation",
                "Performance Tuning",
                "Health Monitoring",
                "Maintenance Scheduling"
            ], 92)
        ]
    },
    "arctic-wolf": {
        "title": "Arctic Wolf",
        "subtitle": "Managed Detection & Response",
        "kpis": [
            ("Detection Rate", "99.9%", "+0.1% ↗", "excellent"),
            ("MTTR", "8 min", "-2 min ↗", "excellent"),
            ("SOC Coverage", "24/7", "Continuous →", "excellent"),
            ("Threats Blocked", "2,547", "+127 ↗", "excellent")
        ],
        "process": [
            ("Sensor Deploy", "Completed", "1 week"),
            ("Baseline Setup", "Completed", "3 days"),
            ("Threat Hunting", "Active", "Ongoing"),
            ("Full Coverage", "Active", "24/7")
        ],
        "features": [
            ("Detection & Response", [
                "AI-Powered Threat Detection",
                "24/7 SOC Monitoring",
                "Incident Investigation",
                "Automated Response",
                "Threat Intelligence",
                "Digital Forensics"
            ], 99),
            ("Security Operations", [
                "Continuous Monitoring",
                "Threat Hunting",
                "Security Analytics",
                "Risk Assessment",
                "Compliance Support",
                "Executive Reporting"
            ], 96),
            ("Managed Services", [
                "Dedicated SOC Team",
                "Custom Playbooks",
                "Vendor Management",
                "Security Training",
                "Emergency Response",
                "Strategic Consulting"
            ], 94)
        ]
    },
    "hornetsecurity": {
        "title": "Hornetsecurity",
        "subtitle": "Cloud Security & Data Protection",
        "kpis": [
            ("Email Security", "99.99%", "Stable →", "excellent"),
            ("Backup Success", "100%", "Perfect →", "excellent"),
            ("Recovery Time", "< 1hr", "-15 min ↗", "excellent"),
            ("Data Integrity", "100%", "Verified →", "excellent")
        ],
        "process": [
            ("Cloud Setup", "Completed", "1 week"),
            ("Migration", "Completed", "2 weeks"),
            ("Protection", "Active", "24/7"),
            ("Optimization", "Ongoing", "Continuous")
        ],
        "features": [
            ("Email Security", [
                "Advanced Threat Protection",
                "Spam & Phishing Filter",
                "Encryption & Signatures",
                "Quarantine Management",
                "Security Awareness",
                "Compliance Archiving"
            ], 99),
            ("Backup & Recovery", [
                "Automated Cloud Backup",
                "Point-in-Time Recovery",
                "Cross-Platform Support",
                "Disaster Recovery",
                "Data Deduplication",
                "Geographic Redundancy"
            ], 97),
            ("Compliance & Security", [
                "GDPR Compliance",
                "Legal Hold",
                "Audit Trails",
                "Access Controls",
                "Data Loss Prevention",
                "Security Monitoring"
            ], 95)
        ]
    },
    "microsoft": {
        "title": "Microsoft 365",
        "subtitle": "Cloud Productivity & Security Suite",
        "kpis": [
            ("User Adoption", "94%", "+12% ↗", "excellent"),
            ("Security Score", "847/1000", "+23 ↗", "good"),
            ("Collaboration", "Active", "+25% ↗", "excellent"),
            ("Cost Savings", "32%", "+8% ↗", "excellent")
        ],
        "process": [
            ("Planning", "Completed", "3 weeks"),
            ("Migration", "Completed", "6 weeks"),
            ("Training", "In Progress", "2 weeks"),
            ("Optimization", "Ongoing", "Continuous")
        ],
        "features": [
            ("Productivity Suite", [
                "Office 365 Applications",
                "Real-time Collaboration",
                "Cloud Storage",
                "Mobile Access",
                "Version Control",
                "Integration Platform"
            ], 96),
            ("Communication & Teams", [
                "Microsoft Teams",
                "Video Conferencing",
                "Chat & Messaging",
                "File Sharing",
                "External Collaboration",
                "Phone System"
            ], 93),
            ("Security & Compliance", [
                "Advanced Threat Protection",
                "Identity Management",
                "Data Loss Prevention",
                "Compliance Center",
                "Security Analytics",
                "Conditional Access"
            ], 89)
        ]
    }
}

def create_modern_pdf(content_key, filename):
    """Erstelle ein modernes, anschauliches PDF"""
    
    if content_key not in MODERN_CONTENT:
        print(f"Content key '{content_key}' not found!")
        return
    
    content = MODERN_CONTENT[content_key]
    
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
    
    # Modern Header
    story.append(ModernHeaderFlowable(content["title"], content["subtitle"], content_key))
    story.append(Spacer(1, 15))
    
    # KPI Cards
    story.append(KPICardFlowable(content["kpis"], content_key))
    story.append(Spacer(1, 15))
    
    # Process Timeline
    story.append(ProcessTimelineFlowable(content["process"], content_key))
    story.append(Spacer(1, 15))
    
    # Feature Matrix
    story.append(FeatureMatrixFlowable(content["features"], content_key))
    story.append(Spacer(1, 15))
    
    # Modern Footer
    story.append(ModernFooterFlowable(content_key))
    
    # Build PDF
    doc.build(story)
    print(f"✅ Modern PDF created: {filename}")

def main():
    """Generate all modern PDFs"""
    
    # Create output directory
    output_dir = "pdfs_final"
    os.makedirs(output_dir, exist_ok=True)
    
    print("🎨 Generating Final Modern Structured PDFs...")
    print("=" * 60)
    
    # Generate PDFs for each service
    services = ["acmp", "arctic-wolf", "hornetsecurity", "microsoft"]
    
    for service in services:
        filename = os.path.join(output_dir, f"{service}_final.pdf")
        create_modern_pdf(service, filename)
    
    print("=" * 60)
    print("✅ All final PDFs generated successfully!")
    print(f"📁 Output directory: {os.path.abspath(output_dir)}")
    print("\n🎯 Features:")
    print("   • Klare Strukturierung mit modernen Layouts")
    print("   • Anschauliche KPI-Karten mit Status-Indikatoren")
    print("   • Visuelle Timeline für Implementierungsprozesse")
    print("   • Feature-Matrix mit Abdeckungsgrad")
    print("   • Service-spezifische Farbschemata")
    print("   • Professionelles Corporate Design")

if __name__ == "__main__":
    main()
