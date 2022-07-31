// Creación de la API Fake
const API_URL = "https://my-json-server.typicode.com/draco2dev/M3U2applicationTrello";

axios
  .get(`${API_URL}/tasks`)
  .then((res) => showAllTasks(res.data))
  .catch((err) => console.error(err));

// buscando los datos de la api 
const showAllTasks = (data) => { data.map((task) => createTask(task)); };

const createTask = (task) => {
  // Creamos la estructura de las tarjetas desde el JS
  let newTask = document.createElement("article");
  //Creamos un elemento article y le pasamos una clase card-task
  newTask.classList.add("card-task");

  // Titulo de las tarjetas
  let taskTitle = document.createElement("h3");
  taskTitle.classList.add("card-task__title");
  taskTitle.innerText = task.title;

  //Etiqueta parrafo
  let taskResponsible = document.createElement("p");
  taskResponsible.classList.add("card_task__responsible");
  taskResponsible.innerHTML = `<span class="card_task__responsible--tag-creator">Responsable:</span> ${task.person}`;

  // Etiqueta parrafo
  let taskDetails = document.createElement("p");
  taskDetails.classList.add("card-task__details");
  taskDetails.innerHTML = `<span class="card-task__details--task-details">Descripción:</span> ${task.details} `;

  //Etiqueta para crear la fecha
  let taskDate = document.createElement("p");
  taskDate.classList.add("card-task__date");
  taskDate.innerHTML = `<span class="card-task__date--tag-date">Plazo:</span> ${dateFormat(
    task.deadline
  )}`;

    //Etiqueta para la hora
  let taskCreate = document.createElement("p");
  taskCreate.classList.add("card-task__date");
  taskCreate.innerHTML = `<span class="card-task__date--tag-date">Creación:</span> ${dateFormat(
    task.created
  )}`;
  

  newTask.appendChild(taskTitle);
  newTask.appendChild(taskResponsible);
  newTask.appendChild(taskDetails);
  newTask.appendChild(taskDate);
  newTask.appendChild(taskCreate);

  // Referenciamos por medio del ID las columnas
  let columnToDo = document.querySelector("#todoTasks");
  let columnInProgress = document.querySelector("#progressTasks");
  let columnDone = document.querySelector("#doneTasks");

  // Preguntamos dependiendo el state que trae nuestra API es igual a to-do lo ubique en esa columna
  if (task.state === "to-do") {
    columnToDo.appendChild(newTask);
  }
  if (task.state === "in-progress") {
    columnInProgress.appendChild(newTask);
  }
  if (task.state === "done") {
    columnDone.appendChild(newTask);
  }
};



