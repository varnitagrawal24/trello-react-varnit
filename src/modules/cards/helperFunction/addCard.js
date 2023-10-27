import axios from "axios";

export default async function addCard({ id, name }) {
  const response = await axios.post(
    `https://api.trello.com/1/cards?idList=${id}&name=${name}&key=${
      import.meta.env.VITE_API_KEY
    }&token=${import.meta.env.VITE_TOKEN}`
  );
  return response.data;
}
