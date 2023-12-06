import React from "react";
import "./start.css";
import hand_icon from './assets/hand.png'

export const Start = () => {
    return (
    <div className="start">
        <div className="start-left">
            <h2>НОВОЕ ПОСТУПЛЕНИЕ!</h2>
        <div>
            <div className="start-hand-icon">
                <p>Новое</p>
                <img src={hand_icon} alt="" />
            </div>
            <p>снаряжение</p>
            <p>доступное для всех!</p>
        </div>
        <div className="start-latest-bin">
            <div>Последние поступления</div>
        </div>
       </div>
    <div className="start-right">

    </div>
    </div>
    );
}

export default Start;