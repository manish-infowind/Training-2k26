import UserCard from "./assets/UserCard";
import ProductCard from "./ProductDisplay";



function ComtoCom1 ({data}){
if(data=="user"){
    return <UserCard/>
}
else{
    return <ProductCard Pro_name="LapTop 100x" Pro_qua="2" Pro_img="laptop.jpeg" Pro_price="40,0000" Pro_ava={false}/>
}
}
export default ComtoCom1;