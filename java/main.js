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
     console.log(datos.events)
    crearCards(datos)
   } catch {
    console.log('ocurrio un error con mi api')
   }
}

getData()

function crearCards(arr){
    let contenedor = document.querySelector('.contenedor')

    console.log(arr.events)
    arr.events.forEach(evento => {
        let div = document.createElement('div')
        div.innerHTML = `
        <div class="card">
            <h2 class="nombre">${evento.name}</h2>
            <img src="${evento.image}" alt="">
            <p class="species">${evento.category}</p>
        </div>`
        contenedor.appendChild(div)
    });

    console.log(contenedor)
}

    




