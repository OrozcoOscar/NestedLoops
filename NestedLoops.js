function NestedLoops(f=(e)=>{console.log(...e)},nFores=1,i=0,n=5,inc=1,it=nFores-1,v=[]){
            if(v.length==0){
                v=(new Array(nFores)).fill(i)//rellenamos con i
                f(v)
            }
            if(v.reduce((a,v)=>a+v)/nFores==n-1|| inc>=n || it<0){
                //si el promedio es igual a la cantidad total de iteraciones-1
                // si el incremento es mayor o igual a n
                //si el iterador esta fuera del vector 
                return;
            }
            if(v[it]+inc<n){
                v[it]+=inc
                if(it+1<nFores){
                    it=nFores-1
                }
                f(v)   
            }else{
                v[it]=i
                it-=1
            }
            NestedLoops(f,nFores,i,n,inc,it,v)
        }
