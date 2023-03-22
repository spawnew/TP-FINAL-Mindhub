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
    
     console.log(capacidad)

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
    cargarestat(catAdel)
   
    console.log(promedio1);

    function cargarestat(arr) 
    {
        let container = document.querySelector("tbody");
        let tableBodyHTML = "";
        arr.forEach(arr1 => {
            let categoria = extraercategorias(arr);
             let ganancia=(arr1.estimate*arr1.price)
            let promedio= sacarpromedio(arr1)
          
            tableBodyHTML += `<tr>
            <td>${arr1}</td>
            <td>${ganancia}</td>
            <td>${promedio}</td>
            
        
           
        
        </tr>`;
        })
        container.innerHTML = tableBodyHTML;
    }    
    cargarprimer(dato)
    
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
    

        function sacarpromedio(arr) {
            let suma=0;
           
           for(let i=0;i<arr.length;i++){
           
            suma+=arr[i].estimate
           }
            
            return Math.round(sumaAsistencia / arr.length);
        }
    
    }
 catch {
    console.log('ocurrio un error con mi api')
   }
  }
  
  getData();
  
  