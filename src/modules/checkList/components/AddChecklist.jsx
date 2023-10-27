import { AddIcon } from "@chakra-ui/icons";
import { Box, Button, CloseButton, Input, Stack } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import addChecklist from "../helperFunction/addChecklist";

function AddChecklist({ createChecklist, cardId }) {
  const [check, setCheck] = useState(true);

  return (
    <Box>
      {check ? (
        <ButtonAddChecklist setCheck={setCheck} />
      ) : (
        <InputAddChecklist
          setCheck={setCheck}
          setChecklist={createChecklist}
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
  const inputRef = useRef();

  return (
    <Box mb={2} p={2}>
      <Input
        placeholder="Checklist Name"
        backgroundColor="white"
        color="black"
        ref={inputRef}
        onChange={(e) => setinputText(e.target.value)}
      />
      <Stack direction="row" mt={1}>
        <Button
          colorScheme="green"
          isDisabled={!inputText ? true : false}
          onClick={() => {
            addChecklist({ id: cardId, name: inputRef.current.value }).then(
              (data) => {
                setChecklist(data);
                inputRef.current.value = "";
                setCheck((prev) => !prev);
              }
            );
          }}
        >
          Add
        </Button>
        <CloseButton
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
export default AddChecklist;
