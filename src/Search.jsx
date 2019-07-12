import React, {useState} from 'react';
import SearchField from './SearchField';


export default function Search(props){
    const {onClick} = props;
    const [searchValue, setSearchValue] = useState('');
    const onSearch = event => setSearchValue(event.target.value);

    const onAdd = ()=> {
        if ( searchValue !== '' ) {
            onClick([searchValue]);
            setSearchValue('');
        }
    }

    return(
        <div>
            <SearchField onChange={onSearch} value={searchValue}/>
            <button onClick={onAdd}>Add exercise</button>
        </div>
    );
}