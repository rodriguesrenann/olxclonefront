import React from 'react';
import { Item } from './styled';
import { Link } from 'react-router-dom';
const AdItem = (props) => {

    let price = '';

    price = props.data.price_negotiable ? 'Preço negociável' : `R$ ${props.data.price}`;
    
    return (

        <Item className='aditem'>
            <Link to={`/ad/${props.data.id}`}>
                <div className='itemImage'>
                    <img src={props.data.images[0]} alt='' />
                </div>
                <div className='itemName'>{props.data.title}</div>
                <div className='itemPrice'>{price}</div>
            </Link>
        </Item>
    );
}

export default AdItem;