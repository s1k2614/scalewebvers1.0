'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { 
  Mail, Shield, CheckCircle, ArrowRight, ChevronDown,
  AlertTriangle, Eye, Lock, Users, Archive, Zap,
  FileSearch, Settings, Award, Bot, User, Monitor, Cloud,
  Database, Terminal, Play, HardDrive, Brain, GraduationCap,
  FileText, Download
} from 'lucide-react';
import Link from 'next/link';

// ThreatBlockingDiagram als separate Komponente
const ThreatBlockingDiagram = () => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [emailPosition, setEmailPosition] = useState(0);
  const [isBlocked, setIsBlocked] = useState(false);
  const [isDelivered, setIsDelivered] = useState(false);
  const [blockedCount, setBlockedCount] = useState(0);
  const [deliveredCount, setDeliveredCount] = useState(0);
  const [currentEmailType, setCurrentEmailType] = useState('threat'); // 'threat' or 'safe'

  const threatPhases = [
    { name: 'Bedrohung erkannt', description: 'Phishing-E-Mail aus dem Internet' },
    { name: 'Hornetsecurity Analyse', description: 'AI-basierte Erkennung aktiv' },
    { name: 'Bedrohung blockiert', description: 'E-Mail sicher abgefangen' },
    { name: 'System bereit', description: 'Warten auf nächste E-Mail' }
  ];

  const safePhases = [
    { name: 'E-Mail empfangen', description: 'Geschäfts-E-Mail von vertrauensvoller Quelle' },
    { name: 'Sicherheitsprüfung', description: 'Vollständige Analyse durchgeführt' },
    { name: 'E-Mail verifiziert', description: 'Alle Sicherheitschecks bestanden' },
    { name: 'Zustellung erfolgreich', description: 'E-Mail sicher an Benutzer zugestellt' }
  ];

  const getCurrentPhases = () => currentEmailType === 'threat' ? threatPhases : safePhases;

  useEffect(() => {
    const interval = setInterval(() => {
      // Reset states
      setCurrentPhase(0);
      setEmailPosition(0);
      setIsBlocked(false);
      setIsDelivered(false);

      // Randomly decide between threat and safe email
      const emailType = Math.random() > 0.5 ? 'threat' : 'safe';
      setCurrentEmailType(emailType);

      // Phase 1: Email starts moving
      setTimeout(() => {
        setCurrentPhase(1);
        let position = 0;
        const moveInterval = setInterval(() => {
          position += 1.5;
          setEmailPosition(position);
          
          // At 50% Hornetsecurity analysis kicks in
          if (position >= 50) {
            clearInterval(moveInterval);
            setCurrentPhase(2);
            
            if (emailType === 'threat') {
              // Block the threat
              setIsBlocked(true);
              setBlockedCount(prev => prev + 1);
              
              setTimeout(() => {
                setCurrentPhase(3);
              }, 1500);
            } else {
              // Allow safe email to continue
              setTimeout(() => {
                const continueInterval = setInterval(() => {
                  position += 2;
                  setEmailPosition(position);
                  
                  if (position >= 90) {
                    clearInterval(continueInterval);
                    setCurrentPhase(3);
                    setIsDelivered(true);
                    setDeliveredCount(prev => prev + 1);
                  }
                }, 50);
              }, 1000);
            }
          }
        }, 60);
      }, 1000);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-br from-scaleit-black to-scaleit-gray rounded-3xl p-8 text-white relative overflow-hidden">
      <div className="absolute top-4 right-4 flex gap-4">
        <div className="bg-scaleit-red text-white px-3 py-1 rounded-full text-sm font-bold">
          Blockiert: {blockedCount}
        </div>
        <div className="bg-scaleit-purple text-white px-3 py-1 rounded-full text-sm font-bold">
          Zugestellt: {deliveredCount}
        </div>
      </div>
      
      <h3 className="text-2xl font-bold mb-6">Live Threat Protection & Safe Delivery</h3>
      
      {/* Email Status Indicator */}
      <div className="mb-4 text-center">
        <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
          currentEmailType === 'threat' 
            ? 'bg-scaleit-red/20 text-scaleit-red' 
            : 'bg-scaleit-purple/20 text-scaleit-purple'
        }`}>
          {currentEmailType === 'threat' ? '🚨 Verdächtige E-Mail erkannt' : '📧 Legitime Geschäfts-E-Mail'}
        </span>
      </div>
      
      {/* Email Path Visualization */}
      <div className="relative h-32 bg-scaleit-gray rounded-xl mb-6 overflow-hidden">
        {/* Progress Track */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-scaleit-black transform -translate-y-1/2"></div>
        
        {/* Email Icon */}
        <motion.div
          className={`absolute top-1/2 transform -translate-y-1/2 rounded-full p-2 ${
            currentEmailType === 'threat' ? 'bg-scaleit-red' : 'bg-scaleit-purple'
          }`}
          animate={{ left: `${emailPosition}%` }}
          transition={{ duration: 0.1 }}
        >
          {currentEmailType === 'threat' ? (
            <AlertTriangle className="w-6 h-6 text-white" />
          ) : (
            <Mail className="w-6 h-6 text-white" />
          )}
        </motion.div>
        
        {/* Hornetsecurity Shield */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <motion.div
            className={`bg-scaleit-red rounded-full p-3 ${
              (isBlocked || (currentPhase === 1 && emailPosition >= 40)) ? 'ring-4 ring-scaleit-red/50' : ''
            }`}
            animate={(isBlocked || (currentPhase === 1 && emailPosition >= 40)) ? { scale: [1, 1.2, 1] } : {}}
            transition={{ duration: 0.5 }}
          >
            <Shield className="w-8 h-8 text-white" />
          </motion.div>
        </div>
        
        {/* User Icon */}
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
          <motion.div 
            className={`rounded-full p-2 ${isDelivered ? 'bg-scaleit-purple ring-4 ring-scaleit-purple/50' : 'bg-scaleit-gray'}`}
            animate={isDelivered ? { scale: [1, 1.2, 1] } : {}}
            transition={{ duration: 0.5 }}
          >
            <User className="w-6 h-6 text-white" />
          </motion.div>
        </div>
        
        {/* Block Effect */}
        <AnimatePresence>
          {isBlocked && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-scaleit-red text-white px-4 py-2 rounded-lg font-bold text-sm"
            >
              🛡️ BLOCKIERT!
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Delivery Effect */}
        <AnimatePresence>
          {isDelivered && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="absolute top-1/2 right-16 transform -translate-y-1/2 bg-scaleit-purple text-white px-4 py-2 rounded-lg font-bold text-sm"
            >
              ✅ ZUGESTELLT!
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Security Analysis Details */}
      {currentPhase === 1 && emailPosition >= 40 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-scaleit-gray rounded-lg p-4 mb-4"
        >
          <h4 className="font-semibold mb-2 text-scaleit-red">🔍 Sicherheitsanalyse läuft...</h4>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-scaleit-purple rounded-full animate-pulse"></div>
              Absender-Reputation prüfen
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-scaleit-purple rounded-full animate-pulse"></div>
              Link-Analyse durchführen
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-scaleit-purple rounded-full animate-pulse"></div>
              Anhang-Scanning
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-scaleit-purple rounded-full animate-pulse"></div>
              KI-basierte Bewertung
            </div>
          </div>
        </motion.div>
      )}
      
      {/* Detailed Email Information */}
      {(isBlocked || isDelivered) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`rounded-lg p-4 mb-4 ${
            currentEmailType === 'threat' ? 'bg-scaleit-red/20 border border-scaleit-red' : 'bg-scaleit-purple/20 border border-scaleit-purple'
          }`}
        >
          <h4 className="font-semibold mb-3 flex items-center gap-2">
            {currentEmailType === 'threat' ? (
              <>
                <AlertTriangle className="w-5 h-5 text-scaleit-red" />
                <span className="text-scaleit-red">Bedrohungsanalyse</span>
              </>
            ) : (
              <>
                <Mail className="w-5 h-5 text-scaleit-purple" />
                <span className="text-scaleit-purple">Sichere E-Mail Details</span>
              </>
            )}
          </h4>
          
          {currentEmailType === 'threat' ? (
            <div className="space-y-2 text-sm">
              <div><strong>Von:</strong> support@bnak-security.com (🚨 Verdächtige Domain)</div>
              <div><strong>Betreff:</strong> "Dringende Kontoverifizierung erforderlich"</div>
              <div><strong>Erkannte Bedrohungen:</strong></div>
              <ul className="ml-4 space-y-1 text-scaleit-red">
                <li>• Phishing-Links zu gefälschter Bank-Website</li>
                <li>• Verdächtige Anhänge (malware.exe.pdf)</li>
                <li>• Social Engineering Techniken</li>
                <li>• Unbekannte Absender-IP aus Risikogebiet</li>
              </ul>
            </div>
          ) : (
            <div className="space-y-2 text-sm">
              <div><strong>Von:</strong> partner@microsoft.com (✅ Verifizierter Absender)</div>
              <div><strong>Betreff:</strong> "Vierteljährlicher Geschäftsbericht Q3/2024"</div>
              <div><strong>Sicherheitsprüfungen bestanden:</strong></div>
              <ul className="ml-4 space-y-1 text-scaleit-purple">
                <li>• SPF, DKIM & DMARC Authentifizierung ✓</li>
                <li>• Absender-Reputation: Exzellent ✓</li>
                <li>• Inhaltsanalyse: Sauber ✓</li>
                <li>• Keine verdächtigen Links oder Anhänge ✓</li>
              </ul>
            </div>
          )}
        </motion.div>
      )}
      
      {/* Phase Description */}
      <div className="text-center">
        <motion.div
          key={currentPhase}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4"
        >
          <h4 className="text-lg font-semibold text-scaleit-red mb-2">
            {getCurrentPhases()[currentPhase]?.name}
          </h4>
          <p className="text-scaleit-gray text-sm">
            {getCurrentPhases()[currentPhase]?.description}
          </p>
        </motion.div>
        
        {/* Progress Indicators */}
        <div className="flex justify-center space-x-2">
          {getCurrentPhases().map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index <= currentPhase ? 'bg-scaleit-red' : 'bg-scaleit-gray'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default function HornetsecurityPage() {
  const [activeModule, setActiveModule] = useState('email-security');

  // Hornetsecurity modules for detailed view
  const modules = [
    {
      id: 'spam-malware-protection',
      name: 'Spam & Malware Protection',
      description: 'Grundlegender E-Mail-Schutz gegen Spam und Malware',
      icon: Shield,
      color: 'from-scaleit-red to-scaleit-purple',
      features: [
        'Spam-Filterung (99,9% Trefferquote)',
        'Malware-Erkennung in Echtzeit',
        'Phishing-Schutz erweitert',
        'Attachment-Sandboxing',
        'Content-Filter anpassbar',
        'Greylisting & Blacklisting'
      ],
      commands: [
        {
          cmd: 'Set-SpamFilter -Level High',
          desc: 'Setzt den Spam-Filter auf höchste Stufe',
          params: '-Level [Low|Medium|High|Strict]'
        },
        {
          cmd: 'Enable-MalwareScanning -RealTime',
          desc: 'Aktiviert Echtzeit-Malware-Scanning',
          params: '-RealTime -Quarantine -DeleteMalicious'
        },
        {
          cmd: 'Get-ThreatIntelligence -Last24h',
          desc: 'Zeigt Bedrohungsstatistiken der letzten 24h',
          params: '-TimeRange [1h|24h|7d|30d]'
        }
      ],
      plans: [1, 2, 3, 4]
    },
    {
      id: 'email-encryption',
      name: 'Email Encryption',
      description: 'Verschlüsselung für sichere E-Mail-Kommunikation',
      icon: Lock,
      color: 'from-scaleit-purple to-scaleit-black',
      features: [
        'Ende-zu-Ende Verschlüsselung',
        'S/MIME Unterstützung',
        'PGP/GPG Integration',
        'Automatische Schlüsselverwaltung',
        'TLS-Transportverschlüsselung',
        'Certificate Management'
      ],
      commands: [
        {
          cmd: 'Enable-EmailEncryption -Method SMIME',
          desc: 'Aktiviert S/MIME E-Mail-Verschlüsselung',
          params: '-Method [SMIME|PGP|TLS] -AutoEncrypt'
        },
        {
          cmd: 'Install-Certificate -Domain company.com',
          desc: 'Installiert Verschlüsselungszertifikat',
          params: '-Domain -KeySize [2048|4096] -Validity'
        },
        {
          cmd: 'Set-EncryptionPolicy -Automatic',
          desc: 'Konfiguriert automatische Verschlüsselungsrichtlinien',
          params: '-Trigger [Keywords|Recipients|Attachments]'
        }
      ],
      plans: [1, 2, 3, 4]
    },
    {
      id: 'signature-disclaimer',
      name: 'Signatur und Disclaimer',
      description: 'Automatische E-Mail-Signaturen und rechtliche Disclaimer',
      icon: FileText,
      color: 'from-scaleit-black to-scaleit-gray',
      features: [
        'Zentrale Signaturverwaltung',
        'Rechtssichere Disclaimer',
        'Template-Management',
        'Conditional Rules',
        'HTML/Text Signaturen',
        'Image & Logo Support'
      ],
      commands: [
        {
          cmd: 'New-EmailSignature -Template Corporate',
          desc: 'Erstellt neue Unternehmens-Signatur',
          params: '-Template -Department -Variables -Logo'
        },
        {
          cmd: 'Set-DisclaimerPolicy -Legal',
          desc: 'Konfiguriert rechtliche Disclaimer-Richtlinien',
          params: '-Type [Legal|Confidential|Marketing] -Position'
        },
        {
          cmd: 'Apply-ConditionalSignature',
          desc: 'Wendet bedingte Signaturen basierend auf Regeln an',
          params: '-Condition [Internal|External|Department] -Template'
        }
      ],
      plans: [1, 2, 3, 4]
    },
    {
      id: 'advanced-threat-protection',
      name: 'Advanced Threat Protection',
      description: 'Erweiterte Bedrohungsabwehr gegen moderne Cyberattacken',
      icon: AlertTriangle,
      color: 'from-scaleit-red to-scaleit-black',
      features: [
        'URL-Rewriting & Sandboxing',
        'Zero-Day Exploits Erkennung',
        'Behavioral Analysis Engine',
        'Threat Intelligence Feed',
        'ATP Forensics & Reports',
        'Business Email Compromise Schutz'
      ],
      commands: [
        {
          cmd: 'Enable-URLRewriting -SandboxMode',
          desc: 'Aktiviert URL-Umschreibung mit Sandbox',
          params: '-Policy -SandboxMode -ClickProtection'
        },
        {
          cmd: 'Scan-Attachment -DeepAnalysis',
          desc: 'Führt Tiefenanalyse von Anhängen durch',
          params: '-File -DeepAnalysis -BehaviorAnalysis'
        },
        {
          cmd: 'Get-ThreatIntelligence -IOC',
          desc: 'Ruft Threat Intelligence Indicators ab',
          params: '-IOC -TimeRange -ThreatLevel'
        }
      ],
      plans: [2, 3, 4]
    },
    {
      id: 'email-archiving',
      name: 'Email Archiving',
      description: 'Rechtskonforme E-Mail-Archivierung und Compliance',
      icon: Archive,
      color: 'from-scaleit-purple to-scaleit-red',
      features: [
        'Automatische Archivierung',
        'Compliance-Richtlinien (DSGVO, GoBD)',
        'Volltext-Suche & eDiscovery',
        'Rechtssichere Aufbewahrung',
        'Export-Funktionen (PST/EML)',
        'Audit-Logs & Reporting'
      ],
      commands: [
        {
          cmd: 'New-ArchivePolicy -RetentionYears 10',
          desc: 'Erstellt Archivrichtlinie mit 10 Jahren Aufbewahrung',
          params: '-RetentionYears [1-25] -AutoDelete -LegalHold'
        },
        {
          cmd: 'Search-Archive -Keywords "Vertrag"',
          desc: 'Durchsucht Archiv nach Schlüsselwörtern',
          params: '-Keywords -DateRange -Sender -Subject'
        },
        {
          cmd: 'Export-ComplianceReport -GDPR',
          desc: 'Generiert GDPR-konformen Compliance-Bericht',
          params: '-Type [GDPR|SOX|HIPAA] -Format [PDF|Excel]'
        }
      ],
      plans: [2, 3, 4]
    },
    {
      id: 'continuity-service',
      name: 'Continuity Service',
      description: 'Business Continuity bei E-Mail-Ausfällen',
      icon: Monitor,
      color: 'from-scaleit-gray to-scaleit-red',
      features: [
        'Automatic Failover',
        'Redundante Infrastruktur',
        'Load Balancing',
        'Disaster Recovery',
        'SLA Garantien 99,9%',
        'Global Presence'
      ],
      commands: [
        {
          cmd: 'Enable-ContinuityService -AutoFailover',
          desc: 'Aktiviert automatisches Failover',
          params: '-AutoFailover -HealthCheck -Notification'
        },
        {
          cmd: 'Test-ServiceContinuity',
          desc: 'Testet Business Continuity Mechanismen',
          params: '-FailoverTest -LoadTest -RecoveryTime'
        },
        {
          cmd: 'Get-ServiceStatus -RealTime',
          desc: 'Zeigt Echtzeit-Service-Status',
          params: '-Services -Uptime -Performance'
        }
      ],
      plans: [2, 3, 4]
    },
    {
      id: 'total-backup',
      name: '365 Total Backup',
      description: 'Vollständiges Microsoft 365 Backup (Automatic BackUp, Granular Recovery, Unlimited Storage)',
      icon: HardDrive,
      color: 'from-scaleit-black to-scaleit-purple',
      features: [
        'Automatic BackUp of M365 Data',
        'Granular Recovery mit Self Service',
        'Unlimited Storage für M365 BackUp',
        'Point-in-Time Recovery',
        'Exchange, SharePoint, OneDrive, Teams',
        'End User Portal'
      ],
      commands: [
        {
          cmd: 'Start-M365Backup -FullBackup',
          desc: 'Startet vollständige Microsoft 365 Sicherung',
          params: '-Incremental -FullBackup -Services [All|Exchange|SharePoint|OneDrive|Teams]'
        },
        {
          cmd: 'Restore-UserMailbox -SelfService',
          desc: 'Self-Service Wiederherstellung für Benutzer',
          params: '-User -PointInTime -GranularRestore -SelfService'
        },
        {
          cmd: 'Set-BackupPolicy -Unlimited',
          desc: 'Konfiguriert unbegrenzte Backup-Richtlinien',
          params: '-StorageLimit [Unlimited] -RetentionDays -AutoCleanup'
        }
      ],
      plans: [3, 4]
    },
    {
      id: 'security-awareness',
      name: 'Security Awareness',
      description: 'Mitarbeiter-Schulungen und Phishing-Simulationen',
      icon: GraduationCap,
      color: 'from-scaleit-red to-scaleit-gray',
      features: [
        'Phishing-Simulationen realistisch',
        'Security Training personalisiert',
        'Awareness-Kampagnen automatisiert',
        'Lernfortschritt-Tracking',
        'Compliance-Zertifikate',
        'Multilingual Content'
      ],
      commands: [
        {
          cmd: 'Start-PhishingTest -Template Spear',
          desc: 'Startet Spear-Phishing Simulation',
          params: '-Template [Generic|Spear|CEO] -TargetGroup -ReportResults'
        },
        {
          cmd: 'Create-TrainingCourse -Topic DataProtection',
          desc: 'Erstellt personalisierten Schulungskurs',
          params: '-Topic -Duration -Language [DE|EN|FR] -Difficulty'
        },
        {
          cmd: 'Get-AwarenessScore -Department IT',
          desc: 'Zeigt Security Awareness Score',
          params: '-User -Department -TimeRange -Benchmark'
        }
      ],
      plans: [4]
    },
    {
      id: 'permission-management',
      name: 'Permission Management',
      description: 'Microsoft 365 Berechtigungsverwaltung und Governance',
      icon: Users,
      color: 'from-scaleit-purple to-scaleit-gray',
      features: [
        'Berechtigungs-Übersicht detailliert',
        'Compliance-Reports automatisch',
        'Unused Permissions Cleanup',
        'Role-Based Access Control',
        'Permission Analytics',
        'Governance Automation'
      ],
      commands: [
        {
          cmd: 'Get-365Permissions -FullAudit',
          desc: 'Vollständige Berechtigungsauditierung',
          params: '-User -Service -DetailLevel [Full|Summary] -Export'
        },
        {
          cmd: 'Set-AccessPolicy -Restrictive',
          desc: 'Setzt restriktive Zugriffsrichtlinien',
          params: '-PolicyLevel [Open|Balanced|Restrictive] -AutoEnforce'
        },
        {
          cmd: 'Cleanup-UnusedAccess -DryRun',
          desc: 'Bereinigt ungenutzte Zugriffe (Test-Modus)',
          params: '-DryRun -Force -NotifyUsers -GracePeriod'
        }
      ],
      plans: [4]
    },
    {
      id: 'dmarc-reporting',
      name: 'DMARC Reporting & Management',
      description: 'DMARC-Konfiguration, Monitoring und Reporting',
      icon: FileSearch,
      color: 'from-scaleit-red to-scaleit-purple',
      features: [
        'DMARC Policy Management',
        'SPF & DKIM Validation',
        'Email Authentication Reports',
        'Domain Reputation Monitoring',
        'Phishing Domain Detection',
        'Compliance Reporting'
      ],
      commands: [
        {
          cmd: 'Set-DMARCPolicy -Quarantine',
          desc: 'Konfiguriert DMARC-Richtlinien',
          params: '-Policy [None|Quarantine|Reject] -Percentage -Reports'
        },
        {
          cmd: 'Validate-EmailAuthentication',
          desc: 'Validiert SPF, DKIM und DMARC',
          params: '-Domain -CheckAll -ReportFailures'
        },
        {
          cmd: 'Get-DMARCReport -Weekly',
          desc: 'Generiert wöchentliche DMARC-Berichte',
          params: '-Period [Daily|Weekly|Monthly] -Format [PDF|XML]'
        }
      ],
      plans: [4]
    },
    {
      id: 'ai-cyber-assistant',
      name: 'AI Cyber Assistant',
      description: 'KI-Cyber-Assistent (AI Recipient Validation, Teams Protection, AI Email Security Analyst)',
      icon: Brain,
      color: 'from-scaleit-purple to-scaleit-black',
      features: [
        'AI Recipient Validation',
        'Teams Protection mit KI',
        'AI Email Security Analyst',
        'Machine Learning Optimierung',
        'Predictive Security Analytics',
        'Automated Incident Response'
      ],
      commands: [
        {
          cmd: 'Enable-AIRecipientValidation',
          desc: 'Aktiviert KI-Empfänger-Validierung',
          params: '-Sensitivity [Low|Medium|High] -BlockSuspicious -LearnFromUser'
        },
        {
          cmd: 'Protect-TeamsWithAI',
          desc: 'Aktiviert KI-Schutz für Microsoft Teams',
          params: '-TeamsProtection -FileScanning -LinkValidation'
        },
        {
          cmd: 'Invoke-AISecurityAnalyst',
          desc: 'Startet KI-Security-Analyst für Bedrohungsanalyse',
          params: '-DeepScan -ThreatHunting -AutoRemediation'
        }
      ],
      plans: [4]
    }
  ];

  // Plan definitions for first overview (4 tiles like ACMP modules)
  const plans = [
    {
      id: 1,
      name: 'Total Protection Business',
      description: 'Grundlegender E-Mail-Schutz',
      icon: Mail,
      color: 'from-scaleit-gray to-scaleit-red',
      services: [
        'Spam & Malware Protection',
        'Email Encryption',
        'Signatur und Disclaimer'
      ],
      includes: null,
      price: '€2.50',
      period: '/Mailbox/Monat'
    },
    {
      id: 2,
      name: 'Total Protection Enterprise',
      description: 'Erweiterte Bedrohungsabwehr',
      icon: Shield,
      color: 'from-scaleit-red to-scaleit-black',
      services: [
        'Advanced Threat Protection',
        'Email Archiving',
        'Continuity Service'
      ],
      includes: 'Plan 1',
      price: '€4.90',
      period: '/Mailbox/Monat'
    },
    {
      id: 3,
      name: 'Total Protection Enterprise BackUp',
      description: 'Vollständige M365 Datensicherung',
      icon: HardDrive,
      color: 'from-scaleit-black to-scaleit-purple',
      services: [
        'Automatic BackUp of M365 Data',
        'Granular Recovery with Self Service',
        'Unlimited Storage for M365 BackUp'
      ],
      includes: 'Plan 1 + 2',
      price: '€7.90',
      period: '/Mailbox/Monat'
    },
    {
      id: 4,
      name: 'Total Protection Compliance & Awareness',
      description: 'KI-gestützte Enterprise-Lösung',
      icon: Brain,
      color: 'from-scaleit-purple to-scaleit-red',
      services: [
        'Security Awareness',
        'Permission Management',
        'DMARC Reporting & Management',
        'AI Cyber Assistant'
      ],
      includes: 'Plan 1 + 2 + 3',
      price: '€12.90',
      period: '/Mailbox/Monat'
    }
  ];

  const ThreatAnalytics = () => {
    const threats = [
      { type: 'Spam', percentage: 78, color: 'bg-yellow-500' },
      { type: 'Phishing', percentage: 15, color: 'bg-red-500' },
      { type: 'Malware', percentage: 5, color: 'bg-purple-500' },
      { type: 'Clean', percentage: 2, color: 'bg-green-500' }
    ];

    return (
      <div className="bg-gray-900 rounded-2xl p-6 text-white">
        <h3 className="text-xl font-semibold mb-6">Bedrohungsverteilung</h3>
        
        <div className="space-y-4">
          {threats.map((threat, index) => (
            <motion.div
              key={threat.type}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center"
            >
              <div className="w-20 text-sm text-gray-300">{threat.type}</div>
              <div className="flex-1 mx-4">
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <motion.div
                    className={`h-3 rounded-full ${threat.color}`}
                    initial={{ width: '0%' }}
                    animate={{ width: `${threat.percentage}%` }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                  />
                </div>
              </div>
              <div className="w-12 text-sm text-gray-300 text-right">
                {threat.percentage}%
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t border-gray-700">
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-orange-400">15.4M</div>
              <div className="text-xs text-gray-400">E-Mails heute</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-red-400">99.9%</div>
              <div className="text-xs text-gray-400">Erkennungsrate</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-orange-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-red-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-yellow-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-full shadow-2xl mb-8"
            >
              <Mail className="w-8 h-8 mr-4" />
              <span className="text-xl font-bold">Hornetsecurity Email Security</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-6xl md:text-7xl font-bold text-gray-900 mb-8"
            >
              E-Mail Security
              <span className="block bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Cloud-Plattform
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8"
            >
              Hornetsecurity bietet die weltweit führende Cloud-basierte E-Mail-Security-Plattform.
              Schutz vor Spam, Phishing, Malware und fortgeschrittenen Bedrohungen.
            </motion.p>

            {/* Gold Partner Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mb-16"
            >
              <div className="inline-flex items-center bg-gradient-to-r from-scaleit-red via-scaleit-purple to-scaleit-black text-white px-8 py-4 rounded-full shadow-xl">
                <Award className="w-6 h-6 mr-3" />
                <span className="text-lg font-bold">ScaleITS - Hornetsecurity Gold Partner</span>
              </div>
              <p className="text-gray-600 mt-3 text-lg">
                Als zertifizierter Gold Partner bieten wir Ihnen erstklassige{' '}
                <Link href="/services" className="text-scaleit-red hover:text-scaleit-purple underline font-semibold">
                  Beratung und Support
                </Link>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Link 
                href="/contact" 
                className="inline-flex items-center bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-orange-700 hover:to-red-700 transition-all duration-300 shadow-2xl transform hover:scale-105"
              >
                Kostenloser Test <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <button className="inline-flex items-center border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-600 hover:text-white transition-all duration-300">
                <a href="/pdfs/hornetsecurity-produktinfo.pdf" download className="flex items-center">
                  <Download className="w-5 h-5 mr-2" />
                  Produktinfo herunterladen
                </a>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Threat Blocking */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Hornetsecurity in Aktion
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Erleben Sie live, wie Hornetsecurity Bedrohungen erkennt und blockiert
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <ThreatBlockingDiagram />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <ThreatAnalytics />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hornetsecurity Plans Overview - 4 Tiles like ACMP Modules */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Hornetsecurity Pläne
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wählen Sie das passende Paket für Ihr Unternehmen - aufbauende Pläne mit echten Hornetsecurity Services
            </p>
          </motion.div>

          {/* Plan Navigation - 4 Tiles like ACMP Modules */}
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-20">
            {plans.map((plan, index) => {
              const IconComponent = plan.icon;
              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 border-gray-200 bg-gradient-to-br ${plan.color}`}
                >
                  <div className="text-white relative z-10">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-3">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-3xl font-bold">{plan.id}</div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-white/90 text-sm mb-4">{plan.description}</p>
                    
                    <div className="mb-4">
                      <div className="flex items-end mb-2">
                        <span className="text-2xl font-bold">{plan.price}</span>
                        <span className="text-white/80 ml-1 text-sm">{plan.period}</span>
                      </div>
                    </div>

                    {/* Services in this plan */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold mb-2 text-white/90">Services in diesem Plan:</h4>
                      <div className="space-y-1">
                        {plan.services.map((service, serviceIndex) => (
                          <div key={serviceIndex} className="text-xs text-white/80 flex items-start">
                            <div className="w-1 h-1 bg-white/60 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                            <span>{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* What's included */}
                    {plan.includes && (
                      <div className="bg-white/10 border border-white/20 rounded-lg p-2 mb-4">
                        <p className="text-white/90 text-xs text-center">
                          <strong>+ {plan.includes}</strong>
                        </p>
                      </div>
                    )}

                    <Link 
                      href="/contact"
                      className="w-full bg-white/20 backdrop-blur text-white py-2 px-4 rounded-lg font-semibold text-sm hover:bg-white/30 transition-all duration-300 border border-white/30 block text-center"
                    >
                      Plan {plan.id} wählen
                    </Link>
                  </div>
                  
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full -ml-8 -mb-8"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hornetsecurity Module Details */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Hornetsecurity Security Module
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Klicken Sie auf ein Modul, um detaillierte Informationen und verfügbare Befehle zu sehen
            </p>
          </motion.div>

          {/* Module Grid with inline details */}
          <div className="space-y-8">
            {/* First Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {modules.slice(0, 3).map((module, index) => {
                const IconComponent = module.icon;
                return (
                  <div key={module.id} className="relative">
                    {/* Plan indicators outside - positioned above the tile */}
                    <div className="absolute -top-3 -right-3 z-10 flex flex-wrap gap-1">
                      {[1, 2, 3, 4].map((planId) => {
                        const isIncluded = module.plans.includes(planId);
                        const planColors: Record<number, string> = {
                          1: isIncluded ? 'bg-teal-500' : 'bg-gray-400/30',
                          2: isIncluded ? 'bg-red-600' : 'bg-gray-400/30',
                          3: isIncluded ? 'bg-orange-500' : 'bg-gray-400/30',
                          4: isIncluded ? 'bg-yellow-500' : 'bg-gray-400/30'
                        };
                        return (
                          <div
                            key={planId}
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white ${planColors[planId]} border-2 border-white shadow-lg`}
                            title={`Plan ${planId}${isIncluded ? ' - Enthalten' : ' - Nicht enthalten'}`}
                          >
                            {planId}
                          </div>
                        );
                      })}
                    </div>

                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      onClick={() => setActiveModule(activeModule === module.id ? '' : module.id)}
                      className={`relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:scale-105 bg-gradient-to-br ${module.color} ${
                        activeModule === module.id
                          ? 'ring-4 ring-red-300 shadow-2xl'
                          : 'hover:shadow-xl'
                      } w-full h-48 flex items-center justify-center shadow-lg`}
                    >
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-4 right-4 w-16 h-16 border border-white/20 rounded-full"></div>
                        <div className="absolute bottom-4 left-4 w-8 h-8 border border-white/20 rounded-full"></div>
                        <div className="absolute top-1/2 left-1/2 w-12 h-12 border border-white/10 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                      </div>
                      
                      <div className="text-white text-center relative z-10">
                        <div className="mb-4 transform hover:scale-110 transition-transform duration-200">
                          <IconComponent className="w-10 h-10 mx-auto mb-3 text-white drop-shadow-lg" />
                        </div>
                        <h3 className="text-lg font-bold mb-2 drop-shadow-md">{module.name}</h3>
                        <p className="text-sm opacity-90 text-white line-clamp-3 drop-shadow-sm">
                          {module.description}
                        </p>
                      </div>
                      
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-white/0 hover:bg-white/10 transition-colors duration-300 rounded-2xl"></div>
                    </motion.button>
                  </div>
                );
              })}
            </div>

            {/* Details for first row */}
            <AnimatePresence>
              {modules.slice(0, 3).some(module => module.id === activeModule) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5 }}
                  className="overflow-hidden"
                >
                  {modules.slice(0, 3).map((module) => {
                    if (module.id !== activeModule) return null;
                    const IconComponent = module.icon;
                    
                    return (
                      <div
                        key={module.id}
                        className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-2xl border border-gray-100"
                      >
                        <div className="grid lg:grid-cols-2 gap-8">
                          {/* Module Info */}
                          <div>
                            <div className="flex items-center mb-6">
                              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${module.color} flex items-center justify-center mr-4`}>
                                <IconComponent className="w-8 h-8 text-white" />
                              </div>
                              <div>
                                <h3 className="text-3xl font-bold text-gray-900">{module.name}</h3>
                                <p className="text-gray-600">{module.description}</p>
                              </div>
                            </div>

                            <div className="mb-6">
                              <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                                <Zap className="w-5 h-5 mr-2 text-orange-600" />
                                Hauptfunktionen
                              </h4>
                              <div className="grid grid-cols-1 gap-3">
                                {module.features.map((feature, index) => (
                                  <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center"
                                  >
                                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                                    <span className="text-gray-700">{feature}</span>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Interactive Module Visualization */}
                          <div>
                            {/* Spam & Malware Protection Visualization */}
                            {module.id === 'spam-malware-protection' && (
                              <div className="bg-gradient-to-br from-red-900 to-orange-900 rounded-2xl p-6 text-white">
                                <h4 className="text-xl font-semibold mb-4 flex items-center">
                                  <Shield className="w-5 h-5 mr-2 text-orange-400" />
                                  Spam-Filter in Aktion
                                </h4>
                                <div className="space-y-4">
                                  {/* Email Flow */}
                                  <div className="relative h-32 bg-gray-800 rounded-xl overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-between px-4">
                                      <div className="text-center">
                                        <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mb-2">
                                          <Mail className="w-6 h-6" />
                                        </div>
                                        <span className="text-xs">1000 E-Mails</span>
                                      </div>
                                      
                                      <div className="flex-1 mx-4">
                                        <div className="text-center mb-2">
                                          <Shield className="w-8 h-8 text-orange-400 mx-auto" />
                                          <span className="text-xs block">Filter</span>
                                        </div>
                                        <div className="space-y-1">
                                          <div className="flex justify-between text-xs">
                                            <span>Spam: 780</span>
                                            <div className="w-16 bg-red-600 h-1 rounded"></div>
                                          </div>
                                          <div className="flex justify-between text-xs">
                                            <span>Malware: 15</span>
                                            <div className="w-4 bg-purple-600 h-1 rounded"></div>
                                          </div>
                                          <div className="flex justify-between text-xs">
                                            <span>Phishing: 5</span>
                                            <div className="w-2 bg-orange-600 h-1 rounded"></div>
                                          </div>
                                        </div>
                                      </div>
                                      
                                      <div className="text-center">
                                        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-2">
                                          <CheckCircle className="w-6 h-6" />
                                        </div>
                                        <span className="text-xs">200 Sauber</span>
                                      </div>
                                    </div>
                                  </div>
                                  
                                  {/* Statistics */}
                                  <div className="grid grid-cols-2 gap-4 text-center">
                                    <div className="bg-gray-800 rounded-lg p-3">
                                      <div className="text-2xl font-bold text-green-400">99.9%</div>
                                      <div className="text-xs text-gray-300">Erkennungsrate</div>
                                    </div>
                                    <div className="bg-gray-800 rounded-lg p-3">
                                      <div className="text-2xl font-bold text-orange-400">&lt;1ms</div>
                                      <div className="text-xs text-gray-300">Latenz</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}

                            {/* Email Encryption Visualization */}
                            {module.id === 'email-encryption' && (
                              <div className="bg-gradient-to-br from-red-900 to-cyan-900 rounded-2xl p-6 text-white">
                                <h4 className="text-xl font-semibold mb-4 flex items-center">
                                  <Lock className="w-5 h-5 mr-2 text-cyan-400" />
                                  Verschlüsselungsprozess
                                </h4>
                                <div className="space-y-4">
                                  {/* Encryption Flow */}
                                  <div className="relative h-32 bg-gray-800 rounded-xl overflow-hidden p-4">
                                    <div className="flex items-center justify-between h-full">
                                      <div className="text-center">
                                        <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mb-2">
                                          <FileText className="w-6 h-6" />
                                        </div>
                                        <span className="text-xs">Klartext</span>
                                      </div>
                                      
                                      <div className="flex-1 mx-4 text-center">
                                        <motion.div
                                          animate={{ rotate: 360 }}
                                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                          className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full mx-auto mb-2"
                                        />
                                        <div className="text-xs">AES-256</div>
                                        <div className="text-xs text-gray-400">Verschlüsselung</div>
                                      </div>
                                      
                                      <div className="text-center">
                                        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-2">
                                          <Lock className="w-6 h-6" />
                                        </div>
                                        <span className="text-xs">Verschlüsselt</span>
                                      </div>
                                    </div>
                                  </div>
                                  
                                  {/* Security Levels */}
                                  <div className="space-y-2">
                                    <div className="flex items-center justify-between text-sm">
                                      <span>S/MIME</span>
                                      <div className="flex space-x-1">
                                        {[1,2,3,4,5].map(i => (
                                          <div key={i} className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                                        ))}
                                      </div>
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                      <span>PGP/GPG</span>
                                      <div className="flex space-x-1">
                                        {[1,2,3,4,5].map(i => (
                                          <div key={i} className="w-2 h-2 bg-red-400 rounded-full"></div>
                                        ))}
                                      </div>
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                      <span>TLS 1.3</span>
                                      <div className="flex space-x-1">
                                        {[1,2,3,4].map(i => (
                                          <div key={i} className="w-2 h-2 bg-green-400 rounded-full"></div>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}

                            {/* Signature & Disclaimer Visualization */}
                            {module.id === 'signature-disclaimer' && (
                              <div className="bg-gradient-to-br from-green-900 to-emerald-900 rounded-2xl p-6 text-white">
                                <h4 className="text-xl font-semibold mb-4 flex items-center">
                                  <FileText className="w-5 h-5 mr-2 text-emerald-400" />
                                  Signatur-Management
                                </h4>
                                <div className="space-y-4">
                                  {/* Email Template Preview */}
                                  <div className="bg-gray-800 rounded-xl p-4">
                                    <div className="text-xs text-gray-400 mb-2">E-Mail Vorschau:</div>
                                    <div className="bg-white text-gray-900 rounded p-3 text-xs">
                                      <div className="mb-2">Sehr geehrte Damen und Herren,</div>
                                      <div className="mb-4">vielen Dank für Ihre Anfrage...</div>
                                      <div className="border-t border-gray-300 pt-2 text-xs">
                                        <div className="font-semibold">Max Mustermann</div>
                                        <div>IT-Manager | ScaleITS GmbH</div>
                                        <div className="text-red-600">Tel: +49 8171 908 929-0</div>
                                        <div className="text-gray-500 text-xs mt-1">
                                          Diese E-Mail enthält vertrauliche Informationen...
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  
                                  {/* Template Options */}
                                  <div className="grid grid-cols-3 gap-2 text-xs">
                                    <div className="bg-green-700 rounded p-2 text-center">
                                      <Users className="w-4 h-4 mx-auto mb-1" />
                                      Abteilung
                                    </div>
                                    <div className="bg-red-700 rounded p-2 text-center">
                                      <Settings className="w-4 h-4 mx-auto mb-1" />
                                      Legal
                                    </div>
                                    <div className="bg-purple-700 rounded p-2 text-center">
                                      <Award className="w-4 h-4 mx-auto mb-1" />
                                      Marketing
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}

                            {/* Plan Availability */}
                            <div className="mt-6">
                              <h5 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                                <Shield className="w-4 h-4 mr-2 text-red-600" />
                                Verfügbar in Plänen
                              </h5>
                              <div className="flex space-x-2">
                                {[1, 2, 3, 4].map((planId) => {
                                  const isIncluded = module.plans.includes(planId);
                                  return (
                                    <div
                                      key={planId}
                                      className={`w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold transition-all duration-300 ${
                                        isIncluded 
                                          ? 'bg-orange-500 text-white ring-2 ring-orange-300' 
                                          : 'bg-gray-200 text-gray-400'
                                      }`}
                                    >
                                      {planId}
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Second Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {modules.slice(3, 6).map((module, index) => {
                const IconComponent = module.icon;
                return (
                  <div key={module.id} className="relative">
                    {/* Plan indicators outside - positioned above the tile */}
                    <div className="absolute -top-3 -right-3 z-10 flex flex-wrap gap-1">
                      {[1, 2, 3, 4].map((planId) => {
                        const isIncluded = module.plans.includes(planId);
                        const planColors: Record<number, string> = {
                          1: isIncluded ? 'bg-teal-500' : 'bg-gray-400/30',
                          2: isIncluded ? 'bg-red-600' : 'bg-gray-400/30',
                          3: isIncluded ? 'bg-orange-500' : 'bg-gray-400/30',
                          4: isIncluded ? 'bg-yellow-500' : 'bg-gray-400/30'
                        };
                        return (
                          <div
                            key={planId}
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white ${planColors[planId]} border-2 border-white shadow-lg`}
                            title={`Plan ${planId}${isIncluded ? ' - Enthalten' : ' - Nicht enthalten'}`}
                          >
                            {planId}
                          </div>
                        );
                      })}
                    </div>

                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      onClick={() => setActiveModule(activeModule === module.id ? '' : module.id)}
                      className={`relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:scale-105 bg-gradient-to-br ${module.color} ${
                        activeModule === module.id
                          ? 'ring-4 ring-red-300 shadow-2xl'
                          : 'hover:shadow-xl'
                      } w-full h-48 flex items-center justify-center shadow-lg`}
                    >
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-4 right-4 w-16 h-16 border border-white/20 rounded-full"></div>
                        <div className="absolute bottom-4 left-4 w-8 h-8 border border-white/20 rounded-full"></div>
                        <div className="absolute top-1/2 left-1/2 w-12 h-12 border border-white/10 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                      </div>
                      
                      <div className="text-white text-center relative z-10">
                        <div className="mb-4 transform hover:scale-110 transition-transform duration-200">
                          <IconComponent className="w-10 h-10 mx-auto mb-3 text-white drop-shadow-lg" />
                        </div>
                        <h3 className="text-lg font-bold mb-2 drop-shadow-md">{module.name}</h3>
                        <p className="text-sm opacity-90 text-white line-clamp-3 drop-shadow-sm">
                          {module.description}
                        </p>
                      </div>
                      
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-white/0 hover:bg-white/10 transition-colors duration-300 rounded-2xl"></div>
                    </motion.button>
                  </div>
                );
              })}
            </div>

            {/* Details for second row */}
            <AnimatePresence>
              {modules.slice(3, 6).some(module => module.id === activeModule) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5 }}
                  className="overflow-hidden"
                >
                  {modules.slice(3, 6).map((module) => {
                    if (module.id !== activeModule) return null;
                    const IconComponent = module.icon;
                    
                    return (
                      <div
                        key={module.id}
                        className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-2xl border border-gray-100"
                      >
                        <div className="grid lg:grid-cols-2 gap-8">
                          {/* Module Info */}
                          <div>
                            <div className="flex items-center mb-6">
                              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${module.color} flex items-center justify-center mr-4`}>
                                <IconComponent className="w-8 h-8 text-white" />
                              </div>
                              <div>
                                <h3 className="text-3xl font-bold text-gray-900">{module.name}</h3>
                                <p className="text-gray-600">{module.description}</p>
                              </div>
                            </div>

                            <div className="mb-6">
                              <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                                <Zap className="w-5 h-5 mr-2 text-orange-600" />
                                Hauptfunktionen
                              </h4>
                              <div className="grid grid-cols-1 gap-3">
                                {module.features.map((feature, index) => (
                                  <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center"
                                  >
                                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                                    <span className="text-gray-700">{feature}</span>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Interactive Module Visualization */}
                          <div>
                            {/* Advanced Threat Protection Visualization */}
                            {module.id === 'advanced-threat-protection' && (
                              <div className="bg-gradient-to-br from-purple-900 to-pink-900 rounded-2xl p-6 text-white">
                                <h4 className="text-xl font-semibold mb-4 flex items-center">
                                  <AlertTriangle className="w-5 h-5 mr-2 text-pink-400" />
                                  ATP Sandbox Analyse
                                </h4>
                                <div className="space-y-4">
                                  {/* Sandbox Environment */}
                                  <div className="bg-gray-800 rounded-xl p-4">
                                    <div className="grid grid-cols-2 gap-4">
                                      <div>
                                        <div className="text-xs text-gray-400 mb-2">Verdächtige Datei:</div>
                                        <div className="bg-red-600 rounded p-2 text-xs">
                                          <FileText className="w-4 h-4 inline mr-1" />
                                          invoice.pdf.exe
                                        </div>
                                      </div>
                                      <div>
                                        <div className="text-xs text-gray-400 mb-2">Sandbox Status:</div>
                                        <div className="bg-yellow-600 rounded p-2 text-xs">
                                          <Eye className="w-4 h-4 inline mr-1" />
                                          Analysiere...
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  
                                  {/* Threat Detection */}
                                  <div className="space-y-2">
                                    <div className="flex items-center justify-between text-sm">
                                      <span>URL Rewriting</span>
                                      <div className="w-8 h-4 bg-green-500 rounded-full relative">
                                        <div className="w-3 h-3 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                                      </div>
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                      <span>Zero-Day Schutz</span>
                                      <div className="w-8 h-4 bg-green-500 rounded-full relative">
                                        <div className="w-3 h-3 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                                      </div>
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                      <span>Behavior Analysis</span>
                                      <div className="w-8 h-4 bg-orange-500 rounded-full relative">
                                        <motion.div 
                                          animate={{ x: [0, 16, 0] }}
                                          transition={{ duration: 2, repeat: Infinity }}
                                          className="w-3 h-3 bg-white rounded-full absolute top-0.5"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}

                            {/* Email Archiving Visualization */}
                            {module.id === 'email-archiving' && (
                              <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-2xl p-6 text-white">
                                <h4 className="text-xl font-semibold mb-4 flex items-center">
                                  <Archive className="w-5 h-5 mr-2 text-purple-400" />
                                  Archiv & Compliance
                                </h4>
                                <div className="space-y-4">
                                  {/* Archive Storage */}
                                  <div className="bg-gray-800 rounded-xl p-4">
                                    <div className="flex items-center justify-between mb-3">
                                      <span className="text-sm">Speicher-Auslastung</span>
                                      <span className="text-sm">847 GB / 1 TB</span>
                                    </div>
                                    <div className="w-full bg-gray-700 rounded-full h-2">
                                      <motion.div
                                        className="bg-gradient-to-r from-scaleit-red to-scaleit-purple h-2 rounded-full"
                                        initial={{ width: '0%' }}
                                        animate={{ width: '84.7%' }}
                                        transition={{ duration: 2 }}
                                      />
                                    </div>
                                    <div className="mt-2 text-xs text-gray-400">
                                      Letzte Archivierung: vor 2 Minuten
                                    </div>
                                  </div>
                                  
                                  {/* Compliance Status */}
                                  <div className="grid grid-cols-2 gap-2">
                                    <div className="bg-scaleit-purple rounded-lg p-3 text-center">
                                      <CheckCircle className="w-6 h-6 mx-auto mb-1" />
                                      <div className="text-xs">DSGVO</div>
                                      <div className="text-xs text-scaleit-red">Konform</div>
                                    </div>
                                    <div className="bg-scaleit-purple rounded-lg p-3 text-center">
                                      <CheckCircle className="w-6 h-6 mx-auto mb-1" />
                                      <div className="text-xs">GoBD</div>
                                      <div className="text-xs text-scaleit-red">Konform</div>
                                    </div>
                                  </div>
                                  
                                  {/* Quick Stats */}
                                  <div className="flex justify-between text-xs">
                                    <div className="text-center">
                                      <div className="text-lg font-bold text-purple-400">2.4M</div>
                                      <div className="text-gray-400">E-Mails</div>
                                    </div>
                                    <div className="text-center">
                                      <div className="text-lg font-bold text-indigo-400">10J</div>
                                      <div className="text-gray-400">Aufbewahrung</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}

                            {/* Continuity Service Visualization */}
                            {module.id === 'continuity-service' && (
                              <div className="bg-gradient-to-br from-teal-900 to-cyan-900 rounded-2xl p-6 text-white">
                                <h4 className="text-xl font-semibold mb-4 flex items-center">
                                  <Monitor className="w-5 h-5 mr-2 text-cyan-400" />
                                  Service Uptime
                                </h4>
                                <div className="space-y-4">
                                  {/* Uptime Chart */}
                                  <div className="bg-gray-800 rounded-xl p-4">
                                    <div className="flex items-end justify-between h-16 mb-2">
                                      {[99.9, 100, 99.8, 100, 100, 99.9, 100].map((uptime, i) => (
                                        <div key={i} className="flex flex-col items-center">
                                          <motion.div
                                            className="bg-gradient-to-t from-scaleit-gray to-scaleit-red rounded-t"
                                            style={{ height: `${uptime}%`, width: '8px' }}
                                            initial={{ height: 0 }}
                                            animate={{ height: `${uptime}%` }}
                                            transition={{ delay: i * 0.1 }}
                                          />
                                          <span className="text-xs mt-1 text-gray-400">T{i+1}</span>
                                        </div>
                                      ))}
                                    </div>
                                    <div className="text-center">
                                      <div className="text-2xl font-bold text-scaleit-red">99.95%</div>
                                      <div className="text-xs text-gray-400">7-Tage Verfügbarkeit</div>
                                    </div>
                                  </div>
                                  
                                  {/* Global Presence */}
                                  <div className="grid grid-cols-3 gap-2 text-xs">
                                    <div className="bg-scaleit-purple rounded p-2 text-center">
                                      <div className="w-2 h-2 bg-scaleit-red rounded-full mx-auto mb-1"></div>
                                      EU-West
                                    </div>
                                    <div className="bg-scaleit-purple rounded p-2 text-center">
                                      <div className="w-2 h-2 bg-scaleit-red rounded-full mx-auto mb-1"></div>
                                      US-East
                                    </div>
                                    <div className="bg-scaleit-purple rounded p-2 text-center">
                                      <div className="w-2 h-2 bg-scaleit-red rounded-full mx-auto mb-1"></div>
                                      APAC
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}

                            {/* Plan Availability */}
                            <div className="mt-6">
                              <h5 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                                <Shield className="w-4 h-4 mr-2 text-red-600" />
                                Verfügbar in Plänen
                              </h5>
                              <div className="flex space-x-2">
                                {[1, 2, 3, 4].map((planId) => {
                                  const isIncluded = module.plans.includes(planId);
                                  return (
                                    <div
                                      key={planId}
                                      className={`w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold transition-all duration-300 ${
                                        isIncluded 
                                          ? 'bg-orange-500 text-white ring-2 ring-orange-300' 
                                          : 'bg-gray-200 text-gray-400'
                                      }`}
                                    >
                                      {planId}
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Third Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {modules.slice(6, 9).map((module, index) => {
                const IconComponent = module.icon;
                return (
                  <div key={module.id} className="relative">
                    {/* Plan indicators outside - positioned above the tile */}
                    <div className="absolute -top-3 -right-3 z-10 flex flex-wrap gap-1">
                      {[1, 2, 3, 4].map((planId) => {
                        const isIncluded = module.plans.includes(planId);
                        const planColors: Record<number, string> = {
                          1: isIncluded ? 'bg-teal-500' : 'bg-gray-400/30',
                          2: isIncluded ? 'bg-red-600' : 'bg-gray-400/30',
                          3: isIncluded ? 'bg-orange-500' : 'bg-gray-400/30',
                          4: isIncluded ? 'bg-yellow-500' : 'bg-gray-400/30'
                        };
                        return (
                          <div
                            key={planId}
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white ${planColors[planId]} border-2 border-white shadow-lg`}
                            title={`Plan ${planId}${isIncluded ? ' - Enthalten' : ' - Nicht enthalten'}`}
                          >
                            {planId}
                          </div>
                        );
                      })}
                    </div>

                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      onClick={() => setActiveModule(activeModule === module.id ? '' : module.id)}
                      className={`relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:scale-105 bg-gradient-to-br ${module.color} ${
                        activeModule === module.id
                          ? 'ring-4 ring-red-300 shadow-2xl'
                          : 'hover:shadow-xl'
                      } w-full h-48 flex items-center justify-center shadow-lg`}
                    >
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-4 right-4 w-16 h-16 border border-white/20 rounded-full"></div>
                        <div className="absolute bottom-4 left-4 w-8 h-8 border border-white/20 rounded-full"></div>
                        <div className="absolute top-1/2 left-1/2 w-12 h-12 border border-white/10 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                      </div>
                      
                      <div className="text-white text-center relative z-10">
                        <div className="mb-4 transform hover:scale-110 transition-transform duration-200">
                          <IconComponent className="w-10 h-10 mx-auto mb-3 text-white drop-shadow-lg" />
                        </div>
                        <h3 className="text-lg font-bold mb-2 drop-shadow-md">{module.name}</h3>
                        <p className="text-sm opacity-90 text-white line-clamp-3 drop-shadow-sm">
                          {module.description}
                        </p>
                      </div>
                      
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-white/0 hover:bg-white/10 transition-colors duration-300 rounded-2xl"></div>
                    </motion.button>
                  </div>
                );
              })}
            </div>

            {/* Details for third row */}
            <AnimatePresence>
              {modules.slice(6, 9).some(module => module.id === activeModule) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5 }}
                  className="overflow-hidden"
                >
                  {modules.slice(6, 9).map((module) => {
                    if (module.id !== activeModule) return null;
                    const IconComponent = module.icon;
                    
                    return (
                      <div
                        key={module.id}
                        className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-2xl border border-gray-100"
                      >
                        <div className="grid lg:grid-cols-2 gap-8">
                          {/* Module Info */}
                          <div>
                            <div className="flex items-center mb-6">
                              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${module.color} flex items-center justify-center mr-4`}>
                                <IconComponent className="w-8 h-8 text-white" />
                              </div>
                              <div>
                                <h3 className="text-3xl font-bold text-gray-900">{module.name}</h3>
                                <p className="text-gray-600">{module.description}</p>
                              </div>
                            </div>

                            <div className="mb-6">
                              <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                                <Zap className="w-5 h-5 mr-2 text-orange-600" />
                                Hauptfunktionen
                              </h4>
                              <div className="grid grid-cols-1 gap-3">
                                {module.features.map((feature, index) => (
                                  <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center"
                                  >
                                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                                    <span className="text-gray-700">{feature}</span>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Interactive Module Visualization */}
                          <div>
                            {/* 365 Total Backup Visualization */}
                            {module.id === 'total-backup' && (
                              <div className="bg-gradient-to-br from-orange-900 to-red-900 rounded-2xl p-6 text-white">
                                <h4 className="text-xl font-semibold mb-4 flex items-center">
                                  <HardDrive className="w-5 h-5 mr-2 text-orange-400" />
                                  M365 Backup Status
                                </h4>
                                <div className="space-y-4">
                                  {/* Backup Progress */}
                                  <div className="space-y-3">
                                    {[
                                      { service: 'Exchange', progress: 100, color: 'bg-green-500' },
                                      { service: 'SharePoint', progress: 85, color: 'bg-red-500' },
                                      { service: 'OneDrive', progress: 92, color: 'bg-purple-500' },
                                      { service: 'Teams', progress: 78, color: 'bg-orange-500' }
                                    ].map((item, i) => (
                                      <div key={i} className="bg-gray-800 rounded-lg p-3">
                                        <div className="flex justify-between text-sm mb-2">
                                          <span>{item.service}</span>
                                          <span>{item.progress}%</span>
                                        </div>
                                        <div className="w-full bg-gray-700 rounded-full h-2">
                                          <motion.div
                                            className={`${item.color} h-2 rounded-full`}
                                            initial={{ width: '0%' }}
                                            animate={{ width: `${item.progress}%` }}
                                            transition={{ delay: i * 0.2, duration: 1 }}
                                          />
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                  
                                  {/* Storage Info */}
                                  <div className="bg-gray-800 rounded-lg p-3 text-center">
                                    <div className="text-xl font-bold text-orange-400">Unlimited</div>
                                    <div className="text-xs text-gray-400">Backup Storage</div>
                                    <div className="text-xs text-gray-300 mt-1">Aktuell: 2.8 TB</div>
                                  </div>
                                </div>
                              </div>
                            )}

                            {/* Security Awareness Visualization */}
                            {module.id === 'security-awareness' && (
                              <div className="bg-gradient-to-br from-emerald-900 to-red-900 rounded-2xl p-6 text-white">
                                <h4 className="text-xl font-semibold mb-4 flex items-center">
                                  <GraduationCap className="w-5 h-5 mr-2 text-emerald-400" />
                                  Training Fortschritt
                                </h4>
                                <div className="space-y-4">
                                  {/* Phishing Test Results */}
                                  <div className="bg-gray-800 rounded-xl p-4">
                                    <div className="text-sm mb-3">Letzte Phishing-Simulation:</div>
                                    <div className="grid grid-cols-2 gap-4">
                                      <div className="text-center">
                                        <div className="text-2xl font-bold text-red-400">15%</div>
                                        <div className="text-xs text-gray-400">Gefallen</div>
                                      </div>
                                      <div className="text-center">
                                        <div className="text-2xl font-bold text-green-400">85%</div>
                                        <div className="text-xs text-gray-400">Erkannt</div>
                                      </div>
                                    </div>
                                  </div>
                                  
                                  {/* Training Progress */}
                                  <div className="space-y-2">
                                    {[
                                      { dept: 'IT', score: 95 },
                                      { dept: 'HR', score: 78 },
                                      { dept: 'Sales', score: 65 },
                                      { dept: 'Finance', score: 88 }
                                    ].map((dept, i) => (
                                      <div key={i} className="flex items-center justify-between">
                                        <span className="text-sm w-16">{dept.dept}</span>
                                        <div className="flex-1 mx-3">
                                          <div className="w-full bg-gray-700 rounded-full h-2">
                                            <motion.div
                                              className="bg-gradient-to-r from-scaleit-purple to-scaleit-red h-2 rounded-full"
                                              initial={{ width: '0%' }}
                                              animate={{ width: `${dept.score}%` }}
                                              transition={{ delay: i * 0.1 }}
                                            />
                                          </div>
                                        </div>
                                        <span className="text-sm w-8 text-right">{dept.score}%</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            )}

                            {/* Permission Management Visualization */}
                            {module.id === 'permission-management' && (
                              <div className="bg-gradient-to-br from-yellow-900 to-orange-900 rounded-2xl p-6 text-white">
                                <h4 className="text-xl font-semibold mb-4 flex items-center">
                                  <Users className="w-5 h-5 mr-2 text-yellow-400" />
                                  Berechtigungs-Audit
                                </h4>
                                <div className="space-y-4">
                                  {/* Permission Overview */}
                                  <div className="grid grid-cols-2 gap-4 text-center">
                                    <div className="bg-gray-800 rounded-lg p-3">
                                      <div className="text-xl font-bold text-yellow-400">247</div>
                                      <div className="text-xs text-gray-400">Aktive Nutzer</div>
                                    </div>
                                    <div className="bg-gray-800 rounded-lg p-3">
                                      <div className="text-xl font-bold text-red-400">23</div>
                                      <div className="text-xs text-gray-400">Überprivilegiert</div>
                                    </div>
                                  </div>
                                  
                                  {/* Risk Assessment */}
                                  <div className="bg-gray-800 rounded-xl p-4">
                                    <div className="text-sm mb-3">Risiko-Assessment:</div>
                                    <div className="space-y-2">
                                      <div className="flex justify-between items-center">
                                        <span className="text-xs">Niedrig</span>
                                        <div className="w-20 bg-green-500 h-2 rounded"></div>
                                        <span className="text-xs">180</span>
                                      </div>
                                      <div className="flex justify-between items-center">
                                        <span className="text-xs">Mittel</span>
                                        <div className="w-12 bg-yellow-500 h-2 rounded"></div>
                                        <span className="text-xs">44</span>
                                      </div>
                                      <div className="flex justify-between items-center">
                                        <span className="text-xs">Hoch</span>
                                        <div className="w-6 bg-red-500 h-2 rounded"></div>
                                        <span className="text-xs">23</span>
                                      </div>
                                    </div>
                                  </div>
                                  
                                  {/* Cleanup Suggestions */}
                                  <div className="text-center text-xs">
                                    <div className="text-orange-400 font-semibold">Auto-Cleanup verfügbar</div>
                                    <div className="text-gray-400">67 ungenutzte Berechtigungen erkannt</div>
                                  </div>
                                </div>
                              </div>
                            )}

                            {/* Plan Availability */}
                            <div className="mt-6">
                              <h5 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                                <Shield className="w-4 h-4 mr-2 text-red-600" />
                                Verfügbar in Plänen
                              </h5>
                              <div className="flex space-x-2">
                                {[1, 2, 3, 4].map((planId) => {
                                  const isIncluded = module.plans.includes(planId);
                                  return (
                                    <div
                                      key={planId}
                                      className={`w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold transition-all duration-300 ${
                                        isIncluded 
                                          ? 'bg-orange-500 text-white ring-2 ring-orange-300' 
                                          : 'bg-gray-200 text-gray-400'
                                      }`}
                                    >
                                      {planId}
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Fourth Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {modules.slice(9, 12).map((module, index) => {
                const IconComponent = module.icon;
                return (
                  <div key={module.id} className="relative">
                    {/* Plan indicators outside - positioned above the tile */}
                    <div className="absolute -top-3 -right-3 z-10 flex flex-wrap gap-1">
                      {[1, 2, 3, 4].map((planId) => {
                        const isIncluded = module.plans.includes(planId);
                        const planColors: Record<number, string> = {
                          1: isIncluded ? 'bg-teal-500' : 'bg-gray-400/30',
                          2: isIncluded ? 'bg-red-600' : 'bg-gray-400/30',
                          3: isIncluded ? 'bg-orange-500' : 'bg-gray-400/30',
                          4: isIncluded ? 'bg-yellow-500' : 'bg-gray-400/30'
                        };
                        return (
                          <div
                            key={planId}
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white ${planColors[planId]} border-2 border-white shadow-lg`}
                            title={`Plan ${planId}${isIncluded ? ' - Enthalten' : ' - Nicht enthalten'}`}
                          >
                            {planId}
                          </div>
                        );
                      })}
                    </div>

                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      onClick={() => setActiveModule(activeModule === module.id ? '' : module.id)}
                      className={`relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:scale-105 bg-gradient-to-br ${module.color} ${
                        activeModule === module.id
                          ? 'ring-4 ring-red-300 shadow-2xl'
                          : 'hover:shadow-xl'
                      } w-full h-48 flex items-center justify-center shadow-lg`}
                    >
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-4 right-4 w-16 h-16 border border-white/20 rounded-full"></div>
                        <div className="absolute bottom-4 left-4 w-8 h-8 border border-white/20 rounded-full"></div>
                        <div className="absolute top-1/2 left-1/2 w-12 h-12 border border-white/10 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                      </div>
                      
                      <div className="text-white text-center relative z-10">
                        <div className="mb-4 transform hover:scale-110 transition-transform duration-200">
                          <IconComponent className="w-10 h-10 mx-auto mb-3 text-white drop-shadow-lg" />
                        </div>
                        <h3 className="text-lg font-bold mb-2 drop-shadow-md">{module.name}</h3>
                        <p className="text-sm opacity-90 text-white line-clamp-3 drop-shadow-sm">
                          {module.description}
                        </p>
                      </div>
                      
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-white/0 hover:bg-white/10 transition-colors duration-300 rounded-2xl"></div>
                    </motion.button>
                  </div>
                );
              })}
            </div>

            {/* Details for fourth row */}
            <AnimatePresence>
              {modules.slice(9, 12).some(module => module.id === activeModule) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5 }}
                  className="overflow-hidden"
                >
                  {modules.slice(9, 12).map((module) => {
                    if (module.id !== activeModule) return null;
                    const IconComponent = module.icon;
                    
                    return (
                      <div
                        key={module.id}
                        className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-2xl border border-gray-100"
                      >
                        <div className="grid lg:grid-cols-2 gap-8">
                          {/* Module Info */}
                          <div>
                            <div className="flex items-center mb-6">
                              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${module.color} flex items-center justify-center mr-4`}>
                                <IconComponent className="w-8 h-8 text-white" />
                              </div>
                              <div>
                                <h3 className="text-3xl font-bold text-gray-900">{module.name}</h3>
                                <p className="text-gray-600">{module.description}</p>
                              </div>
                            </div>

                            <div className="mb-6">
                              <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                                <Zap className="w-5 h-5 mr-2 text-orange-600" />
                                Hauptfunktionen
                              </h4>
                              <div className="grid grid-cols-1 gap-3">
                                {module.features.map((feature, index) => (
                                  <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center"
                                  >
                                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                                    <span className="text-gray-700">{feature}</span>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Interactive Module Visualization */}
                          <div>
                            {/* DMARC Reporting Visualization */}
                            {module.id === 'dmarc-reporting' && (
                              <div className="bg-gradient-to-br from-pink-900 to-purple-900 rounded-2xl p-6 text-white">
                                <h4 className="text-xl font-semibold mb-4 flex items-center">
                                  <FileSearch className="w-5 h-5 mr-2 text-pink-400" />
                                  DMARC Analytics
                                </h4>
                                <div className="space-y-4">
                                  {/* Authentication Status */}
                                  <div className="grid grid-cols-3 gap-2 text-xs">
                                    <div className="bg-green-700 rounded p-2 text-center">
                                      <CheckCircle className="w-4 h-4 mx-auto mb-1" />
                                      <div>SPF</div>
                                      <div className="text-green-300">Pass</div>
                                    </div>
                                    <div className="bg-green-700 rounded p-2 text-center">
                                      <CheckCircle className="w-4 h-4 mx-auto mb-1" />
                                      <div>DKIM</div>
                                      <div className="text-green-300">Pass</div>
                                    </div>
                                    <div className="bg-green-700 rounded p-2 text-center">
                                      <CheckCircle className="w-4 h-4 mx-auto mb-1" />
                                      <div>DMARC</div>
                                      <div className="text-green-300">Pass</div>
                                    </div>
                                  </div>
                                  
                                  {/* Domain Reputation */}
                                  <div className="bg-gray-800 rounded-xl p-4">
                                    <div className="text-sm mb-3">Domain Reputation Score:</div>
                                    <div className="flex items-center">
                                      <div className="flex-1 bg-gray-700 rounded-full h-3 mr-3">
                                        <motion.div
                                          className="bg-gradient-to-r from-scaleit-purple to-scaleit-red h-3 rounded-full"
                                          initial={{ width: '0%' }}
                                          animate={{ width: '92%' }}
                                          transition={{ duration: 2 }}
                                        />
                                      </div>
                                      <span className="text-lg font-bold text-scaleit-red">92/100</span>
                                    </div>
                                  </div>
                                  
                                  {/* Weekly Report */}
                                  <div className="bg-gray-800 rounded-lg p-3">
                                    <div className="text-xs text-gray-400 mb-2">Diese Woche:</div>
                                    <div className="grid grid-cols-2 gap-4 text-center">
                                      <div>
                                        <div className="text-lg font-bold text-pink-400">15.2k</div>
                                        <div className="text-xs text-gray-400">E-Mails geprüft</div>
                                      </div>
                                      <div>
                                        <div className="text-lg font-bold text-green-400">0</div>
                                        <div className="text-xs text-gray-400">Spoofing-Versuche</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}

                            {/* AI Cyber Assistant Visualization */}
                            {module.id === 'ai-cyber-assistant' && (
                              <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-2xl p-6 text-white">
                                <h4 className="text-xl font-semibold mb-4 flex items-center">
                                  <Brain className="w-5 h-5 mr-2 text-indigo-400" />
                                  KI-Assistent Dashboard
                                </h4>
                                <div className="space-y-4">
                                  {/* AI Processing */}
                                  <div className="bg-gray-800 rounded-xl p-4">
                                    <div className="flex items-center justify-between mb-3">
                                      <span className="text-sm">KI-Analyse aktiv</span>
                                      <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                        className="w-4 h-4 border-2 border-indigo-400 border-t-transparent rounded-full"
                                      />
                                    </div>
                                    <div className="grid grid-cols-3 gap-2 text-xs">
                                      <div className="text-center">
                                        <div className="text-lg font-bold text-red-400">234</div>
                                        <div className="text-gray-400">Empfänger validiert</div>
                                      </div>
                                      <div className="text-center">
                                        <div className="text-lg font-bold text-green-400">12</div>
                                        <div className="text-gray-400">Teams-Scans</div>
                                      </div>
                                      <div className="text-center">
                                        <div className="text-lg font-bold text-purple-400">5</div>
                                        <div className="text-gray-400">Incidents analysiert</div>
                                      </div>
                                    </div>
                                  </div>
                                  
                                  {/* AI Confidence */}
                                  <div className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                      <span>Threat Detection</span>
                                      <span className="text-scaleit-red">98.7%</span>
                                    </div>
                                    <div className="w-full bg-gray-700 rounded-full h-2">
                                      <motion.div
                                        className="bg-gradient-to-r from-scaleit-purple to-scaleit-black h-2 rounded-full"
                                        initial={{ width: '0%' }}
                                        animate={{ width: '98.7%' }}
                                        transition={{ duration: 2 }}
                                      />
                                    </div>
                                  </div>
                                  
                                  {/* Learning Status */}
                                  <div className="bg-gradient-to-r from-scaleit-black to-scaleit-gray rounded-lg p-3 text-center">
                                    <Bot className="w-8 h-8 mx-auto mb-2 text-scaleit-red" />
                                    <div className="text-sm">Kontinuierliches Lernen aktiv</div>
                                    <div className="text-xs text-gray-300">+2.3% Genauigkeit diese Woche</div>
                                  </div>
                                </div>
                              </div>
                            )}

                            {/* Plan Availability */}
                            <div className="mt-6">
                              <h5 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                                <Shield className="w-4 h-4 mr-2 text-red-600" />
                                Verfügbar in Plänen
                              </h5>
                              <div className="flex space-x-2">
                                {[1, 2, 3, 4].map((planId) => {
                                  const isIncluded = module.plans.includes(planId);
                                  return (
                                    <div
                                      key={planId}
                                      className={`w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold transition-all duration-300 ${
                                        isIncluded 
                                          ? 'bg-orange-500 text-white ring-2 ring-orange-300' 
                                          : 'bg-gray-200 text-gray-400'
                                      }`}
                                    >
                                      {planId}
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}




