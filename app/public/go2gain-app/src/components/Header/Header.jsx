import React from "react";
import ToggleLoginArea from "./LoginArea/ToggleLoginArea";
import LoginArea from "./LoginArea";
import useAuth from "../../hooks/useAuth";
import AuthorizedMenu from "./Menu/AuthorizedMenu";
import NotAuthorizedMenu from "./Menu/NotAuthorizedMenu";

const Header = () => {

    const { authStatus } = useAuth();

    return (
        <div>
            <div id='header-top'>
                <section className='container clearfix'>
                    <nav className="header-top-nav">
                        <ul>
                            <li>
                                <a href="/a"><i className="icon-envelope" />Contact</a>
                            </li>
                            <li><a href="/b"><i className="icon-headphones" />Support</a></li>
                            { ! authStatus
                                ? <li><ToggleLoginArea /></li>
                                : <li>Here will be profile settings</li>
                            }

                        </ul>
                    </nav>
                </section>
            </div>
            { !authStatus
                ? <LoginArea/>
                : ''
            }
            <header id="header">
                <section className="container clearfix">
                    <div className="logo"><a href="index.html"><img alt="" src="images/logo.png" /></a></div>
                    <nav className="navigation">
                        { authStatus ? <AuthorizedMenu /> : <NotAuthorizedMenu /> }
                    </nav>
                </section>
            </header>
        </div>
    );
}

export default Header;