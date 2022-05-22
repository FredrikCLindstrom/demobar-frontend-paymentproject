import {useEffect, useState} from "react";
import "../css/Menu.css";
import useFetch from "./useFetch";
import Payment from "./Payment";
import NavMain from "./NavMain";

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
    const redirectToPayment=()=>{

        if(props.show){
            props.setShow(false)
        }else{
            props.setShow(true)
        }

    }


    return(
        <>
        <div className="wrapper">
            <NavMain/>
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
            {/*<Payment orderList={props.orderList} setOrderList={props.setOrderList}/>*/}
        </div>
            <button className="Tray--trayBtn" onClick={()=>redirectToPayment()}>Tray({props.orderList.length})</button>
            <Payment totalPrice={props.totalPrice}
                     setTotalPrice={props.setTotalPrice}
                     orderList={props.orderList}
                     setOrderList={props.setOrderList}
                     setShow={props.setShow}
                     show={props.show}/>
            </>
    )
}
export default Menu;

