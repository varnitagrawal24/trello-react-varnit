import axios from "axios";

export default async function getBoards() {
    const response = await axios.get(
      `https://api.trello.com/1/members/me/boards?key=${
        import.meta.env.VITE_API_KEY
      }&token=${import.meta.env.VITE_TOKEN}`
    );
    return response.data;
}
