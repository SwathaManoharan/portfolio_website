FROM node:20-alpine AS build
WORKDIR /app

COPY app/package.json app/package-lock.json ./
RUN npm ci

COPY app/ ./
RUN npm run build

FROM nginx:1.29-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
