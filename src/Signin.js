import React, {useRef, useState} from 'react'
import {Form, Button, Card, Alert} from 'react-bootstrap'
import {useAuth} from './contexts/AuthContext'

export default function Signin() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const {signin} = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e){
        e.preventDefault()
        try{
            setError("")
            setLoading(true)
            await signin(emailRef.current.value, passwordRef.current.value)
        }catch{
            setError("Erro ao entrar na conta")
        }
        setLoading(false)
    }

    return(
        <ionCard>
            <Card.Body>
            <ionCardHeader><ion-card-title>Entrar Em Uma Conta Existente</ion-card-title></ionCardHeader>
                {error && <Alert variant="danger">{error}</Alert>}
                <ion-card-content>
                <Form onSubmit = {handleSubmit}>
                    <ion-item>
                        <ion-label>Email</ion-label>
                        <ion-input type = "email" placeholder="teste42@teste.com" ref = {emailRef} required></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label>Senha</ion-label>
                        <ion-input type = "password" ref = {passwordRef} required></ion-input>
                    </ion-item>
                    <ion-Button disabled = {loading} type = "sumit"> Entrar</ion-Button>
                </Form>
                </ion-card-content>
            </Card.Body>
        </ionCard>
    )}