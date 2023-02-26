

const card0=[];
card0.push(data.events[0])
const card1=[];
card1.push(data.events[1])
const card2=[];
card2.push(data.events[2])
const card3=[];
card3.push(data.events[3])
const card4=[];
card4.push(data.events[4])
const card5=[];
card5.push(data.events[5])
const card6=[];
card6.push(data.events[6])
const card7=[];
card7.push(data.events[7])
const card8=[];
card8.push(data.events[8])
const card9=[];
card9.push(data.events[9])
const card10=[];
card10.push(data.events[10])
const card11=[];
card11.push(data.events[11])
const card12=[];
card12.push(data.events[12])
const card13=[];
card13.push(data.events[13])






crearlista(card0)
crearlista(card1)
crearlista(card2)
crearlista(card3)
crearlista(card4)
crearlista(card5)
crearlista(card6)
crearlista(card7)
crearlista(card8)
crearlista(card9)
crearlista(card10)
crearlista(card11)
crearlista(card12)
crearlista(card13)
crearlista(card14)








function crearlista (arr){
    const lista=document.getElementById('carta')

    let div=document.createElement("div")
    
        
         for(let car of arr){ 
           
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
        div.appendChild(newLink)
        
        
        
        
    }
        
    lista.appendChild(div)


}

