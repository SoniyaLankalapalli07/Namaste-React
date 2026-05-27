import { useParams } from "react-router";
const Menu = () =>{
    const {resId} = useParams();
return(
    <div className="menu">
        <h1>Name of Restaurant</h1>
        <h2>Menu</h2>
       <li>
        <ul>Biryani</ul>
        <ul>Burger</ul>
        <ul>Pizza</ul>
        <ul>Veg Meals</ul>
       </li>
       <h1>{resId}</h1>
    </div>
)
}

export default Menu;