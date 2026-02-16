import type { CookieConsentConfig } from 'vanilla-cookieconsent';

const pluginConfig: CookieConsentConfig = {
  guiOptions: {
    consentModal: {
      layout: 'box',
      position: 'bottom right',
      equalWeightButtons: true,
      flipButtons: false,
    },
    preferencesModal: {
      layout: 'box',
      position: 'left',
      equalWeightButtons: true,
      flipButtons: false,
    },
  },

  onFirstConsent: function () {
    console.log('onFirstAction fired');
  },

  onConsent: function ({ }) {
    console.log('onConsent fired ...');
  },

  onChange: function ({  }) {
    console.log('onChange fired ...');
  },

  categories: {
    necessary: {
      readOnly: true,
      enabled: true,
    },
    analytics: {
      autoClear: {
        cookies: [
          {
            name: /^(_ga|_gid)/,
          },
        ],
      },
    },
  },

  language: {
    default: 'it',

    translations: {
      it: {
        consentModal: {
          title: 'Ciao viaggiatore!',
          description:
            'Questo sito utilizza cookie di tracciamento per capire come lo utilizzi. Il tracciamento sarà abilitato solo se lo accetti esplicitamente. <a href="/privacy-policy" data-cc="show-preferencesModal" class="cc__link">Gestisci preferenze</a>',
          acceptAllBtn: 'Accetta tutti',
          acceptNecessaryBtn: 'Rifiuta tutti',
          showPreferencesBtn: 'Gestisci preferenze',
          footer: `<a href="/privacy-policy">Privacy Policy</a>`,
        },
        preferencesModal: {
          title: 'Preferenze sui cookie',
          acceptAllBtn: 'Accetta tutti',
          acceptNecessaryBtn: 'Rifiuta tutti',
          savePreferencesBtn: 'Salva preferenze',
          closeIconLabel: 'Chiudi',
          sections: [
            {
              title: 'Uso dei cookie',
              description:
                'Utilizziamo i cookie per assicurare le funzionalità di base del sito e migliorare la tua esperienza online. Puoi scegliere per ogni categoria se abilitarli. Per maggiori dettagli leggi la <a href="/privacy-policy" class="cc__link">privacy policy</a> completa.',
            },
            {
              title: 'Cookie strettamente necessari',
              description: 'Questi cookie sono essenziali per il funzionamento del sito.',
              linkedCategory: 'necessary',
            },
            {
              title: 'Cookie di performance e analisi',
              linkedCategory: 'analytics',
              cookieTable: {
                headers: {
                  name: 'Nome',
                  domain: 'Servizio',
                  description: 'Descrizione',
                  expiration: 'Scadenza',
                },
                body: [
                  {
                    name: '_ga',
                    domain: 'Google Analytics',
                    description: 'Usato da Google Analytics per distinguere gli utenti.',
                    expiration: '2 anni',
                  },
                  {
                    name: '_gid',
                    domain: 'Google Analytics',
                    description: 'Conserva e aggiorna un valore univoco per ogni pagina visitata.',
                    expiration: '24 ore',
                  },
                ],
              },
            },
            {
              title: 'Ulteriori informazioni',
              description:
                'Per qualsiasi domanda sulla nostra policy sui cookie e sulle tue scelte, <a class="cc__link" href="/contatti">contattaci</a>.',
            },
          ],
        },
      },
    },
  },
};

export default pluginConfig;
