import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HornedBeast from './HornedBeast.js';
import Row from 'react-bootstrap/Row';
// import onehorned from './one-horned.jpg';
// import twohorned from './two-horned.jpg';
// import threehorned from './three-horned.jpg';

class Main extends React.Component {
    render() {
        return(
            <>
            <p className='instructions'>Click to vote on favorite beast</p>
            <p className='instructions'>Click beast for larger image</p>
            <div className='d-flex flexwrap justify-content-center'>
                <Row xs={1} md={3} className='g-4'>
                {this.props.beastsToDisplay.map(beast => {
                    return (
                    <HornedBeast
                        title={beast.title}
                        image_url={beast.image_url}
                        description={beast.description}
                        key={beast._id}
                        id={beast.id}
                        rating=""
                        setShowModal={this.props.setShowModal}
                        selectTheBeast={this.props.selectTheBeast}
                    />
                    );
                })};
                </Row>
            </div>
            </>
        )}};

export default Main;