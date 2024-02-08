'use client'
import style from '../../../styles/style.module.css'
import ListSignIn from "../../../components/listsignin"
import Pinput from "../../../components/pinput"
import Input from "../../../components/input"
import Link from "next/link"
import DividerLogin from "../../../components/dividerlogin"
import { useEffect, useState } from "react"
import Icons from '../../../components/icons'
import Images from '../../../components/imagesvg'


export default function Register(){
    const [inputValueUsername, setInputValueUsername] = useState('')
    const [inputValuePassword, setInputValuePassword] = useState('')
    const [inputValueMail, setInputValueMail] = useState('')

    const [clickUsername, isClickUsername] = useState(true)
    const [clickPassword, isClickPassword] = useState(true)
    const [clickMail, isClickMail] = useState(true)    

    const isInputValueUsername = Boolean(inputValueUsername)
    const isInputValuePassword = Boolean(inputValuePassword)
    const isInputValueMail = Boolean(inputValueMail)

    const [isShow, setIsShow] = useState(false)
    const [isSuccess, setIsSuccess] = useState({success: false, message: ''})
    const [imagePopUp, setImagePopUp] = useState('')

    useEffect(() => {
        const popup = document.getElementById('popup')
        const formWrapper = document.getElementById('form-wrapper')        
        if(isShow){
            popup.style.display = 'flex'
            formWrapper.style.opacity = '0.5'
            popup.style.backgroundColor = 'rgba(216, 216, 216, 0.5)'
            
        }
        else{
            popup.style.display = 'none'
            formWrapper.style.opacity = '1'                        
        }
    })

    // handle input form
    const handleOnChangeUsername = (e) =>{
        const value = e.target.value
        setInputValueUsername(value)
    }
    const handleOnChangePassword = (e) =>{
        const value = e.target.value
        setInputValuePassword(value)
    }
    const handleOnChangeMail= (e) => {
        const value = e.target.value
        setInputValueMail(value)
    }

    // handle click
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
    const handleClickMail = () => {
        if(isInputValueMail){
            isClickMail(false)
        }
        else{
            isClickMail(!clickMail)
        }
    }

    const handlerClose = () => {
        setIsShow(false)
        console.log(isShow)
    }

    // handle submit
    const handleSubmit = async (e) => {
        e.preventDefault()

        setImagePopUp('loading')
        setIsShow(true)
        setIsSuccess({message: 'Loading...'})        

        const data = {
            username : inputValueUsername,
            password : inputValuePassword,
            email : inputValueMail
        }

        try{
            const response = await fetch('/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            const json = await response.json()
            console.log(json)
            console.log(json.success)

            if(!json.success){
                setIsSuccess({
                    success: json.success,
                    message: json.message
                })
                setImagePopUp('fail')
            }else{
                setIsSuccess({
                    success: json.success,
                    message: json.message
                })
                setImagePopUp('success')
            }
        }
        catch(e){
            console.log(e)
            setIsSuccess({
                success: false,
                message: e
            })
            setImagePopUp('fail')
        }
        finally{
            // if(isSuccess.success){
            //     console.log('sukses')
            // }else{
            //     setImagePopUp('fail')
            // }                       
        }
    }

    return (
        <main className={style.mainReg}>
            <div className={style.formWrapperReglog} id="form-wrapper">
                <form className={style.form} onSubmit={handleSubmit}>
                    <h3 className={style.titleLogin}><span>First</span>, Please Fill Form Below</h3>
                    <p className={style.textLogin}>We recommend using <b>github account</b> to sign in.</p>
                    <Pinput name="username" status={clickUsername}></Pinput>
                    <Input page="register_login" type="text" name="username" id="username" placeholder="" change={handleOnChangeUsername} value={inputValueUsername} focus={handleClickUsername} blur={handleClickUsername} required></Input>                    
                    <Pinput name="mail" status={clickMail}></Pinput>
                    <Input page="register_login" type="email" name="mail" id="mail" placeholder="" change={handleOnChangeMail} value={inputValueMail} focus={handleClickMail} blur={handleClickMail} required></Input>           
                    <Pinput name="password" status={clickPassword}></Pinput>
                    <Input page="register_login" type="password" name="password" id="password" placeholder="" change={handleOnChangePassword} value={inputValuePassword} focus={handleClickPassword} blur={handleClickPassword} required></Input>                    
                    <Link className={style.reglogLink} href={`/login`} prefetch>Already Have account? Sign in Now</Link>
                    <button className={style.loginButton} type="submit">Register</button>
                    <DividerLogin></DividerLogin>
                    <ul className={style.ulLogin}>
                        <ListSignIn login="google" text="Continue with Google"></ListSignIn>
                        <ListSignIn login="discord" text="Continue with Discord"></ListSignIn>
                    </ul>
                </form>
            </div>            
            <div className={style.popupWrapper} id="popup">
                <div className={style.popupContainer}>
                    {
                        imagePopUp == 'loading' ? <Icons name="loading"></Icons> : 
                        imagePopUp == 'success' ?  <Images name="checklist"></Images>: 
                        imagePopUp == 'fail' ? <Images name="fail"></Images> : 
                        ''
                    }                   
                    <h3>{isSuccess.message}</h3>                    
                    <div className={style.buttonWrapper}>
                        {                            
                            imagePopUp == 'success' ?  <Link href='/login'>Login</Link> :
                            ''
                        }
                        {
                            imagePopUp == 'loading' ? '' :
                            <button className={style.btnClose} onClick={handlerClose}>Close</button>  
                        }
                    </div>              
                </div>
            </div>            
        </main>
    )
}