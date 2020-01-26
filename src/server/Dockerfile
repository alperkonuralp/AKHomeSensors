FROM node:12-alpine3.11

# Create app directory
WORKDIR /app

# Bundle app source
COPY . .

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

RUN npm run build

EXPOSE 8080
CMD [ "node", "bin/prod" ]