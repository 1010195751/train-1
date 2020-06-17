import React, { Component } from 'react';
import { Route , HashRouter} from 'react-router-dom';
import { BackTop } from 'antd';
import MainTab from '../MainTab';
const RouterConfig = [
    { path: '/', exact: true, component: MainTab },
]
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <HashRouter>
                {
                    RouterConfig.map((item, index)=>{
                        return <Route key={ index } path = { item.path } exact={item.exact} component = { item.component } />
                    })
                }
                <BackTop />
            </HashRouter>
        );
    }
}
 
export default Main;