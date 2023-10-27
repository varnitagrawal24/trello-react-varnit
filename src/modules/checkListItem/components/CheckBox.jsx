import React from "react";
import { Box, Checkbox, useDisclosure } from "@chakra-ui/react";
import updateCheckitem from "../helperFunction/updateChecklistItem";
import DeleteBox from "../../common/DeleteBox";
import { DeleteIcon } from "@chakra-ui/icons";
import deleteCheckItem from "../helperFunction/deleteCheckItem";

function CheckBox({checklistItem, setAllChecklistItem, checklistId, cardId}) {

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box display="flex" justifyContent="space-between">
      <Checkbox
        key={checklistItem.id}
        defaultChecked={checklistItem.state === "complete" ? true : false}
        onChange={(e) => {
          const value = e.target.checked;
          updateCheckitem({ cardId, idCheckItem: checklistItem.id, value });
          setAllChecklistItem(prev =>
            prev.map((ele) => {
              if (ele.id === checklistItem.id) {
                ele.state =
                  ele.state === "complete" ? "incomplete" : "complete";
              }
              return ele;
            })
          );
        }}
      >
        {checklistItem.name}
      </Checkbox>
      <DeleteIcon onClick={onOpen} />
      <DeleteBox
        isOpen={isOpen}
        onClose={onClose}
        handleDeleteFunction={() => {
          deleteCheckItem(checklistId, checklistItem.id).then(() => {
            setAllChecklistItem(prev=>
              prev.filter((ele) => ele.id != checklistItem.id)
            );
            onClose();
          });
        }}
      />
    </Box>
  );
}

export default CheckBox;
