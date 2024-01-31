'use client'
import style from '../../../../../styles/createpost.module.css'
import Input from "../../../../../components/input"
import Textarea from "../../../../../components/textarea"

export default function Create(){
    const handleSubmit = async (e) => {
        e.preventDefault()


    }
    return (
        <>
            <h3>Create Your Posts</h3>
            <form onSubmit={handleSubmit} className={style.form}>                
                <Input page="posts" placeholder="Input Title"></Input>
                <Textarea page="posts" placeholder="Input Description"></Textarea>
                <input className={style.file} type="file" placeholder="Select a file"></input>            
            </form>
        </>
    )
}