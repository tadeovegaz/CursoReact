import { Link } from "react-router-dom";
import { useCartContext } from "../provider/CartProvider";

const NavBar = () => {

  
  const { state } = useCartContext();
  const { cart } = state;

  console.log(cart)

  return (
    <nav className="h-20 w-full bg-black p-4 flex justify-between text-white items-center">
      <Link to="/">
        <span>FakeStore</span>
      </Link>
      <Link to="/carrito">
        <span className="px-2 font-bold ">En tu carrito tienes: {cart.length} productos</span>
        <span>Carrito</span>
      </Link>
    </nav>
  );
}

export default NavBar;