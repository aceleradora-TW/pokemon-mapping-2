import './search.css'

const Search = ({ onChange }) => {
    return (
        <div className="search">
            <input onChange={onChange} type="text" placeholder="Digite um nome de um pokemon..." />
        </div>
    )
}

export default Search