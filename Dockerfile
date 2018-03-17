# Stage 0, based on Nodejs, npm and ag-cli; build and compile Angular client application
FROM johnpapa/angular-cli as client-app

LABEL authors="Ketan Patel"
ENV NPM_CONFIG_LOGLEVEL warn

WORKDIR /app
COPY ["package.json", "npm-shrinkwrap.json*", "./"]
RUN npm install --silent
COPY . .
RUN ng build --prod --build-optimizer

# Stage 1, based on Nginx; copy compiled production app to Nginx html folder
FROM nginx:1.13
COPY --from=client-app /app/dist/ /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
