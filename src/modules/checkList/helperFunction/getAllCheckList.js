import axios from "axios";

export default async function getAllCheckList(id) {
  const response = await axios.get(
    ` https://api.trello.com/1/cards/${id}/checklists?key=${
      import.meta.env.VITE_API_KEY
    }&token=${import.meta.env.VITE_TOKEN}`
  );
  return response.data;
}