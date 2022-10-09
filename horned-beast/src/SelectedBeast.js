import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {
    render() {
        return (
            <>
            <Modal
                show={this.props.showModal}
                onHide={v => this.props.setShowModal(false)}>
                <div className='text-center'>
                    <Modal.Header closeButton>
                        {/* <Modal.Title>{this.props.selectedBeast.title}</Modal.Title> */}
                    </Modal.Header>
                    <Modal.Body>
                        <img
                            className="w-75"
                            src={this.props.selectedBeast.image_url}
                            // alt={this.props.selecteBeast.title}
                        />
                        <p>{this.props.selectedBeast.description}</p>
                    </Modal.Body>
                </div>
                </Modal>
            </>
        )
    }
}

export default SelectedBeast;