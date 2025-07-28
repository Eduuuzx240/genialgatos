const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})
document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.slider');
  const slides = slider.querySelectorAll('img');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  const navLinks = document.querySelectorAll('.slider-nav a');
  let currentIndex = 0;
  const totalSlides = slides.length;

  // Função para mostrar o slide atual
  function showSlide(index) {
      slider.scrollLeft = slides[index].offsetWidth * index;
      updateNavIndicators(index);
  }

  // Atualiza os indicadores de navegação
  function updateNavIndicators(index) {
      navLinks.forEach((link, i) => {
          link.classList.toggle('active', i === index);
      });
  }

  function goToNextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      showSlide(currentIndex);
  }

  function goToPrevSlide() {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      showSlide(currentIndex);
  }

  nextBtn.addEventListener('click', goToNextSlide);
  prevBtn.addEventListener('click', goToPrevSlide);

  // Auto-play 
  setInterval(goToNextSlide, 5000);

  // Exibir o primeiro slide inicialmente
  showSlide(currentIndex);
});

    //modal

    function abrirModal() {
        document.getElementById('janela-modal').classList.add('abrir');
      }
      
      document.getElementById('fechar').addEventListener('click', function() {
        document.getElementById('janela-modal').classList.remove('abrir');
      });
      
      document.addEventListener('click', function(event) {
        if (event.target.classList.contains('janela-modal')) {
          document.getElementById('janela-modal').classList.remove('abrir');
        }
      });

      //botão de like

      const buttons = document.querySelectorAll('.like');
      const numbers = document.querySelectorAll('.number');
      
      // Carregar os valores das curtidas do localStorage
      buttons.forEach((button, index) => {
        const id = button.id.replace('like-', '');
        const numberElement = numbers[index];
        const likes = localStorage.getItem(`likes-${id}`);
      
        if (likes) {
          numberElement.textContent = likes;
          if (likes > 0) {
            button.classList.add('liked');
          }
        }
      });
      
      // Adicionar evento de clique nos botões
      buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
          const id = button.id.replace('like-', '');
          const numberElement = numbers[index];
      
          if (!button.classList.contains('liked')) {
            let likeValue = parseInt(numberElement.textContent);
            likeValue++;
            numberElement.textContent = likeValue;
            button.classList.add('liked');
            localStorage.setItem(`likes-${id}`, likeValue);
          } else {
            let likeValue = parseInt(numberElement.textContent);
            likeValue--;
            numberElement.textContent = likeValue;
            button.classList.remove('liked');
            localStorage.setItem(`likes-${id}`, likeValue);
          }
        });
      });
      
/* mensagem enviada & validação de email*/

function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function enviarMensagem(event) {
  const email = document.getElementById('email').value;
  if (!validarEmail(email)) {
      alert('Por favor, insira um email válido.');
      event.preventDefault(); // Impede o envio do formulário
      return;
  }
  alert("Seu mensagem foi enviada com sucesso.");
}


/*login toggle*/

  let submenu = document.getElementById("sub-menu-wrap");

  function togglemenu(){
    submenu.classList.toggle("open-menu");
}

    // Referências aos elementos
    const inputFoto = document.getElementById('input-foto');
    const fotoPerfil = document.getElementById('foto-perfil');
    const resetFoto = document.getElementById('reset-foto');
    const btnSalvar = document.getElementById('btn-salvar');
    const btnCancelar = document.getElementById('btn-cancelar');

    // Função para exibir a imagem escolhida
    inputFoto.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                fotoPerfil.src = e.target.result; // Atualiza a imagem de perfil com a nova imagem
            };
            reader.readAsDataURL(file); // Lê a imagem e converte para URL
        }
    });

    // Função para resetar a imagem de perfil para a original
    resetFoto.addEventListener('click', function() {
        fotoPerfil.src = 'https://bootdey.com/img/Content/avatar/avatar1.png'; // Imagem original
        inputFoto.value = ''; // Limpa o campo de input
    });

    // Função para salvar as alterações
    btnSalvar.addEventListener('click', function() {
        alert('Foto de perfil salva com sucesso!'); // Simula o envio da imagem para o servidor
    });

    // Função para cancelar as alterações
    btnCancelar.addEventListener('click', function() {
        alert('Alterações canceladas!');
    });