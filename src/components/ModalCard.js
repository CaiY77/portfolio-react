import React, { Component } from 'react';
import {Reveal,Modal,Card} from 'semantic-ui-react'

class ModalCard extends Component {

  render() {
    const {descrip, img} = this.props;

    return (
      <Reveal animated='move'>
        <Reveal.Content visible>
          <Card.Description className="cardDescrip">
            {descrip}
          </Card.Description>
        </Reveal.Content>
        <Reveal.Content hidden>
          <Modal trigger={<img className="work-pics" alt="" src={img}></img>}>
            <Modal.Content><img className="work-pics" alt="" src={img}></img></Modal.Content>
          </Modal>
        </Reveal.Content>
      </Reveal>
    );
  }

}

export default ModalCard;
