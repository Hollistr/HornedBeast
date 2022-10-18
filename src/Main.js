import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HornedBeast from './HornedBeast.js';
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
                {this.props.beastsToDisplay.map(beast => {
                    return (
                    <HornedBeast
                        title={beast.title}
                        imgUrl={beast.image_url}
                        discription={beast.discription}
                        key={beast._id}
                        id={beast.id}
                        rating=""
                        setShowModal={this.props.setShowModal}
                    />
                    );
                })};
            </div>
            </>
        )}};

export default Main;