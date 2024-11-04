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
                        <Link className='projects' to='/social-links'>
                            <img src={socialLinks} alt=''/>
                            <figcaption className='projects__caption'>
                                <h3>Social Links Profile</h3>
                                <p>Challenge to build social link-sharing profile</p>
                                <div className='projects__tools'>
                                    <p>#react</p>
                                    <p>#scss</p>
                                </div>
                            </figcaption>
                        </Link>
                        <Link to='/social-links'>
                            <img src={socialLinks} alt=''/>
                        </Link>
                        <Link to='/social-links'>
                            <img src={socialLinks} alt=''/>
                        </Link>
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