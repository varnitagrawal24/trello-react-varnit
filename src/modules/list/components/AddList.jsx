import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardHeader,
  CloseButton,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import postList from "../helperFunction/createList";

function ButtonAddList({ setCheck }) {
  return (
    <Card
      width="20rem"
      variant="elevated"
      bg="blackAlpha.500"
      color="blackAlpha.800"
      borderRadius={10}
      onClick={() => setCheck((prev) => !prev)}
    >
      <CardHeader>
        <Heading size="md">
          <AddIcon /> Add new list
        </Heading>
      </CardHeader>
    </Card>
  );
}

function InputAddList({ setCheck, id, setList }) {
  const [inputText, setinputText] = useState("");

  return (
    <Box
      width="20rem"
      height="6.5rem"
      p={2}
      variant="elevated"
      bg="blackAlpha.900"
      borderRadius={10}
    >
      <Input
        placeholder="List Name"
        backgroundColor="white"
        color="black"
        value={inputText}
        onChange={(e) => setinputText(e.target.value)}
      />
      <Stack direction="row" mt={2}>
        <Button
          colorScheme="green"
          isDisabled={!inputText ? true : false}
          onClick={() => {
            postList({ id, name: inputText }).then((data) => {
              setList((prev) => [...prev, data]);
              setinputText("");
              setCheck((prev) => !prev);
            });
          }}
        >
          Add
        </Button>
        <CloseButton
          size="lg"
          color="white"
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

function AddList({ id, setList }) {
  const [check, setCheck] = useState(true);

  return (
    <Box>
      {check ? (
        <ButtonAddList setCheck={setCheck} />
      ) : (
        <InputAddList setCheck={setCheck} id={id} setList={setList} />
      )}
    </Box>
  );
}

export default AddList;
