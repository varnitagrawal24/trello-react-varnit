import React from "react";
import { Box, Checkbox, useDisclosure } from "@chakra-ui/react";
import updateCheckitem from "../helperFunction/updateChecklistItem";
import DeleteBox from "../../common/DeleteBox";
import { DeleteIcon } from "@chakra-ui/icons";
import deleteCheckItem from "../helperFunction/deleteCheckItem";

function CheckBox({checklistItem, checklistId, cardId, handleUpdateCheckItem, handleDeleteCheckItem}) {

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box display="flex" justifyContent="space-between">
      <Checkbox
        defaultChecked={checklistItem.state === "complete" ? true : false}
        onChange={(e) => {
          const value = e.target.checked;
          updateCheckitem({ cardId, idCheckItem: checklistItem.id, value }).then((data)=>{
            handleUpdateCheckItem(data);
          });
          
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
            handleDeleteCheckItem(checklistItem.id);
            onClose();
          });
        }}
      />
    </Box>
  );
}

export default CheckBox;
