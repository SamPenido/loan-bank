 // Função para voltar ao topo
 window.onscroll = function() {scrollFunction()};

 function scrollFunction() {
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
     document.getElementById("myBtn").style.display = "block";
   } else {
     document.getElementById("myBtn").style.display = "none";
   }
 }
 
 function topFunction() {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
 }
 
 // SweetAlert para mostrar aviso
 if (!localStorage.getItem('aviso-exibido')) {
     Swal.fire({
         title: 'Atenção!',
         text: 'NUNCA faça qualquer tipo de depósito para conseguir seu empréstimo. Todo o serviço prestado é inteiramente gratuito para você. Não trabalhamos com a modalidade seguro fiança. Na dúvida ligue (31) 3238-1550',
         icon: 'warning',
         confirmButtonText: 'Ok!'
     });
     localStorage.setItem('aviso-exibido', true);
    }

    document.addEventListener('DOMContentLoaded', function() {
      const partnerCards = document.querySelectorAll('.partner-card');
      partnerCards.forEach(card => {
          card.addEventListener('click', () => {
              const url = card.dataset.url;
              window.open(url, '_blank');
          });
      });
  });

  
  
