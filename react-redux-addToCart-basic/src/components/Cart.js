import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, increment, decrement, getQuantityPrice, getQuantityPrice2, getTotalPrice } from '../redux/slices/cartSlice';
import './cart.css'

const Cart = () => {
    const cartProducts = useSelector((state) => state.cart.data)
    const cartState = useSelector((state) => state.cart)
    const dispatch = useDispatch()

    const handleRemove = (o) => {
        dispatch(removeFromCart(o))
    }

    const handleInc = (o) => {
        dispatch(increment(o))
    }

    const handleDec = (o) => {
        dispatch(decrement(o))
    }

    return (<>
        <section className="intro">
            <div className="bg-image h-100 bg1" >
                <div className="mask d-flex align-items-center h-100">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12">
                                <div className="card shadow-2-strong bg2">
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table table-borderless mb-0">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">Image</th>
                                                        <th scope="col">Product</th>
                                                        <th scope="col">Price</th>
                                                        <th scope="col">Quantity</th>
                                                        <th scope="col">Quantity*Price</th>
                                                        <th scope="col">Remove</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {cartProducts.map((v, k) => (
                                                        <tr key={k + 1}>
                                                            <td>{k + 1}</td>
                                                            <td>Image</td>
                                                            <td>{v.name}</td>
                                                            <td>${v.price}</td>
                                                            <td><button onClick={() => handleInc(v)}>+</button>&nbsp;{v.counter}&nbsp;<button onClick={() => handleDec(v)}>-</button></td>
                                                            <td>$ {v.priceByQuantity}</td>
                                                            <td>
                                                                <button onClick={() => handleRemove(v)} type="button" className="btn btn-danger btn-sm px-3">
                                                                    Remove
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ))}


                                                </tbody>
                                            </table>
                                            {cartProducts.length > 0 ?
                                                (<div style={{ textAlign: "right" }}><hr />
                                                    Shipping Charge : $100
                                                    <hr />
                                                    <strong>Sub Total: ${getTotalPrice(cartState)}</strong></div>) : ''}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>);
}

export default Cart;