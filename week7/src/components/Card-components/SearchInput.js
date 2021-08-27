function SearchInput(props) {

    return (
        <div>
            <input 
            className='search-input'
            value={props.value}
            onChange={(event) => props.setSearchValue(event.target.value)}
            placeholder='search'
            />
        </div>
    )
}

export default SearchInput;