import style from '../../../styles/dashboard.module.css'
import Card from '../../../components/card'

export default function Dashboard(){
    return(
        <>
            <h3>Dashboard</h3>
            <h3>Welcome, <span>Name</span></h3>
                <div className={style.mainContentWrapper}>
                    <h5>Welcome to Beta Tester</h5>
                    <p>Congratulation for you about choosen Beta Tester Person. 
                        Hopefully you can try all features in this website and dont forget to 
                        leave your feedbacks.
                    </p>
                </div>
            <div className={style.statusWrapper}>
                <Card title="Total Stars" icon_name="star" position="dashboard"></Card>
                <Card title="Total Comments" icon_name="comments" position="dashboard"></Card>
                <Card title="Total Share" icon_name="share" position="dashboard"></Card>
            </div>
        </>
    )
}