import React, { Component } from 'react';
import NavBar from '../components/navComponent';
import '../colors.css';
import './styles/detail.css';
import man from '../man.png';

class Details extends Component {
    state = {
        postid:this.props.location.state.postid,
        discription:'A 4 bed room is avaiable',
        images:[man,man,man],
        email:'abc@gmai.com',
        phone:'00000000000',
        address:'asdasdasdas asfsaf asfsaf'

     }
    render() { 
        return ( 
            <div className='detailContainer bgBlack fgWhite'>
                <NavBar/>
                <dl>
                    <dt>Discription</dt>
                    <dd>{this.state.discription}</dd>
                    <dt>Images</dt>
                    <dd>{this.state.images.map(img=><this.Image image={img} />)}</dd>
                    <dt>Contact</dt>
                    <dd>
                        <ul>
                            <li>{this.state.email}</li>
                            <li>{this.state.phone}</li>
                            <li>{this.state.address}</li>
                        </ul>
                    </dd>
                </dl>
            </div>
         );
    }

    Image(props){
        return(
            <img src={props.image} style={{width:250, height:250, margin:10}} />
        );
    }
}
 
export default Details;