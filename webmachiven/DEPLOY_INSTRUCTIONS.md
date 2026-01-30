# Activar Email Automático - Instrucciones Paso a Paso

## ✅ Tienes todo listo:
- API Key Resend: `re_9hRJZAKR_9kpzcYQDUTLT2unKAZFzttjs`
- Edge Function creada en: `supabase/functions/send-quote-email/`
- Frontend actualizado para llamar la función

---

## 🚀 Pasos para activar (sin CLI):

### PASO 1: Agregar Secret a Supabase
1. Ve a https://supabase.com/dashboard
2. Selecciona tu proyecto **machiven**
3. En el menú lateral izquierdo → **Settings**
4. Click en **Edge Functions** (en el menú de Settings)
5. Click en el botón **"New Secret"** (o **"Add Secret"**)
6. Rellena:
   - **Name**: `RESEND_API_KEY`
   - **Value**: `re_9hRJZAKR_9kpzcYQDUTLT2unKAZFzttjs`
7. Click en **"Save"** o **"Add Secret"**

### PASO 2: Desplegar la Edge Function
1. En Supabase Dashboard → **Edge Functions** (en el menú lateral)
2. Click en **"Create a new function"** o busca `send-quote-email`
3. Si no ves la función listada, click en **"Deploy new function"**
4. Selecciona **"Via CLI"** (puedes intentar esto)
5. O simplemente copia el contenido del archivo:
   - Ruta local: `supabase/functions/send-quote-email/index.ts`
   - Copia todo el código
   - Pega en el editor de Supabase

**ALTERNATIVA MÁS FÁCIL:**
1. En Supabase Dashboard → **SQL Editor**
2. Crea un nuevo query (nuevo botón)
3. O ve a **Edge Functions** y busca "Create function"
4. Usa el **Via Editor** para copiar y pegar el código manualmente

---

## ✅ Cuando esté deployado:

El email se enviará automáticamente a `admin+quote@machiven.com` cuando alguien llene el formulario de cotización.

El email incluirá:
- Tu header personalizado (imagen de fondo)
- Información del cliente (nombre, email, teléfono, empresa)
- Detalles de la solicitud (tipo, producto)
- Mensaje del cliente
- Diseño profesional con tu azul #26384f
- Todo no-editable (es HTML puro)

---

## 📝 Resumen:

**Lo que ya hiciste:**
- ✅ Creaste cuenta en Resend
- ✅ Obtuviste API Key

**Lo que falta:**
1. ⏳ Agregar el secret `RESEND_API_KEY` en Supabase
2. ⏳ Desplegar la Edge Function

**Sin Node.js instalado, tienes 2 opciones:**
- Opción A: Usa "Via Editor" en Supabase (copia/pega código)
- Opción B: Instala Node.js primero, luego usa CLI

¿Cuál prefieres?
