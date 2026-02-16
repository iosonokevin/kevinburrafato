import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  email: string;
  message: string;
  language?: 'ITA' | 'ENG';
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  email,
  message
}) => {
  const heading = 'Nuovo messaggio dal sito';
  const labelName = 'Nome';
  const labelEmail = 'Email';
  const labelMessage = 'Messaggio';

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', lineHeight: '1.6', color: '#333' }}>
      <h2>{heading} – KevinBurrafato</h2>
      
      <table cellPadding={8} style={{ borderCollapse: 'collapse', marginTop: '20px' }}>
        <tbody>
          <tr>
            <td><strong>{labelName}:</strong></td>
            <td>{firstName}</td>
          </tr>
          <tr>
            <td><strong>{labelEmail}:</strong></td>
            <td>{email}</td>
          </tr>
          <tr>
            <td><strong>{labelMessage}:</strong></td>
            <td>{message}</td>
          </tr>
        </tbody>
      </table>

      <p style={{ marginTop: '30px', fontSize: '0.9em', color: '#666' }}>
        Questo messaggio è stato inviato tramite il modulo di contatto del sito KevinBurrafato.
      </p>
    </div>
  );
};


export default EmailTemplate;