import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { AllCards } from "../../cards";
import { DeleteIcon } from "@chakra-ui/icons";
import deleteList from "../helperFunction/deleteList";
import DeleteBox from "../../common/DeleteBox";

function List({ data, handleDeleteList }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDeleteFunction = () => {
    deleteList(data.id).then((data) => {
      handleDeleteList(data.id);
      onClose();
    });
  };

  return (
    <Box>
      <Card
        width="20rem"
        variant="elevated"
        bg="blackAlpha.900"
        color="white"
        borderRadius={10}
      >
        <CardHeader>
          <Heading
            size="md"
            display="flex"
            justifyContent="space-between"
            onClick={onOpen}
          >
            {data.name} <DeleteIcon />
          </Heading>
        </CardHeader>
        <CardBody>
          <AllCards id={data.id} />
        </CardBody>
      </Card>

      <DeleteBox
        handleDeleteFunction={handleDeleteFunction}
        onClose={onClose}
        isOpen={isOpen}
      />
    </Box>
  );
}

export default List;
