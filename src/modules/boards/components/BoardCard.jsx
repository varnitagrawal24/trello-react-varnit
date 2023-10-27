import { Card, CardHeader, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function BoardCard({ data }) {
  const navigate = useNavigate();

  return (
    <Card
      width={250}
      height={100}
      bg="blue.400"
      color="white"
      variant="outline"
      onClick={() => {
        navigate(`${data.id}`);
      }}
    >
      <CardHeader>
        <Heading size="md">{data.name}</Heading>
      </CardHeader>
    </Card>
  );
}

export default BoardCard;
