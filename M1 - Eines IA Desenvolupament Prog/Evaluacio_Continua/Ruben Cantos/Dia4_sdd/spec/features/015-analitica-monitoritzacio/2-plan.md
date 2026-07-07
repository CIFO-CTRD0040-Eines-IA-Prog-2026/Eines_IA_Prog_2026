# Plan: Analítica i Monitorització

## GA4 script

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX', { anonymize_ip: true });
</script>
```

## esdeveniments

Afegir al `scripts.js`:
- WhatsApp button click: `gtag('event', 'click_whatsapp')`
- Form submit: `gtag('event', 'submit_contact_form')`
- Phone click: `gtag('event', 'click_phone')`

## verificació

- Search Console: TXT record al DNS o fitxer HTML al root
- Business Profile: revisar que nom, adreça, telèfon coincideixin exactament
