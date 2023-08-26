let openmenu = document.getElementById("icon-menu");
let menu = document.getElementById("show-menu");

openmenu.addEventListener("click", function(){
   menu.classList.toggle("show-lateral");
})

/*Buscador de detalles*/
document.addEventListener("keyup", e=>{
   if(e.target.matches("#buscador")){
      document.querySelectorAll(".box-content__card").forEach(cards =>{
        cards.textContent.toLowerCase().includes(e.target.value.toLowerCase())
        ?cards.classList.remove("filtro")
        :cards.classList.add("filtro")
      });
   }
})

/*Buscador de categorias index.html*/
document.addEventListener("keyup", e=>{
   if(e.target.matches("#buscador")){
      document.querySelectorAll(".buttons__all").forEach(categorias =>{
        categorias.textContent.toLowerCase().includes(e.target.value.toLowerCase())
        ?categorias.classList.remove("filtro")
        :categorias.classList.add("filtro")
      });
   }
})