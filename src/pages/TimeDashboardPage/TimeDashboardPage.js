import setBodyClass from '../../utils/SetBodyClass';
import setTitle from '../../utils/SetTitle';
import avatarProfile from '../../assets/images/image-jeremy.png';
import './TimeDashboardPage.scss';

function TimeDashboardPage() {
    setBodyClass('tdBody');
    setTitle('Frontend Mentor | Time Dashboard');
    return(
        <main>
            <section className='dashboard'>
                <article className='dashboard__mainCard'>
                    <div className='top__card'>
                        <img src={avatarProfile} alt=''/>
                        <h1><span>Report for</span><br aria-hidden='true'/> Jeremy Robson</h1>
                    </div>
                    <div className='bottom__card'>
                        <button className='notActive card__title'>Daily</button>
                        <button className='active card__title'>Weekly</button>
                        <button className='notActive card__title'>Monthly</button>
                    </div>
                </article>
            </section>
        </main>
    );
};

export default TimeDashboardPage;