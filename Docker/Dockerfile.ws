FROM oven/bun:1

WORKDIR /ws

COPY ./apps/ws-server/package.json ./apps/ws-server/package.json
COPY ./packages ./packages
COPY ./bun.lock ./bun.lock
COPY ./package.json ./package.json
COPY ./turbo.json ./turbo.json
RUN apt-get update -y && apt-get install -y openssl

RUN bun install

COPY ./apps/ws-server ./apps/ws-server

RUN bun run db:generate

EXPOSE 8080

CMD [ "bun","run","start:ws" ]
