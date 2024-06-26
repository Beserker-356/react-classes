const Cart = ({ cart }) => {
    console.log(cart)
  return (
    <div>
      {Object.keys(cart).map((key) => (
        <div key={key}>
          `{cart[key].title} {cart[key].quantity}`
        </div>
      ))}
    </div>
  );
};

export default Cart;
