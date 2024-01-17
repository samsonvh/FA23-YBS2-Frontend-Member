# Build BASE
FROM node:latest as BASE
LABEL author="samsonvh <samson.vh.20@gmail.com>"

WORKDIR /app
COPY --from=BASE /app/node_modules ./node_modules
COPY . .
RUN apk add --no-cache git curl \
    && yarn build \
    && rm -rf node_modules \
    && yarn install --production --frozen-lockfile --ignore-scripts --prefer-offline \
    # Follow https://github.com/ductnn/Dockerfile/blob/master/nodejs/node/16/alpine/Dockerfile
    && node-prune

# Build production
FROM node:latest AS PRODUCTION
LABEL author="samsonvh <samson.vh.20@gmail.com>"

WORKDIR /app

COPY --from=BUILD /app/package.json /app/yarn.lock ./
COPY --from=BUILD /app/node_modules ./node_modules
COPY --from=BUILD /app/.next ./.next
COPY --from=BUILD /app/public ./public

EXPOSE 3000

CMD ["yarn", "start"]