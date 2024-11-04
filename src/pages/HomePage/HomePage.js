import useSetBodyClass from '../../utils/SetBodyClass';
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
                    <div>

                    </div>
                </article>
            </section>
        </>
    )
}

export default HomePage;