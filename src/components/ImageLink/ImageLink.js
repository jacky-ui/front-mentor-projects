import { Link } from "react-router-dom";

function ImageLink({ linkClass, linkPath, image, description }) {
    return(
        <Link className={linkClass} to={linkPath}>
            <img src={image} alt=''/>
            {description.map((description) => (
                <figcaption className="projects__caption" key={description.name}>
                    <h3>{description.name}</h3>
                    <p>{description.descrption}</p>
                    <div className='projects__tools'>
                        {description.tools.map((tool) => (
                            <p key={tool}>{tool}</p>
                        ))}
                    </div>
                </figcaption>
            ))}
        </Link>
    )
};

export default ImageLink;