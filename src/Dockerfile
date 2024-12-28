# 1. Node imidjini tanlash
FROM node:18-alpine


RUN apk add --no-cache bash git
# 2. Ish katalogini yaratish va belgilash
WORKDIR /app

# 3. Paketlarni o‘rnatish uchun package.json va package-lock.json ni nusxalash
COPY package.json package-lock.json ./

# 4. Paketlarni o‘rnatish
RUN npm install

# 5. Kodni nusxalash
COPY . .

# 6. Portni ochish
EXPOSE 5173

# 7. Serverni ishga tushirish
CMD ["npm", "run", "dev"]
