# build
FROM node:16-alpine AS build

WORKDIR /tmp
RUN wget https://get.pnpm.io/v6.16.js && \
  cat v6.16.js | node - add --global pnpm && \
  rm v6.16.js

WORKDIR /app

COPY . .

RUN pnpm i
RUN pnpm audit fix
RUN pnpm run build

# run
FROM node:16-alpine AS serve

WORKDIR /tmp
RUN wget https://get.pnpm.io/v6.16.js && \
  cat v6.16.js | node - add --global pnpm && \
  rm v6.16.js

WORKDIR /app
COPY --from=0 /app/package*.json ./

RUN pnpm i --production --ignore-scripts
RUN pnpm audit fix

COPY --from=0 /app/build ./

EXPOSE 4723
CMD ["node", "./index.js"]
