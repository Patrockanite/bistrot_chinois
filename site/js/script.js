$(function () { // Same as document.addEventListener("DOMContentLoaded"...

  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');
    }
  });

  
  /*Dans Firefox et Safari, l'événement click ne conserve pas le focus
   // sur le bouton cliqué. Par conséquent, l'événement de flou ne se déclenchera pas sur
   // l'utilisateur clique ailleurs dans la page et le gestionnaire d'événement blur
   // qui est configuré ci-dessus ne sera pas appelé.
   // Reportez-vous au problème #28 dans le référentiel.
   // Solution : forcer le focus sur l'élément sur lequel l'événement click s'est déclenché*/


  $("#navbarToggle").click(function (event) {
    $(event.target).focus();
  });
});
