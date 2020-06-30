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
    window.open('./Space_Comics - Copia/index.html')
}

