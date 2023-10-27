import { CheckIcon, DeleteIcon } from "@chakra-ui/icons";
import React from "react";
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useDisclosure,
} from "@chakra-ui/react";
import { CheckItems } from "../../checkListItem";
import deleteChecklist from "../helperFunction/deleteChecklist";
import DeleteBox from "../../common/DeleteBox";

function CheckList({ checklist, cardId, deleteFunction }) {

  const { isOpen, onOpen, onClose } = useDisclosure(); 

  const handleDeleteFunction=()=>{
    deleteChecklist(checklist.id).then(() => {
      deleteFunction(checklist.id);
      onClose();
    })
  }

  return (
    <>
    <Accordion allowToggle mb={5}>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              <CheckIcon /> {checklist.name} 
            </Box>
            <DeleteIcon onClick={(e)=>{
              e.stopPropagation();
              onOpen();
            }}/>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <CheckItems checklistId={checklist.id} cardId={cardId}/>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
    <DeleteBox handleDeleteFunction={handleDeleteFunction} onClose={onClose} isOpen={isOpen}/>
    </>
  );
}

export default CheckList;
