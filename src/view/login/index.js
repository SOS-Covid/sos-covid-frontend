import React from "react"
import API from '../../api'

export default function Login(props) {

    const getLogin = async () => {

        const res = await API.post('/test')
        console.log(res)
    }


    return (

        <div>Login</div>
    )
}