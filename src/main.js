import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// import Form from './form';
function FormatedDate (props) {
  return <h2>It is {props.date.toLocaleTimeString()}</h2>
}

class Clock extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      date: new Date(),
      clickTimes: 0,
    }
  }

  componentDidMount () {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount () {
    clearInterval(this.timerID)
  }

  tick () {
    this.setState({
      date: new Date()
    })
  }

  btnClick () {
    this.setState((state, props) => {
      state.clickTimes++
    })
    console.log('btnclicked')
  }

  render () {
    return (
      <div>
        <h1>Hello world! {this.state.clickTimes}</h1>
        <FormatedDate date={this.state.date}/>
        <button onClick={() => this.btnClick()}>123123123123</button>
      </div>
    )
  }
}

const data = [1, 2, 3, 4, 5]

class Form extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  render () {
    return (<form>
      选择你喜欢的风味：
      {/*value={this.state.value}*/}
      <select
        multiple={true} vlaue={['coconut', 'mango']} name=""

        onChange={(e) => {this.setState({value: e.target.value})}} id=''>
        <option value='grapefruit'>
          葡萄柚
        </option>
        <option value="lime">
          橙子
        </option>
        <option value='coconut'>
          椰子
        </option>
        <option value="mango">
          芒果
        </option>
      </select>
      <input type="submit" value="提交"/>
    </form>)
  }

}

function BoilingVerdict (props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>
  }
  return <p>The water would not boilî.</p>
}

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit',
}

class Calculator extends React.Component {
  constructor () {
    super()
    this.state = {
      temperature: 0,
      type: 'f',
    }
    this.inputChange = this.inputChange.bind(this)
  }

  inputChange (val) {
    this.setState({
      temperature: val.temperature,
      type: val.type,
    })
  }

  render () {
    const {temperature, type} = this.state
    return (
      <div>
        <div>temperature detail {this.state.temperature}</div>
        <div>type detail {this.state.type}</div>

        <TemperatureInput
          onInputChange={this.inputChange}
          temperature={temperature}
          type={type}
          scale="c"/>
        <TemperatureInput
          temperature={temperature}
          type={type}
          onInputChange={(val) => {
            this.setState({
              temperature: val.temperature,
              type: val.type,
            })
          }}
          scale="f"/>
      </div>
    )
  }
}

const temperatureConvert = (temp, type) => {
  function toCelsius (fahrenheit) {
    return (fahrenheit - 32) * 5 / 9
  }

  function toFahrenheit (celsius) {
    return (celsius * 9 / 5) + 32
  }

  if (Number.isNaN(temp)) {
    return 0
  }
  return type == 'f' ? toCelsius(temp) : toFahrenheit(temp)
}

class TemperatureInput extends React.Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    this.props.onInputChange({
      temperature: e.target.value,
      type: this.props.scale,
    })
  }

  render () {
    const temperature = this.props.temperature
    const scale = this.props.scale
    const type = this.props.type
    return (
      <fieldset>
        <legend> Enter temperature in {scaleNames[scale]}:</legend>
        <input type="text"
               value={type == scale ? temperature : temperatureConvert(temperature, scale)}
               onChange={this.handleChange}
        />
        <BoilingVerdict celsius={parseFloat(temperature)}/>
      </fieldset>
    )
  }
}

ReactDOM.render(
  <Calculator/>,
  document.getElementById('root')
)
