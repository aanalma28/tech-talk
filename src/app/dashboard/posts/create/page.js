'use client'
import style from '../../../../../styles/createpost.module.css'
import Input from "../../../../../components/input"
import Textarea from "../../../../../components/textarea"
import Icons from '../../../../../components/icons'
import { useEffect } from 'react'

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
    const handleSubmit = async (e) => {
        e.preventDefault()


    }
    return (
        <>
            <h3>Create Your Posts</h3>
            <form onSubmit={handleSubmit} className={style.form}>                
                <Input page="posts" placeholder="Input Title"></Input>
                <Textarea page="posts" placeholder="Input Description"></Textarea>
                <label for="file" id="label_file">
                    <input className={style.file} type="file" name="file" id="file" placeholder="Select a file" hidden></input>
                    <div className={style.text} id="img-view">
                        <Icons name="upload_file"></Icons>
                        <h4 id="text-h">Drag and drop or click here to upload image</h4>
                        <p id="text-p">Upload any images from desktop</p>
                    </div>
                </label>
            </form>
        </>
    )
}