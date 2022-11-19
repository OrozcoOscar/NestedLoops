# NestedLoops
Usando recursividad simula siclos anidados

## CDN
```
https://raw.githack.com/OrozcoOscar/NestedLoops/main/NestedLoops.js
```
## Descripción
La partir de recursividad simula cilos anidados, recibe una funcion la cuent a su vez recibe los valores de los iteradores en cada vuelta

## Comenzando

### Instalación
En su archivo HTML agregue la siguiente linea de codigo
```html
<script src="NestedLoops.js"></script>
```
O usando la CDN
```html
<script src="https://raw.githack.com/OrozcoOscar/NestedLoops/main/NestedLoops.js"></script>
```
### Parametros
```js
NestedLoops(f,nLoops,i,n,inc)
```
`f` el primer parametro recibe una funcion 

`nLoops`el segundo parametro el numero de ciclos 

`i` el tercer parametro el valor inicial de los ciclos

`n` el cuarto parametro el valor final de los cilcos

`inc` el quito valor seria el incremento por defecto es 1

### Ejemplo de uso
```html
<script>
  NestedLoops((e)=>{
    console.log(...e)
   },4,0,2,1)
</script>
```
El codigo anterior es equivalente a el siguiente
```js
for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
        for (let k = 0; k < 2; k++) {
            for (let g = 0; g < 2; g++) {
                console.log(i,j,k,g)
            }
        }
    }
}
```
Y esto da como resultado :
```
0 0 0 0
0 0 0 1
0 0 1 0
0 0 1 1
0 1 0 0
0 1 0 1
0 1 1 0
0 1 1 1
1 0 0 0
1 0 0 1
1 0 1 0
1 0 1 1
1 1 0 0
1 1 0 1
1 1 1 0
1 1 1 1
```



