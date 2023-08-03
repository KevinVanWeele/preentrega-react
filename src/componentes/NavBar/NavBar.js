import CartWidget from './CartWidget/CartWidget';
const NavBar = () => {
    return (
        <nav>
            <h1>Mundo Ropa</h1>
        <div>
        <button>Remeras</button>
        <button>Buzo</button>
        <button>Camperas</button>
        </div>
        <CartWidget />
        </nav>
    )
}
export default NavBar