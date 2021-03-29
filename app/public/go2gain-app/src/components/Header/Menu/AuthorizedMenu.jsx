import React from "react";
import {Link} from "react-router-dom";

const AuthorizedMenu = () => {

    return (
        <ul>
            <li>
                <Link to="/">Главная</Link>
            </li>
            <li>
                <Link to='/subscribes'>Подписки</Link>
            </li>
            <li>
                <Link to='/channels'>Каналы</Link>
            </li>
        </ul>
    );
}

export default AuthorizedMenu;