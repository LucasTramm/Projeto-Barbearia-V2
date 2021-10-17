//const pessoa ={
//    name: 'Robson',
//    age: 32,

//        falar: function (){
//           alert(pessoa.name)
//            alert(pessoa.age)
//        }
//}
//pessoa.falar()

//DOM - Document Object Model
//Abre e fecha o menu quando clicar no icone
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
//console.log(toggle)

for (const element of toggle){
    element.addEventListener('click', function() {
            //alert('Estamos aqui!')

            nav.classList.toggle('show')
    })
}


const links = document.querySelectorAll('nav ul li a')

for(const link of links) {
    link.addEventListener('click', function(){
        nav.classList.remove('show')
    })
}
