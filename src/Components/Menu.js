import {useEffect, useState} from "react";
import "../css/Menu.css";
import useFetch from "./useFetch";
import Payment from "./Payment";

const Menu = (props) => {

    const { get } = useFetch("http://localhost:8081/api/");
    const [fetchedItems, setFetchedItems] = useState([]);

    useEffect(() => {
        get("ShowFullMenu")
            .then((data) => {
                setFetchedItems([...data])
            })
            .catch((error) => {
                console.log("Error fetching Items: ", error);
            });
    }, []);

    const addItem=(itemIn)=>{
        const item =itemIn;
        const newList = props.orderList.concat({ item });
        props.setOrderList(newList);
    }


    return(
        <div className="wrapper">
           <ul id="lala">
               <nav id="Menu--description">Menu</nav>
               {fetchedItems.map((item, index)=>{
                   return(
                       <li className="Menu--listOfItems" key={index}>
                          <p>{`${item.nameOfItem}`}</p><button className="Menu--buyBtn" onClick={()=>addItem(item)}>{item.price}Kr</button>
                       </li>
                   )
               })}

           </ul>
            <Payment orderList={props.orderList} setOrderList={props.setOrderList}/>
        </div>
    )
}
export default Menu;

