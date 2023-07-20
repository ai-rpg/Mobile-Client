FROM node:20-alpine3.17 as build

WORKDIR /app

RUN npm install -g @angular/cli

COPY ./package.json .
RUN npm install
COPY . .
RUN ng build

FROM nginx as runtime
COPY --from=build /app/www /usr/share/nginx/html
