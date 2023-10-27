import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getAllList from "../helperFunction/getAllList";
import RenderList from "./RenderList";
import { SimpleGrid } from "@chakra-ui/react";
import AddList from "./AddList";
import Loader from "../../common/Loader";
import ErrorPage from "../../common/ErrorPage";

function ListPage({setBackButton}) {
  const { id } = useParams();
  const [list, setList] = useState();
  const [loader, setloader] = useState(true);
  const [error,setError]=useState(false);

  useEffect(() => {
    getAllList(id).then((data) => {
      setList(data);
      setloader(false);
      setBackButton(false);
    })
    .catch(()=>{
      setError(true);
    })
    
  }, []);

  if(error){
    return<ErrorPage/>
}

  if (loader) {
    return <Loader/>
  }

  const handleDeleteList = (listId) => {
    setList(list.filter((ele) => ele.id != listId));
  };

  return (
    <SimpleGrid overflowX="scroll"
    height="90vh"
      gridTemplateColumns="repeat(auto-fill,minmax(20rem,1fr))"
      gridAutoFlow="column"
      gap={8}
      p={10}
    >
      <RenderList list={list} deleteFuncton={handleDeleteList} />
      <AddList id={id} setList={setList} />
    </SimpleGrid>
  );
}

export default ListPage;
