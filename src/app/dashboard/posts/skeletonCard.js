import Skeleton from "../../../../components/skeleton"
import style from '../../../../styles/skeleton.module.css'

export default function SkeletonCard(){
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