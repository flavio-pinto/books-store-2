import { Card } from "react-bootstrap";

const SingleBook = (props) => {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={props.imgUrl} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
}

export default SingleBook;