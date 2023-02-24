const mail = 'eliancuevac@gmail.com';
const mailButton = document.querySelector('.fa-envelope');
const alert = document.querySelector('.modal-copy');

mailButton.addEventListener('click', () =>{
    navigator.clipboard.writeText(mail);
    alert.classList.remove('out');
    
})
