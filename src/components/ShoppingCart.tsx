import { Button, Nav, Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { CartItem } from "./CartItem";
import storeItems from "../data/items.json"
import {useNavigate } from "react-router-dom"

type ShoppingCartProps = {
  isOpen: boolean
}

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart()

  let navigate = useNavigate();
  function handleClick() {
    navigate('/')
  }

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map(item => (
          <CartItem key={item.id} {...item}/>
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total: {" "}
              {formatCurrency(
                cartItems.reduce((total, cartItem) => {
                  const item = storeItems.find(i => i.id === cartItem.id)
                  return total + (item?.price || 0)* cartItem.quantity
              }, 0)
            )}
          </div>
          <Button color="primary" className="px-4"
            onClick={handleClick}
          >
            Сontinue shopping
          </Button>
          <Button
            variant="danger"
            size="sm"
          >
            Checkout
          </Button>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  )
}
