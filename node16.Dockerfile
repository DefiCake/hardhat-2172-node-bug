FROM node:16

COPY . .

RUN npm ci

CMD ["npx", "hardhat", "node"]