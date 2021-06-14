import React, {useRef, useState} from 'react'
import {Form, Button, Card, Alert} from 'react-bootstrap'
import {useAuth} from './contexts/AuthContext'

export default function SProfile(){
    const [error,setError] = useState("")
    const {logout,currentUser} = useAuth()
    async function Logout(){
        setError('')
        try{
            await logout()
        }catch{setError('Falha ao desconectar')}
    }

    function booleana(){
        if (currentUser (currentUser.email)){
            return true
        }else return true
    }
    return (
        <ionCard>
            <Card.Body>
                <ionCardHeader><ion-card-title>Perfil Conectado</ion-card-title></ionCardHeader>
                <ion-card-content>Email:{currentUser && (currentUser.email)}</ion-card-content>
                {error && <Alert variant="danger">{error}</Alert>}
                <ion-Button disabled = {booleana}  onClick ={logout}>Sair</ion-Button>
            </Card.Body>
        </ionCard>
    )
}