FROM node:8
RUN mkdir /app
WORKDIR /app
COPY . /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --silent && mv node_modules ../
EXPOSE 3000
