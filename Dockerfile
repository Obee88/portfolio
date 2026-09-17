# Stage 1: Build React app
# node-sass 9 only ships prebuilt bindings up to Node 20, so pin the build image.
FROM node:20-bullseye AS build

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn build

# Stage 2: Serve the static build with nginx as a non-root user
# 3000 is the container port registered for this project in the VPS dashboard;
# it is above 1024, so the unprivileged nginx image can bind it directly.
FROM nginxinc/nginx-unprivileged:1.27-alpine AS runner

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 3000

HEALTHCHECK --interval=15s --timeout=5s --retries=3 --start-period=30s \
  CMD wget -qO- http://localhost:3000/healthz || exit 1

CMD ["nginx", "-g", "daemon off;"]
