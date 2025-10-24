import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrums from '../Breadcrams/Breadcrums';
import Productdisplay from '../Productdisplay/Productdisplay';
import DiscriptionBox from '../Discriptionbox/DiscriptionBox';
import RelatedProducts from '../RelatedProducts/RelatedProducts';

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Breadcrums product={product} />
     <Productdisplay product={product} />
     <DiscriptionBox/>
     <RelatedProducts/>
    </div>
  );
};

export default Product;