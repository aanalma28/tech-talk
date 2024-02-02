'use client'
import style from '../../../../../styles/createpost.module.css'
import Input from "../../../../../components/input"
import Textarea from "../../../../../components/textarea"
import Icons from '../../../../../components/icons'
import { useEffect, useState } from 'react'

export default function Create(){
    useEffect(() => {
        const file = document.getElementById('file')
        const labelFile = document.getElementById('label_file')
        const imgView = document.getElementById('img-view')
        const textP = document.getElementById('text-p')
        const textH = document.getElementById('text-h')
        const img = document.getElementById('upload-img')           

        file.addEventListener('change', uploadImage)

        function uploadImage(){
            let imgLink = URL.createObjectURL(file.files[0])
            imgView.style.backgroundImage = `url(${imgLink})`
            textP.style.display = 'none'
            textH.style.display = 'none'
            img.style.display = 'none'
            imgView.style.border = 0
        }

        labelFile.addEventListener("dragover", (e) => {
            e.preventDefault()
        })

        labelFile.addEventListener("drop", (e) => {
            e.preventDefault()
            file.files = e.dataTransfer.files
            uploadImage()
        })
    })

    const [isData, setIsData] = useState({
        title: '',
        desc: '',        
    })

    const [isFile, setIsFile] = useState()

    const handleOnChangeTitle = (e) => {
        const input = e.target.value
        setIsData((prevData) => ({...prevData, title: input}))
    }

    const handleOnChangeDesc = (e) => {
        const input = e.target.value
        setIsData((prevData) => ({...prevData, desc: input}))
    }

    const handleOnChangeFile = (e) => {
        const selectedFile = e.target.files[0]
        setIsFile(selectedFile)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('title', isData.title)
        formData.append('desc', isData.desc)
        formData.append('file', isFile)

        console.log(...formData)

        try{
            const response = await fetch('/posts/create', {
                method: 'POST',
                body: formData
            })

            const json = await response.json()
            console.log(json)
        }catch(e){
            console.log(e)
        }
    }
    return (
        <>
            <h3>Create Your Posts</h3>
            <form onSubmit={handleSubmit} className={style.form}>                
                <Input change={handleOnChangeTitle} value={isData.title} page="posts" placeholder="Input Title"></Input>
                <Textarea change={handleOnChangeDesc} value={isData.desc} page="posts" placeholder="Input Description"></Textarea>
                <label for="file" id="label_file">
                    <input className={style.file} onChange={handleOnChangeFile} type="file" name="file" id="file" placeholder="Select a file" hidden></input>
                    <div className={style.text} id="img-view">
                        <Icons name="upload_file"></Icons>
                        <h4 id="text-h">Drag and drop or click here to upload image</h4>
                        <p id="text-p">Upload any images from desktop</p>
                    </div>
                </label>
                <button className={style.createButton} type="submit">Create</button>
            </form>
        </>
    )
}