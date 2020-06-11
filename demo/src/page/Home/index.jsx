import React, { useEffect } from 'react';
import axios from 'axios';
import './home.scss';
function Home(){

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = ()=>{
        axios.get('http://rap2.taobao.org:38080/app/mock/243407/test/2020128195616')
        .then((res)=>{
            console.log('成功获取');
            console.log(res);
        },(error)=>{
            console.log('获取失败');
            console.log(error);
        })
    }

    return (
        <div id = "home-main-div">

        </div>
    )
}

export default Home;