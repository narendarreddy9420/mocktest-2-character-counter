import {Component} from 'react'
import {v4} from 'uuid'
import CharacterCountItem from '../CharacterCountItem'

import './index.css'

class CharacterCount extends Component {
  state = {text: '', listEl: []}

  onCountCharacters = event => {
    this.setState({text: event.target.value})
  }

  onAdd = event => {
    event.preventDefault()
    const {text} = this.state
    const newList = {
      id: v4(),
      textEl: text,
      length: text.Length,
    }

    this.setState(prevState => ({
      listEl: [...prevState.listEl, newList],
      text: '',
    }))
  }

  render() {
    const {listEl} = this.state

    return (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
          alt="no user inputs"
        />
        <h1>Count the characters like a boss...</h1>
        <ul>
          {listEl.map(each => (
            <CharacterCountItem eachItem={each} key={each.id} />
          ))}
        </ul>
        <form onSubmit={this.onAdd}>
          <h1>Character Counter</h1>
          <input
            onChange={this.onCountCharacters}
            placeholder="Enter the Characters here"
            type="text"
          />
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}

export default CharacterCount
