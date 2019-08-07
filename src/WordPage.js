import React from 'react';
import Words from './Words.js';

class WordPage extends React.Component {
    state = {
        wordList: ['Horse', 'Sock', 'Man', 'Lore', 'Nerd'],
        test: 'word'
    };

    render() {
        return (
            <div>

                {this.state.wordList.map((word, index) =>
                    <Words word={word} key={index}/>
                )}
            </div>
        );
    }
}

export default WordPage;