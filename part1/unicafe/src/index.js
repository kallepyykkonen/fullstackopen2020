import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = (props) => {
  const good = props.good
  const bad = props.bad
  const neutral = props.neutral
  if (good + bad + neutral === 0) {
    return (
      <p>No feedback given</p>
    )
  } else {
    return (
      <table>
        <tbody>
          <StatisticsLine title="good" value={good} />
          <StatisticsLine title="neutral" value={neutral} />
          <StatisticsLine title="bad" value={bad} />
          <StatisticsLine title="all" value={good + bad + neutral} />
          <StatisticsLine title="average" value={((bad * -1) + (neutral * 0) + (good)) / (good + bad + neutral)} />
          <StatisticsLine title="bad" value={((good / (good + bad + neutral)) * 100) + " %"} />
        </tbody>
      </table>
    )
  }
}

const StatisticsLine = (props) => {
  return (
    <tr>
      <td>{props.title}</td> 
      <td>{props.value}</td>
    </tr>
  )

}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addBad = (newValue) => {
    setBad(newValue)
  }

  const addGood = (newValue) => {
    setGood(newValue)
  }

  const addNeutral = (newValue) => {
    setNeutral(newValue)
  }


  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => addGood(good + 1)} text="good" />
      <Button handleClick={() => addNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => addBad(bad + 1)} text="bad" />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)