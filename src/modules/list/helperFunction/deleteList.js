import axios from "axios";

export default async function deleteList(id){
    const response= await axios.put(`https://api.trello.com/1/lists/${id}/closed?value=true&key=${import.meta.env.VITE_API_KEY}&token=${import.meta.env.VITE_TOKEN}`)
    return response.data;
}