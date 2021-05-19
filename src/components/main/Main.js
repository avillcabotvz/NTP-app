import React, {useRef} from 'react';
import { Button, Row, Col, Container, ButtonGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTasks, faTrash, faUser, faExclamationCircle,faSitemap, faEdit, faFile} from '@fortawesome/free-solid-svg-icons'
import ReactToPrint from 'react-to-print';
import {Link} from 'react-router-dom'
import TableApi from './TableApi'
import { format } from 'date-fns'

const Main = (props) => {
  const componentRef = useRef();

  return (
    <main>
      <Container>
        <Row>
          <Col className="p-3">
            <div className="mb-2"><Button variant="dark" size="lg" block as={Link} to="/test"> <FontAwesomeIcon icon={faTasks} /><div className="button-text">Add Task</div></Button></div>
          </Col>
          <Col className="p-3">
            <div className="mb-2"><Button variant="dark"  size="lg" block as={Link} to="/update"> <FontAwesomeIcon icon={faEdit} /><div className="button-text">Update Task</div></Button></div>
          </Col>
          <Col className="p-3">
            <div className="mb-2"><Button variant="dark"  size="lg" block> <FontAwesomeIcon icon={faTrash} /><div className="button-text">Remove Task</div></Button></div>
          </Col>
         
         
        </Row>

        <Row>
          <ButtonGroup size="lg" as={Col}>
              <Button variant="dark"> <FontAwesomeIcon icon={faUser} /><div className="button-text">Add Person</div></Button>
              <Button variant="dark"> <FontAwesomeIcon icon={faSitemap} /><div className="button-text">Add Category</div></Button>
              <Button as={Link} to="/status" variant="dark"> <FontAwesomeIcon icon={faExclamationCircle} /><div className="button-text">Add Status</div></Button>
              <ReactToPrint
                trigger={() => 
                  <Button variant="dark"> <FontAwesomeIcon icon={faFile} /><div className="button-text">Generate PDF</div></Button>}
                  content={() => componentRef.current}
                  documentTitle={"Report"+format(new Date(), 'MM/dd/yyyy')}
              />
          </ButtonGroup>
        </Row>

        <Row>
          <TableApi ref={componentRef}/>
        </Row>
      </Container>
    </main>
  )
}

export default Main
