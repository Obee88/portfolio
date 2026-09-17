# Stage 1: Build React app
# node-sass 9 only ships prebuilt bindings up to Node 20, so pin the build image.
FROM node:20-bullseye AS build

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn build

# Stage 2: Serve the static build with nginx
# The VPS dashboard routes this project to port 80, matching the nginx:1.21
# image this replaced, so the runtime stays on the stock nginx image whose
# master process can bind it. nginx drops its workers to the nginx user.
FROM nginx:1.27-alpine AS runner

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80 8080

HEALTHCHECK --interval=15s --timeout=5s --retries=3 --start-period=30s \
  CMD wget -qO- http://localhost:80/healthz || exit 1

CMD ["nginx", "-g", "daemon off;"]
