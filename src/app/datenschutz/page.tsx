'use client';

import { useState, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { ArrowLeft, Shield, Eye, Lock, FileText, Users, Globe, AlertTriangle } from 'lucide-react';

export default function DatenschutzPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleSectionClick = useCallback((sectionId: string) => {
    setActiveSection(activeSection === sectionId ? null : sectionId);
  }, [activeSection]);

  const sections = useMemo(() => [
    {
      id: 'overview',
      title: 'Datenschutz',
      subtitle: 'Datenschutzerklärung',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      id: 'responsible',
      title: 'Wer ist verantwortlich?',
      subtitle: 'Verantwortlicher für die Datenverarbeitung',
      icon: <Users className="w-8 h-8" />,
      color: 'from-green-500 to-teal-600'
    },
    {
      id: 'data-processing',
      title: 'Wie werden meine Daten verarbeitet?',
      subtitle: 'Einzelne Verarbeitungsvorgänge',
      icon: <Eye className="w-8 h-8" />,
      color: 'from-purple-500 to-indigo-600'
    },
    {
      id: 'rights',
      title: 'Welche Rechte habe ich?',
      subtitle: 'Ihre Betroffenenrechte',
      icon: <Lock className="w-8 h-8" />,
      color: 'from-red-500 to-red-600'
    },
    {
      id: 'cookies',
      title: 'Cookies und Tracking',
      subtitle: 'Verwendung von Cookies',
      icon: <FileText className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500'
    }
  ], []);

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <Link
                href="/"
                className="inline-flex items-center text-scaleit-gray hover:text-scaleit-red transition-colors duration-200 mb-6"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Zurück zur Startseite
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-scaleit-red to-red-600 text-white rounded-full">
                  <Shield className="w-12 h-12" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-scaleit-black mb-6">
                <span className="text-scaleit-red">Datenschutz</span>
              </h1>
              <p className="text-xl text-scaleit-gray max-w-4xl mx-auto mb-8">
                Ihre Privatsphäre ist uns wichtig. Erfahren Sie, wie wir Ihre Daten schützen und verarbeiten.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quick Navigation */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6"
            >
              {sections.map((section, index) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                  onClick={() => handleSectionClick(section.id)}
                >
                  <div className="flex justify-center mb-4">
                    <div className={`p-3 bg-gradient-to-r ${section.color} text-white rounded-lg`}>
                      {section.icon}
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-scaleit-black mb-2">
                      {section.title}
                    </h3>
                    <p className="text-scaleit-gray text-sm">
                      {section.subtitle}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="prose prose-lg max-w-none"
            >

              {/* Introduction */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-scaleit-black mb-6">Datenschutzerklärung</h2>
                <p className="text-lg text-scaleit-gray leading-relaxed mb-6">
                  Wir freuen uns, dass Sie unsere Website besuchen. Der Schutz und die Sicherheit Ihrer persönlichen Informationen bei der Nutzung unserer Website ist für uns sehr wichtig. Wir möchten Sie daher an dieser Stelle darüber informieren, welche Ihrer personenbezogenen Daten wir beim Besuch unserer Website erfassen und für welche Zwecke diese verwendet werden.
                </p>
                <p className="text-lg text-scaleit-gray leading-relaxed">
                  Diese Datenschutzerklärung gilt für unser Internetangebot, welches unter dieser Domain sowie den verschiedenen Subdomains („unsere Website") erreichbar ist.
                </p>
              </div>

              {/* Widerspruch gegen Werbe-E-Mails */}
              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
                <h3 className="text-xl font-bold text-red-800 mb-4">Widerspruch gegen Werbe-E-Mails</h3>
                <p className="text-red-700">
                  Der Nutzung von im Rahmen der Impressumspflicht, des Datenschutzhinweises und sonstiger auf der Webseite veröffentlichten Kontaktdaten wird zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.
                </p>
              </div>

              {/* Responsible Party */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-scaleit-black mb-6">Wer ist verantwortlich und wie erreiche ich Sie?</h2>

                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold text-scaleit-black mb-4">Verantwortlicher</h3>
                  <p className="text-scaleit-gray mb-2">
                    für die Verarbeitung personenbezogener Daten im Sinne der EU-Datenschutz-Grundverordnung (DSGVO)
                  </p>
                  <div className="font-semibold text-scaleit-black">
                    ScaleITS GmbH<br />
                    Bgm. Finsterwalder Ring 23<br />
                    82515 Wolfratshausen
                  </div>
                </div>
              </div>

              {/* What is this about */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-scaleit-black mb-6">Worum geht es?</h2>
                <p className="text-lg text-scaleit-gray leading-relaxed mb-6">
                  Diese Datenschutzerklärung erfüllt die gesetzlichen Anforderungen an die Transparenz bei der Verarbeitung personenbezogener Daten. Dies sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen. Hierzu gehören beispielsweise Informationen wie Ihr Name, Ihr Alter, Ihre Anschrift, Ihre Telefonnummer, Ihr Geburtsdatum, Ihre E-Mail-Adresse, Ihre IP-Adresse oder das Nutzerverhalten beim Besuch einer Website. Informationen, bei denen wir keinen (oder nur mit einem unverhältnismäßigen Aufwand) Bezug zu Ihrer Person herstellen können, z.B. durch Anonymisierung, sind keine personenbezogenen Daten.
                </p>
                <p className="text-lg text-scaleit-gray leading-relaxed">
                  Die Verarbeitung von personenbezogenen Daten (bspw. das Erheben, das Abfragen, die Verwendung, die Speicherung oder die Übermittlung) bedarf immer einer gesetzlichen Grundlage und eines definierten Zwecks.
                </p>
                <p className="text-lg text-scaleit-gray leading-relaxed mt-4">
                  Gespeicherte personenbezogene Daten werden gelöscht, sobald der Zweck der Verarbeitung erreicht wurde und es keine rechtmäßigen Gründe für eine weitere Aufbewahrung der Daten gibt. Wir informieren Sie in den einzelnen Verarbeitungsvorgängen über die konkreten Speicherfristen bzw. Kriterien für die Speicherung. Unabhängig davon, speichern wir Ihre personenbezogenen in Einzelfällen zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen und bei Vorliegen gesetzlicher Aufbewahrungspflichten.
                </p>
              </div>

              {/* Who gets my data */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-scaleit-black mb-6">Wer bekommt meine Daten?</h2>
                <p className="text-lg text-scaleit-gray leading-relaxed mb-6">
                  Eine Übermittlung Ihrer personenbezogenen Daten an Dritte zu anderen als den im Folgenden aufgeführten Zwecken findet nicht statt.
                </p>
                <p className="text-lg text-scaleit-gray leading-relaxed mb-6">
                  Wir geben Ihre personenbezogenen Daten nur an Dritte weiter, wenn:
                </p>
                <ul className="list-disc list-inside text-scaleit-gray space-y-2 mb-6">
                  <li>Sie uns Ihre nach Art. 6 Abs. 1 lit. a DSGVO ausdrückliche Einwilligung dazu erteilt haben,</li>
                  <li>die Weitergabe nach Art. 6 Abs. 1 lit. f DSGVO zur Wahrung unserer berechtigten Interessen zulässig ist und kein Grund zur Annahme besteht, dass Sie ein überwiegendes schutzwürdiges Interesse an der Nichtweitergabe Ihrer Daten haben,</li>
                  <li>für den Fall, dass für die Weitergabe nach Art. 6 Abs. 1 lit. c DSGVO eine gesetzliche Verpflichtung besteht, sowie</li>
                  <li>dies gesetzlich zulässig und nach Art. 6 Abs. 1 lit. b DSGVO für die Abwicklung von Vertragsverhältnissen mit Ihnen erforderlich ist.</li>
                </ul>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
                  <h3 className="text-xl font-bold text-yellow-800 mb-4">Internationale Datenübermittlung</h3>
                  <p className="text-yellow-700 mb-4">
                    Um Ihre Daten zu schützen und uns gegebenenfalls eine Datenübermittlung in Drittländer (außerhalb der EU/des EWR) zu ermöglichen, haben wir Vereinbarungen zur Auftragsverarbeitung auf Grundlage der Standardvertragsklauseln der Europäischen Kommission abgeschlossen.
                  </p>
                  <p className="text-yellow-700">
                    Im Rahmen der in dieser Datenschutzerklärung beschriebenen Verarbeitungsvorgänge können personenbezogene Daten in die USA übermittelt werden. Insbesondere können US-Ermittlungsbehörden die US-Unternehmen zur Herausgabe bzw. Offenlegung personenbezogener Daten verpflichten, ohne dass die betroffenen Personen hiergegen wirksam gerichtlich vorgehen können.
                  </p>
                </div>
              </div>

              {/* Cookies */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-scaleit-black mb-6">Setzen Sie Cookies ein?</h2>
                <p className="text-lg text-scaleit-gray leading-relaxed mb-6">
                  Cookies sind kleine Textdateien, die im Rahmen Ihres Besuchs unserer Internetseiten von uns an den Browser Ihres Endgeräts gesendet und dort gespeichert werden. Alternativ zum Einsatz von Cookies können Informationen auch im lokalen Speicher (local storage) Ihres Browsers gespeichert werden. Einige Funktionen unserer Internetseite können ohne den Einsatz von Cookies bzw. local storage nicht angeboten werden (technisch notwendige Cookies). Andere Cookies ermöglichen uns hingegen verschiedene Analysen, sodass wir beispielsweise in der Lage sind, den von Ihnen verwendeten Browser bei einem erneuten Besuch unserer Webseite wiederzuerkennen und verschiedene Informationen an uns zu übermitteln (nicht notwendige Cookies).
                </p>
                <p className="text-lg text-scaleit-gray leading-relaxed">
                  Mithilfe von Cookies können wir unter anderem unser Internetangebot für Sie nutzerfreundlicher und effektiver gestalten, indem wir etwa Ihre Nutzung unserer Website nachvollziehen und Ihre bevorzugten Einstellungen (bspw. Länder- und Spracheneinstellungen) feststellen. Sofern Dritte über Cookies Informationen verarbeiten, erheben diese die Informationen direkt über Ihren Browser. Cookies richten auf Ihrem Endgerät keinen Schaden an. Sie können keine Programme ausführen und keine Viren enthalten.
                </p>
              </div>

              {/* Rights */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-scaleit-black mb-6">Welche Rechte habe ich?</h2>
                <p className="text-lg text-scaleit-gray leading-relaxed mb-6">
                  Unter den Voraussetzungen der gesetzlichen Vorschriften der Datenschutz-Grundverordnung (DSGVO) haben Sie als betroffene Person folgende Rechte:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-800 mb-3">Auskunft</h3>
                    <p className="text-blue-700 text-sm">Art. 15 DSGVO über die zu Ihrer Person gespeicherten Daten</p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-800 mb-3">Berichtigung</h3>
                    <p className="text-green-700 text-sm">Art. 16 DSGVO von unrichtigen oder unvollständigen Daten</p>
                  </div>
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-red-800 mb-3">Löschung</h3>
                    <p className="text-red-700 text-sm">Art. 17 DSGVO der bei uns gespeicherten Daten</p>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-purple-800 mb-3">Einschränkung</h3>
                    <p className="text-purple-700 text-sm">Art. 18 DSGVO der Verarbeitung</p>
                  </div>
                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-orange-800 mb-3">Datenübertragbarkeit</h3>
                    <p className="text-orange-700 text-sm">Art. 20 DSGVO Ihrer Daten</p>
                  </div>
                  <div className="bg-indigo-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-indigo-800 mb-3">Widerspruch</h3>
                    <p className="text-indigo-700 text-sm">Art. 21 DSGVO gegen die Verarbeitung</p>
                  </div>
                </div>

                <div className="mt-6 bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Weitere Rechte</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Widerruf Art. 7 Abs. 3 DSGVO Ihrer erteilten Einwilligung</li>
                    <li>• Beschwerde Art. 77 DSGVO bei einer Aufsichtsbehörde</li>
                  </ul>
                </div>
              </div>

              {/* Detailed Processing */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-scaleit-black mb-6">Wie werden meine Daten im Einzelnen verarbeitet?</h2>
                <p className="text-lg text-scaleit-gray leading-relaxed mb-6">
                  Nachfolgend informieren wir Sie über die einzelnen Verarbeitungsvorgänge, den Umfang und den Zweck der Datenverarbeitung, die Rechtsgrundlage, die Pflicht zur Bereitstellung Ihrer Daten und die jeweilige Speicherdauer. Eine automatisierte Entscheidung im Einzelfall, einschließlich Profiling findet nicht statt.
                </p>

                {/* Website Provision */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-scaleit-black mb-4">Bereitstellung der Website</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-scaleit-black">Art und Umfang der Verarbeitung</h4>
                      <p className="text-scaleit-gray">Bei Aufruf und Nutzung unserer Website erheben wir die personenbezogenen Daten, die Ihr Browser automatisch an unseren Server übermittelt.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-scaleit-black">Zweck und Rechtsgrundlage</h4>
                      <p className="text-scaleit-gray">Die Verarbeitung erfolgt zur Wahrung unseres überwiegenden berechtigten Interesses zur Anzeige unserer Website und Gewährleistung der Sicherheit und Stabilität auf Grundlage des Art. 6 Abs. lit. f DSGVO.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-scaleit-black">Speicherdauer</h4>
                      <p className="text-scaleit-gray">Die vorgenannten Daten werden für die Dauer der Anzeige der Website sowie – aus technischen Gründen – darüber hinaus für maximal 7 Tage gespeichert.</p>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-scaleit-black mb-4">Kontaktformular</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-scaleit-black">Art und Umfang der Verarbeitung</h4>
                      <p className="text-scaleit-gray">Im Rahmen der Kontaktaufnahme mit uns werden personenbezogene Daten erhoben.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-scaleit-black">Zweck und Rechtsgrundlage</h4>
                      <p className="text-scaleit-gray">Rechtsgrundlage für die Verarbeitung Ihrer personenbezogenen Daten in diesem Bewerbungsverfahren ist primär Art. 6 Abs. 1 lit. b) DSGVO.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-scaleit-black">Speicherdauer</h4>
                      <p className="text-scaleit-gray">Soweit Sie das Kontaktformular auf Grundlage Ihrer Einwilligung verwenden, speichern wir die erhobenen Daten jeder Anfrage für die Dauer von drei Jahren.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-scaleit-black mb-6">Präsenzen auf Social-Media-Plattformen</h2>
                <p className="text-lg text-scaleit-gray leading-relaxed mb-6">
                  Wir unterhalten auf den unten genannten Netzwerken sog. Fan-Pages bzw. Accounts oder Kanäle, um Ihnen auch innerhalb von sozialen Netzwerken Informationen und Angebote bereitzustellen.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-800 mb-3">Facebook-Seite</h3>
                    <p className="text-blue-700 text-sm mb-3">Meta Platforms Ireland Limited</p>
                    <a href="https://facebook.com/help/pages/insights" className="text-blue-600 hover:text-blue-800 text-sm">Insights Informationen</a>
                  </div>
                  <div className="bg-pink-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-pink-800 mb-3">Instagram-Seite</h3>
                    <p className="text-pink-700 text-sm mb-3">Meta Platforms Ireland Limited</p>
                    <a href="https://help.instagram.com/519522125107875" className="text-pink-600 hover:text-pink-800 text-sm">Datenschutzbestimmungen</a>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-800 mb-3">YouTube-Kanal</h3>
                    <p className="text-blue-700 text-sm mb-3">Google Ireland Limited</p>
                    <a href="https://policies.google.com/privacy" className="text-blue-600 hover:text-blue-800 text-sm">Datenschutzbestimmungen</a>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-800 mb-3">LinkedIn</h3>
                    <p className="text-blue-700 text-sm mb-3">LinkedIn Corporation</p>
                    <a href="https://www.linkedin.com/legal/privacy-policy" className="text-blue-600 hover:text-blue-800 text-sm">Datenschutzbestimmungen</a>
                  </div>
                </div>
              </div>

              {/* Technical Security */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-scaleit-black mb-6">Technik</h2>

                <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
                  <h3 className="text-xl font-bold text-green-800 mb-4">SSL/TLS-Verschlüsselung</h3>
                  <p className="text-green-700">
                    Diese Seite nutzt zur Gewährleistung der Sicherheit der Datenverarbeitung und zum Schutz der Übertragung vertraulicher Inhalte eine SSL-bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass in der Adresszeile des Browsers statt eines „http://" ein „https://" steht.
                  </p>
                </div>
              </div>

              {/* Services */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-scaleit-black mb-6">Verwendete Dienste</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-scaleit-black mb-3">Google Analytics</h3>
                    <p className="text-scaleit-gray text-sm mb-3">Webanalyse und Nutzerverhalten</p>
                    <a href="https://policies.google.com/privacy" className="text-scaleit-red hover:text-red-800 text-sm">Datenschutz</a>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-scaleit-black mb-3">Google Maps</h3>
                    <p className="text-scaleit-gray text-sm mb-3">Kartendarstellung und Anfahrtsbeschreibungen</p>
                    <a href="https://policies.google.com/privacy" className="text-scaleit-red hover:text-red-800 text-sm">Datenschutz</a>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-scaleit-black mb-3">Facebook Pixel</h3>
                    <p className="text-scaleit-gray text-sm mb-3">Conversion-Tracking und Zielgruppen</p>
                    <a href="https://www.facebook.com/privacy/explanation" className="text-scaleit-red hover:text-red-800 text-sm">Datenschutz</a>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-scaleit-black mb-3">TeamViewer</h3>
                    <p className="text-scaleit-gray text-sm mb-3">Fernwartung und Support</p>
                    <a href="https://www.teamviewer.com/de/datenschutzerklaerung/" className="text-scaleit-red hover:text-red-800 text-sm">Datenschutz</a>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-16 pt-8 border-t border-gray-200">
                <p className="text-scaleit-gray text-sm">
                  Diese Datenschutzerklärung wurde zuletzt aktualisiert im Juni 2025.
                </p>
                <p className="text-scaleit-gray text-sm mt-2">
                  Bei Fragen zu dieser Datenschutzerklärung oder zum Datenschutz allgemein können Sie uns gerne kontaktieren.
                </p>
              </div>

            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}