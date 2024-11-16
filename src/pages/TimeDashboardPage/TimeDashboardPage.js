import setBodyClass from '../../utils/SetBodyClass';
import setTitle from '../../utils/SetTitle';
import avatarProfile from '../../assets/images/image-jeremy.png';
import ellipsis from '../../assets/images/icon-ellipsis.svg';
import work from '../../assets/images/icon-work.svg';
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
                        <button className='notActive card__title' type='button' aria-label='Click here to view daily numbers'>Daily</button>
                        <button className='active card__title' type='button' aria-label='Click here to view weekly numbers'>Weekly</button>
                        <button className='notActive card__title' type='button' aria-label='Click here to view monthly numbers'>Monthly</button>
                    </div>
                </article>
                <section>
                <article className='dashboard__secondaryCard'>
                    <div className='top'>
                        <img  src={work} alt=''/>
                    </div>
                    <div className='bottom'>
                        <div>
                            <div className='dashboard__secondaryCard--title'>
                                <h2 className='card__title'>Work</h2>
                                <img src={ellipsis} alt=''/>
                            </div>
                            <div className='dashboard__secondaryCard--content'>
                                <span>32hrs</span>
                                <span>Last Week - 36hrs</span>
                            </div>
                        </div>
                    </div>
                </article>
                <article className='dashboard__secondaryCard'>
                    <div className='top'>
                        <img  src={work} alt=''/>
                    </div>
                    <div className='bottom'>
                        <div>
                            <div className='dashboard__secondaryCard--title'>
                                <h2 className='card__title'>Work</h2>
                                <img src={ellipsis} alt=''/>
                            </div>
                            <div className='dashboard__secondaryCard--content'>
                                <span>32hrs</span>
                                <span>Last Week - 36hrs</span>
                            </div>
                        </div>
                    </div>
                </article>
                <article className='dashboard__secondaryCard'>
                    <div className='top'>
                        <img  src={work} alt=''/>
                    </div>
                    <div className='bottom'>
                        <div>
                            <div className='dashboard__secondaryCard--title'>
                                <h2 className='card__title'>Work</h2>
                                <img src={ellipsis} alt=''/>
                            </div>
                            <div className='dashboard__secondaryCard--content'>
                                <span>32hrs</span>
                                <span>Last Week - 36hrs</span>
                            </div>
                        </div>
                    </div>
                </article>
                <article className='dashboard__secondaryCard'>
                    <div className='top'>
                        <img  src={work} alt=''/>
                    </div>
                    <div className='bottom'>
                        <div>
                            <div className='dashboard__secondaryCard--title'>
                                <h2 className='card__title'>Work</h2>
                                <img src={ellipsis} alt=''/>
                            </div>
                            <div className='dashboard__secondaryCard--content'>
                                <span>32hrs</span>
                                <span>Last Week - 36hrs</span>
                            </div>
                        </div>
                    </div>
                </article>
                <article className='dashboard__secondaryCard'>
                    <div className='top'>
                        <img  src={work} alt=''/>
                    </div>
                    <div className='bottom'>
                        <div>
                            <div className='dashboard__secondaryCard--title'>
                                <h2 className='card__title'>Work</h2>
                                <img src={ellipsis} alt=''/>
                            </div>
                            <div className='dashboard__secondaryCard--content'>
                                <span>32hrs</span>
                                <span>Last Week - 36hrs</span>
                            </div>
                        </div>
                    </div>
                </article>
                <article className='dashboard__secondaryCard'>
                    <div className='top'>
                        <img  src={work} alt=''/>
                    </div>
                    <div className='bottom'>
                        <div>
                            <div className='dashboard__secondaryCard--title'>
                                <h2 className='card__title'>Work</h2>
                                <img src={ellipsis} alt=''/>
                            </div>
                            <div className='dashboard__secondaryCard--content'>
                                <span>32hrs</span>
                                <span>Last Week - 36hrs</span>
                            </div>
                        </div>
                    </div>
                </article>
                </section>
            </section>
        </main>
    );
};

export default TimeDashboardPage;