import React from 'react';
import { Button, Row, Col, Container, Toast } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTasks, faTrash } from '@fortawesome/free-solid-svg-icons'
import TableApi from './TableApi'


const Main = () => {
  return (
    <main>
      <Container>
        <Row>
          <Col className="p-3">
            <div className="mb-2"><Button variant="dark" size="lg" block> <FontAwesomeIcon icon={faTasks} /><div className="button-text">Add Task</div></Button></div>
          </Col>
          <Col className="p-3">
            <div className="mb-2"><Button variant="dark"  size="lg" block> <FontAwesomeIcon icon={faTrash} /><div className="button-text">Remove Task</div></Button></div>
          </Col>
        </Row>

        <Row>
          <TableApi />
        </Row>
      </Container>
    </main>
  )
}

export default Main
