import { AddIcon } from "@chakra-ui/icons";
import { Box, Button, CloseButton, Input, Stack } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import addCard from "../helperFunction/addCard";

function AddCard({ listId, createCard }) {
  const [check, setCheck] = useState(true);

  return (
    <Box>
      {check ? (
        <ButtonAddCard setCheck={setCheck} />
      ) : (
        <InputAddCard
          setCheck={setCheck}
          createCard={createCard}
          listId={listId}
        />
      )}
    </Box>
  );
}

function ButtonAddCard({ setCheck }) {
  return (
    <Box
      bg="gray.400"
      color="blackAlpha.900"
      mb={2}
      p={2}
      onClick={() => setCheck((prev) => !prev)}
    >
      <AddIcon /> Add Card
    </Box>
  );
}

function InputAddCard({ setCheck, createCard, listId }) {
  const [inputText, setinputText] = useState("");
  const inputRef = useRef();

  return (
    <Box bg="gray.400" color="white" mb={2} p={2}>
      <Input
        placeholder="Card Name"
        backgroundColor="white"
        color="black"
        ref={inputRef}
        onChange={(e) => setinputText(e.target.value)}
      />
      <Stack direction="row" mt={2}>
        <Button
          colorScheme="green"
          isDisabled={!inputText ? true : false}
          onClick={() => {
            addCard({ id: listId, name: inputText }).then((data) => {
              createCard(data);
              inputRef.current.value = "";
              setCheck((prev) => !prev);
            });
          }}
        >
          Add
        </Button>
        <CloseButton
          size="lg"
          color="blackAlpha.900"
          _hover={{ bg: "none" }}
          onClick={() => {
            inputRef.current.value = "";
            setCheck((prev) => !prev);
          }}
        />
      </Stack>
    </Box>
  );
}
export default AddCard;
