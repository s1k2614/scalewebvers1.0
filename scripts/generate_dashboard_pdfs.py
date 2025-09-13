#!/usr/bin/env python3
"""
Dashboard-Style PDF Generator - Modern data visualization approach
"""

import os
from reportlab.lib.pagesizes import A4
from reportlab.platypus import SimpleDocTemplate, Spacer
from reportlab.platypus.flowables import Flowable
from reportlab.lib.colors import Color, white, black
from reportlab.lib.units import cm, mm
import math

# Dashboard Color Scheme
class DashboardColors:
    PRIMARY = Color(0.067, 0.184, 0.255)  # Dark Blue #114166
    SECONDARY = Color(0.294, 0.592, 0.886)  # Light Blue #4B97E2
    SUCCESS = Color(0.067, 0.533, 0.239)  # Green #11883D
    WARNING = Color(1.0, 0.647, 0.0)  # Orange #FFA500
    DANGER = Color(0.863, 0.196, 0.184)  # Red #DC322F
    INFO = Color(0.345, 0.753, 0.969)  # Cyan #58C0F7
    LIGHT = Color(0.961, 0.961, 0.961)  # Light Gray #F5F5F5
    DARK = Color(0.176, 0.176, 0.176)  # Dark Gray #2D2D2D
    WHITE = Color(1.0, 1.0, 1.0)  # White
    ACCENT = Color(0.502, 0.0, 0.502)  # Purple #800080

class DashboardHeaderFlowable(Flowable):
    """Dashboard-style header with metrics bar"""
    
    def __init__(self, title, subtitle, width=A4[0], height=140):
        self.title = title
        self.subtitle = subtitle
        self.width = width
        self.height = height
    
    def draw(self):
        canvas = self.canv
        
        # Main header background
        canvas.setFillColor(DashboardColors.PRIMARY)
        canvas.rect(0, 0, self.width, self.height - 30, fill=1, stroke=0)
        
        # Top metrics bar
        canvas.setFillColor(DashboardColors.DARK)
        canvas.rect(0, self.height - 30, self.width, 30, fill=1, stroke=0)
        
        # Metrics indicators
        metrics = ["SECURE", "MONITORED", "COMPLIANT", "OPTIMIZED"]
        metric_width = self.width / len(metrics)
        colors = [DashboardColors.SUCCESS, DashboardColors.INFO, DashboardColors.WARNING, DashboardColors.SECONDARY]
        
        for i, (metric, color) in enumerate(zip(metrics, colors)):
            x = i * metric_width
            
            # Status indicator
            canvas.setFillColor(color)
            canvas.circle(x + 30, self.height - 15, 6, fill=1, stroke=0)
            
            # Metric text
            canvas.setFillColor(DashboardColors.WHITE)
            canvas.setFont("Helvetica", 9)
            canvas.drawString(x + 45, self.height - 19, metric)
        
        # Title section
        canvas.setFillColor(DashboardColors.WHITE)
        canvas.setFont("Helvetica-Bold", 32)
        canvas.drawString(40, self.height - 70, self.title)
        
        # Subtitle
        canvas.setFont("Helvetica", 14)
        canvas.setFillColor(DashboardColors.INFO)
        canvas.drawString(40, self.height - 95, self.subtitle)
        
        # Dashboard ID
        canvas.setFont("Helvetica", 10)
        canvas.setFillColor(DashboardColors.LIGHT)
        canvas.drawString(self.width - 150, self.height - 50, f"Dashboard ID: SW-{hash(self.title) % 10000:04d}")

