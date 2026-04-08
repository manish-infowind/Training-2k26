
function UserCard(){
   const userName ="Harry"
   const userAge =24
   const userAddress="Ramavtar colony "
 return(
  <div className="user-card">
<img src ="user.jpg" alt="img"/> 
<h3>Name : {userName}</h3>
<h3>Age :  {userAge}</h3>
<h3>Address : {userAddress}</h3>
</div>
 );

}


export default UserCard;