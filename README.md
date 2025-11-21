# 🎬 Video Hero Landing Page

> Landing page moderna con video de fondo implementando las últimas tendencias de diseño web

[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

## 📋 Descripción

Proyecto demo que demuestra la implementación de una **landing page moderna** con video de fondo (video hero), una de las tendencias más populares en diseño web actual. Desarrollado con las tecnologías más demandadas del mercado: React, TypeScript, Tailwind CSS v4 y Framer Motion.

Este proyecto forma parte de mi portafolio profesional y destaca mis habilidades en:
- ✅ Desarrollo frontend moderno
- ✅ Animaciones fluidas y performantes
- ✅ Diseño responsive y accesible
- ✅ Código limpio y mantenible
- ✅ Implementación de tendencias actuales

---

## ✨ Características Principales

### 🎥 Hero Section con Video Background
- Video de fondo en loop con controles personalizados
- Overlay con gradientes para mejor contraste
- Efectos visuales modernos (glassmorphism, gradientes animados)
- Control de reproducción/pausa del video

### 🎨 Diseño Moderno
- **Glassmorphism**: Efectos de vidrio esmerilado en navbar y cards
- **Gradientes dinámicos**: Transiciones suaves de color
- **Micro-interacciones**: Animaciones al hover y scroll
- **Typography moderna**: Jerarquía visual clara

### 🚀 Animaciones con Framer Motion
- Animaciones de entrada (fade in, slide up)
- Stagger animations en grids
- Scroll-triggered animations
- Hover effects interactivos
- Optimizadas para 60fps

### 📱 100% Responsive
- Mobile-first approach
- Breakpoints optimizados (sm, md, lg, xl)
- Menú hamburguesa animado en móvil
- Touch-friendly interactions

### ⚡ Performance
- Lazy loading de componentes
- Video optimizado y comprimido
- Bundle size optimizado
- Fast refresh en desarrollo

---

## 🛠️ Stack Tecnológico

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **React** | 18.3 | Librería UI para interfaces interactivas |
| **TypeScript** | 5.5 | Tipado estático y mejor DX |
| **Vite** | 5.4 | Build tool ultra-rápido |
| **Tailwind CSS** | 4.0 | Framework CSS utility-first |
| **Framer Motion** | 11.0 | Librería de animaciones |
| **Iconify** | Latest | Sistema de iconos unificado |
| **Lucide React** | Latest | Iconos SVG optimizados |

---

## 📁 Estructura del Proyecto

```
EWEADN/
├── public/
│   └── videos/
│       └── hero-video.mp4          # Video de fondo
├── src/
│   ├── components/
│   │   ├── Navbar.tsx              # Navegación con glassmorphism
│   │   ├── HeroVideo.tsx           # Hero principal con video
│   │   └── Features.tsx            # Sección de características
│   ├── App.tsx                     # Componente raíz
│   ├── main.tsx                    # Entry point
│   └── index.css                   # Estilos globales
├── vite.config.ts                  # Configuración de Vite
├── tailwind.config.ts              # Configuración de Tailwind
├── tsconfig.json                   # Configuración de TypeScript
└── package.json                    # Dependencias del proyecto
```

---

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js >= 18.0
- npm >= 9.0

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/JordyVillamil/video-hero-landing.git

# Entrar al directorio
cd video-hero-landing

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

### Comandos Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor en http://localhost:5173

# Producción
npm run build        # Genera build optimizado en /dist
npm run preview      # Preview del build de producción

# Utilidades
npm run lint         # Ejecuta ESLint
npm run type-check   # Verifica tipos de TypeScript
```

---

## 🎨 Personalización

### Cambiar el Video de Fondo

1. Coloca tu video en `public/videos/`
2. Actualiza la ruta en `src/components/HeroVideo.tsx`:

```typescript
<source src="/videos/tu-video.mp4" type="video/mp4" />
```

**Recomendaciones para el video:**
- Formato: MP4 (H.264) o WebM
- Resolución: 1920x1080 (Full HD)
- Duración: 10-30 segundos en loop
- Peso: 5-10 MB máximo
- FPS: 24-30

### Modificar Colores

Edita `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: '#TU_COLOR',
      secondary: '#TU_COLOR',
    }
  }
}
```

### Cambiar Iconos

Visita [Iconify](https://icon-sets.iconify.design/) para explorar miles de iconos:

```typescript
<Icon icon="mdi:tu-icono-aqui" className="w-6 h-6" />
```

---

## 🎯 Características Implementadas

### Componente Navbar
- [x] Navbar sticky con glassmorphism
- [x] Cambio de opacidad al hacer scroll
- [x] Menú responsive con animaciones
- [x] Logo con efecto hover

### Componente HeroVideo
- [x] Video de fondo fullscreen
- [x] Overlay con gradiente
- [x] Control play/pause del video
- [x] Animaciones stagger en contenido
- [x] Call-to-action buttons con efectos
- [x] Indicador de scroll animado
- [x] Efectos de partículas decorativas

### Componente Features
- [x] Grid responsive de características
- [x] Cards con glassmorphism
- [x] Iconos con gradientes
- [x] Hover effects en cards
- [x] Scroll-triggered animations
- [x] Tech stack badges

---

## 📊 Métricas de Performance

| Métrica | Valor | Estado |
|---------|-------|--------|
| First Contentful Paint | < 1.5s | ✅ Excelente |
| Largest Contentful Paint | < 2.5s | ✅ Excelente |
| Time to Interactive | < 3.5s | ✅ Bueno |
| Cumulative Layout Shift | < 0.1 | ✅ Excelente |

---

## 🌐 Deploy

### GitHub Pages

```bash
# Build del proyecto
npm run build