class MetricsPanelFlowable(Flowable):
    """Dashboard metrics panel with KPI cards"""
    
    def __init__(self, metrics_data, width=A4[0], height=160):
        self.metrics_data = metrics_data
        self.width = width
        self.height = height
    
    def draw(self):
        canvas = self.canv
        
        # Panel background
        canvas.setFillColor(DashboardColors.LIGHT)
        canvas.rect(0, 0, self.width, self.height, fill=1, stroke=0)
        
        # Panel title
        canvas.setFillColor(DashboardColors.DARK)
        canvas.setFont("Helvetica-Bold", 16)
        canvas.drawString(30, self.height - 25, "Key Performance Indicators")
        
        # Calculate card positions
        card_width = (self.width - 100) / len(self.metrics_data)
        colors = [DashboardColors.SUCCESS, DashboardColors.WARNING, DashboardColors.DANGER, DashboardColors.INFO]
        
        for i, (label, value, trend) in enumerate(self.metrics_data):
            x = 50 + i * card_width
            card_x = x
            card_y = 40
            card_w = card_width - 20
            card_h = 80
            
            # KPI Card
            canvas.setFillColor(DashboardColors.WHITE)
            canvas.rect(card_x, card_y, card_w, card_h, fill=1, stroke=0)
            
            # Card border
            canvas.setStrokeColor(colors[i % len(colors)])
            canvas.setLineWidth(2)
            canvas.rect(card_x, card_y, card_w, card_h, fill=0, stroke=1)
            
            # Trend indicator bar
            canvas.setFillColor(colors[i % len(colors)])
            canvas.rect(card_x, card_y + card_h - 8, card_w, 8, fill=1, stroke=0)
            
            # Value
            canvas.setFillColor(DashboardColors.DARK)
            canvas.setFont("Helvetica-Bold", 20)
            value_width = canvas.stringWidth(value, "Helvetica-Bold", 20)
            canvas.drawString(card_x + (card_w - value_width)/2, card_y + card_h - 35, value)
            
            # Label
            canvas.setFont("Helvetica", 10)
            label_width = canvas.stringWidth(label, "Helvetica", 10)
            canvas.drawString(card_x + (card_w - label_width)/2, card_y + card_h - 55, label)
            
            # Trend
            trend_icon = "↗" if "+" in trend or "up" in trend.lower() else "→"
            canvas.setFillColor(colors[i % len(colors)])
            canvas.setFont("Helvetica-Bold", 12)
            canvas.drawString(card_x + 10, card_y + 10, trend_icon)
            
            canvas.setFont("Helvetica", 8)
            canvas.drawString(card_x + 25, card_y + 12, trend)

class WorkflowVisualizationFlowable(Flowable):
    """Workflow visualization with connected steps"""
    
    def __init__(self, workflow_steps, width=A4[0], height=140):
        self.workflow_steps = workflow_steps
        self.width = width
        self.height = height
    
    def draw(self):
        canvas = self.canv
        
        # Background
        canvas.setFillColor(DashboardColors.WHITE)
        canvas.rect(0, 0, self.width, self.height, fill=1, stroke=0)
        
        # Border
        canvas.setStrokeColor(DashboardColors.LIGHT)
        canvas.setLineWidth(1)
        canvas.rect(0, 0, self.width, self.height, fill=0, stroke=1)
        
        # Title
        canvas.setFillColor(DashboardColors.DARK)
        canvas.setFont("Helvetica-Bold", 16)
        canvas.drawString(30, self.height - 25, "Process Workflow")
        
        # Workflow line
        workflow_y = self.height - 70
        canvas.setStrokeColor(DashboardColors.SECONDARY)
        canvas.setLineWidth(3)
        canvas.line(60, workflow_y, self.width - 60, workflow_y)
        
        # Steps
        step_width = (self.width - 120) / len(self.workflow_steps)
        colors = [DashboardColors.SUCCESS, DashboardColors.INFO, DashboardColors.WARNING, DashboardColors.SECONDARY]
        
        for i, (title, status) in enumerate(self.workflow_steps):
            x = 60 + i * step_width
            
            # Step node
            canvas.setFillColor(colors[i % len(colors)])
            canvas.circle(x, workflow_y, 15, fill=1, stroke=0)
            
            # Step number
            canvas.setFillColor(DashboardColors.WHITE)
            canvas.setFont("Helvetica-Bold", 10)
            num_width = canvas.stringWidth(str(i+1), "Helvetica-Bold", 10)
            canvas.drawString(x - num_width/2, workflow_y - 5, str(i+1))
            
            # Title
            canvas.setFillColor(DashboardColors.DARK)
            canvas.setFont("Helvetica-Bold", 10)
            title_width = canvas.stringWidth(title, "Helvetica-Bold", 10)
            canvas.drawString(x - title_width/2, workflow_y - 35, title)
            
            # Status
            canvas.setFont("Helvetica", 8)
            canvas.setFillColor(colors[i % len(colors)])
            status_width = canvas.stringWidth(status, "Helvetica", 8)
            canvas.drawString(x - status_width/2, workflow_y - 50, status)

