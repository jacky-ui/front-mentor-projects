import { Link } from 'react-router-dom';
import useSetBodyClass from '../../utils/SetBodyClass';
import socialLinks from '../../assets/images/social-links.png';
import './HomePage.scss';

function HomePage() {
    useSetBodyClass('home')
    return(
        <>
            <h1>Home</h1>
            <section className='homeContent'>
                <article>
                    <h2>NEWBIE</h2>
                    <span className='homeContent__underline'></span>
                    <div className='homeContent__projects'>
                        <Link to='/social-links'>
                            <img src={socialLinks} alt=''/>
                        </Link>
                    </div>
                </article>
            </section>
        </>
    )
}

export default HomePage;