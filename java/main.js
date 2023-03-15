/////////en urlAPI guardo la promesa que de me devuelve la API que consulto con el ENDPOINT
let urlAPI = "https://mindhub-xj03.onrender.com/api/amazing"

// fetch(urlAPI)
//     .then(response => response.json())
//         .then(data => {
//             // throw new Error('se exploto el servidor')
//             // console.log(data.results)
//             let personajes = data.results
//             console.log(personajes);
//         })
//         //capturo los errores 
//     .catch(error => console.log(error.message))

// // console.log(personajes)



/////con el metodo try cath capto error 
async function getData(){
   try{
    //////genero un error para mostrar 
    //throw new Error('se exploto el servidor')
    let respuesta = await fetch(urlAPI)
    // console.log(respuesta)
    let datos = await respuesta.json()
     
    creardatos(datos)
   } catch {
    console.log('ocurrio un error con mi api')
   }
}

 getData()

 
// function crearCards(arr){
//     let contenedor = document.querySelector('.contenedor')

//     console.log(arr.events)
//     arr.events.forEach(evento => {
//         let div = document.createElement('div')
//         div.innerHTML = `
//         <div class="card">
//             <h2 class="nombre">${evento.name}</h2>
//             <img src="${evento.image}" alt="">
//             <p class="species">${evento.category}</p>
//         </div>`
//         contenedor.appendChild(div)
//     });

//     console.log(contenedor)
// }


function crearlista (arr){ // crear la lista y la mete en las cartas
   let lista=document.getElementById('carta')
     lista.innerHTML=""
     arr.events.forEach ( car => {
     let div=document.createElement("div")
       
             let titulo = document.createElement('h5')
             let foto=document.createElement('img')
             let precio=document.createElement('h7')
             
             let fecha=document.createElement('h7')
             let categoria=document.createElement('h7') 
             let description = document.createElement('p')
             fecha.textContent=car.date
             let link = document.createElement('a')
         link.textContent = 'ver mas'
         link.href = `./detail.html?id=${car._id}`
            
       div.className="card"
           categoria.textContent=car.category
             foto.src=` ${car.image}`
             foto.className = "card-img-top"
             titulo.className="card.title"
           precio.className="card-body"
            description.textContent=car.description
            description.className="descripcion"
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
 return arr;
 }
    

const dato=crearlista(arr);


