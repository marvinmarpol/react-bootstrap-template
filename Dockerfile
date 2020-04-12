# specify base image, as builder only
FROM node:alpine as builder

# specify working directory inside image
WORKDIR '/app'

# install some dependency, copy package json first to minimalize cache busting and rebuild
COPY package.json .
RUN npm install
COPY . .

# build the static files
RUN npm run build

# run phase in enginex
FROM nginx

# copy the files generated in builder phase to file inside nginx image
COPY --from=builder /app/build /usr/share/nginx/html