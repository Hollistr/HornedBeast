import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';


class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {rating: this.props.rating};
    }

    // Click handeler for votes
    handleClick = () => {
        this.setState({ rating: this.state.rating + '❤️' });
    };

    handleImageClick = () => {
        this.props.setShowModal(this.props.title);
    };


render() {
    return (
        <div className="bg-light border m-4 card">
        <Card border="secondary" style={{ width: '15rem', height: '22rem' }}>
          <div className="text-center m-2" >
            <Card.Img
              variant="top"
              src={this.props.image_url}
              className="w-50"
              // onClick={this.handleImageClick}
              onClick={() => this.props.selectTheBeast(this.props.title)}
            />
          </div>
          <div onClick={this.handleClick}>
            <Card.Body>
              <div className="text-center">
                <Card.Title>{this.props.title}</Card.Title>
              </div>
              <Card.Text>{this.props.description}</Card.Text>
              <Card.Text>Rating: {this.state.rating}</Card.Text>
            </Card.Body>
        </div>
        </Card>
        </div>
    );
    }
  }

  export default HornedBeast;

//     render() {
//         return(
//             <>
//                 <h2>
//                     {this.props.title}
//                 </h2>
//                 <img 
//                     src={this.props.src}
//                     alt={this.props.dispcription}
//                     title={this.props.title}
//                 />
//                 <p>
//                     {this.props.discription}
//                 </p>
//             </>
//         )
//     }
// }