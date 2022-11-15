import React,{useEffect} from "react";
import {removeProduct, fetchSingleProduct} from "../redux/actions/productAction";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

const ProductDetail = () => {

    const dispatch = useDispatch()
    let product = useSelector((state) => state.product)

    const { image, title, price, category, description } = product;

    const { productId } = useParams();

    useEffect(() => {
        if (productId && productId !== '') dispatch(fetchSingleProduct(productId))

        return () => { dispatch(removeProduct()) }

    },[dispatch, productId])

    return (
        <div className="ui grid container" style={{marginTop:"5%"}}>
            {Object.keys(product).length === 0 ? (
                <div>...Loading</div>
            ) : (
                <div className="ui placeholder segment">
                    <div className="ui two column stackable center aligned grid">
                        <div className="ui vertical divider">AND</div>
                        <div className="middle aligned row">
                            <div className="column lp">
                                <img className="ui fluid image" src={image} alt={title} />
                            </div>
                            <div className="column rp">
                                <h1>{title}</h1>
                                <h2>
                                    <a className="ui teal tag label">${price}</a>
                                </h2>
                                <h3 className="ui brown block header">{category}</h3>
                                <p>{description}</p>
                                <div className="ui vertical animated button" tabIndex="0">
                                    <div className="hidden content">
                                        <i className="shop icon"></i>
                                    </div>
                                    <div className="visible content">Add to Cart</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
export default ProductDetail;
