# Datei : node -express / Dockerfile - dev
FROM node:8-jessie
WORKDIR /opt/fader-test
MAINTAINER Klaus Zerbe <klaus@zerbe.cloud>
# USER node
COPY . .
RUN npm install --quiet
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "serve"]
