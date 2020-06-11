import React, { Fragment } from 'react';
import { Route , HashRouter} from 'react-router-dom';
import { RouterConfig } from '../../config/routerConfig';
function Main(){
    return (
        <Fragment>
            <HashRouter>
                {
                    RouterConfig.map((item, index)=>{
                        return <Route key={ index } path = { item.path } exact={item.exact} component = { item.component } />
                    })
                }
            </HashRouter>
        </Fragment>
    )
}
export default Main;