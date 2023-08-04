import CartWidget from './CartWidget/CartWidget';
const NavBar = () => {
    return (
        <nav>
            <h3>Mundo Ropa</h3>
        <div>
            <h2>Ropa</h2>
        <button>Remeras</button>
        <button>Buzo</button>
        <button>Camperas</button>
        </div>
        <CartWidget />
        </nav>
    )
}
export default NavBar