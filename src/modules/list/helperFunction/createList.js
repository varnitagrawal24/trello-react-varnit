import axios from "axios";

export default async function postList({ id, name }) {
  const response = await axios.post(
    `https://api.trello.com/1/boards/${id}/lists?name=${name}&key=${
      import.meta.env.VITE_API_KEY
    }&token=${import.meta.env.VITE_TOKEN}`
  );
  return response.data;
}
