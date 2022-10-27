# Evaluacion de Proyecto Final

# Comandos utiles

## Revisar que proceso esta usando un puerto

### Linux (puerto 5050)

```
netstat -anp 2>/dev/null | grep 5050
```

### Windows (puerto 5050)

```
netstat -ano -p tcp |find "5050"
```

### Para depuracion del servidor ver el archivo [test/debug.txt](test/debug.txt)