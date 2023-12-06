'use client'
import style from '../../../styles/style.module.css'
import ListSignIn from "../../../components/listsignin"
import Pinput from "../../../components/pinput"
import Input from "../../../components/input"
import Link from "next/link"
import DividerLogin from "../../../components/dividerlogin"
import { useState } from "react"

export default function Login(){    
    const [inputValueEmail, setInputValueEmail] = useState('')
    const [inputValuePassword, setInputValuePassword] = useState('')
    const [clickEmail, isClickEmail] = useState(true)
    const [clickPassword, isClickPassword] = useState(true)
    const isInputValueEmail = Boolean(inputValueEmail)
    const isInputValuePassword = Boolean(inputValuePassword)

    const handleOnChangeEmail = (e) =>{
        const value = e.target.value
        setInputValueEmail(value)
    }

    const handleOnChangePassword = (e) =>{
        const value = e.target.value
        setInputValuePassword(value)
    }

    const handleClickEmail = () => {
        if(isInputValueEmail){
            isClickEmail(false)
        }
        else{
            isClickEmail(!clickEmail);
        }
    }

    const handleClickPassword = () => {
        if(isInputValuePassword){
            isClickPassword(false)
        }
        else{
            isClickPassword(!clickPassword);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const data = {
            email: inputValueEmail,
            password: inputValuePassword
        }

        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const json = await response.json()
        console.log(json)      
    }


    return (
        <main>
            <div className={style.formWrapperReglog}>
                <form className={style.form} onSubmit={handleSubmit}>                    
                    <h3 className={style.titleLogin}><span>Welcome</span>, Sign in to Continue</h3>
                    <p className={style.textLogin}>We recommend using <b>github account</b> to sign in.</p>
                    <Pinput name="mail" status={clickEmail}></Pinput>
                    <Input type="email" name="mail" id="mail" placeholder="" change={handleOnChangeEmail} value={inputValueEmail} focus={handleClickEmail} blur={handleClickEmail}></Input>           
                    <Pinput name="password" status={clickPassword}></Pinput>
                    <Input type="password" name="password" id="password" placeholder="" change={handleOnChangePassword} value={inputValuePassword} focus={handleClickPassword} blur={handleClickPassword}></Input>
                    <Link className={style.reglogLink} href="/register">Dont have account? Register Now</Link>
                    <button className={style.loginButton} type="submit">Sign in</button>
                    <DividerLogin></DividerLogin>
                    <ul className={style.ulLogin}>
                        <ListSignIn login="google" text="Sign in with Google"></ListSignIn>
                        <ListSignIn login="discord" text="Sign in with Discord"></ListSignIn>
                    </ul>
                </form>
            </div>
        </main>
    )
}