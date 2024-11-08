import useSetTitle from '../../utils/SetTitle';
import useSetBodyClass from '../../utils/SetBodyClass';
import { socialProfileContent } from '../../assets/constants/constants';
import './SocialLinksPage.scss';
import Link from '../../components/Link/Link';

function SocialLinksPage() {
    useSetTitle('Frontend Mentor | Social Links Profile');
    useSetBodyClass('scBody');
    return(
        <main>
            {socialProfileContent.map((content) => (
                <article className='socialCard' key={content.name}>
                    <img src={content.profile} alt={`${content.name} profile avatar`}/>
                    <h1>{content.name}</h1>
                    <p className='socialCard__text'>{content.location}</p>
                    <p className='socialCard__descrip'>{content.description}</p>
                    <div className='socialCard__links'>
                        <ul>
                            {content.links.map((link) => (
                                <li key={link.anchorName}>
                                    <Link linkClass='socialCard__links--style' linkName={link.anchorName} linkHref={link.anchorRef} key={link.anchorName} ariaLabel={link.ariaLabel}/>
                                </li>
                            ))}
                        </ul>
                    </div>
                </article>
            ))}
        </main>
    )
};

export default SocialLinksPage;