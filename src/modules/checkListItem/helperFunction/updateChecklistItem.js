import axios from "axios";

export default async function updateCheckitem({cardId,idCheckItem,value}) {
  const response = await axios.put(
    ` https://api.trello.com/1/cards/${cardId}/checkItem/${idCheckItem}?state=${value}&key=${
      import.meta.env.VITE_API_KEY
    }&token=${import.meta.env.VITE_TOKEN}`
  );
  return response.data;
}