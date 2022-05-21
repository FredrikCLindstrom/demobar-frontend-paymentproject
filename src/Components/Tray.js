
import "../css/Tray.css"

const Tray=(props)=>{

    const redirectToPayment=()=>{

        if(props.show){
            props.setShow(false)
        }else{
            props.setShow(true)
        }

    }

    return(
        <button className="Tray--trayBtn" onClick={()=>redirectToPayment()}>Tray({props.orderList.length})</button>
    )
}
export default Tray;