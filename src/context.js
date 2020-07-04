// context 可以不通过 一层一层的传递来进行数据传递

import React from 'react'
import ReactDOM from 'react-dom';

const ThemeContext = React.createContext('light'); // light 就会是一个默认值
class App extends  React.Component {
  render () {
    return (
      <ThemeContext.Provider value='Dark'>
        <Toolbar/>
      </ThemeContext.Provider>
    )
  }
}

function Toolbar () {
  return (<div>
    <ThemeButton/>
  </div>)
}

class ThemeButton extends React.Component{
  constructor () {
    super();
    this.state = {
    }
  }
  static contextType = ThemeContext; // 那你的contextType 还有什么用呢？ todo 这里为什么要引用这个
  render () {
    return <Button theme={this.context} onFire={(e) => {console.log(this.context)}}/>
  }
}

function Button (props) {
  return <button onClick={props.onFire}>{props.theme}</button>
}
ReactDOM.render(<App/>, document.getElementById('root'))