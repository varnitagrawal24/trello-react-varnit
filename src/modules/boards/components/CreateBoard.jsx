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

function CreateBoard({ newBoard, setNewBoard, setData }) {
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
            <PopoverBody bg="blackAlpha.600" color="white" >
              <Input
                placeholder="Board Name"
                value={newBoard}
                _placeholder={{color:"white"}}
                fontWeight={900}
                onChange={(e) => setNewBoard(e.target.value)}
              />
              <Button
                colorScheme="green"
                mt={1}
                isDisabled={newBoard?false:true}
                onClick={() => {
                  postBoards({ name: newBoard }).then((data) => {
                    setData((prev) => [...prev, data]);
                    setNewBoard("");
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
