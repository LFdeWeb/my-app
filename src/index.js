import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function Inner (props) {
  return <div>sample slot {props.name}</div>
}

class Outer extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return <div className={'outer'}>
      <div className="left">
        {
          this.props.left
        }
      </div>
      <div className="middle">
        this is middle {this.props.children}
      </div>
      <div className="right">{
        this.props.right
      }</div>
    </div>
  }
}

ReactDOM.render(
  <Outer left={<Inner name={'left'}/>} right={<Inner name={'right'}/>}>
    <Inner name={'right'}/>
  </Outer>,
  document.getElementById('root')
)