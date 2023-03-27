const CharacterCountItem = props => {
  const {eachItem} = props
  const {text} = eachItem

  return <li>{text}</li>
}

export default CharacterCountItem
