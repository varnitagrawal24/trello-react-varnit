import { useEffect, useState } from "react"
import getBoards from "../helperFuction/getBoards"
import { Flex, Heading } from "@chakra-ui/react";
import BoardCard from "./BoardCard";
import CreateBoard from "./CreateBoard";
import Loader from "../../common/Loader";
import ErrorPage from "../../common/ErrorPage";

function Boards({setBackButton}) {

    const [data,setData]=useState();
    const [loader,setLoader]=useState(true);
    const [error,setError]=useState(false);
    const [newBoard,setNewBoard]=useState("");

    useEffect(()=>{
        getBoards()
        .then((data)=>{
            setData(data);
            setLoader(false);
            setBackButton(true);
        })
        .catch((err)=>{
            setError(true)
        })
        
    },[])
    if(error){
        return<ErrorPage/>
    }
    if(loader){
        return <Loader/>
    }

  return (
    <div>
        <Flex gap={5} flexWrap='wrap' justifyContent={{base:"center",md:"start"}} p={10}>
            <CreateBoard newBoard={newBoard} setNewBoard={setNewBoard} setData={setData}/>
        {data.map((ele)=>{
            return <BoardCard key={ele.id} data={ele}/>
        })}
        </Flex>
    </div>
  )
}

export default Boards