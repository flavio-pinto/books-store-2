import { ListGroup } from "react-bootstrap";

const SingleComment = ({comment}) => (
  <ListGroup.Item>
    <p>{comment.author}</p>
    <p>Voto: {comment.rate}/5</p>
    <p>{comment.comment}</p>
  </ListGroup.Item>
);

export default SingleComment;
