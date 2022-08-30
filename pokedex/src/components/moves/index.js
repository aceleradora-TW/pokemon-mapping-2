import './moves.css'

const Move = ({ level, name }) => {
  return (
    <div className="move">
      <div className="level">{level}</div>
      <div className="name">{name}</div>
    </div>
  )
}

const Moves = ({ moves }) => {
  return (
    <div className="moves">
      <Move level="Level" name="Move" />
      {moves.map(move => <Move level={move.lv} name={move.name} />)}
    </div>
  )
}

export default Moves