import React from 'react';
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
            <div>
                {this.props.data.map(beast => {
                    <HornedBeast
                        title={beast.title}
                        imgUrl={beast.image_url}
                        discription={beast.discription}
                        key={beast._id}
                        id={beast.id}
                        rating=""
                    />
                });
            </div>
        </>
//     render() {
//         return(
//             <>
//                 <div>
//                     <h2>One-Horned Beast</h2>
//                     <HornedBeast src={'./one-horned.jpg'} />
//                     <p>Brazil 'bullicorn' bull with single horn</p>
//                 </div>
//                 <div>
//                     <h2>Two-Horned Beast</h2>
//                     <HornedBeast src={'./two-horned.jpg'} />
//                     <p>A spiral horned antelope</p>
//                 </div>
//                 <div>
//                     <h2>Three-Horned Beast</h2>
//                     <HornedBeast src={'./three-horned.jpg'} />
//                     <p>Bizarre cow found in Uganda</p>
//                 </div>
//             </>
//         )
//     }
// }

export default Main