class FeatureDashboardFlowable(Flowable):
    """Feature dashboard with status indicators"""
    
    def __init__(self, features, width=A4[0], height=240):
        self.features = features
        self.width = width
        self.height = height
    
    def draw(self):
        canvas = self.canv
        
        # Background
        canvas.setFillColor(DashboardColors.LIGHT)
        canvas.rect(0, 0, self.width, self.height, fill=1, stroke=0)
        
        # Title
        canvas.setFillColor(DashboardColors.DARK)
        canvas.setFont("Helvetica-Bold", 16)
        canvas.drawString(30, self.height - 25, "Feature Status Dashboard")
        
        # Grid layout
        cols = 3
        rows = 2
        
        cell_width = (self.width - 80) / cols
        cell_height = (self.height - 60) / rows
        
        status_colors = [DashboardColors.SUCCESS, DashboardColors.INFO, DashboardColors.WARNING, 
                        DashboardColors.SECONDARY, DashboardColors.ACCENT, DashboardColors.PRIMARY]
        
        for i, (title, description, status) in enumerate(self.features[:6]):
            row = i // cols
            col = i % cols
            
            x = 40 + col * cell_width
            y = self.height - 60 - (row + 1) * cell_height
            
            # Feature card
            canvas.setFillColor(DashboardColors.WHITE)
            canvas.rect(x, y, cell_width - 15, cell_height - 15, fill=1, stroke=0)
            
            # Card shadow effect
            canvas.setFillColor(DashboardColors.LIGHT)
            canvas.rect(x + 3, y - 3, cell_width - 15, cell_height - 15, fill=1, stroke=0)
            
            # Main card
            canvas.setFillColor(DashboardColors.WHITE)
            canvas.rect(x, y, cell_width - 15, cell_height - 15, fill=1, stroke=0)
            
            # Status indicator
            canvas.setFillColor(status_colors[i])
            canvas.rect(x, y + cell_height - 23, cell_width - 15, 8, fill=1, stroke=0)
            
            # Status dot
            canvas.setFillColor(status_colors[i])
            canvas.circle(x + 15, y + cell_height - 35, 5, fill=1, stroke=0)
            
            # Title
            canvas.setFillColor(DashboardColors.DARK)
            canvas.setFont("Helvetica-Bold", 11)
            canvas.drawString(x + 30, y + cell_height - 40, title)
            
            # Description
            canvas.setFont("Helvetica", 8)
            # Wrap text
            words = description.split()
            line1 = " ".join(words[:4])
            line2 = " ".join(words[4:8]) if len(words) > 4 else ""
            
            canvas.drawString(x + 10, y + cell_height - 60, line1)
            if line2:
                canvas.drawString(x + 10, y + cell_height - 72, line2)
            
            # Status text
            canvas.setFillColor(status_colors[i])
            canvas.setFont("Helvetica-Bold", 8)
            canvas.drawString(x + 10, y + 10, "ACTIVE" if i % 2 == 0 else "MONITORING")

