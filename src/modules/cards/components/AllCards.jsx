import React, { useEffect, useReducer, useState } from "react";
import getAllCard from "../helperFunction/getAllCards";
import SingleCard from "./SingleCard";
import AddCard from "./AddCard";
import Loader from "../../common/Loader";
import cardReduce from "../helperFunction/cardReduce";

function AllCards({ id }) {
  const [cardState, dispatch] = useReducer(cardReduce, {
    data: [],
    loader: true,
  });

  useEffect(() => {
    getAllCard(id).then((data) => {
      dispatch({ type: "card_data_resolve", payload: data });
    });
  }, []);

  if (cardState.loader) {
    return <Loader />;
  }

  const handleDeleteCard = (cardId) => {
    dispatch({ type: "delete_card", payload: cardId });
  };

  const handleCreateCard = (newCardData) => {
    dispatch({ type: "create_card", payload: newCardData });
  };

  return (
    <div>
      {cardState.data.map((ele) => (
        <SingleCard key={ele.id} data={ele} deleteFunction={handleDeleteCard} />
      ))}
      <AddCard listId={id} createCard={handleCreateCard} />
    </div>
  );
}

export default AllCards;
