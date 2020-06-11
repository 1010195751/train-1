import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './home.scss';
function Home(){

    const [ data, setData ] = useState();

    useEffect(()=>{
        fetchData();
    },[  ])

    const fetchData = ()=>{
        axios.get('https://www.fastmock.site/mock/aeaf8583f965de272b74d45fc0c60a31/train/home')
        .then((res)=>{
            setData(res.data);
        },(error)=>{
            console.log('获取失败');
            console.log(error);
        })
    }

    return (
        <div id = "home-main-div">
            Home {
                data !== undefined ? data.list : ""
            }
            <Link 
                to = "/about"
            > About
            </Link>
        </div>
    )
}

export default Home;