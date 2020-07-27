import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {

  const length = props.anecdotes.length;
  const empty = new Uint8Array(length); 
  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState(empty)
  const [most, setMost] = useState(0)
  const next = () => {
    const sel = Math.floor(Math.random() * anecdotes.length);
    setSelected(sel)
  }

  const vote = () => {
    const copy = [...votes]
    // kasvatetaan taulukon paikan 2 arvoa yhdellä
    copy[selected] += 1
    setVote(copy)
    const mostVotes = copy.indexOf(Math.max(...copy));
    setMost(mostVotes)

  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}
      <br />
      <p>has: {votes[selected]} votes</p>
      <br />
      <Button handleClick={() => next()} text="next anecdote" />
      <Button handleClick={() => vote()} text="vote" />
      <h1>Anecdote with most votes</h1>
      {props.anecdotes[most]}
      <p>has: {votes[most]} votes</p>
    </div>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)