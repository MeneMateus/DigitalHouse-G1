      /*ANIMATION*/

    gsap.from('#super-man' , {
        duration: 0.6,
        opacity: 0,
        scale: 0.5,
    })
    
    gsap.from('.descrip-box', {
        duration: 0.6,
        opacity: 0,
        scale: 0.3,
        delay: 0.5
    })
    
    gsap.from('.botao', {
        duration: 0.6,
        opacity: 0,
        scale: 0.3,
        delay: 1
    })

    let fechar = document.getElementById('fechar');
    
    fechar.addEventListener("click", function(){
        window.location.href = ('../home.html')
    })

let logo = document.getElementById('logo-header')

logo.onclick = function(){
    window.location.href = '../home.html'
}

