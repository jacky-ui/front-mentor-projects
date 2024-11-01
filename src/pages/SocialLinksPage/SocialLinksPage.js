import useSetTitle from '../../utils/SetTitle';
import avatar from '../../assets/images/avatar-jessica.jpeg';
import './SocialLinksPage.scss';

function SocialLinksPage() {
    useSetTitle('Front-End Mentor | Social Links Profile');
    return(
        <article className='socialCard'>
            <img src={avatar} alt='___ profile avatar'/>
            <h1>Jessica Randall</h1>
            <p>London, United Kingdom</p>
            <div className='socialCard__links'>
                <a href='www.google.com'>Github</a>
                <a href='www.google.com'>LinkedIn</a>
                <a href='www.google.com'>Frontend Mentor</a>
                <a href='www.google.com'>Twitter</a>
                <a href='www.google.com'>Instagram</a>
            </div>
        </article>
    )
};

export default SocialLinksPage;