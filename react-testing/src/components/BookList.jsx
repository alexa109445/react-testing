import { Component } from 'react'
import SingleBook from './SingleBook'
import { Col, Container, Form, Row } from 'react-bootstrap'

class BookList extends Component {
  state = {
    searchQuery: '',
    selectedBookAsin: null,
  }

  cchangeSelectedBook = (asin) => {
    this.setState({
      selectedBookAsin: asin === this.state.selectedBookAsin ? null : asin,
    })
  }
  render() {
    return (
      <>
        <Container>
          <Row className="justify-content-center mt-5">

            <Col xs={12} md={4} className="text-center">

              <Form.Group>
                <Form.Control
                  type="search"
                  placeholder="Cerca un libro"
                  value={this.state.searchQuery}
                  onChange={(e) => this.setState({ searchQuery: e.target.value })}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <Row className='g-2 mt-3'>
            
              </Row>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default BookList
