import {Link} from "react-router-dom";
import React from "react";

const MainPage = () => {

    return (<div className='col-md-12'>
        <div className='tabs-warp question-tab'>
            <ul className="tabs">
                <li className="tab"><Link className='current' to='/'>Recent Questions</Link></li>
                <li className="tab"><Link to='/subscribed'>Most Responses</Link></li>
                <li className="tab"><Link to='/'>Recently Answered</Link></li>
                <li className="tab"><Link to='/'>No answers</Link></li>
            </ul>
            <div className="tab-inner-warp" style={{ display: 'block' }}>
                <div className="tab-inner">
                    <a href="#" className="load-questions"><i className="icon-refresh"/>Load More Questions</a>
                </div>
            </div>
        </div>
    </div>)
};

export default MainPage;
