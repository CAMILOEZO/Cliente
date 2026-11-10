# Entorno de desarrollo React + Vite
FROM node:22-alpine
WORKDIR /app

# Certificados raíz extra (opcional). Si un antivirus/proxy intercepta HTTPS
# (p. ej. Avast), exporta su certificado raíz en PEM a certs/*.crt.
COPY certs/ /tmp/certs/
RUN cat /tmp/certs/*.crt > /usr/local/share/extra-ca.pem 2>/dev/null; \
    if [ -s /usr/local/share/extra-ca.pem ]; then \
      cat /etc/ssl/certs/ca-certificates.crt >> /usr/local/share/extra-ca.pem; \
    else \
      cp /etc/ssl/certs/ca-certificates.crt /usr/local/share/extra-ca.pem; \
    fi
ENV NODE_EXTRA_CA_CERTS=/usr/local/share/extra-ca.pem

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

EXPOSE 5173
CMD ["npm", "run", "dev"]
