import React, { useEffect, useState } from "react";
import getAllChecklistItem from "../helperFunction/getAllChecklistItem";
import {
  Box,
  Button,
  Checkbox,
  Progress,
  Spinner,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";

import AddCheckItem from "./AddCheckItem";
import CheckBox from "./CheckBox";
import Loader from "../../common/Loader";

function CheckItems({ checklistId, cardId }) {
  const [allChecklistItem, setAllChecklistItem] = useState();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    getAllChecklistItem(checklistId).then((data) => {
      setAllChecklistItem(data);
      setLoader(false);
    });
  }, []);

  if (loader) {
    return <Loader />;
  }

  const progressbarValue = () => {
    const checkedValue = allChecklistItem.reduce((acc, item) => {
      if (item.state === "complete") acc++;
      return acc;
    }, 0);
    return (checkedValue * 100) / allChecklistItem.length;
  };

  return (
    <Stack>
      <AddCheckItem setData={setAllChecklistItem} checklistId={checklistId} />
      {allChecklistItem.length ? <Progress value={progressbarValue()} /> : null}
      {allChecklistItem.map((checklistItem) => (
        <CheckBox
          key={checklistItem.id}
          checklistItem={checklistItem}
          setAllChecklistItem={setAllChecklistItem}
          checklistId={checklistId}
          cardId={cardId}
        />
      ))}
    </Stack>
  );
}

export default CheckItems;
