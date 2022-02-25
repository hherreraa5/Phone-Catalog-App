import React from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
  Col,
} from "reactstrap";
import './style.scss'

const PhoneDetailComponent = (props) => {
  const {
    phone,
    show,
    handleClose
  } = props
  const showHideClassName = show ? true : false;

  return (
    <Row noGutters>
      <Col className="PhoneDetailComponent">
        <Modal
          centered
          toggle={handleClose}
          isOpen={showHideClassName}
          size="lg"
        >
          <ModalHeader toggle={handleClose}>
            <p>
              {phone && phone.name}
            </p>
          </ModalHeader>
          <ModalBody>
            <Row>
              <Col xl={{ size: 6 }} className='imagePhoneDetail'>
                <img src={phone && phone.imageFront} alt='phone' />
              </Col>
              <Col>
                <Row>
                  <Col xl={{ size: 4 }} >
                    <p>
                      <mark>
                        Company
                      </mark>
                      {phone && phone.company}
                    </p>
                    <p>
                      <mark>
                        Storage
                      </mark>
                      {phone && phone.storage}
                    </p>
                    <p>
                      <mark>
                        Color
                      </mark>
                      {phone && phone.color}
                    </p>
                  </Col>
                  <Col>
                    <p>
                      <mark>
                        Model
                      </mark>
                      {phone && phone.model}
                    </p>
                    <p>
                      <mark>
                        Year
                      </mark>
                      {phone && phone.year}
                    </p>
                    <p>
                      <mark>
                        Price
                      </mark>
                      {phone && phone.price}
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col className="videoPhone">
                    <iframe
                    title={phone && phone.name}
                    width="380" height="260"
                      src={phone && phone.video}>
                    </iframe>
                  </Col>
                </Row>
                <Row>
                  <Col xl={{ size: 5 }}>
                    <a href={phone && phone.amazon} target="_blank" without rel="noreferrer">
                      <Button className="buttonDetailPhone">
                        Amazon
                      </Button>
                    </a>
                  </Col>
                  <Col xl={{ size: 5, offset: 1 }} >
                    <a href={phone && phone.store} target="_blank" without rel="noreferrer">
                      <Button className="buttonDetailPhone">
                        Official Store
                      </Button>
                    </a>
                  </Col>
                </Row>
              </Col>
            </Row>
          </ModalBody>
        </Modal>
      </Col>
    </Row>
  )
}

export default PhoneDetailComponent