# ================================
# Stage 1: Build
# ================================
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# ================================
# Stage 2: Production
# ================================
FROM nginx:stable-alpine AS runner

RUN addgroup -S frontdespacho && adduser -S frontdespacho -G frontdespacho

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]