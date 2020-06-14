import React, { useEffect, useState } from 'react';
import Request from '../../../config/Fetch';
import { Link } from 'react-router-dom';
import './currentNews.scss';
import SubTitle from '../../../components/SubTitle';

function CurrentNews(){

    const [ initial, setInitial ] = useState(false);
    const [ newsList, setNewsList ] = useState([]);

    useEffect(()=>{
        if(!initial) {
            setInitial(true);
            fetchData();
        }
        // eslint-disable-next-line
    },[ newsList ])


    const fetchData = ()=>{
        Request.get('news')
        .then((res)=>{
            let obj = res.data;
            let temp = [];
            for (let i = 0; i< 4; i++) {
                temp = [...temp, obj];
            }
            setNewsList(temp);
        })
    }

    return (
        <div id = "current-news-main-div">
            <SubTitle addBreak = {false} title = { "最新文章" } />
            {
                newsList.length !== 0 ? newsList.map((item, index)=>{
                    return (
                        <Link key = { `news-link-${index}` } to = "/detail"> 
                            <div key = { `news-item-${index}` } className = "news-item">
                                <img className = "news-item-img" src = { item.imgLink } alt=""/>
                                <p className = "news-title">{ item.title }</p>
                                <p className = "news-desc">{ item.desc }</p>
                            </div>
                        </Link>
                    )
                }):''
            }
        </div>
    )
}
export default CurrentNews;