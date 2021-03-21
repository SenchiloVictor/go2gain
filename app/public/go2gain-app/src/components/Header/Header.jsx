import React from "react";
import ToggleLoginArea from "./LoginArea/ToggleLoginArea";
import LoginArea from "./LoginArea";
import { shallowEqual, useSelector } from "react-redux";
import get from "lodash/get";
import { useLocalStorage } from "../../helpers/localStorage";

const Header = () => {

    const authStatus = useSelector(store => get(store, 'authReducer.authorized', []), shallowEqual);
    const [ token ] = useLocalStorage('token');

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
                            {!token || !authStatus
                                ? <li><ToggleLoginArea /></li>
                                : <li>Here will be profile settings</li>
                            }

                        </ul>
                    </nav>
                </section>
            </div>
            <LoginArea />
            <header id="header">
                <section className="container clearfix">
                    <div className="logo"><a href="index.html"><img alt="" src="images/logo.png" /></a></div>
                    <nav className="navigation">
                        <ul>
                            <li className="current_page_item parent-list"><a href="index.html">Home <span
                                className="menu-nav-arrow"><i className="icon-angle-down"></i></span></a>
                                <ul style={{ display: 'none' }}>
                                    <li className="current_page_item"><a href="index.html">Home</a></li>
                                    <li><a href="index_2.html">Home 2</a></li>
                                    <li><a href="index_boxed_1.html">Home Boxed 1</a></li>
                                    <li><a href="index_boxed_2.html">Home Boxed 2</a></li>
                                    <li><a href="index_no_box.html">Home No Box</a></li>
                                </ul>
                            </li>
                            <li className="ask_question"><a href="ask_question.html">Ask Question</a></li>
                            <li className="parent-list"><a href="cat_question.html">Questions <span
                                className="menu-nav-arrow"><i className="icon-angle-down"></i></span></a>
                                <ul style={{ display: 'none' }}>
                                    <li><a href="cat_question.html">Questions Category</a></li>
                                    <li><a href="single_question.html">Question Single</a></li>
                                    <li><a href="single_question_poll.html">Poll Question Single</a></li>
                                </ul>
                            </li>
                            <li className="parent-list"><a href="user_profile.html">User <span
                                className="menu-nav-arrow"><i className="icon-angle-down"></i></span></a>
                                <ul style={{ display: 'none' }}>
                                    <li><a href="user_profile.html">User Profile</a></li>
                                    <li><a href="user_questions.html">User Questions</a></li>
                                    <li><a href="user_answers.html">User Answers</a></li>
                                    <li><a href="user_favorite_questions.html">User Favorite Questions</a></li>
                                    <li><a href="user_points.html">User Points</a></li>
                                    <li><a href="edit_profile.html">Edit Profile</a></li>
                                </ul>
                            </li>
                            <li className="parent-list"><a href="blog_1.html">Blog <span className="menu-nav-arrow"><i
                                className="icon-angle-down"></i></span></a>
                                <ul style={{ display: 'none' }}>
                                    <li className="parent-list"><a href="blog_1.html">Blog 1 <span
                                        className="menu-nav-arrow"><i className="icon-angle-down"></i></span></a>
                                        <ul style={{ display: 'none' }}>
                                            <li><a href="blog_1.html">Right sidebar</a></li>
                                            <li><a href="blog_1_l_sidebar.html">Left sidebar</a></li>
                                            <li><a href="blog_1_full_width.html">Full Width</a></li>
                                        </ul>
                                    </li>
                                    <li className="parent-list"><a href="blog_2.html">Blog 2 <span
                                        className="menu-nav-arrow"><i className="icon-angle-down"></i></span></a>
                                        <ul style={{ display: 'none' }}>
                                            <li><a href="blog_2.html">Right sidebar</a></li>
                                            <li><a href="blog_2_l_sidebar.html">Left sidebar</a></li>
                                            <li><a href="blog_2_full_width.html">Full Width</a></li>
                                        </ul>
                                    </li>
                                    <li className="parent-list"><a href="single_post.html">Post Single <span
                                        className="menu-nav-arrow"><i className="icon-angle-down"></i></span></a>
                                        <ul style={{ display: 'none' }}>
                                            <li><a href="single_post.html">Right sidebar</a></li>
                                            <li><a href="single_post_l_sidebar.html">Left sidebar</a></li>
                                            <li><a href="single_post_full_width.html">Full Width</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="parent-list"><a href="right_sidebar.html">Pages <span
                                className="menu-nav-arrow"><i className="icon-angle-down"></i></span></a>
                                <ul style={{ display: 'none' }}>
                                    <li><a href="login.html">Login</a></li>
                                    <li><a href="contact_us.html">Contact Us</a></li>
                                    <li><a href="ask_question.html">Ask Question</a></li>
                                    <li><a href="right_sidebar.html">Right Sidebar</a></li>
                                    <li><a href="left_sidebar.html">Left Sidebar</a></li>
                                    <li><a href="full_width.html">Full Width</a></li>
                                    <li><a href="404.html">404</a></li>
                                </ul>
                            </li>
                            <li><a href="shortcodes.html">Shortcodes</a></li>
                            <li><a href="contact_us.html">Contact Us</a></li>
                        </ul>
                    </nav>
                </section>
            </header>
        </div>
    );
}

export default Header;