import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProductItem = ({ product_name, category, details, image, price }) => {
    const [quantity, setQuantity] = useState(0)

    const handlePlusBtn = () => {
        setQuantity(prevCounter => prevCounter + 1)
    }
    const handleMinusBtn = () => {
        setQuantity(prevCounter => prevCounter - 1)
    }

    return (
        <>
            <Card style={{ width: '20rem' }}>
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
                        !quantity ?
                            <Button variant="primary" onClick={() => setQuantity(1)}><i className="fa-solid fa-cart-shopping me-2"></i>Add to Cart</Button>
                            :
                            <div className="quantityBtns">
                                <Button variant="dark" onClick={handleMinusBtn}>-</Button>
                                <div className="quantity">{quantity} in Cart</div>
                                <Button variant="dark" onClick={handlePlusBtn}>+</Button>

                                {/* <Button variant="danger" onClick={handleRemove}>Remove from Cart</Button> */}
                            </div>
                    }

                </Card.Body>
            </Card>
        </>
    )
}

export default ProductItem