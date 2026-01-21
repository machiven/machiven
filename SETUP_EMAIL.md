# Configuración de Email Automático con Resend

## Pasos para configurar:

### 1. Crear cuenta en Resend
- Ve a https://resend.com
- Regístrate con tu email
- Verifica tu cuenta

### 2. Obtener API Key
- En el dashboard de Resend, ve a "API Keys"
- Copia tu API key (empieza con `re_`)

### 3. Añadir dominio en Resend
- En Resend Dashboard → "Domains"
- Click en "Add Domain"
- Ingresa `machiven.com`
- Resend te dará registros DNS para añadir

### 4. Configurar DNS para Resend
En tu registrador (GoDaddy o donde tengas machiven.com):
- Añade los registros DNS que Resend te proporciona (CNAME, DKIM, etc.)
- Espera a que se propague (5-15 minutos)
- En Resend, confirma cuando esté verificado

### 5. Agregar API Key a Supabase
En Supabase Dashboard:
1. Ve a Settings → Edge Functions → Secrets
2. Crea una variable: `RESEND_API_KEY` = `tu_api_key_de_resend`

### 6. Desplegar la Edge Function
```bash
cd c:\Users\cmsalazar\webmachiven
supabase functions deploy send-quote-email
```

Si supabase CLI no está instalado:
```bash
# Instalar Node.js primero si no lo tienes
# Luego:
npm install -g supabase
supabase login
supabase link --project-ref sggwlqpahbozwxbgyvnz
supabase functions deploy send-quote-email
```

### 7. ¡Listo!
Ahora cuando alguien envíe una cotización:
- El email se enviará automáticamente a `admin@machiven.com`
- Con un diseño profesional en formato HTML card
- El cliente no puede modificarlo

## Nota sobre costos:
- Resend: Gratis hasta 100 emails/día (3,000/mes)
- Supabase Edge Functions: Gratis hasta 500K invocaciones/mes

Esto es suficiente para casi cualquier sitio web.
