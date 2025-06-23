FROM node:18
WORKDIR /app
COPY . .
RUN npm install -g create-react-app && npx create-react-app .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]

