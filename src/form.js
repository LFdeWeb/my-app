import React from 'react'
import ReactDOM from 'react-dom'
// todo 不放在一个组件内还不知道如何进行组件传值
class Form extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  render () {
    let input = <input type="text"/>
    let element = <div>
      {input}
      input: {this.state.value}
    </div>
    return element
  }

}

export default Form