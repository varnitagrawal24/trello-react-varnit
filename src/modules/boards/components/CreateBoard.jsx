import { AddIcon } from "@chakra-ui/icons";
import {
  Button,
  Card,
  CardHeader,
  Heading,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from "@chakra-ui/react";
import postBoards from "../helperFuction/postBoard";
import { useRef, useState } from "react";

function CreateBoard({ setData }) {
  const [activeBtn, setActiveBtn] = useState("");
  const inputRef = useRef();

  return (
    <Popover placement="bottom" closeOnBlur={false}>
      {({ onClose }) => (
        <>
          <PopoverTrigger>
            <Card
              width={250}
              height={100}
              bg="blackAlpha.300"
              color="blackAlpha.600"
              variant="outline"
            >
              <CardHeader textAlign="center">
                <Heading size="md">Create New Board</Heading>
                <AddIcon />
              </CardHeader>
            </Card>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverBody bg="blackAlpha.600" color="white">
              <Input
                placeholder="Board Name"
                _placeholder={{ color: "white" }}
                fontWeight={900}
                ref={inputRef}
                onChange={(e) => setActiveBtn(e.target.value)}
              />
              <Button
                colorScheme="green"
                mt={1}
                isDisabled={activeBtn ? false : true}
                onClick={() => {
                  postBoards({ name: inputRef.current.value }).then((data) => {
                    setData(data);
                    inputRef.current.value = "";
                  });
                  onClose();
                }}
              >
                Add
              </Button>
            </PopoverBody>
          </PopoverContent>
        </>
      )}
    </Popover>
  );
}

export default CreateBoard;
