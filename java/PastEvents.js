
const fecha=data.currentDate;
const atrasado =[];


   for (let i=0; i<data.events.length;i++){
       if(fecha<data.events[i].date)
       {
           let atrasa=data.events[i]  ;
           atrasado.push(atrasa)
           
       }
    }
   
    crearlista(atrasado)
 

    function crearlista (arr){ // crear la lista y la mete en las cartas
   
      let lista=document.getElementById('carta')
    lista.innerHTML=""
    for(let car of arr){ 

    let div=document.createElement("div")
      
            let titulo = document.createElement('h5')
            let foto=document.createElement('img')
            let precio=document.createElement('h7')
            
            let fecha=document.createElement('h7')
            let categoria=document.createElement('h7') 
            let description = document.createElement('p')
            fecha.textContent=` ${car.date}`
            let link = document.createElement('a')
        link.textContent = 'ver mas'
        link.href = `./detail.html?id=${car._id}`
           
      div.className="card"
          categoria.textContent=` ${car.category}`
            foto.src=` ${car.image}`
            foto.className = "card-img-top"
            titulo.className="card.title"
          precio.className="card-body"
           description.textContent=` ${car.description}`
           description.className="descripcion"
          precio.innerText="Price"+" "+"$"+` ${car.price}`
        titulo.textContent=` ${car.name}`
       
        div.appendChild(foto)
        div.appendChild(titulo)
        div.appendChild(fecha)
        div.appendChild(categoria)
        div.appendChild(precio)
        div.appendChild(description)
        div.appendChild(link)     
        lista.appendChild(div)
      }
     
  }
  const formu=document.getElementById('formulario')
    const input=document.getElementById('nombre')

//includes()
 
//toUpperCase()//para poner en minuscula todo no olvidar el parentesis
   formu.addEventListener('submit',(e)=>{ 
        e.preventDefault();//evita q recargue la pagina
    let encontre=[];  
     encontre=atrasado.filter(el =>
    
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

let encontre1= filtro(atrasado,filtrado[0].value)
  crearlista(encontre1)  
}

function filtro(arr,value){

    let filtrex=arr.filter(arr=>(arr.category.includes(value)))



return filtrex;
}