import React, { useReducer } from "react";
import { Progress, Stack } from "@chakra-ui/react";
import AddCheckItem from "./AddCheckItem";
import CheckBox from "./CheckBox";
import checkitemReduce from "../helperFunction/checkitemReduce";

function CheckItems({ checklistId, checkItems, cardId }) {
  const [checkitemState, dispatch] = useReducer(checkitemReduce, {
    data: [...checkItems],
  });
  

  const progressbarValue = () => {
    const checkedValue = checkitemState.data.reduce((acc, item) => {
      if (item.state === "complete") acc++;
      return acc;
    }, 0);
    return (checkedValue * 100) / checkitemState.data.length;
  };

  const handleUpdateCheckItem = (checkitemId) => {
    dispatch({ type: "update_checkitem", payload: checkitemId });
  };

  const handleDeleteCheckItem = (checkitemId) => {
    dispatch({ type: "delete_checkitem", payload: checkitemId });
  };

  const handleCreateCheckItem = (newCheckitemData) => {
    dispatch({ type: "create_checkitem", payload: newCheckitemData });
  };

  return (
    <Stack>
      <AddCheckItem checklistId={checklistId} setData={handleCreateCheckItem}/>

      {checkitemState.data.length ? (
        <Progress value={progressbarValue()} />
      ) : null}

      {checkitemState.data.map((checklistItem) => (
        <CheckBox
          key={checklistItem.id}
          checklistItem={checklistItem}
          checklistId={checklistId}
          cardId={cardId}
          handleUpdateCheckItem={handleUpdateCheckItem}
          handleDeleteCheckItem={handleDeleteCheckItem}
        />
      ))}
    </Stack>
  );
}

export default CheckItems;
