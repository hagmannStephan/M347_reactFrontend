# Verwenden Sie ein offizielles Node.js-Runtime-Image als Basis
FROM node:14

# Setzen Sie das Arbeitsverzeichnis im Container
WORKDIR /app

# Kopieren Sie die package.json und yarn.lock Dateien
COPY package*.json ./

# Installieren Sie die Abhängigkeiten
RUN npm install

# Kopieren Sie den Rest des Anwendungscodes
COPY . .

# Bauen Sie das React-Projekt
RUN npm run build

# Installieren Sie ein einfaches HTTP-Server-Paket
RUN npm install -g serve

# Exponieren Sie den Port, auf dem die App läuft
EXPOSE 5000

# Startbefehl für die Anwendung
CMD ["serve", "-s", "build"]
