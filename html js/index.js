let btnStack = document.getElementById('btn-stack');
let animateBackground = document.getElementById('animateBackground');

btnStack.addEventListener('click', function(){
    animateBackground.classList.toggle('bg-animate-none');
    btnStack.textContent = stack.classList.contains('visible') ? 'Fermer' : 'Mes Stacks';
});    