# NestedLoops
Usando recursividad simula siclos anidados

## CDN
https://raw.githack.com/MauricioSalvadorC/Fores-Recursivos/main/ForesRecursivos.js

## Descripción
La función ForR() realiza fores anidados a partir de recursividad,  utilizando el vector de los iteradores de cada respectivo for para su uso, con la usabilidad  de pasar por parámetros una función para que ejecute el código a partir de N fores anidados


## Comenzando

### Instalación
En su archivo HTML agregue la siguiente linea de codigo
```html
<script src="NestedLoops.js"></script>
```
O usando la CDN
```html
<script src="https://raw.githack.com/MauricioSalvadorC/Fores-Recursivos/main/ForesRecursivos.js"></script>
```
### Ejemplo de uso
  ```js
  NestedLoops((e)=>{
    console.log(...e)
    },4,0,2,1)
  ```
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



