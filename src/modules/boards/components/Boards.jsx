import { useEffect, useReducer } from "react"
import getBoards from "../helperFuction/getBoards"
import { Flex } from "@chakra-ui/react";
import BoardCard from "./BoardCard";
import CreateBoard from "./CreateBoard";
import Loader from "../../common/Loader";
import ErrorPage from "../../common/ErrorPage";
import boardReduce from "../helperFuction/boardReduce";

function Boards({setBackButton}) {

    const [boardState,dispatch] = useReducer(boardReduce,{
        data:[],
        loader:true,
        error:false
    })

    const handelCreateBoard=(newData)=>{
        dispatch({ type: "create_board", payload: newData })
    }

    useEffect(()=>{
        getBoards()
        .then((data)=>{
            dispatch({ type:"board_data_resolve",payload : data })
        })
        .catch((err)=>{
            dispatch({ type:"board_data_reject" })
        })
        setBackButton(true);
    },[])

    if(boardState.error){
        return<ErrorPage/>
    }
    if(boardState.loader){
        return <Loader/>
    }

  return (
    <div>
        <Flex gap={5} flexWrap='wrap' justifyContent={{base:"center",md:"start"}} p={10}>
            <CreateBoard setData={handelCreateBoard}/>
        {boardState.data.map((ele)=>{
            return <BoardCard key={ele.id} data={ele}/>
        })}
        </Flex>
    </div>
  )
}

export default Boards