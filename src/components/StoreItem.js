import React from 'react'
import { Card, Button } from 'react-bootstrap'
import FormatCurrency from './FormatCurrency';
import { useSoppingCart } from '../context/ShoppingCartContext';

const StoreItem = ({ id, name, price, imgUrl }) => {
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useSoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <Card>
      <Card.Img src={imgUrl} variant='top' style={{ height: "200px", objectFit: "cover" }} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-item-baseline'>
          <span className='fs-2'>{name}</span>
          <span className='text-muted me-2'>{FormatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ?
            (<Button className="w-100"
              onClick={() => increaseCartQuantity(id)}
            >Add To Cart</Button>)
            :
            (
              <div className="d-flex align-items-center flex-column" style={{ gap: "0.5rem" }}>
                <div className="d-flex justify-content-center align-items-center" style={{ gap: "0.5rem" }}>
                  <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                  <span className="fs-3">{quantity} item in cart</span>
                  <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                </div>
                <Button variant="danger" size="sm"
                  onClick={() => removeFromCart(id)}>Remove</Button>
              </div>
            )}
        </div>
      </Card.Body>
    </Card>
  )
}

export default StoreItem