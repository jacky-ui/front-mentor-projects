import useSetBodyClass from '../../utils/SetBodyClass';
import { homepageProjects } from '../../assets/constants/constants';
import Divider from '../../components/Divider/Divider';
import ImageLink from '../../components/ImageLink/ImageLink';
import './HomePage.scss';

function HomePage() {
    useSetBodyClass('home')
    return(
        <>
            <h1>Home</h1>
            <section className='homeContent'>
                {homepageProjects.map((project) => (
                    <article key={project.prjtLevel}>
                        <h2>{project.prjtLevel}</h2>
                        <Divider spanClass='homeContent__underline' />
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