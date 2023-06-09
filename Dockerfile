FROM node:19.4-alpine
WORKDIR /usr/src/app
COPY package*.json ./  
RUN npm install
COPY . .
EXPOSE 3333
CMD ["npm", "run", "dev"]
