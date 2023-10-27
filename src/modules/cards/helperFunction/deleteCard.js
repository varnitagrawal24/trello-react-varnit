import axios from "axios";

export default async function deleteCard( id ) {
  const response = await axios.delete(
    `https://api.trello.com/1/cards/${id}?key=${
      import.meta.env.VITE_API_KEY
    }&token=${import.meta.env.VITE_TOKEN}`
  );
  return response.data;

}