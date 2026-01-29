import Nav_bar from "./navbars";
import Footers from "./footer";
import { useParams } from "react-router-dom";
import './wallet.css';
import { useState } from "react";

function Wallet_info() {
    const [text , setText] = useState("");
    const isEmpty = text.trim().length === 0;

    let buttonState ;

    if(isEmpty){
        buttonState = <button>Generate wallet</button>;
    }else{
        buttonState = <button >Add Wallet</button>;
    }

    const {name} = useParams();
    return(
        <div>
            <nav><Nav_bar /></nav>
            <div className="content">
            <h1>Enter Your Seed or Generate a {name} wallet</h1>
            <div>
                <input type="text" className="inputfeild" onChange={(e) => setText(e.target.value)} />
                <div>{buttonState}</div>
            </div>
            </div>
            <footer className="footer"><Footers /></footer>
        </div>
    );

}

export default Wallet_info;