
const fecha=data.currentDate;
 const adelantado=[];

    
    for (let i=0; i<data.events.length;i++){
        if(fecha>data.events[i].date)
        {
            let atrasa=data.events[i]           ;
            adelantado.push(atrasa)
            
        }
    }
    console.log(adelantado)



    const card0=[];
card0.push(adelantado[0])
const card1=[];
card1.push(adelantado[1])
const card2=[];
card2.push(adelantado[2])

const card3=[];
card3.push(adelantado[3])

const card4=[];
card4.push(adelantado[4])

const card5=[];
card5.push(adelantado[5])
const card6=[];
card6.push(adelantado[6])



crearlista(card0)
crearlista(card1)
crearlista(card2)
crearlista(card3)
crearlista(card4)
crearlista(card5)
crearlista(card6)






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



























    





