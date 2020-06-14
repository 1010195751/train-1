import React, { useEffect } from 'react';
import { Menu, Col, Button, Dropdown } from 'antd';
import { PicRightOutlined } from '@ant-design/icons';
import './style.scss';
const Header = () => {

    useEffect(()=>{
        window.addEventListener("scroll", ()=>{ addScrollEvent() });
        return ()=>{
            window.removeEventListener("scroll", ()=>{ addScrollEvent() });
        }
    })

    const addScrollEvent = ()=>{
        let headerDiv = document.getElementById('header-main-div');
        let height = headerDiv.getBoundingClientRect().height;
        if( window.pageYOffset - height > 40 ) {
            if (!headerDiv.classList.contains("sticky")) {
                headerDiv.classList.add("sticky");
            } 
        } else {
            if (headerDiv.classList.contains("sticky")) {
                headerDiv.classList.remove("sticky");
            }   
        }
    }

    const menuContent = ( style ) => (
        <Menu mode = { style } className = "header-menu">
            <Menu.Item className="sl-menu-item">
                <a href="/train/demo/build/#/" target="_self">首页</a>
            </Menu.Item>
            <Menu.Item className="sl-menu-item">
                <a href="/train/demo/build/#/news" target="_self">新闻</a>
            </Menu.Item>
            <Menu.Item className="sl-menu-item">
                <a href="/train/demo/build/#/about" target="_self">关于我们</a>
            </Menu.Item>
        </Menu>
    )

    return (
        <div id = "header-main-div">
            <Col xs = { 0 } sm = { 24 } md = { 24 } lg = { 24 } xl = { 24 } xxl = { 24 }>
                <p className = "header-img">DBD</p>
                { menuContent("horizontal") }
            </Col>
            <Col xs = { 24 } sm = { 0 } md = { 0 } lg = { 0 } xl = { 0 } xxl = { 0 }>
                <p className = "header-img">DBD</p>
                <Dropdown className = "header-dropdown" overlay={ menuContent("vertical") } placement="bottomCenter">
                    <Button><PicRightOutlined /></Button>
                </Dropdown>
            </Col>
        </div>
    )
}

export default Header;