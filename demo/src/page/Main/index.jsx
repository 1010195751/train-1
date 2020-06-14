import React from 'react';
import { Route , HashRouter} from 'react-router-dom';
import { RouterConfig } from '../../config/routerConfig';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './style.scss';
function Main(){
    return (
        <div id="main">
            <Header />
            <HashRouter>
                {
                    RouterConfig.map((item, index)=>{
                        return <Route key={ index } path = { item.path } exact={item.exact} component = { item.component } />
                    })
                }
            </HashRouter>
            <Footer/>
        </div>
    )
}
export default Main;