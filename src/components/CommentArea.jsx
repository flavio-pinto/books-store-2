import { Component } from "react";
import AddComment from "./AddComment";
import CommentsList from "./CommentsList";
import Loading from "./Loading";

class CommentArea extends Component {
  state = {
    comments: [],
    loading: true,
  };

  componentDidMount = () => {
    this.fetchComments();
  };

  fetchComments = async () => {
    try {
      let res = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.elementId,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzEwOTI3MmVkZDY3ODAwMTUwN2Q3NDAiLCJpYXQiOjE2NjIwMzA0NTAsImV4cCI6MTY2MzI0MDA1MH0.W-JydjAeXfAhd553HFq5LuXMB5fpJ_ptw4bgjFz-t60",
          },
        }
      );
      if (res.ok) {
        let data = await res.json();
        setTimeout(() => {
          this.setState({
            comments: data,
            loading: false,
          });
        }, 1500);
        
      } else {
        this.setState({ loading: false });
        console.log("Qualcosa è andato storto");
      }
    } catch (error) {
      this.setState({ loading: false });
      console.log(error);
    }
  };

  render() {
    return (
      <div>
        {this.state.loading && <Loading />}
        <AddComment bookAsin={this.props.elementId} />
        <CommentsList comments={this.state.comments} />
      </div>
    );
  }
}

export default CommentArea;
