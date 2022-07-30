// Creación de la API Fake
const API_URL = "https://my-json-server.typicode.com/draco2dev/M3U2applicationTrello";

axios
  .get(`${API_URL}/tasks`)
  .then((res) => showAllTasks(res.data))
  .catch((err) => console.error(err));

// buscando los datos de la api 
const showAllTasks = (data) => { data.map((task) => createTask(task)); };

