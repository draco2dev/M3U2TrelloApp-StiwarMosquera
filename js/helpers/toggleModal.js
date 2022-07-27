
const openModal = document.querySelector('.active')
const closeModal = document.querySelector('.modal_close')

const modal = document.querySelector('.modal');


openModal.addEventListener('click', (e)=>{
    e.preventDefault
    modal.classList.add('modal-show');
})

closeModal.addEventListener('click', (e)=>{
    e.preventDefault
    modal.classList.remove('modal-show');
})


