# n8n Lead Notification Workflow

Purpose: receive a persisted lead from the portal API and send a WhatsApp alert through UZAPI.

Webhook path:

`AntonioJebrael`

Recommended node order:

1. `Webhook`
   Method: `POST`
   Path: `AntonioJebrael`
   Response mode: `On Received`

2. `Edit Fields`
   Keep these fields from the webhook body:
   - `name`
   - `email`
   - `service_interest`
   - `message`
   - `source`
   - `timestamp`
   Add:
   - `notification_target`: `{{$json.notification_target || "5521967757938"}}`
   - `whatsapp_text`: `={{ "Novo lead do portal%0A%0ANome: " + $json.name + "%0AEmail: " + $json.email + "%0AInteresse: " + $json.service_interest + "%0AMensagem: " + ($json.message || "Sem mensagem") + "%0AFonte: " + $json.source + "%0ATimestamp: " + $json.timestamp }}`

3. `HTTP Request`
   Purpose: send WhatsApp via UZAPI.
   Method: `POST`
   Authentication: your existing UZAPI credential or header-based token.
   Body must use the normalized fields from step 2.

Minimal request contract to preserve in the node:

```json
{
  "phone": "={{ $json.notification_target }}",
  "message": "={{ $json.whatsapp_text }}"
}
```

Required instance-level values to configure in n8n:

1. UZAPI base URL
2. UZAPI authentication token
3. Final endpoint path for text sending in your UZAPI installation

Expected inbound payload from the portal API:

```json
{
  "name": "Antonio",
  "email": "antonio@example.com",
  "service_interest": "Consultoria Técnica",
  "message": "Quero automatizar meu funil.",
  "source": "portal-autoridade",
  "timestamp": "2026-04-14T17:30:00.000Z",
  "notification_target": "5521967757938"
}
```

Notes:

1. Database persistence is no longer part of this workflow. The portal API persists first, then notifies `n8n`.
2. Keep the webhook lightweight so it can return quickly.
3. If UZAPI fails, let n8n log the error without affecting lead persistence in the portal.
