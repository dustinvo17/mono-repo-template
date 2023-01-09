FROM node:14

COPY . /app
WORKDIR /app

RUN sh ./script/build-fullstack-app.sh
CMD ["node", "src/backend/dist/src/main.js"]