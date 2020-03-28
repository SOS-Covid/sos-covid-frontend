import React from 'react'
import { Route, withRouter } from 'react-router-dom'
import Main from '../main/main.jsx'
const PrivateRouters = () => {

    return (
        <>
            <Route exact path="/main" component={Main} />
        </>
    )

}
export default withRouter(PrivateRouters)