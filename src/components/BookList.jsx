import SingleBook from "./SingleBook";
import { Col, Container, Row } from "react-bootstrap";
import books from "../assets/books/books.json";

const BookList = () => {
  return(
    <div>
      <Container fluid>
        <Row>
          {
            books.map((book) => (
              <Col md={2}>
                <SingleBook imgUrl={book.img} title={book.title} />
              </Col>
            ))
          }
        </Row>
      </Container>
    </div>
  )
}

export default BookList;