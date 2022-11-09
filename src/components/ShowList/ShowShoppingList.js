import React from 'react';
import { useSelector } from 'react-redux';

const ShowShoppingList = () => {
    const shoppingList = useSelector(state => state.shoppingList);
    
    return (
        <>
        <ol type="1">
              {
                    shoppingList?.map(list => <li>{list }</li>)
               } 
         </ol>
        </>
    );
};

export default ShowShoppingList;