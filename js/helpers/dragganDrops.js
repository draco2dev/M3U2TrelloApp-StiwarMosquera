// const sor = new Sortable.default(
//     document.querySelectorAll('.kanban__dropzone'),
//     { draggable: 'article'}
// )
// columnas por la cual se moveran.

const container = document.querySelector("main")

const draggable = new Sortable.default(container,{
    draggable:"div"
})

draggable.on("drag:start", (e)=> console.log(e))

