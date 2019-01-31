import React from 'react';

class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      count: 0,
      shouldPlay: false,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if ((prevState.clicked !== this.state.clicked) && prevState.count + 1 === this.state.count ) {
    //   this.setState({
    //     shouldPlay: true,
    //   })
    // }
    // else {
    //   this.setState({
    //     shouldPlay: false,
    //   })
    console.log(prevState.clicked, this.state.clicked);

    }
    
  }

  render(props) {
    return (
      <div className="drumPad-container" onClick={() => this.setState({clicked: !this.state.clicked, count: this.state.count + 1})}>
        {this.state.shouldPlay ? <audio src={this.props.sound} autoPlay/> : null}
        {this.props.keyName}
      </div>
    );
  }
}

export default DrumPad;
// onClick={() => props.playSound(props.sound)}
