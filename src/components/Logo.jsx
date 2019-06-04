import React from "react";
import s from "./style.module.css";

const Logo = (props) => {
    return (
           <h1 className={s.logo}>
                {`Приложение № ${props.id}`}
                <div className=""></div>
            </h1> 
    );
}

export default Logo;