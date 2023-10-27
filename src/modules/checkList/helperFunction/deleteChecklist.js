import axios from "axios";

export default async function deleteChecklist(id) {
  const response = await axios.delete(
    `https://api.trello.com/1/checklists/${id}?key=${
      import.meta.env.VITE_API_KEY
    }&token=${import.meta.env.VITE_TOKEN}`
  );
  return response.data;
}
