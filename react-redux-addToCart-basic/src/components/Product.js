import { useDispatch, useSelector } from "react-redux";
import { addInCart } from "../redux/slices/cartSlice";

const Product = () => {
    const products = useSelector((state) => state.product.data)
    const dispatch = useDispatch()

    const handleCart = (o) => {
        dispatch(addInCart(o))
    }
    return (<>
        {products.map((v, k) => (
            <div className="col-sm-3 box" key={k + 1}>
                <h3>{v.name}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                <button className="btn btn-primary" onClick={() => handleCart(v)}>AddToCart</button>&nbsp;<strong> ${v.price}</strong>
            </div>
        ))}



    </>);
}

export default Product;