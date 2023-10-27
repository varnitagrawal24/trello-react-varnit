import React, { useEffect, useReducer, useState } from "react";
import getAllCheckList from "../helperFunction/getAllCheckList";
import CheckList from "./CheckList";
import AddChecklist from "./AddChecklist";
import Loader from "../../common/Loader";
import checklistReduce from "../helperFunction/checklistReduce";

function CheckListModel({ cardId }) {
  const [checklistState, dispatch] = useReducer(checklistReduce, {
    data: [],
    loader: true,
  });

  useEffect(() => {
    getAllCheckList(cardId).then((data) => {
      dispatch({ type: "checklist_data_resolve", payload: data });
    });
  }, []);

  if (checklistState.loader) {
    return <Loader />;
  }

  const handleDeleteChecklist = (checklistId) => {
    dispatch({ type: "delete_checklist", payload: checklistId });
  };

  const handleCreateChecklist = (newChecklistData) => {
    dispatch({ type: "create_checklist", payload: newChecklistData });
  };

  return (
    <div>
      <AddChecklist cardId={cardId} createChecklist={handleCreateChecklist} />
      {checklistState.data.map((checklist) => (
        <CheckList
          key={checklist.id}
          cardId={cardId}
          checklist={checklist}
          handleDeleteChecklist={handleDeleteChecklist}
        />
      ))}
    </div>
  );
}

export default CheckListModel;
