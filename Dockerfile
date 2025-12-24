# ---------- Build stage ----------
FROM node:20-alpine AS build

WORKDIR /app

COPY app/package*.json ./
RUN npm install --only=production

COPY app/src ./src
COPY app/public ./public

# ---------- Runtime stage ----------
FROM node:20-alpine

WORKDIR /app

# Create non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

COPY --from=build /app /app

USER appuser

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://127.0.0.1:3000/health || exit 1

CMD ["node", "src/index.js"]
