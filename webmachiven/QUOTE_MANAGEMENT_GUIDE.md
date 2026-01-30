# Sistema de cotizaciones y gestión de solicitudes

## Cómo funciona actualmente

Cuando un cliente envía una cotización desde el sitio:
1. Se abre su cliente de correo con un email pre-formateado a `admin@machiven.com`
2. Se abre WhatsApp con el mensaje pre-formateado al número `+1 (305) 897-6773`
3. El asunto del correo sigue este formato: `Quote Request - Apellido, Nombre - Tipo - Fecha`

**Ejemplo:**
```
Quote Request - Smith, John - existing product - 2026-01-20
```

## Recomendaciones para gestión profesional

### Opción 1: Gmail + Google Drive (Gratis y simple)

**Configuración:**
1. Usa `admin@machiven.com` en Gmail
2. Crea carpetas/etiquetas automáticas:
   - `Quotes/Existing Products`
   - `Quotes/Sourcing`
   - `Quotes/Repairs`
3. Guarda PDFs en Google Drive con estructura:
   ```
   Machiven Quotes/
   ├── 2026/
   │   ├── 01-January/
   │   │   ├── Smith-John-existing-product-2026-01-20.pdf
   │   │   ├── Lopez-Ana-repair-2026-01-20.pdf
   ```

**Flujo de trabajo:**
1. Recibes correo con solicitud
2. Respondes al cliente con cotización
3. Guardas conversación como PDF (Gmail: ⋮ > Print > Save as PDF)
4. Subes a Google Drive con el nombre: `Apellido-Nombre-tipo-fecha.pdf`

**Ventajas:** Gratis, acceso desde cualquier lugar, buscable, sin costo adicional.

---

### Opción 2: Sistema CRM ligero (Airtable - Gratis hasta 1,200 registros/base)

**Configuración:**
1. Crea base de Airtable con campos:
   - `ID` (autoincremental)
   - `Date` (fecha)
   - `First Name`
   - `Last Name`
   - `Email`
   - `Phone`
   - `Company`
   - `Type` (dropdown: Existing/Find/Repair)
   - `Product/Request`
   - `Message`
   - `Status` (dropdown: New/In Progress/Quoted/Closed)
   - `Attachments` (para adjuntar PDF de respuesta)
   - `Notes`

2. Integra con Zapier o Make (automatización):
   - Trigger: nuevo correo en `admin@machiven.com`
   - Acción: crea registro en Airtable

**Flujo de trabajo:**
1. Correo llega → se registra automáticamente en Airtable
2. Respondes al cliente
3. Actualizas status a "Quoted"
4. Adjuntas PDF con la cotización enviada

**Ventajas:** Dashboard visual, seguimiento de pipeline, reportes, historial centralizado.

**Costo:** Gratis hasta 1,200 registros. Plan Plus $20/mes para más capacidad.

---

### Opción 3: Sistema de tickets (Notion - Gratis)

**Configuración:**
1. Crea base de datos en Notion con propiedades similares a Airtable
2. Usa formularios de Notion Forms (gratuito) para integración futura
3. Estructura:
   ```
   Machiven Quotes
   ├── Kanban Board (Status: New/In Progress/Sent/Closed)
   ├── Calendar View (por fecha)
   ├── Table View (todos los registros)
   ```

**Flujo de trabajo:**
1. Recibes correo
2. Copias info a Notion manualmente (o automatizas con Zapier)
3. Mueves tarjeta entre columnas según avanza
4. Adjuntas archivos directamente en Notion

**Ventajas:** Interface limpia, colaborativo si contratas equipo, templates, gratis ilimitado.

---

### Opción 4: Software de cotizaciones profesional (PandaDoc / Proposify)

**Para cuando escales:**
- Crea templates de cotizaciones con branding
- Cliente firma digitalmente
- Seguimiento de apertura (¿leyó la cotización?)
- Automatiza contratos

**Costo:** Desde $19-49/mes. Solo recomendado si manejas >20 cotizaciones/mes.

---

## Recomendación específica para empezar

**Usa Gmail + Google Drive + Hoja de cálculo de Google:**

1. **Email:** Maneja todo en Gmail con etiquetas
2. **Registro:** Crea una Google Sheet con estas columnas:
   ```
   | Date | Last Name | First Name | Email | Phone | Type | Product/Request | Status | PDF Link | Notes |
   ```
3. **PDFs:** Guarda en Drive: `Apellido-Nombre-tipo-YYYY-MM-DD.pdf`
4. **Actualizaciones:** Pega link del PDF en la hoja de cálculo

**Tiempo de setup:** 15 minutos  
**Costo:** $0  
**Escalabilidad:** Funciona hasta ~100 cotizaciones/mes

---

## Template para respuesta de cotización

Guarda esto como draft en Gmail para responder rápido:

**Asunto:** Re: Quote Request - [Apellido], [Nombre] - [Tipo] - [Fecha]

```
Hi [First Name],

Thank you for your quote request for [product/service].

Based on your specifications, here's what we can offer:

[DETAILS OF QUOTE]
- Equipment: [Name and specs]
- Condition: [New/Used/Refurbished]
- Price: [Amount] USD
- Delivery: [Timeline]
- Warranty: [Terms]
- Installation: [Included/Optional]

This quote is valid for 30 days from [Date].

Next steps:
1. Review the attached quote document
2. Let us know if you need any modifications
3. We can schedule a call to discuss details

Best regards,
Machiven LLC Team
+1 (305) 897-6773
admin@machiven.com
```

---

## Herramientas para generar PDFs profesionales

**Si necesitas crear PDFs de cotización con branding:**

1. **Canva** (gratis): Templates de invoice/quote, exporta a PDF
2. **Google Docs → PDF**: Crea template, rellena, descarga PDF
3. **LibreOffice Writer**: Gratis, templates profesionales
4. **PandaDoc Free Tier**: 1 template gratis

---

## Archivos a crear en Google Drive

```
Machiven/
├── Templates/
│   ├── Quote-Template-Existing-Product.docx
│   ├── Quote-Template-Sourcing.docx
│   ├── Quote-Template-Repair.docx
├── Quotes-2026/
│   ├── 01-January/
│   ├── 02-February/
│   └── ...
├── Tracking-Sheet.xlsx (Google Sheets)
```

---

## Automatización futura (cuando crezcas)

**Zapier Zap (desde $20/mes):**
1. Trigger: Gmail nuevo correo con subject "Quote Request"
2. Acción 1: Parsear contenido del correo
3. Acción 2: Crear fila en Google Sheets
4. Acción 3: Crear notificación en Slack/Discord
5. Acción 4: Enviar confirmación automática al cliente

**Make.com** (alternativa, más barato para uso ligero)

---

¿Te armo un template de Google Sheet y carpetas de Drive listas para usar?
