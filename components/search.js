import style from '../styles/dashboard.module.css'

export default function Search({page}){
    return (
        <div className={style.search} id="search">
            {page ? (
                <input type="text" placeholder="Search Posts"></input>
            ) : (
                ""
            )}
        </div>
    )
}