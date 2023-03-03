
const fecha=data.currentDate;
const atrasado =[];


   for (let i=0; i<data.events.length;i++){
       if(fecha<data.events[i].date)
       {
           let atrasa=data.events[i]  ;
           atrasado.push(atrasa)
           
       }
    }
   
    crearlista(atrasado);
 

function crearlista (arr){
    for(let car of arr){ 
    const lista=document.getElementById('carta')

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
        div.appendChild(newLink)
        
        
        
        
    
        
    lista.appendChild(div)

         }
}
 
