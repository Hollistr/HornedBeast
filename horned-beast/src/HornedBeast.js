import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class HornedBeast extends React.Component {
    // render() {
    //     return(
    //         <>
    //             <h2>
    //                 {this.props.title}
    //             </h2>
    //             <img 
    //                 src={this.props.src}
    //                 alt={this.props.dispcription}
    //                 title={this.props.title}
    //             />
    //             <p>
    //                 {this.props.discription}
    //             </p>
    //         </>
    //     )
    // }
    render() {
        return(
            <Card style={{ width: "18rem" }} className="mx-auto">
                <Card.Img variant="top" src={this.props.src} />
                <Card.Body>
                    <Card.Title>One-Horned Beast</Card.Title>
                    <Card.Text className="fst-italic">{data[0].description}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        );
    }
}

export default HornedBeast;