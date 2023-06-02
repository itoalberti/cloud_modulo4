# baixar a imagem 18-slim do linux com o node instalado
# a partir desta linha, todos os comandos são como se o usuário estivesse no terminal linux executando os comandos abaixo
FROM node:18-slim
ENV NODE_ENV development
USER root
RUN apt-get update && apt-get upgrade -y
# -p: recursivo
RUN mkdir -p /usr/src/app/node_modules
RUN mkdir -p /usr/src/app/tmp
WORKDIR /usr/src/app
COPY package.json . 
RUN npm install

COPY . .
# executar node
CMD ["npm", "start"]