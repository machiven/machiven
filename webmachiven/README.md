# Deploy de machiven.com sin hosting (gratis)

Este sitio está listo para desplegar en servicios gratuitos sin necesidad de exponer código en tu GitHub personal.

## Opción recomendada: Netlify Drag & Drop (sin GitHub, gratis)
La forma más simple para clientes: subes los archivos directamente y conectas el dominio.

### Paso 1: Deploy en Netlify
1. Ve a https://app.netlify.com/drop
2. Arrastra toda la carpeta `webmachiven` (o comprime en ZIP y arrastra el .zip)
3. Netlify te da una URL temporal como `random-name-123456.netlify.app`
4. Crea cuenta gratuita para mantener el sitio activo permanentemente
5. En el dashboard del sitio, ve a "Domain settings" > "Add custom domain" > escribe `machiven.com`

### Paso 2: Configurar DNS en GoDaddy
1. Entra a GoDaddy > Mis productos > machiven.com > DNS
2. **Elimina** cualquier registro A o CNAME existente para `@` y `www`
3. Agrega estos registros:
   - **Tipo A** | **Nombre: @** | **Valor: 75.2.60.5** (IP de Netlify)
   - **Tipo CNAME** | **Nombre: www** | **Valor: [tu-sitio].netlify.app** (copia el que te dio Netlify)
4. Guarda y espera propagación (15 min a 24h)
5. En Netlify, ve a Domain settings > HTTPS y activa "Force HTTPS"

**Listo.** El sitio estará en machiven.com sin costo, sin GitHub visible, con HTTPS automático.

---

## Alternativa: Vercel Drag & Drop (similar a Netlify)
1. Ve a https://vercel.com/new
2. Arrastra la carpeta `webmachiven` completa
3. Crea cuenta gratuita
4. En Settings > Domains, agrega `machiven.com`
5. Vercel te da instrucciones de DNS (similar a Netlify):
   - **A record @** → 76.76.21.21
   - **CNAME www** → cname.vercel-dns.com

---

## Si el cliente prefiere su propia cuenta
- Crea una cuenta de Netlify o Vercel con el correo del cliente
- Transfiere el sitio a esa cuenta (Netlify/Vercel permiten transferencias)
- El cliente puede editar el sitio después subiendo nuevas versiones por drag & drop

### Prerrequisitos
- Dominio: machiven.com en GoDaddy
- Cuenta de Netlify o Vercel (gratuita, se crea en 1 min)


## Personalizar antes de subir
1. **Actualiza contactos** en [index.html](index.html):
   - Busca `https://wa.me/1234567890` y cambia por el WhatsApp real (formato: 52 + código + número, sin espacios)
   - Busca `sales@machiven.com` y confirma el correo
   - Busca `+52 (81) 0000-0000` y actualiza teléfono
2. **Reemplaza el logo**: sustituye [assets/img/logo-placeholder.svg](assets/img/logo-placeholder.svg) por el logo oficial (PNG, SVG o JPG)
3. **Dirección física**: en la sección "Visit us" en [index.html](index.html), actualiza `Av. Industrial 123, Monterrey, NL` y el link de Maps
4. **Idioma por defecto**: Si quieres español por defecto, en [assets/js/main.js](assets/js/main.js) cambia `applyTranslations('en')` por `applyTranslations('es')`

---

## Hosting de pago (si el cliente quiere cPanel)
Si el cliente prefiere comprar hosting tradicional en GoDaddy:

### cPanel (File Manager)
1. Entra a tu cuenta de GoDaddy y abre tu producto de Hosting > botón "Admin" para acceder a cPanel.
2. En cPanel, abre "File Manager".
3. En el árbol de carpetas, entra a `public_html/` (es la raíz del sitio).
4. Haz clic en "Upload" y sube todo el contenido de este proyecto:
   - `index.html`
   - `assets/` (todas sus subcarpetas: `css/`, `js/`, `img/`)
5. Verifica que `index.html` quedó dentro de `public_html/` (no dentro de `assets/`).
6. Abre https://machiven.com para comprobar. Puede tomar unos minutos si recién apuntaste el dominio.

### FTP (FileZilla)
1. En cPanel, busca tus credenciales FTP: "FTP Accounts" y anota Host, Usuario, Contraseña.
   - Host usualmente es tu dominio (machiven.com) o la IP compartida del servidor.
2. Abre FileZilla:
   - Host: `machiven.com`
   - Usuario: tu usuario FTP
   - Contraseña: tu contraseña FTP
   - Puerto: 21 (por defecto)
3. Conéctate y navega al directorio `public_html/`.
4. Arrastra y suelta el contenido del proyecto a `public_html/`.
5. Prueba en https://machiven.com.

---

## Soporte y solución de problemas
Si algo no carga:
- Archivos están en `public_html/` y no en una subcarpeta.
- `index.html` existe y es el nombre exacto.
- DNS apuntan correctamente.
- Limpia caché del navegador o prueba en modo incognito.
- Espera propagación DNS (hasta 24h).
