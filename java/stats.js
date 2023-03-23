const futuro=[];
const past=[];


async function getData(){// solo podemos poner await en funciones asincronas pongo async para las await
    try{
     //////genero un error para mostrar 
     //throw new Error('se exploto el servidor')
     let respuesta = await fetch(urlAPI)
     // console.log(respuesta)
     let  datos = await respuesta.json()
     let dato=datos.events;
    
    let capacidad=masgrande(dato)

     function masgrande(arr) {
        return arr.reduce((mayor, actual) => {
            if (actual.capacity > mayor.capacity) { //mayor capacidad 
                return actual;
            } else {
                return mayor;
            }
        });
   
    }
    const fecha=datos.currentDate;
    
    document.querySelector('.capacidad').innerHTML =`${capacidad.name}`;
    for (let i=0; i<datos.events.length;i++){
        if(fecha>datos.events[i].date)
        {
           
            past.push(datos.events[i])
            
        }
     }
     const catAtras=extraercategorias(past);
     console.log(catAtras);
     cargarcastpast(catAtras);
     function cargarcastpast(arr){
        { 
            let container = document.getElementById("tabla2");
            let tableBodyHTML = "";
            
            arr.forEach(arr1 => {
                let gananciapast =obtenergananciapast(arr1,past);
                 let porcentajepast=obtenerporcentajepast(arr1,past);
                tableBodyHTML += `<tr>
                
                <td>${arr1}</td>  
                
                <td>$${gananciapast}</td>  
                <td>${porcentajepast}%</td>  
    
                 
    
                
            </tr>`
            });
            container.innerHTML = tableBodyHTML;
        }    
     }
     function obtenergananciapast(arr1,past){
        let gananciapast=0;  
        for(let i=0;i <past.length;i++){
     
            if(arr1===past[i].category){
            gananciapast=past[i].assistance*past[i].price; 
            }
           }
        
        return gananciapast;
     
    
        
       }
       function obtenerporcentajepast(arr1,past){
        let porcentajepast=0;  
        for(let i=0;i<past.length;i++){
     
            if(arr1===past[i].category){
            porcentajepast=(past[i].assistance)/past[i].capacity*100; 
            }
           }
        
        return Math.round(porcentajepast);
     
    
        
       }
     
     for (let i=0; i<datos.events.length;i++){
         if(fecha<datos.events[i].date)
         {
            
             futuro.push(datos.events[i])
             
         }
      }
console.log(futuro)
const catAdel=extraercategorias(futuro);
console.log(catAdel)
cargarestat(catAdel)



function cargarestat(arr) 
{ 
        let container = document.querySelector("tbody");
        let tableBodyHTML = "";
        
        arr.forEach(arr1 => {
            let ganancia =obtenerganancia(arr1,futuro);
             let porcentaje=obtenerporcentaje(arr1,futuro)
            tableBodyHTML += `<tr>
            
            <td>${arr1}</td>  
            
            <td>$${ganancia}</td>  
            <td>${porcentaje}%</td>  

             

            
        </tr>`
        });
        container.innerHTML = tableBodyHTML;
    }    
   
   function obtenerganancia(arr1,futuro){
    let ganancia=0;  
    for(let i=0;i<futuro.length;i++){
 console.log(arr1)
        if(arr1===futuro[i].category){
        ganancia =futuro[i].estimate*futuro[i].price; 
        }
       }
    
    return ganancia;
 

    
   }
   function obtenerporcentaje(arr1,futuro){
    let porcentaje=0;  
    for(let i=0;i<futuro.length;i++){
 
        if(arr1===futuro[i].category){
        porcentaje =(futuro[i].estimate/futuro[i].capacity)*100; 
        }
       }
    
    return Math.round(porcentaje);
 

    
   }
            
           

    function extraercategorias(arr){

        let categories = []
        arr.forEach(( evento,i) => {
        if (!categories.includes(arr[i].category)) {
          categories.push(arr[i].category);
      }
        })
   
    return categories
    }
   
   
       
    
let maximo=sacarpromemax(dato)
document.querySelector('.maximo').innerHTML =`${maximo}`;
        function sacarpromemax(arr) {
        let nombre;    
       let maximo=0;
            
           arr.forEach(arr1=> {
            let asistencia=arr1.assistance
       let capacidad=arr1.capacity
          
           let promedio=(asistencia/capacidad)*100;
           if (promedio > maximo) {
            maximo=promedio
            nombre = arr1.name;
            
        }
          
           
    
        });
        
        
        return nombre;
        }
        let minimo=sacarpromemin(dato)
        document.querySelector('.minimo').innerHTML =`${minimo}`;
                function sacarpromemin(arr) {
                let nombre;    
               let minimo=1000000000;
                    
                   arr.forEach(arr1=> {
                    let asistencia=arr1.assistance                //saca el minimo de los porcentajes 
               let capacidad=arr1.capacity
                  
                   let promedio=(asistencia/capacidad)*100;
                   if (promedio < minimo) {
                    minimo=promedio
                    nombre = arr1.name;
                    
                }
                });
                return nombre;
                }
            
    
} catch {
    console.log('ocurrio un error con mi api')
   }
  }
  
  getData();
  
  