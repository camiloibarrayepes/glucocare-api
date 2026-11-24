# API de Glucocare

API REST básica hecha con Node.js y Express.

## Tecnologías Usadas

- **Node.js** con **Express** (v5)
- **Jest** y **Supertest** para las pruebas
- **ESLint** para el análisis estático del código
- **GitHub Actions** para la integración continua (CI)

## Estructura del proyecto

- `app.js` — define la aplicación Express y sus rutas
- `server.js` — inicia el servidor
- `tests/` — pruebas automatizadas
- `.github/workflows/ci.yml` — pipeline de CI
- `eslint.config.js` — reglas del linter

## Comandos

```bash
npm install      # instala las dependencias
npm start        # inicia el servidor
npm test         # ejecuta las pruebas
npm run lint     # análisis estático del código con ESLint
```

## Pipeline de CI

En cada push o pull request a `main`, GitHub Actions:

1. Descarga el código
2. Instala Node.js
3. Instala las dependencias
4. Ejecuta el linter
5. Ejecuta las pruebas

Si el linter o las pruebas fallan, el pipeline falla.
