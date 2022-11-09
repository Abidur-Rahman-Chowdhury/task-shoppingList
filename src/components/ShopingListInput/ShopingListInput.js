import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const ShopingListInput = () => {
    const dispatch = useDispatch();
    const [shoppingList, setShoppingList] = useState();
    
    const handleChange = (event) => setShoppingList(event.target.value);
    const handleClick = () => dispatch({
        type: 'ADD',
        payload:shoppingList,
    })
    return (
        <>
            <input onChange={handleChange} type="text" /> 
            <input onClick={handleClick} type="button" value="Add" />
        </>
    );
};

export default ShopingListInput;