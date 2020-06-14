import React, { useEffect, useState } from 'react';
import Request from '../../config/Fetch';
import { Link } from 'react-router-dom';
import './news.scss';
import NewsItem from './NewsItem';

function News (){

    const [ listData, setListData ] = useState([]);
    const [ initial, setInitial ] = useState(false);

    useEffect(()=>{
        if(!initial){
            setInitial(true);
            initData();
        }
        // eslint-disable-next-line
    }, [ listData ])

    const initData = ()=>{
        Request.get("news")
        .then((res)=>{
            let temp = [];
            for(let i = 0; i< 8; i++) {
                temp = [...temp, res.data];
            }
            setListData(temp);
        })
    }

    return (
        <div id = "news-main-div">
            <div className = "news-div-header">
                <p className = "news-header-title">最新新闻</p>
                <div className = "news-header-break"></div>
            </div>
            {
                listData.length !== 0 && listData.map((item, index)=>{
                    return (
                        <Link 
                            key = { `news-a-${index}` }
                            to = "/detail"
                        >
                            <NewsItem 
                                key = { index }
                                imgLink = { item.imgLink } 
                                title = { item.title } 
                                description = { item.desc }
                            />
                        </Link>
                    );
                })
            }
        </div>
    )
}

export default News;