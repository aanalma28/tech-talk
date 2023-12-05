import style from '../styles/style.module.css'

export default function Input(props){
    const input = [
        {
            id: 'username',
            elements: 
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
            id: 'password',
            elements: 
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
            id: 'mail',
            elements: 
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
        }
    ]

    const findName = input.find(({id}) => id === props.id)

    if(findName){
        return findName.elements
    }
    else{
        return null
    }
}