const API = process.env.API_URL || "https://jsonplaceholder.typicode.com";

const endPoints = {
  todos: {
    getAll: `${API}/todos`,
    update: (id) => `${API}/todos/${id}`,
    create: `${API}/todos`,
  },
};

export default endPoints;
