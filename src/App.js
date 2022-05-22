import './css/App.css';
import NavMain from "./Components/NavMain";
import Menu from "./Components/Menu";
import Tray from "./Components/Tray";
import {useState} from "react";
import Payment from "./Components/Payment";
import {BrowserRouter as Router, Redirect, Route, Routes} from "react-router-dom";
import StripeContainer from "./Components/StripeContainer";
import Start from "./Components/Start";

function App() {
    const [orderList, setOrderList] = useState([]);
    const [show, setShow] = useState(false)
    const [totalPrice, setTotalPrice] = useState(0);
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={
                        <Start
                        totalPrice={totalPrice}
                        setTotalPrice={setTotalPrice}
                        orderList={orderList}
                        setOrderList={setOrderList}
                        setShow={setShow}
                        show={show}/>
                    }/>
                    <Route path="/paymentSide" element={
                        <StripeContainer totalPrice={totalPrice}/>
                    }/>}/>
                </Routes>
            </Router>



        </>
    );
}

export default App;