class SystemInfoFooterFlowable(Flowable):
    """System information footer"""
    
    def __init__(self, width=A4[0], height=80):
        self.width = width
        self.height = height
    
    def draw(self):
        canvas = self.canv
        
        # Background
        canvas.setFillColor(DashboardColors.DARK)
        canvas.rect(0, 0, self.width, self.height, fill=1, stroke=0)
        
        # Top line
        canvas.setFillColor(DashboardColors.SECONDARY)
        canvas.rect(0, self.height - 3, self.width, 3, fill=1, stroke=0)
        
        # Company logo area
        canvas.setFillColor(DashboardColors.SECONDARY)
        canvas.rect(30, self.height - 50, 40, 30, fill=1, stroke=0)
        
        canvas.setFillColor(DashboardColors.WHITE)
        canvas.setFont("Helvetica-Bold", 12)
        canvas.drawString(40, self.height - 40, "SW")
        
        # Company info
        canvas.setFillColor(DashboardColors.WHITE)
        canvas.setFont("Helvetica-Bold", 14)
        canvas.drawString(85, self.height - 30, "ScaleWeb IT Solutions")
        
        canvas.setFont("Helvetica", 10)
        canvas.drawString(85, self.height - 45, "Enterprise Security & Cloud Infrastructure")
        
        # System info
        canvas.setFont("Helvetica", 8)
        canvas.setFillColor(DashboardColors.LIGHT)
        
        system_info = [
            "Last Updated: Live",
            "Status: All Systems Operational", 
            "Uptime: 99.99%",
            "Security Level: Maximum"
        ]
        
        start_x = self.width - 300
        for i, info in enumerate(system_info):
            canvas.drawString(start_x, self.height - 20 - i*10, info)

# Dashboard content
DASHBOARD_CONTENT = {
    "acmp": {
        "title": "ACMP Security Control Center",
        "subtitle": "Advanced Cyber Management Platform",
        "metrics": [
            ("Threat Detection", "99.8%", "↗ +0.2%"),
            ("System Health", "Optimal", "→ Stable"),
            ("Active Monitoring", "24/7", "↗ Live"),
            ("Compliance Score", "100%", "→ Maintained")
        ],
        "workflow": [
            ("Detection", "Active"),
            ("Analysis", "Processing"),
            ("Response", "Ready"),
            ("Recovery", "Standby")
        ],
        "features": [
            ("AI Threat Detection", "Machine learning powered threat identification system", "active"),
            ("Real-time Monitoring", "Continuous 24/7 system and network monitoring", "monitoring"),
            ("Automated Response", "Instant automated response to security incidents", "active"),
            ("Compliance Manager", "Comprehensive compliance tracking and reporting", "monitoring"),
            ("Risk Assessment", "Continuous security risk evaluation and scoring", "active"),
            ("Incident Tracker", "Complete incident lifecycle management system", "monitoring")
        ]
    },
    "arctic-wolf": {
        "title": "Arctic Wolf SOC Dashboard",
        "subtitle": "Managed Detection & Response Center",
        "metrics": [
            ("Detection Rate", "99.9%", "↗ Industry Leading"),
            ("MTTR", "8min", "↗ Faster"),
            ("SOC Coverage", "24/7", "→ Continuous"),
            ("Threats Blocked", "2,547", "↗ +127 today")
        ],
        "workflow": [
            ("Sensor Deploy", "Complete"),
            ("Threat Hunt", "Active"),
            ("Investigation", "Ongoing"),
            ("Remediation", "Ready")
        ],
        "features": [
            ("24/7 SOC Team", "Dedicated security operations center with expert analysts", "active"),
            ("Threat Hunting", "Proactive hunting for advanced persistent threats", "monitoring"),
            ("Digital Forensics", "Comprehensive incident investigation and analysis", "active"),
            ("Custom Playbooks", "Tailored response procedures for your environment", "monitoring"),
            ("Executive Reports", "Business-focused security reporting and insights", "active"),
            ("Compliance Support", "Assistance with regulatory compliance requirements", "monitoring")
        ]
    },
    "hornetsecurity": {
        "title": "Hornetsecurity Control Panel",
        "subtitle": "Cloud Security & Data Protection Suite",
        "metrics": [
            ("Email Security", "99.99%", "→ Protected"),
            ("Backup Status", "100%", "↗ Success"),
            ("Recovery Time", "<1hr", "↗ Optimized"),
            ("Data Encrypted", "256-bit", "→ Secure")
        ],
        "workflow": [
            ("Cloud Setup", "Complete"),
            ("Protection", "Active"),
            ("Backup", "Running"),
            ("Recovery", "Available")
        ],
        "features": [
            ("Email Security Gateway", "Advanced protection against email-borne threats", "active"),
            ("Cloud Backup Service", "Automated secure cloud-based data backup", "monitoring"),
            ("Disaster Recovery", "Rapid business continuity and recovery solutions", "active"),
            ("Compliance Archive", "Legally compliant email archiving and retention", "monitoring"),
            ("Web Protection", "Comprehensive web security and threat filtering", "active"),
            ("Mobile Device Security", "Complete mobile device management and security", "monitoring")
        ]
    },
    "microsoft": {
        "title": "Microsoft 365 Admin Center",
        "subtitle": "Cloud Productivity & Security Hub",
        "metrics": [
            ("User Productivity", "+42%", "↗ Improved"),
            ("Security Score", "847/1000", "↗ Enhanced"),
            ("Service Health", "Healthy", "→ Operational"),
            ("Collaboration", "Active", "↗ Growing")
        ],
        "workflow": [
            ("Migration", "Complete"),
            ("Integration", "Active"),
            ("Training", "Ongoing"),
            ("Optimization", "Continuous")
        ],
        "features": [
            ("Office 365 Apps", "Complete productivity suite with cloud capabilities", "active"),
            ("Microsoft Teams", "Unified communication and collaboration platform", "monitoring"),
            ("Advanced Threat Protection", "Enterprise-grade security with AI-powered protection", "active"),
            ("OneDrive for Business", "Secure cloud storage with advanced sharing controls", "monitoring"),
            ("Exchange Online", "Professional email with advanced security features", "active"),
            ("SharePoint Online", "Modern document management and team collaboration", "monitoring")
        ]
    }
}

