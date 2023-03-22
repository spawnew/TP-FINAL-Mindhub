async function getData(){// solo podemos poner await en funciones asincronas pongo async para las await
    try{
     //////genero un error para mostrar 
     //throw new Error('se exploto el servidor')
     let respuesta = await fetch(urlAPI)
     // console.log(respuesta)
     let  datos = await respuesta.json()
     const dato=datos.events;
    
    let capacidad=masgrande(dato)

    let chico=maschico(dato)


     function masgrande(arr) {
        return arr.reduce((mayor, actual) => {
            if (actual.capacity > mayor.capacity) { //mayor capacidad 
                return actual;
            } else {
                return mayor;
            }
        });
   
    }
    
    
    document.querySelector('.capacidad').innerHTML =`${capacidad.name}`;
    

     function maschico(evento) {
        return dato.reduce((menor, actual) => {
            if (actual.capacity < menor.capacity) {
                return actual;
            } else {
                return menor;
            }
        });
    }
    
  /////// eventos adelantados const fecha=datos.currentDate;
     const adelantado =[];
       const fecha=datos.currentDate;
     
     for (let i=0; i<datos.events.length;i++){
         if(fecha<datos.events[i].date)
         {
             let atrasa=datos.events[i]  ;
             adelantado.push(atrasa)
             
         }
      }
console.log(adelantado)
catAdel=extraercategorias(adelantado);
console.log(catAdel)
cargarestat(catAdel)



function cargarestat(arr) 
{ 
        let container = document.querySelector("tbody");
        let tableBodyHTML = "";
        arr.forEach(arr1 => {
            let categoria = extraercategorias(arr);
           
          
            tableBodyHTML += `<tr>
            
            <td>${arr1}</td>       
        </tr>`
        });
        container.innerHTML = tableBodyHTML;
    }    
    //cargarprimer(dato)
    
    // function cargarprimer(arr) 
    // {
    //     let container = document.getElementById("tr");
        
    //      container.tableHeadHTML = "";
    //     arr.forEach(car => {
  
    //     let tr1=document.createElement("th")
        
       
    //     tr1.innerHTML=capacidad.name;

    //     container.appendChild('th1')
        
            
           
           
    //     })
    // }    
    function extraercategorias(arr){

        let categories = []
        arr.forEach(( evento,i) => {
        if (!categories.includes(arr[i].category)) {
          categories.push(arr[i].category);
      }
        })
     console.log(capacidad.name)
    return categories
    }
    
   
   
       
    
let maximo=sacarpromemax(dato)
document.querySelector('.maximo').innerHTML =`${maximo.name}`;
        function sacarpromemax(arr) {
        let nombre;    
       let maximo=0;
            
           arr.forEach(arr1=> {
            let asistencia=arr1.assistance
       let capacidad=arr1.capacity
          
           let promedio=(asistencia/capacidad)*100;
           if (promedio > maximo) {
            maximo=promedio
            nombre = arr1;
            
        }
          
           
    
        });
        
        
        return nombre;
        }
        let minimo=sacarpromemin(dato)
        document.querySelector('.minimo').innerHTML =`${minimo.name}`;
                function sacarpromemin(arr) {
                let nombre;    
               let minimo=1000000000;
                    
                   arr.forEach(arr1=> {
                    let asistencia=arr1.assistance
               let capacidad=arr1.capacity
                  
                   let promedio=(asistencia/capacidad)*100;
                   if (promedio < minimo) {
                    minimo=promedio
                    nombre = arr1;
                    
                }
                  
                   
            
                });
                
                
                return nombre;
                }
            
    
} catch {
    console.log('ocurrio un error con mi api')
   }
  }
  
  getData();
  
  