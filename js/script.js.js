/* eventos de mouseover e mouseout nos botões do projeto*/


var show = document.querySelector("#change1")
var show2 = document.querySelector("#change2")
var show3 = document.querySelector("#change3")
var show4 = document.querySelector("#change4")

show.addEventListener("mouseover", function(){

    let botao1 = document.querySelector("#bt1")

    botao1.classList.remove("hide")

});

show.addEventListener("mouseout", function(){

    let botao1 = document.querySelector("#bt1")

    botao1.classList.add("hide")

});


show2.addEventListener("mouseover", function(){

    let botao2 = document.querySelector("#bt2")

    botao2.classList.remove("hide")

});

show2.addEventListener("mouseout", function(){

    let botao2 = document.querySelector("#bt2")

    botao2.classList.add("hide")

});


show3.addEventListener("mouseover", function(){

    let botao3 = document.querySelector("#bt3")

    botao3.classList.remove("hide")

});

show3.addEventListener("mouseout", function(){

    let botao3 = document.querySelector("#bt3")

    botao3.classList.add("hide")

});


show4.addEventListener("mouseover", function(){

    let botao4 = document.querySelector("#bt4")

    botao4.classList.remove("hide")

});

show4.addEventListener("mouseout", function(){

    let botao4 = document.querySelector("#bt4")

    botao4.classList.add("hide")

}); 

/*modal*/

const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () =>{
    modal.classList.toggle("esconder")
    fade.classList.toggle("esconder")
}

[openModalButton, closeModalButton].forEach((el) =>{
    el.addEventListener("click", () => toggleModal())
});


/*modal 2*/

const openModalButton2 = document.querySelector("#open-modal2");
const closeModalButton2 = document.querySelector("#close-modal2");
const modal2 = document.querySelector("#modal2");
const fade2 = document.querySelector("#fade2");

const toggleModal2 = () =>{
    modal2.classList.toggle("esconder2")
    fade2.classList.toggle("esconder2")
    
}

[openModalButton2, closeModalButton2].forEach((el) =>{
    el.addEventListener("click", () => toggleModal2())
});

