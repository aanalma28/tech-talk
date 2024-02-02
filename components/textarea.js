import style from '../styles/createpost.module.css'

export default function Textarea(props){
    const textarea = [
        {
            page: "posts",
            element: 
                <textarea
                    name={props.name}
                    className={style.description}
                    id={props.id}
                    placeholder={props.placeholder}
                    onChange={props.change}
                    value={props.value}
                    required
                />
        }
    ]

    const findPage = textarea.find(({page}) => page === props.page)

    if(findPage){
        return findPage.element
    }
    else{
        return null
    }
}