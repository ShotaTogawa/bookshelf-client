# builder phase
FROM node:alpine as builder
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# /app/build <--- all the stuff

FROM nginx
# copy from builder
COPY --from=builder /app/build /usr/share/nginx/html

