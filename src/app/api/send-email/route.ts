import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Nodemailer Transporter konfigurieren
const createTransporter = () => {
  // Für Produktionsumgebung mit echtem SMTP
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true für 465, false für andere Ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }
  
  // Für Entwicklung - Ethereal Test Account
  return nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: 'ethereal.user@ethereal.email',
      pass: 'ethereal.pass'
    }
  });
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, company, interest, message, cart } = body;

    // Warenkorb-Zusammenfassung erstellen
    let cartSummary = '';
    let totalPrice = 0;
    
    if (cart && cart.length > 0) {
      cartSummary = '\n\n=== PRODUKTANFRAGE ===\n';
      
      cart.forEach((item: any) => {
        cartSummary += `\n${item.name}`;
        if (item.users) cartSummary += ` (${item.users} User)`;
        if (item.clients) cartSummary += ` (${item.clients} Clients)`;
        if (item.pieces) cartSummary += ` (${item.pieces} Stück)`;
        cartSummary += `\nPreis: €${item.price.toFixed(2)}`;
        if (item.isAutoAdded) cartSummary += ' (automatisch hinzugefügt)';
        cartSummary += `\nBeschreibung: ${item.description}\n`;
        totalPrice += item.price;
      });
      
      cartSummary += `\nGESAMTSUMME: €${totalPrice.toFixed(2)}`;
      cartSummary += '\n\n=== ENDE PRODUKTANFRAGE ===';
    }

    // E-Mail-Inhalt erstellen
    const emailContent = `
Neue Kundenanfrage über die Website:

Name: ${firstName} ${lastName}
E-Mail: ${email}
Unternehmen: ${company || 'Nicht angegeben'}
Interesse: ${interest || 'Nicht angegeben'}

Nachricht:
${message}

${cartSummary}

---
Diese E-Mail wurde automatisch über das Kontaktformular der ScaleITS Website gesendet.
Antworten Sie direkt an: ${email}
    `;

    // HTML Version für bessere Formatierung
    const emailHtml = `
      <h2>Neue Kundenanfrage über die Website</h2>
      
      <h3>Kontaktdaten:</h3>
      <ul>
        <li><strong>Name:</strong> ${firstName} ${lastName}</li>
        <li><strong>E-Mail:</strong> <a href="mailto:${email}">${email}</a></li>
        <li><strong>Unternehmen:</strong> ${company || 'Nicht angegeben'}</li>
        <li><strong>Interesse:</strong> ${interest || 'Nicht angegeben'}</li>
      </ul>

      <h3>Nachricht:</h3>
      <p>${message.replace(/\n/g, '<br>')}</p>

      ${cart && cart.length > 0 ? `
        <h3 style="color: #059669;">🛒 Produktanfrage</h3>
        <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; border-left: 4px solid #059669;">
          ${cart.map((item: any) => `
            <div style="background: white; padding: 15px; margin-bottom: 10px; border-radius: 6px; border: 1px solid #d1fae5;">
              <h4 style="margin: 0 0 8px 0; color: #065f46;">${item.name}</h4>
              <p style="margin: 0 0 8px 0; font-size: 14px; color: #6b7280;">${item.description}</p>
              <div style="font-size: 12px; color: #6b7280;">
                ${item.users ? `👥 ${item.users} User` : ''}
                ${item.clients ? `💻 ${item.clients} Clients` : ''}
                ${item.pieces ? `📦 ${item.pieces} Stück` : ''}
                ${item.isAutoAdded ? `<span style="background: #fef3c7; color: #92400e; padding: 2px 6px; border-radius: 12px; font-size: 10px;">AUTO</span>` : ''}
              </div>
              <div style="font-weight: bold; color: #059669; margin-top: 8px;">€${item.price.toFixed(2)}</div>
            </div>
          `).join('')}
          <div style="border-top: 2px solid #059669; padding-top: 15px; margin-top: 15px;">
            <div style="font-size: 18px; font-weight: bold; color: #059669;">
              Gesamtsumme: €${totalPrice.toFixed(2)}
            </div>
          </div>
        </div>
      ` : ''}

      <hr style="margin: 30px 0;">
      <p style="font-size: 12px; color: #6b7280;">
        Diese E-Mail wurde automatisch über das Kontaktformular der ScaleITS Website gesendet.<br>
        Antworten Sie direkt an: <a href="mailto:${email}">${email}</a>
      </p>
    `;

    // E-Mail senden
    const transporter = createTransporter();
    
    const mailOptions = {
      from: process.env.SMTP_FROM || 'noreply@scaleits.de',
      to: process.env.SMTP_TO || 'sales@scaleits.de',
      replyTo: email,
      subject: `Neue Anfrage von ${firstName} ${lastName}${cart && cart.length > 0 ? ' (Produktanfrage)' : ''}`,
      text: emailContent,
      html: emailHtml
    };

    const info = await transporter.sendMail(mailOptions);
    
    console.log('E-Mail erfolgreich gesendet:', info.messageId);
    console.log('Preview URL (falls Ethereal):', nodemailer.getTestMessageUrl(info));

    return NextResponse.json({ 
      success: true, 
      message: 'E-Mail erfolgreich versendet',
      messageId: info.messageId
    });

  } catch (error) {
    console.error('Fehler beim Versenden der E-Mail:', error);
    return NextResponse.json(
      { success: false, message: 'Fehler beim Versenden der E-Mail' },
      { status: 500 }
    );
  }
}
