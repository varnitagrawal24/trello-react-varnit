import { AddIcon } from "@chakra-ui/icons";
import { Box, Button, CloseButton, Input, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import addCheckItem from "../helperFunction/addCheckitem";

function AddCheckItem({ setData, checklistId }) {
  const [check, setCheck] = useState(true);

  return (
    <Box>
      {check ? (
        <ButtonAddCheckitem setCheck={setCheck} />
      ) : (
        <InputAddCheckitem
          setCheck={setCheck}
          setCheckitem={setData}
          checklistId={checklistId}
        />
      )}
    </Box>
  );
}

function ButtonAddCheckitem({ setCheck }) {
  return (
    <Button
      size="sm"
      bg="gray.400"
      color="blackAlpha.900"
      mb={2}
      p={2}
      onClick={() => setCheck((prev) => !prev)}
    >
      <AddIcon /> Add CheckItem
    </Button>
  );
}

function InputAddCheckitem({ setCheck, setCheckitem, checklistId }) {
  const [inputText, setinputText] = useState("");

  return (
    <Box mb={2} p={2} size="sm">
      <Input
        size="sm"
        placeholder="CheckItem Name"
        backgroundColor="white"
        color="black"
        value={inputText}
        onChange={(e) => setinputText(e.target.value)}
      />
      <Stack direction="row" mt={1}>
      <Button
        size="sm"
        colorScheme="green"
        isDisabled={!inputText ? true : false}
        onClick={() => {
          addCheckItem({ id: checklistId, name: inputText }).then((data) => {
            setCheckitem((prev) => [...prev, data]);
            setinputText("");
            setCheck((prev) => !prev);
          });
        }}
      >
        Add
      </Button>
      <CloseButton _hover={{bg:"none"}} onClick={()=>{
        setinputText("");
        setCheck((prev) => !prev);
      }}/>
      </Stack>
    </Box>
  );
}

export default AddCheckItem;
