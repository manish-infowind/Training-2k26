//4. **Product Display**: Create a `ProductDisplay` component that shows:
//    - Product image
//    - Name and price
//    - Stock status
//    - Add to cart button (disabled if out of stock)


// function ProductCard({Pro_name , Pro_qua , Pro_img , Pro_price  , Pro_ava}){ // Method -1 without Props 
function ProductCard(Props){
  return (
    <div className="Pro-card">
      <div>
        <img src={Props.Pro_img} alt="Image not found" />
        <h3>{Props.Pro_name}</h3>
        <h3>{Props.Pro_qua}</h3>
        <h3>{Props.Pro_price}</h3>
        {Props.Pro_ava ? (
          <button className="Add2Cart">Add to Cart</button>
        ) : (
          <span>Not Available</span>
        )}
      </div>
    </div>
  )
}

export default ProductCard;