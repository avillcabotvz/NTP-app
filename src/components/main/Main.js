import React from 'react';
import { Button, Row, Col, Container, Toast, ButtonGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTasks, faTrash, faUser, faExclamationCircle,faSitemap} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import TableApi from './TableApi'


const Main = (props) => {
  return (
    <main>
      <Container>
        <Row>
          <Col className="p-3">
            <div className="mb-2"><Button variant="dark" size="lg" block as={Link} to="/test"> <FontAwesomeIcon icon={faTasks} /><div className="button-text">Add Task</div></Button></div>
          </Col>
          <Col className="p-3">
            <div className="mb-2"><Button variant="dark"  size="lg" block> <FontAwesomeIcon icon={faTrash} /><div className="button-text">Remove Task</div></Button></div>
          </Col>
        </Row>

        <Row>
          <ButtonGroup block size="lg" as={Col}>
              <Button variant="dark"> <FontAwesomeIcon icon={faUser} /><div className="button-text">Add Person</div></Button>
              <Button variant="dark"> <FontAwesomeIcon icon={faSitemap} /><div className="button-text">Add Category</div></Button>
              <Button variant="dark"> <FontAwesomeIcon icon={faExclamationCircle} /><div className="button-text">Add Status</div></Button>
          </ButtonGroup>
        </Row>

        <Row>
          <TableApi/>
        </Row>
      </Container>
    </main>
  )
}

export default Main
