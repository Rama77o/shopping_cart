import React from 'react'
import { Offcanvas, Stack } from 'react-bootstrap'
import { useSoppingCart } from '../context/ShoppingCartContext'
import CardItem from './CardItem';
import FormatCurrency from './FormatCurrency';
import StoreItems from "../data/StoreItems.json"

const ShoppingCard = ({ isOpen }) => {
  const { cartItems, closeCart } = useSoppingCart();
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement='end'>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CardItem key={item.id} {...item} />
          ))}
          <div className='ms-auto fw-bold fs-5'>
            Total{"  "}
            {FormatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = StoreItems.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity
              }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  )
}

export default ShoppingCard;