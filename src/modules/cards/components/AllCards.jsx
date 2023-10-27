import React, { useEffect, useState } from "react";
import getAllCard from "../helperFunction/getAllCards";
import { Spinner } from "@chakra-ui/react";
import SingleCard from "./SingleCard";
import AddCard from "./AddCard";
import Loader from "../../common/Loader";

function AllCards({ id }) {
  const [data, setData] = useState();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    getAllCard(id).then((data) => {
      setData(data);
      setLoader(false);
    });
  }, []);

  if (loader) {
    return <Loader/>
  }

  const deleteFunction = (cardId) => {
    setData(data.filter((ele) => ele.id != cardId));
  };

  return (
    <div>
      {data.map((ele) => (
        <SingleCard key={ele.id} data={ele} deleteFunction={deleteFunction} />
      ))}
      <AddCard setData={setData} listId={id} />
    </div>
  );
}

export default AllCards;
