import React from "react";
import {Link} from "react-router-dom";

const ProductComponent = (props) => {

    const renderList = props.products.map((product) => {

        const {title, price, category, image, id} = product;

        return (
            <div className="four wide column" style={{marginTop:"5%"}} key={id}>
                <Link to={`/product/${id}`}>
                    <div className="ui link cards">
                        <div className="card">
                            <div className="image">
                                <img src={image} alt={title}/>
                            </div>
                            <div className="content">
                                <div className="header">{title}</div>
                                <div className="meta price">${price}</div>
                                <div className="meta">{category}</div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        )
    })

    return (
        <>{renderList}</>
    )
}
export default ProductComponent;
