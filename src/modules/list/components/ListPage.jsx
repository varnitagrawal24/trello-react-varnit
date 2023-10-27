import { useEffect, useReducer, useState } from "react";
import { useParams } from "react-router-dom";
import getAllList from "../helperFunction/getAllList";
import RenderList from "./RenderList";
import { SimpleGrid } from "@chakra-ui/react";
import AddList from "./AddList";
import Loader from "../../common/Loader";
import ErrorPage from "../../common/ErrorPage";
import listReduce from "../helperFunction/listReduce";

function ListPage({ setBackButton }) {
  const { id } = useParams();

  const [listState, dispatch] = useReducer(listReduce, {
    data: [],
    loader: true,
    error: false,
  });

  const handleCreateList = (newData) => {
    dispatch({ type: "create_list", payload: newData });
  };

  useEffect(() => {
    getAllList(id)
      .then((data) => {
        dispatch({ type: "list_data_resolve", payload: data });
      })
      .catch(() => {
        dispatch({ type: "list_data_reject" });
      });
    setBackButton(false);
  }, []);

  if (listState.error) {
    return <ErrorPage />;
  }

  if (listState.loader) {
    return <Loader />;
  }

  const handleDeleteList = (listId) => {
    dispatch({ type: "delete_list", payload: listId });
  };

  return (
    <SimpleGrid
      overflowX="scroll"
      height="90vh"
      gridTemplateColumns="repeat(auto-fill,minmax(20rem,1fr))"
      gridAutoFlow="column"
      gap={8}
      p={10}
    >
      <RenderList list={listState.data} deleteList={handleDeleteList} />
      <AddList createList={handleCreateList} />
    </SimpleGrid>
  );
}

export default ListPage;
