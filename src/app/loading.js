import Skeleton from "../../components/skeleton"
import style from '../../styles/skeletonlandingpage.module.css'

export default function Loading(){
    return (
        <div className={style.skeletonWrapper}>
            <div>
                <Skeleton></Skeleton>
            </div>
            <div>
                <Skeleton></Skeleton>
            </div>
            <div>
                <Skeleton></Skeleton>
            </div>
            <div>
                <Skeleton></Skeleton>
            </div>
            <div>
                <Skeleton></Skeleton>
            </div>
            <div>
                <Skeleton></Skeleton>
            </div>        
        </div>
    )
}