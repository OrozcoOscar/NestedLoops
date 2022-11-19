/**
 * Simula Ciclos anidados
 * @param {Function} f recibe una función la cual espera como parámetro los iteradores de los ciclos 
 * @param {Number} nLoops numero de ciclos a generar
 * @param {Number} i valor inicial de cada ciclo 
 * @param {Number} n valor con el q terminan Ej: en un for (let i=0;i<n:i++)
 * @param {Number} inc incremento en un for seria i++ o i+=1
 */
function NestedLoops(f=(e)=>{console.log(...e)},nLoops=1,i=0,n=5,inc=1,it=nLoops-1,v=[]){
    if(v.length==0){
        v=(new Array(nLoops)).fill(i)//rellenamos con i
        f(v)
    }
    if(v.reduce((a,v)=>a+v)/nLoops==n-1|| inc>=n || it<0){
        //si el promedio es igual a la cantidad total de iteraciones-1
        // si el incremento es mayor o igual a n
        //si el iterador esta fuera del vector 
        return;
    }
    if(v[it]+inc<n){
        v[it]+=inc
        if(it+1<nLoops){
            it=nLoops-1
        }
        f(v)   
    }else{
        v[it]=i
        it-=1
    }
    NestedLoops(f,nLoops,i,n,inc,it,v)
}
