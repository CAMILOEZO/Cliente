# Cliente

Entorno de desarrollo local con **React + Vite** dentro de **Docker**, para que funcione igual en cualquier máquina (solo hace falta tener Docker instalado).

## Estructura

```
Cliente/
├── public/              # Archivos estáticos (favicon, imágenes públicas)
├── src/
│   ├── assets/          # Imágenes, fuentes, etc. importadas desde el código
│   ├── components/      # Componentes reutilizables (Header, botones...)
│   ├── pages/           # Páginas / vistas (Home...)
│   ├── App.jsx          # Componente raíz
│   ├── App.css
│   ├── index.css        # Estilos globales
│   └── main.jsx         # Punto de entrada
├── index.html
├── vite.config.js
├── Dockerfile
└── docker-compose.yml
```

## Arrancar

```bash
docker compose up --build
```

Abre http://localhost:5173 — los cambios en `src/` se recargan solos.

Para pararlo: `Ctrl+C` o `docker compose down`.

## Añadir una dependencia

```bash
docker compose exec web npm install nombre-paquete
```

Así se actualizan `package.json` y `package-lock.json`, y quien clone el repo tendrá lo mismo al hacer `docker compose up --build`.
