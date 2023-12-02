'use client'
import style from '../../../styles/style.module.css'
import ListSignIn from "../../../components/listsignin"
import Pinput from "../../../components/pinput"
import Input from "../../../components/input"
import Link from "next/link"
import DividerLogin from "../../../components/dividerlogin"
import { useState } from "react"

export default function Login(){
    const [inputValueUsername, setInputValueUsername] = useState('')
    const [inputValuePassword, setInputValuePassword] = useState('')
    const [clickUsername, isClickUsername] = useState(true)
    const [clickPassword, isClickPassword] = useState(true)
    const isInputValueUsername = Boolean(inputValueUsername)
    const isInputValuePassword = Boolean(inputValuePassword)

    const handleOnChangeUsername = (e) =>{
        const value = e.target.value
        setInputValueUsername(value)
    }

    const handleOnChangePassword = (e) =>{
        const value = e.target.value
        setInputValuePassword(value)
    }

    const handleClickUsername = () => {
        if(isInputValueUsername){
            isClickUsername(false)
        }
        else{
            isClickUsername(!clickUsername);
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


    return (
        <main>
            <div className={style.formWrapperReglog}>
                <form className={style.form}>                    
                    <h3 className={style.titleLogin}><span>Welcome</span>, Sign in to Continue</h3>
                    <p className={style.textLogin}>We recommend using <b>github account</b> to sign in.</p>
                    <Pinput name="username" status={clickUsername}></Pinput>
                    <Input type="text" name="username" id="username" placeholder="" change={handleOnChangeUsername} value={inputValueUsername} focus={handleClickUsername} blur={handleClickUsername}></Input>           
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