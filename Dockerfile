# Etapa 1: Build com pnpm
FROM node:24 AS builder
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install
COPY . .
RUN pnpm build

# Etapa 2: Servir com Nginx
FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*

# Copia arquivos estáticos
COPY --from=builder /app/out /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
