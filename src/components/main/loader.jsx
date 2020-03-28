import React from 'react'
import Loader from 'react-loader-spinner'

const Loading = () => {

    return (
        <>
            <Loader
                color="#f19f40"
                height={80}
                width={80}
                type="Watch"
                className="pulse-yellow"
                // visible={props.view}
            />
            <p className="App-logo"><br />Aguarde Processando...</p>
        </>
    )
}

export default Loading