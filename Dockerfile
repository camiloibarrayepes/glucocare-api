FROM node:20-slim

ENV NODE_ENV=production

WORKDIR /app

# Copiar manifestos para optimizar caching
COPY package.json package-lock.json ./

# Instalar las dependencias "lockeadas" 
RUN npm ci --omit=dev && npm cache clean --force

# Copiar código fuente
COPY --chown=node:node . .

# Usar usuario sin privilegios
USER node

# puerto
EXPOSE 3000

# Executar node utilizando server.js como entry point
CMD ["node", "server.js"]