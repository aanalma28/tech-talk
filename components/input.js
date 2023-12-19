import style from '../styles/style.module.css'
import style2 from '../styles/createpost.module.css'

export default function Input(props){
    const input = [
        {
            page: 'register_login',            
            element: 
                <input 
                    className={style.input} 
                    type={props.type} 
                    name={props.name} 
                    id={props.id} 
                    placeholder={props.placeholder} 
                    onFocus={props.focus} 
                    onBlur={props.blur}
                    value={props.value}
                    onChange={props.change}
                    required
                />
        },
        {
            page: 'posts',            
            element: 
                <input
                    className={style2.title}
                    type={props.type}
                    name={props.name}
                    id={props.id}
                    placeholder={props.placeholder}                    
                    value={props.value}
                    onChange={props.change}
                    required
                />
        },        
    ]

    const findPage = input.find(({page}) => page === props.page)

    if(findPage){
        return findPage.element
    }
    else{
        return null
    }
}