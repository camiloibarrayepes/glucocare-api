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

## Endpoints

| Método | Ruta | Descripción |
| ------ | ---- | ----------- |
| GET | `/` | Mensaje de bienvenida |
| GET | `/patients` | Listar pacientes |
| GET | `/patients/:id` | Ver un paciente con sus datos |
| GET | `/patients/:id/insulin-shots` | Ver dosis de insulina |
| GET | `/patients/:id/medications` | Ver medicamentos |

Los datos se guardan en memoria, se pierden al reiniciar el servidor.

## Pipeline de CI

En cada push o pull request a `main`, GitHub Actions:

1. Descarga el código usando actions/checkout@v5
2. Instala Node.js usando actions/setup-node@v5
3. Instala las dependencias usando npm ci
4. Ejecuta el linter usando npm run lint
5. Ejecuta las pruebas usando npm test

Si el linter o las pruebas fallan, el pipeline falla.
