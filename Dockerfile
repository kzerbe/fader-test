# Datei : node -express / Dockerfile - dev
FROM node:8-jessie
WORKDIR /var/app/fader
USER node
RUN npm install --quiet
COPY . .
EXPOSE 3000
RUN npm run serve
