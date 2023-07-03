let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () => {

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    section.forEach(sec => {
        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header .navbar a[href*=' + id + ']').classList.add('active');
            });
        }
    });
}

document.querySelector('#search-icon').onclick = () => {
    document.querySelector('#search-form').classList.toggle('active');
}


document.querySelector('#close').onclick = () => {
    document.querySelector('#search-form').classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },

    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
    setInterval(loader, 1000);
}
window.onload = fadeOut;

function adicionarAoCarrinho(titulo) {
    // Obtém o valor atual do campo de texto
    var valorAtual = document.getElementById("pedidoInput").value;
  
    // Verifica se já existem títulos no campo de texto
    if (valorAtual) {
      // Verifica se o título já existe no campo de texto
      var regex = new RegExp(titulo + " \\((\\d+)\\)", "i");
      var tituloExistente = valorAtual.match(regex);
  
      if (tituloExistente) {
        // Obtém a quantidade atual do título existente
        var quantidadeAtual = parseInt(tituloExistente[1]);
  
        // Incrementa a quantidade atual
        quantidadeAtual++;
  
        // Atualiza o título existente com a quantidade atualizada
        var novoTitulo = titulo + " (" + quantidadeAtual + ")";
        var novoValor = valorAtual.replace(regex, novoTitulo);
        document.getElementById("pedidoInput").value = novoValor;
      } else {
        // Se o título não existe, adiciona o novo título ao campo de texto
        var novoTitulo = titulo + " (1)";
        var novoValor = valorAtual + "\n" + novoTitulo;
        document.getElementById("pedidoInput").value = novoValor;
      }
    } else {
      // Caso não haja títulos existentes, define apenas o novo título
      document.getElementById("pedidoInput").value = titulo + " (1)";
    }
  }