def create_dashboard_pdf(content_key, filename):
    """Create a dashboard-style PDF"""
    
    if content_key not in DASHBOARD_CONTENT:
        print(f"Content key '{content_key}' not found!")
        return
    
    content = DASHBOARD_CONTENT[content_key]
    
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
    story.append(DashboardHeaderFlowable(content["title"], content["subtitle"]))
    story.append(Spacer(1, 15))
    
    # Metrics Panel
    story.append(MetricsPanelFlowable(content["metrics"]))
    story.append(Spacer(1, 15))
    
    # Workflow
    story.append(WorkflowVisualizationFlowable(content["workflow"]))
    story.append(Spacer(1, 15))
    
    # Features Dashboard
    story.append(FeatureDashboardFlowable(content["features"]))
    story.append(Spacer(1, 20))
    
    # Footer
    story.append(SystemInfoFooterFlowable())
    
    # Build PDF
    doc.build(story)
    print(f"✅ Dashboard PDF created: {filename}")

def main():
    """Generate all dashboard PDFs"""
    
    # Create output directory
    output_dir = "pdfs_dashboard"
    os.makedirs(output_dir, exist_ok=True)
    
    print("📊 Generating Dashboard-Style PDFs...")
    print("=" * 50)
    
    # Generate PDFs for each service
    services = ["acmp", "arctic-wolf", "hornetsecurity", "microsoft"]
    
    for service in services:
        filename = os.path.join(output_dir, f"{service}_dashboard.pdf")
        create_dashboard_pdf(service, filename)
    
    print("=" * 50)
    print("✅ All dashboard PDFs generated successfully!")
    print(f"📁 Output directory: {os.path.abspath(output_dir)}")

if __name__ == "__main__":
    main()
