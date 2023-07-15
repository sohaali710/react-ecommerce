import React, { useEffect, useState } from 'react'
import { Button, Container, Table } from 'react-bootstrap'
import { useCart } from '../context/CartContext'
import axios from 'axios'
import { Link } from 'react-router-dom/dist/umd/react-router-dom.development'

const Cart = () => {
    const { cartItems, getItemQuantity, increaseItemQuantity, decreaseItemQuantity, removeItem } = useCart()

    let [itemsDetails, setItemsDetails] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/products')
            .then(res => {
                setItemsDetails(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <Container>
            {cartItems.length ?
                (<Table>
                    <thead>
                        <tr>
                            <th>Product Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            cartItems.map(item => {
                                return itemsDetails.map(itemD => {
                                    if (itemD.id === item.id) {
                                        return <tr className='itemRow' key={item.id}>
                                            <td>
                                                <div className='product-img'>
                                                    <img src={`./images/${itemD.image}.jpg`} alt="" />
                                                </div>
                                            </td>
                                            <td className='product-name'>{itemD.product_name}</td>
                                            <td className='product-price'>${itemD.price}</td>
                                            <td className="quantityBtns">
                                                <Button variant="dark" onClick={e => decreaseItemQuantity(item.id)}>-</Button>
                                                <div className="quantity">{getItemQuantity(item.id)} in Cart</div>
                                                <Button variant="dark" onClick={e => increaseItemQuantity(item.id)}>+</Button>
                                            </td>
                                            <td colSpan='2' className='total'>
                                                ${itemD.price * item.quantity}
                                            </td>
                                            <td className='removeBtn'><Button variant="danger" onClick={e => removeItem(item.id)}><i className="fa-solid fa-close"></i></Button></td>
                                        </tr>
                                    }
                                })

                            })
                        }
                    </tbody>
                    <tfoot>
                        <tr className='total-price'>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan='2'>Total Price </td>
                            <td colSpan='2'>${
                                cartItems.reduce((itemQuantity, item) => {
                                    const itemD = itemsDetails.find(i => i.id === item.id)

                                    return itemQuantity + item.quantity * (itemD?.price || 0)
                                }, 0)
                            }
                            </td>
                        </tr>
                    </tfoot>
                </Table>)
                :
                <div className="emptyCart">Cart is empty. Go to <Link to="/">Store</Link>.</div>
            }
        </Container>
    )
}

export default Cart