FROM node:18-bullseye-slim

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

RUN npm install http-server -g

EXPOSE 8080

CMD ["sh", "-c", "cd build && http-server"]