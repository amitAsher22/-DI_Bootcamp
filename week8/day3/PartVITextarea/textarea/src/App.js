import React from 'react'

///////////////////////////////////////// Part VI : Textarea + Part VII : Select

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      text: 'the content of a textarea goes in the value attribute',
      options: ['volvo', 'ford', 'fiat', 'mazda'],


    };
  }

  render() {
    const { options, text } = this.state

    return (
      <div className="App">
        <textarea value={text} />

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
