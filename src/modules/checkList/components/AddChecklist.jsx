import { AddIcon } from "@chakra-ui/icons";
import { Box, Button, CloseButton, Input, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import addChecklist from "../helperFunction/addChecklist";

function AddChecklist({ setData, cardId }) {
  const [check, setCheck] = useState(true);

  return (
    <Box>
      {check ? (
        <ButtonAddChecklist setCheck={setCheck} />
      ) : (
        <InputAddChecklist
          setCheck={setCheck}
          setChecklist={setData}
          cardId={cardId}
        />
      )}
    </Box>
  );
}

function ButtonAddChecklist({ setCheck }) {
  return (
    <Button mb={2} p={2} onClick={() => setCheck((prev) => !prev)}>
      <AddIcon /> Add Checklist
    </Button>
  );
}

function InputAddChecklist({ setCheck, setChecklist, cardId }) {
  const [inputText, setinputText] = useState("");

  return (
    <Box mb={2} p={2}>
      <Input
        placeholder="Checklist Name"
        backgroundColor="white"
        color="black"
        value={inputText}
        onChange={(e) => setinputText(e.target.value)}
      />
      <Stack direction="row" mt={1}>
        <Button
          colorScheme="green"
          isDisabled={!inputText ? true : false}
          onClick={() => {
            addChecklist({ id: cardId, name: inputText }).then((data) => {
              setChecklist((prev) => [...prev, data]);
              setinputText("");
              setCheck((prev) => !prev);
            });
          }}
        >
          Add
        </Button>
        <CloseButton
          _hover={{ bg: "none" }}
          onClick={() => {
            setinputText("");
            setCheck((prev) => !prev);
          }}
        />
      </Stack>
    </Box>
  );
}
export default AddChecklist;
