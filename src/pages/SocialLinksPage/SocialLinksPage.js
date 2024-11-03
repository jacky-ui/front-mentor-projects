import useSetTitle from '../../utils/SetTitle';
import useSetBodyClass from '../../utils/SetBodyClass';
import avatar from '../../assets/images/avatar-jessica.jpeg';
import './SocialLinksPage.scss';

function SocialLinksPage() {
    useSetTitle('Front-End Mentor | Social Links Profile');
    useSetBodyClass('scBody');
    return(
        <article className='socialCard'>
            <img src={avatar} alt='___ profile avatar'/>
            <h1>Jessica Randall</h1>
            <p>London, United Kingdom</p>
            <div className='socialCard__links'>
                <a className='socialCard__links--style' href='www.google.com'>Github</a>
                <a className='socialCard__links--style' href='www.google.com'>LinkedIn</a>
                <a className='socialCard__links--style' href='www.google.com'>Frontend Mentor</a>
                <a className='socialCard__links--style' href='www.google.com'>Twitter</a>
                <a className='socialCard__links--style' href='www.google.com'>Instagram</a>
            </div>
        </article>
    )
};

export default SocialLinksPage;