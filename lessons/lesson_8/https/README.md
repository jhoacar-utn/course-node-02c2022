# Comando con docker para crear un certificado y habilitar HTTPS

## Nota: ubicarse por consola donde se guardaran los certificados y
## usar con powershell en caso de windows

```
docker run --rm -it -v ${PWD}:/ssl alpine/openssl req -x509 -newkey rsa:4096 -keyout /ssl/key.pem -out /ssl/cert.pem -sha256 -days 365 -nodes
```

## Este comando preguntara varias cosas pero solo sera darle Enter a cada una

