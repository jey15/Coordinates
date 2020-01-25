import React from 'react';
import './App.css';
import Input from './Components/Input';
import Preview from './Components/Preview';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputArray: {
        xCoordinate : 0,
        yCoordinate : 0,
        width: 20,
        height: 20,
      }
    }
  }

  valueChanged = (item, val) => {
    console.log(item, val);
    const inputArr = this.state.inputArray;
    inputArr[item] = val;
    this.setState({inputArray: inputArr});
  }
  
  render() {
    return (
      <div className="App">
          <Input 
            inputs = {this.state.inputArray}
            valueChanged = {(item,val) => this.valueChanged(item,val)}
          />
          <Preview 
            inputs = {this.state.inputArray}
          />
      </div>
    );
  }  
}

export default App;
