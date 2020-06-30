let img = document.querySelectorAll('#novidades-hqs img');

for (let i = 0; i < img.length; i++) {
    img[i].onmouseover = function () {
        this.classList.remove('shrink');
        this.classList.add('grow');
    };
    img[i].onmouseout = function () {
        this.classList.remove('grow');
        this.classList.add('shrink');
    };
}


let hqsuperman = document.getElementById("hqSuperman");

hqsuperman.onclick = function(){
    window.location.href = './Space_Comics - Copia/index.html'
}



let logo = document.getElementById('logo-header')

logo.onclick = function(){
    window.location.href = './home.html'
}

      /*ANIMATION*/
      gsap.from('.options', {
        duration: 1,
        scale: 0.5, 
        opacity: 0, 
        delay: 0.5, 
        stagger: 0.2, 
        force3D: true
      });