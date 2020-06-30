<<<<<<< HEAD
gsap.from('#super-man' , {
    duration: 2,
    opacity: 0,
    scale: 0.5,
})

gsap.from('.descrip-box', {
    duration: 4,
    opacity: 0,
    scale: 0.3,
    delay: 1
})

gsap.from('.botao', {
    duration: 4,
    opacity: 0,
    scale: 0.3,
    delay: 2
})

let fechar = document.getElementById('fechar');

fechar.addEventListener("click", function(){
    window.location.replace('file:///C:/Users/Jo%C3%A3o%20Victor/Desktop/digitalhouse/home.html')
})
=======
let logo = document.getElementById('logo-header')

logo.onclick = function(){
    window.location.href = '../home.html'
}
>>>>>>> e43f5036a803c8f33f3608dd7d52c17bffd7aa95
