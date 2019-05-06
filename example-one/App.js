import React, { Component } from 'react';
import { connect } from 'react-redux';
import ModalRoot from './ModalRoot';
import { showModal, hideModal } from './actions/ModalActions';

const mapDispatchToProps = dispatch => ({
  hideModal: () => dispatch(hideModal()),
  showModal: (modalProps, modalType) => {
    dispatch(showModal({ modalProps, modalType }))
  }
})

class App extends Component {
  constructor(props) {
    super(props)
    this.closeModal = this.closeModal.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  closeModal(event) {
    this.props.hideModal();
  }

  onInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  openModal(event) {
    this.props.showModal({
      open: true,
      title: 'Связаться с нами',
      fields: [{
        label: 'Ваше имя',
        name: 'name',
        placeholder: 'Введите Ваше имя',
      },{
        label: 'Ваш телефон',
        name: 'phone',
        placeholder: 'Введите номер телефона',
      }],
      onInputChange: this.onInputChange
    }, 'modal')
  }

  render() {
    return (
      <div className="app">
        <div className="container">
          <div className="row">
            <div className="col">
              <button
                className="btn btn-outline-primary btn-block"
                onClick={this.openModal}
              >Отправить</button>
            </div>
          </div>
        </div>
        <ModalRoot />
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(App);
