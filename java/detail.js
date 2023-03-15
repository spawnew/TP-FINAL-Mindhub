const queryString = location.search

const params = new URLSearchParams(queryString)

const id = params.get('id')

const cardId = data.events.find(car => car._id==id)
console.log(cardId)


let lista=document.getElementById('carta')

    

    let div=document.createElement("div")
            
               lista.className="lista"
               let asistencia = document.createElement('h7')
               let lugar=document.createElement('h7')
            let titulo = document.createElement('h5')
            let foto=document.createElement('img')
            let precio=document.createElement('h7')
            let fecha=document.createElement('h7')
            let categoria=document.createElement('h7') 
            let description = document.createElement('p')
            fecha.textContent=cardId.date
            fecha.style.color="black"
            let link = document.createElement('a')
            asistencia.innerText="Assistance"+" "+cardId.assistance
            lugar.innerText="Place"+" "+cardId.place
             div.className="card"
                div.style.background=" antiquewhite"
          categoria.textContent=` ${cardId.category}`
          categoria.style.color="black"
            foto.src=` ${cardId.image}`
            foto.className = "card-img-top1"
            titulo.className="card.title"
            titulo.style.color="wblack"
          precio.className="card-body"
           description.textContent=` ${cardId.description}`
           description.className="descripcion"
           description.style.color="black"
          precio.innerText="price"+" "+"$"+` ${cardId.price}`
          precio.style.color="black"
        titulo.textContent=` ${cardId.name}`
        link.href="./Home.html"
        link.textContent="volver"
        link.style.color="white"
        link.style.backgroundColor="blue"
       
        div.appendChild(foto)
        div.appendChild(titulo)
        div.appendChild(fecha)
        div.appendChild(categoria)
        div.appendChild(asistencia)
        div.appendChild(lugar)
        div.appendChild(precio)
        div.appendChild(description)
        div.appendChild(link)     
        lista.appendChild(div)
    

