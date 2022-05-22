import NavMain from "./NavMain";
import Tray from "./Tray";
import Menu from "./Menu";
import Payment from "./Payment";

function Start(props){

    props.setTotalPrice(10);
    return(
        <>
            <div className="App">
                <NavMain/>
                <Tray orderList={props.orderList} setOrderList={props.setOrderList} setShow={props.setShow} show={props.show}/>
                <Menu orderList={props.orderList} setOrderList={props.setOrderList}/>
                <Payment
                    totalprice={props.totalPrice}
                    setTotalPrice={props.setTotalPrice}
                    orderList={props.orderList} setOrderList={props.setOrderList} setShow={props.setShow} show={props.show}/>

            </div>



        </>
    )
}
export default Start;