$(function(){

    function atualizar_informacoes() {
      $("#watch-name").text( $(".slick-center").data("name") );
  
    }
  
    $(".container-slider").on('init', function(){
      atualizar_informacoes();
    });
  
  
    $(".container-slider").slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      prevArrow: $("#arrow-anterior"),
      nextArrow: $("#arrow-proximo"),
      responsive: [
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1
          }
        }
      ],
      focusOnSelect: true
    });
  
    $(".container-slider").on('afterChange', function(){
      atualizar_informacoes();
    });

    $(".slide").dblclick(function(){
        window.location.href = './Space_Comics - Copia/index.html';
    })
  
})



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



let logo = document.getElementsByClassName('slide')

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

