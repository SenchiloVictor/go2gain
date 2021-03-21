import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import get from "lodash/get";
import { fetchFrontChannels } from "../../../actions/front/mainpage";

const ChannelsList = () => {

    const dispatch = useDispatch();
    const channels = useSelector(store => get(store, 'mainpageReducer.list', []), shallowEqual);
    // const channelsLoaded = useSelector(store => get(store, 'mainpageReducer.loaded', []), shallowEqual);

    useEffect(() => {
        dispatch(
            fetchFrontChannels()
        );

    }, [ dispatch ]);

    return channels.map(i => {

        return (
            <article key={ i.id } className="question question-type-normal">
                <h2 className='ml-0'>
                    <a href="single_question.html">{ i.title }</a>
                </h2>
                <a className="question-report" href="#">Report</a>
                <div className="question-type-main">
                    <i className="icon-question-sign"></i>Question
                </div>

                <div className="question-inner ml-0">
                    <div className="clearfix"></div>
                    <p className="question-desc">{ i.description }</p>
                    <div className="question-details">
                                                    <span className="question-answered question-answered-done"><i
                                                        className="icon-ok"></i>solved</span>
                        <span className="question-favorite"><i
                            className="icon-star"></i>5</span>
                    </div>
                    <span className="question-category"><a href="#"><i
                        className="icon-folder-close"></i>wordpress</a></span>
                    <span className="question-date"><i
                        className="icon-time"></i>4 mins ago</span>
                    <span className="question-comment"><a href="#"><i
                        className="icon-comment"></i>5 Answer</a></span>
                    <span className="question-view"><i className="icon-user"></i>70 views</span>
                    <div className="clearfix"></div>
                </div>
            </article>
        );
    });
}

export default ChannelsList;
