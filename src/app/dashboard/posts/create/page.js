'use client'
import style from '../../../../../styles/createpost.module.css'
import style2 from '../../../../../styles/popup.module.css'
import Input from "../../../../../components/input"
import Textarea from "../../../../../components/textarea"
import Icons from '../../../../../components/icons'
import Images from '../../../../../components/imagesvg'
import { useEffect, useState } from 'react'

export default function Create(){
    const [isFile, setIsFile] = useState()
    const [isShow, setIsShow] = useState(false)
    const [isSuccess, setIsSuccess] = useState({success: false, message: ''})
    const [imagePopUp, setImagePopUp] = useState('')
    
    useEffect(() => {
        const file = document.getElementById('file')
        const labelFile = document.getElementById('label_file')
        const imgView = document.getElementById('img-view')
        const textP = document.getElementById('text-p')
        const textH = document.getElementById('text-h')
        const img = document.getElementById('upload-img')
        
        const popup = document.getElementById('popup')
        const contentWrapper = document.getElementById('content-wrapper')        
        const sidebar = document.getElementById('sidebar')

        file.addEventListener('change', uploadImage)

        window.addEventListener('resize', () => {
            if(window.innerWidth < 1000){
                contentWrapper.style.paddingLeft = '15px'
            }else{
                contentWrapper.style.paddingLeft = '22%'
            }
        })

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

        // popup        
        if(isShow){
            popup.style.display = 'flex'                             
            contentWrapper.style.opacity = '0.5'
            sidebar.style.opacity = '0.5'
            popup.style.backgroundColor = 'rgba(216, 216, 216, 0.5)'
            
        }
        else{
            popup.style.display = 'none'
            contentWrapper.style.opacity = '1'
            sidebar.style.opacity = '1'                        
        }
    })

    const [isData, setIsData] = useState({
        title: '',
        desc: '',        
    })    

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

    const handlerClose = () => {
        setIsShow(false)
        console.log(isShow)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        setImagePopUp('loading')
        setIsShow(true)
        setIsSuccess({message: 'Loading...'})

        const formData = new FormData()
        formData.append('title', isData.title)
        formData.append('description', isData.desc)
        formData.append('file', isFile)

        console.log(...formData)

        try{
            const response = await fetch('/posts/create', {
                method: 'POST',
                body: formData
            })

            const json = await response.json()
            console.log(json)
            console.log(json.success)                    
            console.log(json.message)

            await json.success ? setImagePopUp('success') : setImagePopUp('fail')
            setIsSuccess({
                success: json.success,
                message: json.message
            })

            // if(!json.success){
            //     setIsSuccess({
            //         success: json.success,
            //         message: json.message
            //     })
            //     setImagePopUp('fail')
            // }else{
            //     setIsSuccess({
            //         success: json.success,
            //         message: json.message
            //     })
            //     setImagePopUp('success')
            // }                
        }catch(e){
            console.log(e)
            setIsSuccess({
                success: false,
                message: e
            })
            setImagePopUp('fail')
        }finally{

        }
    }
    return (
        <>
            <div id="content-wrapper" className={style.contentWrapper}>
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
            </div>
            <div className={style2.popupWrapper} id="popup">
                <div className={style2.popupContainer}>
                    {
                        imagePopUp == 'loading' ? <Icons name="loading"></Icons> : 
                        imagePopUp == 'success' ?  <Images name="checklist"></Images>: 
                        imagePopUp == 'fail' ? <Images name="fail"></Images> : 
                        ''
                    }
                    <div className={style2.message}>
                        <h3>{isSuccess.message}</h3>                                        
                    </div>                   
                    <div className={style2.buttonWrapper}>                        
                        {
                            imagePopUp == 'loading' ? '' :
                            <button className={style2.btnClose} onClick={handlerClose}>Close</button>  
                        }
                    </div>              
                </div>
            </div>
        </>
    )
}