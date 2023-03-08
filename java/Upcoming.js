
const fecha=data.currentDate;
 let adelantado=[];
     for (let i=0; i<data.events.length;i++){
        if(fecha>data.events[i].date)
        {
            let atrasa=data.events[i] ;
            adelantado.push(atrasa)
            
        }
    } //solo para filtrar los eventos futuros y los pongo en una variable

    

crearlista(adelantado)



const formu=document.getElementById('formulario')
    const input=document.getElementById('nombre')

//includes()
 
//toUpperCase()//para poner en minuscula todo no olvidar el parentesis
   formu.addEventListener('submit',(e)=>{ 
        e.preventDefault();//evita q recargue la pagina
    let encontre=[];  
     encontre=data.events.filter(el =>
    
         (el.name.toUpperCase().includes(input.value.toUpperCase())||el.description.toUpperCase().includes(input.value.toUpperCase()))
    )

   
    console.log(encontre)
    crearlista(encontre);
   
    
    
    })// los form siempre van submit
                                  // (e)=> lo que quiero q pase al escuchar ese

  
                                       
                                


  






function crearlista (arr){
   
    let lista=document.getElementById('carta')
    lista.innerHTML=""
    for(let car of arr){ 

    let div=document.createElement("div")
      
            let titulo = document.createElement('h5')
            let foto=document.createElement('img')
            let precio=document.createElement('h7')
            let newLink = document.createElement("a")
            let fecha=document.createElement('h7')
            let categoria=document.createElement('h7') 
            let description = document.createElement('p')
            fecha.textContent=car.date
            newLink.href = "./Detail.html"
newLink.innerText = "Ver mas.."      
      div.className="card"
          categoria.textContent=car.category
            foto.src=car.image
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
        div.appendChild(newLink)     
        lista.appendChild(div)
    }
   
}












    

































    





