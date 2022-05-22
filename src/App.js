import './css/App.css';

import Menu from "./Components/Menu";

import {useState} from "react";

import {BrowserRouter as Router, Redirect, Route, Routes} from "react-router-dom";
import StripeContainer from "./Components/StripeContainer";

function App() {
    const [orderList, setOrderList] = useState([]);
    const [show, setShow] = useState(false)
    const [totalPrice, setTotalPrice] = useState(0);
    return (
        <>
            <Router>
                <Routes>

                    <Route path="/" element={
                        <Menu
                            orderList={orderList}
                            setOrderList={setOrderList}
                            setShow={setShow}
                            show={show}
                            totalPrice={totalPrice}
                            setTotalPrice={setTotalPrice}

                        />
                    }/>


                    <Route path="/StripeCont" element={
                        <StripeContainer
                            totalPrice={totalPrice}
                            setOrderList={setOrderList}
                            orderList={orderList}
                            setShow={setShow}
                            show={show}/>
                    }/>

                </Routes>
            </Router>



        </>
    );
}

export default App;
