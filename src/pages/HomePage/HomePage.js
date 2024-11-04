import useSetBodyClass from '../../utils/SetBodyClass';
import { homepageProjects } from '../../assets/constants/constants';
import './HomePage.scss';
import ImageLink from '../../components/ImageLink/ImageLink';

function HomePage() {
    useSetBodyClass('home')
    return(
        <>
            <h1>Home</h1>
            <section className='homeContent'>
                {homepageProjects.map((project) => (
                    <article key={project.prjtLevel}>
                        <h2>{project.prjtLevel}</h2>
                        <span className='homeContent__underline'></span>
                        <div className='homeContent__projects'>
                            {project.prjt.map((prjtContent) => (
                                <ImageLink 
                                    key={prjtContent.prjtPath}
                                    linkClass="projects"
                                    linkPath={prjtContent.prjtPath}
                                    image={prjtContent.prjtImage}
                                    description={prjtContent.prjtDescrip}
                                />
                            ))}
                        </div>
                    </article>
                ))}
            </section>
        </>
    )
}

export default HomePage;