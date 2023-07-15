import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useCart } from '../context/CartContext';

const ProductItem = ({ id, product_name, category, details, image, price }) => {
    const { getItemQuantity, increaseItemQuantity, decreaseItemQuantity, removeItem } = useCart()

    return (
        <>
            <Card className='m-auto' style={{ width: '20rem' }} key={id}>
                <Card.Img variant="top" src={`./images/${image}.jpg`}
                    className='rounded img-fluid' />
                <Card.Body>
                    <Card.Title className="mb-0">{product_name}</Card.Title>
                    <small className='text-muted'>{category}</small>
                    {/* <Card.Text className='mt-2'>
                        {details.substring(0, 50) + '....'}
                    </Card.Text> */}
                    <h5 className='text-muted mt-3 mb-4 product-price'>$ {price}</h5>

                    {
                        !getItemQuantity(id) ?
                            <Button variant="primary" onClick={e => increaseItemQuantity(id)}><i className="fa-solid fa-cart-shopping me-2"></i>Add to Cart</Button>
                            :
                            <div className="quantityBtns">
                                {getItemQuantity(id) === 1 ?
                                    <Button variant="danger" onClick={e => removeItem(id)}><i className="fa-solid fa-close"></i></Button>
                                    :
                                    <Button variant="dark" onClick={e => decreaseItemQuantity(id)}>-</Button>}

                                <div className="quantity">{getItemQuantity(id)} in Cart</div>
                                <Button variant="dark" onClick={e => increaseItemQuantity(id)}>+</Button>
                            </div>
                    }

                </Card.Body>
            </Card>
        </>
    )
}

export default ProductItem