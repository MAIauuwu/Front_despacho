# Front Despacho - React + Vite

Frontend del sistema de gestion de despachos. Desarrollado con React 18, Vite 5 y Tailwind CSS.

## Tecnologias
- **React** 18 + **Vite** 5
- **Tailwind CSS** 3.4
- **Nginx** (servidor de produccion)
- **Docker** (contenerizacion multietapa)

## Estructura del Proyecto
```
Front_despacho-deploy/
├── src/                    # Codigo fuente React
├── public/                 # Archivos estaticos
├── Dockerfile              # Build multietapa (Node -> Nginx)
├── docker-compose.yml      # Orquestacion local
├── nginx.conf              # Configuracion Nginx (proxy reverso)
├── .dockerignore           # Exclusiones para imagen Docker
└── .github/workflows/      # Pipeline CI/CD GitHub Actions
```

## Ejecutar Localmente
```bash
npm install
npm run dev
```

## Ejecutar con Docker
```bash
cp .env.example .env
docker compose up -d --build
```
Acceso: http://localhost

## Pipeline CI/CD (GitHub Actions)
El workflow `.github/workflows/deploy-frontend.yml` ejecuta 3 etapas:
1. **Build & Test**: Instala dependencias, ejecuta ESLint y compila el proyecto
2. **Push**: Construye imagen Docker multietapa y la publica en Docker Hub con tags `latest` y `commit-sha`
3. **Deploy**: Conecta via SSH a EC2 y despliega con `docker compose`

## Imagen Docker
- **Registro**: Docker Hub
- **Imagen**: `<DOCKERHUB_USERNAME>/front-despacho:latest`
- **Estrategia**: Multietapa (Node Alpine -> Nginx Alpine)
- **Seguridad**: Usuario no-root (`frontdespacho`)

## Variables de Entorno
| Variable | Descripcion | Ejemplo |
|----------|-------------|---------|
| `DOCKERHUB_USERNAME` | Usuario de Docker Hub | `miusuario` |
| `VITE_API_URL` | URL del API backend | `http://localhost:8080` |
