import React from 'react';

class Words extends React.Component {
    state = {
        wordstyle: {
           // textAlign:left ,
            color: '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)
        },

    };

    constructor(props) {
        super(props);
        console.log(this.props);
    }

    render() {
        return (
            <div>
                <h1 style={this.state.wordstyle}>{this.props.word}</h1>
            </div>
        );
    }
}

export default Words;
