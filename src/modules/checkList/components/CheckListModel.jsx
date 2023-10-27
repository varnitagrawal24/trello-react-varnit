import { Spinner } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import getAllCheckList from "../helperFunction/getAllCheckList";
import CheckList from "./CheckList";
import AddChecklist from "./AddChecklist";
import Loader from "../../common/Loader";

function CheckListModel({ cardId }) {
  const [allChecklist, setAllCheckList] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    getAllCheckList(cardId).then((data) => {
      setAllCheckList(data);
      setLoader(false);
    });
  }, []);

  if (loader) {
    return <Loader/>
  }

  const handleDeleteChecklist = (checklistId) => {
    setAllCheckList(allChecklist.filter((ele) => ele.id != checklistId));
  };

  return (
    <div>
      <AddChecklist cardId={cardId} setData={setAllCheckList} />
      {allChecklist.map((checklist) => (
        <CheckList
          key={checklist.id}
          cardId={cardId}
          checklist={checklist}
          deleteFunction={handleDeleteChecklist}
        />
      ))}
    </div>
  );
}

export default CheckListModel;
