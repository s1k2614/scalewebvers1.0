# E-Mail-Konfiguration Setup

## Für echte E-Mail-Versendung

Bearbeiten Sie die `.env.local` Datei und fügen Sie Ihre SMTP-Daten hinzu:

```
# Gmail Beispiel
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=ihr-email@gmail.com
SMTP_PASS=ihr-app-passwort
SMTP_FROM=noreply@scaleits.com
SMTP_TO=sales@scaleits.com
```

### Gmail Setup:
1. App-Passwort in Gmail erstellen (nicht das normale Passwort!)
2. 2-Faktor-Authentifizierung muss aktiviert sein
3. App-Passwort in Google-Konto > Sicherheit > App-Passwörter erstellen

### Andere E-Mail-Provider:
- **Outlook/Hotmail**: smtp-mail.outlook.com, Port 587
- **Yahoo**: smtp.mail.yahoo.com, Port 587
- **Geschäftliche E-Mail**: Fragen Sie Ihren Administrator

## Für Entwicklung/Test

Ohne Konfiguration wird automatisch ein Test-Account verwendet, der die E-Mails nur simuliert.

## Funktionen

✅ **Echte E-Mail-Versendung** mit Nodemailer
✅ **HTML-formatierte E-Mails** mit schöner Warenkorb-Darstellung
✅ **Automatische Weiterleitung** an sales@scaleits.com
✅ **Reply-To** auf Kundenmail für einfache Antworten
✅ **Fehlerbehandlung** und Logging

## Test

Nach dem Setup einfach das Kontaktformular verwenden - Sie erhalten dann echte E-Mails!
