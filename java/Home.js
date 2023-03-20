
      
async function getData(){// solo podemos poner await en funciones asincronas pongo async para las await
  try{
   //////genero un error para mostrar 
   //throw new Error('se exploto el servidor')
   let respuesta = await fetch(urlAPI)
   // console.log(respuesta)
   let  datos = await respuesta.json()
  const dato=datos.events;
   crearlista(dato)
   
 
console.log(dato)



////////////////////////////////////////////////////////////////////////////////////
///busqueda x input 

 const formu=document.getElementById('formulario')
     const input=document.getElementById('nombre')
     console.log(input)

 //includes()
 
 //toUpperCase()//para poner en minuscula todo no olvidar el parentesis
    formu.addEventListener('input',(e)=>{ 
    e.preventDefault();//evita q recargue la pagina   let encontre=[];  
    
      filtrar();
      // encontre =dato.filter(el => (el.name.toUpperCase().includes(input.value.toUpperCase())||el.description.toUpperCase().includes(input.value.toUpperCase())||el.category.toUpperCase().includes(input.value.toUpperCase()))
      // )
      // console.log(encontre)
      
      // if(encontre.length > 0||input.value === " "){
      //   crearlista(encontre);
      // }
      
      //   else { 
      //    console.log("no se encontro")
      //    let texto=document.getElementById('carta')
      //    texto.innerHTML="no se encontro"
         
         
      //   }
    })
    
    
////////////////////////////////////////////////////////////////////////////



//.checked solo devuelve un booleano 


     let categories = []
       dato.forEach(( evento,i) => {
       if (!categories.includes(dato[i].category)) {
         categories.push(dato[i].category);
     }
       })
      console.log (categories)
   
    function check(){
      let chequeados =[]
      box.forEach(box1=>{
  if (box1.checked){
    chequeados.push(box1.value)
  }
      }
    )
      return chequeados;
    }
    function crearInput(categorias) {
       let box= document.querySelector(".types_checkboxes");
       box.innerHTML = categorias.map(cate => `<label>
       <input type="checkbox" name="cafe" value="${cate}">
       <span>${cate}</span>
   </label>`).join("");
   }
   crearInput(categories)

       let box = document.querySelectorAll("input[type='checkbox']")

  console.log(box)
  box.forEach(boton =>boton.addEventListener('change',filtrar )) //a cada check le agrega el addevent y escucha cada vez q cambia el valor y ejecute la funcion

  


  function filtrar (){
     let chequeados=check()
    console.log(chequeados)
    let texto=input.value
    console.log(texto)
    let filtro=dato.filter(el => (el.name.toUpperCase().includes(input.value.toUpperCase())||el.description.toUpperCase().includes(input.value.toUpperCase())||el.category.toUpperCase().includes(input.value.toUpperCase())))
    
    
    if (chequeados.length > 0) {
      filtro = filtro.filter(dato => {
      
    return chequeados.some(cate => dato.category.toUpperCase().includes(cate.toUpperCase()));
    
  });
  
}

crearlista(filtro);
}
  
    
     








} catch {
  console.log('ocurrio un error con mi api')
 }
}

getData();


