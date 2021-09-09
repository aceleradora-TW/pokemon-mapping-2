import './attributes.css'

const AttributeBar = ({ value }) => {
    const getClassName = (value) => {
        if (value < 30) return 'red'
        if (value < 50) return 'orange'
        if (value < 95) return 'yellow'
        return 'green'
    }
    return (<p className={getClassName(value)} style={
        { width: `${value}px`, padding: "5px" }
    }></p>)
}

const Attribute = ({ label, value }) => {
    return (
        <div className="attribute">
            <div className="label">{label}</div>
            <div className="value">{value}</div>
            <div className="attribute-bar">
                <AttributeBar value={value} />
            </div>
        </div>
    )
}

const Attributes = ({ attributes }) => {
    const { hp, attack, specialAttack, defense, specialDefense, speed } = attributes
    return (
        <div className="attributes">
            <h2>Base stats</h2>
            <Attribute label="HP" value={hp} />
            <Attribute label="Attack" value={attack} />
            <Attribute label="Defense" value={defense} />
            <Attribute label="Sp. Atk" value={specialAttack} />
            <Attribute label="Sp. Def" value={specialDefense} />
            <Attribute label="Speed" value={speed} />
        </div>
    )
}

export default Attributes