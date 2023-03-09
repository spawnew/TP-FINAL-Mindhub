const queryString = location.search

const params = new URLSearchParams(queryString)

const id = params.get('id')

const cardId = data.events.find(car => car._id==id)
console.log(cardId)


let lista=document.getElementById('carta')

    

    let div=document.createElement("div")
      
            let titulo = document.createElement('h5')
            let foto=document.createElement('img')
            let precio=document.createElement('h7')
            let fecha=document.createElement('h7')
            let categoria=document.createElement('h7') 
            let description = document.createElement('p')
            fecha.textContent=cardId.date
            let link = document.createElement('a')
     div.className="card"
          categoria.textContent=` ${cardId.category}`
            foto.src=` ${cardId.image}`
            foto.className = "card-img-top"
            titulo.className="card.title"
          precio.className="card-body"
           description.textContent=` ${cardId.description}`
           description.className="descripcion"
          precio.innerText="price"+" "+"$"+` ${cardId.price}`
        titulo.textContent=` ${cardId.name}`
        link.href="./Home.html"
        link.textContent="volver"
       
        div.appendChild(foto)
        div.appendChild(titulo)
        div.appendChild(fecha)
        div.appendChild(categoria)
        div.appendChild(precio)
        div.appendChild(description)
        div.appendChild(link)     
        lista.appendChild(div)
    

