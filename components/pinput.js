import style from '../styles/style.module.css'

export default function Pinput({name, status}){
    const paragraph = [
        {
            id: "username",
            p: <p id="paragraph" className={!status ? style.pTrue : style.pFalse}>Input Username</p>
        },
        {
            id: "password",
            p: <p id="paragraph" className={!status ? style.pTrue : style.pFalse}>Input Password</p>
        },
        {
            id: "mail",
            p: <p id="paragraph" className={!status ? style.pTrue : style.pFalse}>Input Email</p>
        }
    ]
    
    const findName = paragraph.find(({id}) => id === name)

    if(findName){
        return findName.p
    }
    else{
        return null
    }
}