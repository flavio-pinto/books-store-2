import { Component } from "react";
import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

class CommentsList extends Component {
  render() {
    return (
      <ListGroup>
        {
          this.props.comments.map((el) => (
            // <ListGroup.Item key={el._id}>
            //   <p>{el.author}</p>
            //   <p>Voto: {el.rate}/5</p>
            //   <p>{el.comment}</p>
            // </ListGroup.Item>
            <SingleComment comment={el} key={el._id}/>
          ))
        }
      </ListGroup>
    );
  }
}

export default CommentsList;