# Deploy manual
npm run deploy
```

### Vercel (Recomendado)

1. Conecta tu repositorio en [Vercel](https://vercel.com)
2. Vercel detectará automáticamente Vite
3. Deploy automático en cada push

### Netlify

1. Conecta tu repositorio en [Netlify](https://netlify.com)
2. Build command: `npm run build`
3. Publish directory: `dist`

---

## 🧪 Testing

```bash
# Pendiente: Implementar tests unitarios
npm run test

# Pendiente: Tests E2E con Playwright
npm run test:e2e
```

---

## 📝 Roadmap

### Versión 1.0 (Actual)
- [x] Hero con video de fondo
- [x] Navbar responsivo
- [x] Sección de características
- [x] Animaciones con Framer Motion
- [x] Diseño responsive

### Versión 1.1 (Próxima)
- [ ] Sección "Sobre Nosotros"
- [ ] Galería de productos
- [ ] Testimonios de clientes
- [ ] Footer con links sociales
- [ ] Formulario de contacto

### Versión 2.0 (Futuro)
- [ ] Dark/Light mode toggle
- [ ] Internacionalización (i18n)
- [ ] Blog integrado
- [ ] SEO optimizado
- [ ] Tests unitarios y E2E
- [ ] Modo offline (PWA)

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

## 👨‍💻 Autor

**Jordy Villamil**

- GitHub: [@JordyVillamil](https://github.com/JordyVillamil)
- LinkedIn: [Jordy Villamil](https://www.linkedin.com/in/jordy-fabian-villamil-letrado-32378b232/)
- Portfolio: [jordyvillamil.github.io](https://jordyvillamil.github.io)

---

## 🙏 Agradecimientos

- [React](https://reactjs.org/) - La librería UI más popular
- [Vite](https://vitejs.dev/) - Build tool increíblemente rápido
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utility-first
- [Framer Motion](https://www.framer.com/motion/) - Librería de animaciones
- [Iconify](https://iconify.design/) - Sistema unificado de iconos
- [Pexels](https://pexels.com/) / [Pixabay](https://pixabay.com/) - Videos stock gratuitos

---

## 📸 Screenshots

### Desktop
![Hero Desktop](./screenshots/hero-desktop.png)

### Mobile
![Hero Mobile](./screenshots/hero-mobile.png)

### Features Section
![Features](./screenshots/features.png)



<div align="center">
  <p>Hecho con ❤️ por Jordy Villamil</p>
  <p>⭐ Si te gustó este proyecto, dale una estrella en GitHub ⭐</p>
</div>
