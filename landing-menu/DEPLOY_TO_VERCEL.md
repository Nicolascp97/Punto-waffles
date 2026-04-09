# 🚀 Deploy a Vercel — Paso a Paso

Tu proyecto está 100% listo para Vercel. Sigue estos pasos:

---

## Paso 1: Pushear a GitHub

Si aún no lo has hecho, sube el código a tu repositorio:

```bash
cd "c:\Users\Nicolas CP\OneDrive\Documentos\NICO_agenteia\proyecto-waffles\landing-menu"

# Agregar remote (reemplaza URL_DE_TU_REPO con tu URL real)
git remote add origin https://github.com/TU_USUARIO/tu-repo.git

# Cambiar rama a main (Vercel prefiere main)
git branch -M main

# Pushear
git push -u origin main
```

---

## Paso 2: Conectar a Vercel

1. Ve a **[vercel.com](https://vercel.com)**
2. Click en **"New Project"**
3. Selecciona **"Import Git Repository"**
4. Pega tu URL del repo (ej: `https://github.com/TU_USUARIO/punto-waffles-landing`)
5. Click en **"Continue"**

---

## Paso 3: Configurar Vercel

Vercel detectará automáticamente que es un proyecto **Vite + React**:

**Framework:** `Vite`  
**Build Command:** `npm run build`  
**Install Command:** `npm install`  
**Output Directory:** `dist`

**✅ Deja todo por defecto — Vercel lo configura automáticamente**

---

## Paso 4: Environment Variables (Opcional)

Si quieres usar el número real de WhatsApp:

1. En el panel de Vercel, ve a **Settings** > **Environment Variables**
2. Agrega:
   - **Name:** `VITE_WAFFLE_PHONE`
   - **Value:** `56912345678` (tu número real)

3. Click en **"Add"**

**Nota:** Si no agregas esto, el número por defecto es `56XXXXXXXXX` (que puedes editar en el código después)

---

## Paso 5: Deploy

Click en **"Deploy"** y espera ~3 minutos ⏳

Vercel:
- Instala dependencias
- Compila el proyecto
- Optimiza assets
- Despliega automáticamente

**¡Listo! Tu sitio está en vivo** 🎉

---

## URLs Importantes

Después del deploy, tendrás:

```
URL de Vercel:    https://tu-proyecto.vercel.app
URL del Repo:     https://github.com/TU_USUARIO/tu-repo
Dashboard Vercel: https://vercel.com/dashboard
```

---

## ✅ Verificar que Todo Funciona

Accede a tu URL y verifica:

- [ ] La página carga correctamente
- [ ] Se ve bien en mobile (F12 → responsive)
- [ ] Animaciones son smooth
- [ ] Botones funcionan
- [ ] Links a WhatsApp abren correctamente
- [ ] Imágenes (si las agregaste) se cargan

---

## 🔄 Actualizaciones Futuras

Cualquier push a `main` en GitHub dispara automáticamente un nuevo deploy en Vercel.

```bash
# Edita código localmente
# Luego:
git add .
git commit -m "update: cambios"
git push origin main

# ✨ Vercel deploya automáticamente
```

---

## 🆘 Problemas Comunes

### "Build failed"
- Verifica que `npm run build` funciona localmente
- Revisa los logs en Vercel Dashboard

### "Cannot find module"
- Asegúrate de haber hecho `npm install` localmente
- Verifica que todas las dependencias están en `package.json`

### "Blank page"
- Revisa la consola del navegador (F12)
- Verifica que React está cargando correctamente

---

## 📊 Performance en Vercel

Vercel automáticamente:
- ✅ Minifica y comprime código
- ✅ Optimiza imágenes
- ✅ Sirve desde CDN global
- ✅ Comprime gzip
- ✅ Cache inteligente

**Tu sitio será RÁPIDO** ⚡

---

## 🎯 Siguiente Paso

Una vez deployado:
1. Comparte la URL con clientes
2. Configura dominio personalizado (si tienes)
3. Integra Google Analytics (opcional)
4. Agrega imágenes reales del menú (si las tienes)

---

**¡Tu landing ya está en el mundo!** 🌍
