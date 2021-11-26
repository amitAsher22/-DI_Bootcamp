import React from 'react'

///////////////////////////////////////// Part VI : Textarea + Part VII : Select

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      text: '',
      options: ['volvo', 'ford', 'fiat', 'mazda'],

    };
  }

  handelChange = (event) => {
    this.setState({
      text: event.target.value
  
    })
  }


  render() {
    const { options, text } = this.state

    return (
      <div className="App">
        <textarea value={text} onChange={this.handelChange} />

        <div>
          <select>
            {options.map((item, index) => <option key={index}>{item}</option>)}
          </select>
        </div>
      </div>
    );
  }

}

export default App;
