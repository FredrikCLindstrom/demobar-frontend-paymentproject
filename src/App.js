import './css/App.css';
import NavMain from "./Components/NavMain";
import Menu from "./Components/Menu";
import Tray from "./Components/Tray";
import {useState} from "react";
import Payment from "./Components/Payment";

function App() {
    const [orderList, setOrderList] = useState([]);
    const [show, setShow] = useState(false)
    return (
        <div className="App">
            <NavMain/>
            <Tray orderList={orderList} setOrderList={setOrderList} setShow={setShow} show={show}/>
            <Menu orderList={orderList} setOrderList={setOrderList}/>
            <Payment orderList={orderList} setOrderList={setOrderList} setShow={setShow} show={show}/>

        </div>
    );
}

export default App;
