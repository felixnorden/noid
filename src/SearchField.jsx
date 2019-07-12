import React from 'react';


export default function SearchField(props){
    const { value, onChange } = props;
    return(<input type='text' onChange={onChange} value={value} />);
}