import axios from "axios";

export default async function getAllList(id){
    const response= await axios.get(`https://api.trello.com/1/boards/${id}/lists?key=${import.meta.env.VITE_API_KEY}&token=${import.meta.env.VITE_TOKEN}`)
    return response.data;
}