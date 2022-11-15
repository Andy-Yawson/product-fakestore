import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import ProductComponent from "./ProductComponent";
import {fetchProducts} from "../redux/actions/productAction";

const ProductListing = () => {

    const dispatch = useDispatch()
    const products = useSelector((state) => state.allProducts.products)

    useEffect(()=>{
        dispatch(fetchProducts())
    },[dispatch])

  return (
      <div className="ui grid container">
          <ProductComponent products={products}/>
      </div>
  )
}
export default ProductListing;
