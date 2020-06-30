
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
        window.location.href = ('../home.html')
    })

let logo = document.getElementById('logo-header')

logo.onclick = function(){
    window.location.href = '../home.html'
}
