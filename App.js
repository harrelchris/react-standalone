'use strict';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  render() {
    return (
      <>
        <h1>App</h1>
        <p>This is a standalone app using React</p>
        <SomeComponent />
        <p>{ this.state.count }</p>
        <button
          onClick={event => {
            this.setState({count: this.state.count + 1})
          }}
        >Increment</button>
      </>
    )
  }
}


const domContainer = document.querySelector('#app');
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(App));
