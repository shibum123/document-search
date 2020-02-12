
# stage 1
FROM node:12.15.0-alpine3.11 as node

LABEL Description="Search UI" maintainer="Shibu Manoharan, shibu.manoharan@contractor.axaxl.com"

WORKDIR /usr/src/app
COPY package.json ./
RUN yarn
COPY . .
RUN yarn build:prod

# stage 2
FROM nginx:1.16.1-alpine as prod-stage
COPY --from=node /usr/src/app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]