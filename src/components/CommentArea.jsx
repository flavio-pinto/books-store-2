import { Component } from "react";
import CommentsList from "./CommentsList";

class CommentArea extends Component {

  state = {
    comments: []
  }

  componentDidMount = () => {
    this.fetchComments();
  }

  fetchComments = async () => {
    try {
      let res = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + this.props.elementId,
      {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzEwOTI3MmVkZDY3ODAwMTUwN2Q3NDAiLCJpYXQiOjE2NjIwMzA0NTAsImV4cCI6MTY2MzI0MDA1MH0.W-JydjAeXfAhd553HFq5LuXMB5fpJ_ptw4bgjFz-t60',
        }
      }
      );
      if(res.ok) {
        let data = await res.json();
        console.log(data);
        this.setState({
          comments: data
        })
      } else {
        console.log('Qualcosa è andato storto');
      }
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return(
      <div>
        <CommentsList comments={this.state.comments} />
      </div>
    )
  }
}

export default CommentArea;