
const openModal = document.querySelector('.active')
const closeModal = document.querySelector('.modal_close')

const openOneModal = document.querySelector('.kanban__add-item')
const openTowModal = document.querySelector('.activeTow')
const openTreeModal = document.querySelector('.activeTree')

const modal = document.querySelector('.modal');


openModal.addEventListener('click', (e)=>{
    e.preventDefault
    modal.classList.add('modal-show');
})

closeModal.addEventListener('click', (e)=>{
    e.preventDefault
    modal.classList.remove('modal-show');
})

// cierre 2
openOneModal.addEventListener('click', (e)=>{
    e.preventDefault
    modal.classList.add('modal-show');
})
openTowModal.addEventListener('click', (e)=>{
    e.preventDefault
    modal.classList.add('modal-show');
})
openTreeModal.addEventListener('click', (e)=>{
    e.preventDefault
    modal.classList.add('modal-show');
})



