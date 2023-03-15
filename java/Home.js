
      
async function getData(){
  try{
   //////genero un error para mostrar 
   //throw new Error('se exploto el servidor')
   let respuesta = await fetch(urlAPI)
   // console.log(respuesta)
   let datos = await respuesta.json()
    
   crearlista(datos)
  } catch {
   console.log('ocurrio un error con mi api')
  }
}

getData();






const formu=document.getElementById('formulario')
    const input=document.getElementById('nombre')

//includes()
 
//toUpperCase()//para poner en minuscula todo no olvidar el parentesis
   formu.addEventListener('submit',(e)=>{ 
        e.preventDefault();//evita q recargue la pagina
    let encontre=[];  
     encontre=datos.events.filter(el =>
    
         (el.name.toUpperCase().includes(input.value.toUpperCase())||el.description.toUpperCase().includes(input.value.toUpperCase())||el.category.toUpperCase().includes(input.value.toUpperCase()))
    )
         
           
        
   
    console.log(encontre)
    crearlista(encontre);
     })


     let box = document.querySelectorAll("input[type='checkbox']")

console.log(box)
box.forEach(boton =>boton.addEventListener('change',filtrar )) //a cada check le agrega el addevent y escucha cada vez q cambia el valor y ejecute la funcion




function filtrar (){
    let filtrado = Array.from(box).filter(checkbox => checkbox.checked)//ACA ME DA LOS checkbox q estan chequeados
    console.log(filtrado[0].value)

let encontre1= filtro(data.events,filtrado[0].value)
  crearlista(encontre1)  
}

function filtro(arr,value){

    let filtrex=arr.filter(arr=>(arr.category.includes(value)))



return filtrex;
}