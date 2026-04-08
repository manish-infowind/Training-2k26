//  **Product Gallery**: Create a `ProductGallery` component that accepts 
// an array of products and renders `ProductCard` for each one

import ProductCard from "./ProductDisplay"


function ProductGallery({ data }) {
  return (
    <div className="app-container">
      {data.map((product) => (
        <ProductCard
          
          Pro_name={product.name}
          Pro_qua={product.qua}
          Pro_img={product.img}
          Pro_price={product.price}
          Pro_ava={product.available}
        />
      ))}
    </div>
  )
}

export default ProductGallery