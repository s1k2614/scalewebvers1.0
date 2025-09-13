# 📧 E-Mail-Konfiguration für ScaleITS Website

## 🚀 **Aktuelle Lösung: Standard-E-Mail-Programm**

**✅ JETZT AKTIV:** Warenkorb-Anfragen öffnen das Standard-E-Mail-Programm des Users:
- **Empfänger:** sales@scaleits.de
- **Betreff:** "Anfrage aus dem Webshop - [Kundenname]"
- **Inhalt:** Alle Kontaktdaten + komplette Warenkorb-Liste mit Preisen

**Vorteile:**
- ✅ Funktioniert sofort ohne Konfiguration
- ✅ Kunde kann E-Mail vor dem Senden überprüfen/bearbeiten
- ✅ Verwendet das gewohnte E-Mail-Programm des Kunden
- ✅ Keine SMTP-Konfiguration erforderlich

---

## ⚙️ **Alternative: Automatischer E-Mail-Versand (SMTP)**

Für automatischen E-Mail-Versand ohne User-Interaktion:

### **1. Gmail-Konfiguration**

1. **Google-Konto öffnen:** https://myaccount.google.com/
2. **Sicherheit** → **2-Schritt-Verifizierung** aktivieren
3. **App-Passwörter** → **Neues App-Passwort** erstellen
4. **Name:** "ScaleITS Website"
5. **Passwort kopieren** (16 Zeichen)

**.env.local bearbeiten:**
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=ihre-gmail-adresse@gmail.com
SMTP_PASS=ihr-16-zeichen-app-passwort
SMTP_FROM=noreply@scaleits.de
SMTP_TO=sales@scaleits.de
```

### **2. Andere E-Mail-Provider**

**Microsoft Outlook/Hotmail:**
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=ihr-outlook-konto@outlook.com
SMTP_PASS=ihr-passwort
```

**Yahoo Mail:**
```env
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
SMTP_USER=ihr-yahoo-konto@yahoo.com
SMTP_PASS=ihr-app-passwort
```

**Geschäftliche E-Mail (Fragen Sie Ihren IT-Administrator):**
```env
SMTP_HOST=mail.ihre-domain.de
SMTP_PORT=587
SMTP_USER=ihr-konto@ihre-domain.de
SMTP_PASS=ihr-passwort
```

### **3. Professionelle E-Mail-Services**

**SendGrid (Empfohlen für Unternehmen):**
- Bis 100 E-Mails/Tag kostenlos
- Sehr zuverlässig
- API-basiert

**Mailgun:**
- Bis 5.000 E-Mails/Monat kostenlos
- Gut für Transaktions-E-Mails

---

## 🔄 **Zwischen den Modi wechseln**

**Aktuell:** Standard-E-Mail-Programm (keine Konfiguration nötig)

**Für automatischen Versand:**
1. SMTP-Daten in `.env.local` eintragen
2. In der Kontakt-Seite Code anpassen
3. Server neu starten

---

## 🎯 **Empfehlung**

**Für den Start:** Standard-E-Mail-Programm (funktioniert sofort)
**Für professionellen Betrieb:** SMTP-Konfiguration mit SendGrid oder Gmail

---

## 🧪 **Testen**

1. **Warenkorb füllen** im Webshop
2. **"Anfrage senden"** klicken
3. **Standard-E-Mail-Programm** öffnet sich automatisch
4. **E-Mail senden** mit einem Klick

**Funktioniert mit:**
- ✅ Outlook
- ✅ Apple Mail
- ✅ Thunderbird
- ✅ Gmail (im Browser)
- ✅ Alle anderen Standard-E-Mail-Programme
