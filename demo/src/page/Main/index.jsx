import React, { Fragment } from 'react';
import { BrowserRouter as BRouter, Route } from 'react-router-dom';
import { RouterConfig } from '../../config/routerConfig';
function Main(){
    return (
        <Fragment>
            <BRouter>
                {
                    RouterConfig.map((item, index)=>{
                        return <Route key={ index } path = { item.path } exact={item.exact} component = { item.component } />
                    })
                }
            </BRouter>
        </Fragment>
    )
}
export default Main;