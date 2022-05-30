import {useEffect, useState} from "react";
import "../css/Menu.css";
import useFetch from "./useFetch";
import Payment from "./Payment";
import NavMain from "./NavMain";
import {Button} from "react-bootstrap";

const Menu = (props) => {

    const { get } = useFetch("http://localhost:8081/api/");
    const [fetchedItems, setFetchedItems] = useState([]);
    const [fetchedDrinkableItems, setFetchedDrinkableItems] = useState([]);
    const [fetchedDrinkableAlcoholicItems, setFetchedDrinkableAlcoholicItems] = useState([]);
    const [fetchedFoodItems, setFetchedFoodItems] = useState([]);
    const [fetchedSnacksItems, setFetchedSnacksItems] = useState([]);

    useEffect(() => {
        get("ShowFullMenu")
            .then((data) => {
                setFetchedItems([...data])
            })
            .catch((error) => {
                console.log("Error fetching Items: ", error);
            });
    }, []);

    useEffect(() => {
        get("ShowDrinkableItemsOnMenu")
            .then((data) => {
                setFetchedDrinkableItems([...data])
            })
            .catch((error) => {
                console.log("Error fetching DrinkableItems: ", error);
            });
    }, []);


    useEffect(() => {
        get("ShowDrinkableAlcoholicItemsOnMenu")
            .then((data) => {
                setFetchedDrinkableAlcoholicItems([...data])
            })
            .catch((error) => {
                console.log("Error fetching DrinkableAlcoholicItems: ", error);
            });
    }, []);

    useEffect(() => {
        get("ShowFoodOnMenu")
            .then((data) => {
                setFetchedFoodItems([...data])
            })
            .catch((error) => {
                console.log("Error fetching FoodItems: ", error);
            });
    }, []);

    useEffect(() => {
        get("ShowSnacksOnMenu")
            .then((data) => {
                setFetchedSnacksItems([...data])
            })
            .catch((error) => {
                console.log("Error fetching snacksItems: ", error);
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
                <ul class="list-group">
                    {fetchedDrinkableItems.length > 0 &&
                        <nav id="Menu--description">Soft Drinks/Coffee</nav>
                    }
                    {fetchedDrinkableItems.map((item, index) => {
                        return (
                            <li class="list-group-item" key={index}>
                                {/*<div className="itemInMenu"><p>{`${item.nameOfItem}`}</p> <p*/}
                                {/*    className="smaller">{`${item.volume} cl`}</p>*/}
                                {/*    <button className="Menu--buyBtn" onClick={() => addItem(item)}>{item.price}Kr*/}
                                {/*    </button>*/}
                                {/*</div>*/}
                                <div className="container">
                                    <div className="row">
                                        <div className="col-7">
                                            {`${item.nameOfItem}`}
                                        </div>
                                        <div className="col-2">
                                            {`${item.volume} cl`}
                                        </div>

                                        <div className="col-3">
                                            <button className="Menu--buyBtn" onClick={() => addItem(item)}>{item.price}Kr
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        )
                    })}

                    {fetchedDrinkableAlcoholicItems.length > 0 &&
                        <nav id="Menu--description">Wine, beer and drinks</nav>
                    }
                    {fetchedDrinkableAlcoholicItems.map((item, index) => {
                        return (
                            <li class="list-group-item" key={index}>
                                {/*<div className="itemInMenu"><p>{`${item.nameOfItem}`}</p> <p*/}
                                {/*    className="smaller">{`${item.volume} cl`}</p><p*/}
                                {/*    className="smaller">{`${item.percentageAlcohol} %`}</p>*/}
                                {/*    <button className="Menu--buyBtn" onClick={() => addItem(item)}>{item.price}Kr*/}
                                {/*    </button>*/}
                                {/*</div>*/}
                                <div className="container">
                                    <div className="row">
                                        <div className="col-5">
                                            {`${item.nameOfItem}`}
                                        </div>
                                        <div className="col-2">
                                            {`${item.volume} cl`}
                                        </div>
                                        <div className="col-2">
                                            {`${item.percentageAlcohol}%`}
                                        </div>
                                        <div className="col-3">
                                            <button className="Menu--buyBtn" onClick={() => addItem(item)}>{item.price}Kr
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        )
                    })}

                    {fetchedFoodItems.length > 0 &&
                        <nav id="Menu--description">From the kitchen</nav>
                    }
                    {fetchedFoodItems.map((item, index) => {
                        return (
                            <li class="list-group-item" key={index}>
                                {/*<div className="itemInMenu"><p>{`${item.nameOfItem}`}</p>*/}
                                {/*    <button className="Menu--buyBtn" onClick={() => addItem(item)}>{item.price}Kr*/}
                                {/*    </button>*/}
                                {/*</div>*/}
                                <div className="container">
                                    <div className="row">
                                        <div className="col-9">
                                            {`${item.nameOfItem}`}
                                        </div>


                                        <div className="col-3">
                                            <button className="Menu--buyBtn" onClick={() => addItem(item)}>{item.price}Kr
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        )
                    })}

                    {fetchedSnacksItems.length > 0 &&
                        <nav id="Menu--description">Snacks</nav>
                    }
                    {fetchedSnacksItems.map((item, index) => {
                        return (
                            <li class="list-group-item" key={index}>
                                {/*<div className="itemInMenu"><p>{`${item.nameOfItem}`}</p>*/}
                                {/*    <button className="Menu--buyBtn" onClick={() => addItem(item)}>{item.price}Kr*/}
                                {/*    </button>*/}
                                {/*</div>*/}
                                <div className="container">
                                    <div className="row">
                                        <div className="col-9">
                                            {`${item.nameOfItem}`}
                                        </div>


                                        <div className="col-3">
                                            <button className="Menu--buyBtn" onClick={() => addItem(item)}>{item.price}Kr
                                            </button>
                                        </div>
                                    </div>
                                </div>
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

