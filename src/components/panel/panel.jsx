import React from 'react'
// import { Modal, Button } from 'react-bootstrap'
// import PrivateRouters from '../main/privateRouters.jsx'
import logoReact from '../../assets/images/logo.svg'
import '../panel/panel.css'


const StyleContainer = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    border: '0px dashed #ddd',
    justifyContent: 'center',
    alignItens: 'center',
    fontFamily: 'Trebuchet MS',
    background: 'rgba(0,0,0,0.5)'
}


const Panel = () => {

    return (

        <div style={StyleContainer}>

            {
                process.env.NODE_ENV === 'development'
                    ?
                    <>
                        <div style={{
                            border: '0px dashed #ddd',
                            display: 'flex',
                            justifyContent: 'center',
                            height: '10%',
                            width: '100%',
                            alignItems: 'center',
                            fontSize: '1.5em',
                            color: 'white'
                        }}>
                           Onda Solidária
                        </div>
                        <div style={{
                            border: '0px dashed #ddd',
                            display: 'flex',
                            justifyContent: 'center',
                            height: '50%',
                            marginTop: 10,
                        }}>
                            <img style={{ width: '50%' }} className="React" src={logoReact} alt="logo" />
                        </div>
                    </>
                    :
                    <div >
                        SOS - Covid
                    </div>

            }

        </div>
    )
}

export default Panel