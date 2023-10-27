import {
  Box,
  Heading,
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import React from "react";
import { CheckListModel } from "../../checkList";
import { DeleteIcon } from "@chakra-ui/icons";
import DeleteBox from "../../common/DeleteBox";
import deleteCard from "../helperFunction/deleteCard";

function SingleCard({ data, deleteFunction }) {

  const { isOpen:modelIsOpen, onOpen:modelOnOpen, onClose:modelOnClose } = useDisclosure();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDeleteFunction=()=>{
    deleteCard(data.id).then(() => {
      deleteFunction(data.id);
      onClose();
    })
  }

  return (
    <>
      <Box bg="gray.400" color="white" mb={2} p={2} onClick={modelOnOpen} display="flex" flexDirection="row" justifyContent="space-between">
        <Heading size="md">{data.name}</Heading>
        <DeleteIcon onClick={(e)=>{
          e.stopPropagation();
          onOpen();
        }}/>
      </Box>

      <Modal isOpen={modelIsOpen} onClose={modelOnClose} size="4xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{data.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <CheckListModel cardId={data.id}/>
          </ModalBody>
        </ModalContent>
      </Modal>

      <DeleteBox isOpen={isOpen} onClose={onClose} handleDeleteFunction={handleDeleteFunction}/>
    </>
  );
}

export default SingleCard;
