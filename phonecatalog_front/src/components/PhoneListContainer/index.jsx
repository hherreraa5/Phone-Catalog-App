import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardTitle, 
  CardImg,
  Label,
  Row,
  Col,
} from "reactstrap";
//style
import './style.scss'
//redux
import { connect } from 'react-redux';
import * as selector from '../../reducer';
import * as phoneActions from '../../actions/phone';
//loading
import { FadeLoader } from "react-spinners";
import { css } from "@emotion/react";
//PhoneDetailComponent
import PhoneDetailComponent from '../PhoneDetailComponent'

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  size: 10px
`;

class PhoneListContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      selectedPhone: null
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  componentDidMount() {
    const {
      getPhone,
    } = this.props;
    getPhone();
  }

  render() {
    const {
      phones,
      loading
    } = this.props;
    const {
      selectedPhone,
      show
    } = this.state;
    return (
      <div className="PhonelistContainer">
        <PhoneDetailComponent phone={selectedPhone} show={show} handleClose={this.hideModal} />
        {loading === false ?
          <Row noGutters>
            <Col>
              <Row noGutters>
                <Col className="title" xl={{ size: 5, offset: 4 }} xs={{ size: 8, offset: 2 }}>
                  <Label>
                    Phone Catalog App
                  </Label>
                </Col>
              </Row>
              <Row noGutters>
                {
                  phones.map((index, key) =>(
                    <Col className="cardPhone" xl={{ size: 3}} xs={{ size: 10}} key={key}>
                      <Card>
                        <CardTitle className="TitlePhone">
                          {index.name}
                        </CardTitle>
                        <CardBody>
                          <CardImg
                          className="imagePhone"
                            src={index.imageFront}
                          />
                        </CardBody>
                        <Button
                        className="buttonDetail"
                          onClick={()=> {
                            this.showModal()
                            this.setState({
                              selectedPhone: index
                            })
                          }}
                        >
                          View Details
                        </Button>
                      </Card>
                    </Col>
                  ))
                }
              </Row>
            </Col>
          </Row>
          :
          <Row>
            <Col style={{ marginLeft: '-5%', marginTop: '10%' }}>
              <FadeLoader css={override} size={1} color={"#1d8cf8 "} margin={60} />
            </Col>
          </Row>
        }
      </div>
    )
  }
}

export default connect(
  (state) => ({
    phones: selector.getPhones(state),
    loading: selector.getPhonesLoading(state),
  }),
  (dispatch) => ({
    getPhone() {
      dispatch(phoneActions.fetchPhones())
    }
  })
)(PhoneListContainer);

