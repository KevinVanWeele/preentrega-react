import img from './imgreact/img/carrito.png';
const CartWidget = () => {
    return (
        <div>
            <img src={img} alt="carrito-widget" className="img-fluid"></img>
            0
        </div>
    );
}
export default CartWidget