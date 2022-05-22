
import {useEffect, useState} from "react";
import useFetch from "./useFetch";
import StripeContainer from "./StripeContainer";
import {Link, Redirect, useHistory} from "react-router-dom";
import NavMain from "./NavMain";


export default function Payment(props) {

    const removeItem = (idin, index) => {

        let matchedId="empty";

        props.orderList.map(item=>{
            if(item.item.id==idin.id){
                matchedId=idin.id;
            }
        })
        if(matchedId!=="empty"){
            //const newList = props.orderList.filter((item) => item.item.id !== matchedId);
            const newList = props.orderList.filter((item) => item.item.id !== matchedId);
            props.setOrderList(newList);
        }
    }

    useEffect(()=>{
        let tempPrice=0;
        props.orderList.map(item=>{
            tempPrice=tempPrice+item.item.price;
        })
       props.setTotalPrice(tempPrice)
    },[props.orderList])

    const {post, loading} = useFetch("");



    if(props.show) {
        return (

            <div className="wrapper">
                <div className="payment-info">
                    {props.orderList.map((item, index) => {
                        return (

                            <li className="Menu--listOfItems-inTray" key={index}>
                                <p>{`${item.item.nameOfItem}  ${item.item.price}kr `}</p>
                                <button className="Menu--removeBtn"
                                        onClick={() => removeItem(item.item, index)}>Remove
                                </button>
                            </li>
                        )
                    })}
                    {/*<button className="pay-btn" onClick={() => orderSent()}>{props.totalPrice}kr pay!</button>*/}
                    <Link to="/StripeCont" ><button className="pay-btn">{props.totalPrice}kr pay!</button></Link>

                </div>
            </div>

        )
    }else{
        return(<>

        </>)
    }
}
// <Link to='/paymentSide' > some stuff </Link>