
      
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




function crearlista (arr){ // crear la lista y la mete en las cartas
  let lista=document.getElementById('carta')
    lista.innerHTML=""
    arr.events.forEach ( car => {
    let div=document.createElement("div")
    
        
        
           
            let titulo = document.createElement('h5')
            let foto=document.createElement('img')
            let precio=document.createElement('h7')
            let newLink = document.createElement("a")
            let fecha=document.createElement('h7')
            let categoria=document.createElement('h7') 
            fecha.textContent=car.date
            newLink.href = "./Detail.html"
newLink.innerText = "Ver mas.."      
      div.className="card"
          categoria.textContent=car.category
            foto.src=car.image
            foto.className = "card-img-top"
            titulo.className="card.title"
          precio.className="card-body"
         
          precio.innerText="price"+" "+"$"+car.price
        titulo.textContent=car.name
       
        div.appendChild(foto)
        div.appendChild(titulo)
        div.appendChild(fecha)
        div.appendChild(categoria)
        div.appendChild(precio)
        div.appendChild(description)
        div.appendChild(link)     
        lista.appendChild(div)
  }
 
)
}

const formu=document.getElementById('formulario')
    const input=document.getElementById('nombre')

//includes()
 
//toUpperCase()//para poner en minuscula todo no olvidar el parentesis
   formu.addEventListener('submit',(e)=>{ 
        e.preventDefault();//evita q recargue la pagina
    let encontre=[];  
     encontre=data.events.filter(el =>
    
         (el.name.toUpperCase().includes(input.value.toUpperCase())||el.description.toUpperCase().includes(input.value.toUpperCase())||el.category.toUpperCase().includes(input.value.toUpperCase()))
    )
         
           
        
        
        
        
    }
        
    lista.appendChild(div)
   )



