# rm ( Nos ayudara para eliminar archivos o directorios)

## Ejemplo
* `rm archivo.txt` Eliminara el `archivo.txt`
* `rm -r carpeta` Eliminara la carpeta y su contenido
* `rm -rf carpeta` Eliminara la carpeta y su contenido de una manera definitiva y forzada (usar con precaucion)

<hr>

# find ( Nos ayuda encontrar archivos o carpetas )

## Ejemplo
* `find . -name node_modules` Nos mostrara donde estaran todas las carpetas de `node_modules` en el directorio actual
* `find . -iname NoDe_ModuLes` Nos mostrara donde estaran todas las carpetas de `node_modules` en caso insensitivo de mayusculas o minusculas en el directorio actual
* `find . -iname "node_modules" -o -iname "package-lock.json"` Nos mostrara donde se encuentra la carpeta `node_modules` y `package-lock.json`

<hr>

## Comando para borrar todas las carpetas de `node_modules` y archivos `package-lock.json`

```bash
rm -r $( find . -iname node_modules -o -iname package-lock.json ) 2>/dev/null
```

## El uso de `2>/dev/null` se usa para evitar que nos muestre los errores por la consola


