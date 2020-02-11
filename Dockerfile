FROM node:alpine as builder

LABEL Description="Search UI" maintainer="Shibu Manoharan, shibu.manoharan@contractor.axaxl.com"
WORKDIR /usr/src/app
COPY package.json ./
RUN yarn
COPY . ./
RUN yarn build

FROM nginx:1.15-alpine
COPY --from=builder /usr/src/app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]