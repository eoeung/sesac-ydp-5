import React from 'react';
import mumu from './mumu.jpg';

class Test2 extends React.Component {
    style = {
        color: 'orange',
        fontSize: '40px',
        marginTop: '20px',
    }

    render(){
        return(
            <div style={this.style}>
                <h2>안녕하세요</h2>
                <img src={mumu} alt='에러'/>
            </div>
        )
    }
}

export default Test2;