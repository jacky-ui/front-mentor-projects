import './IpLocationInfo.scss';

function IpLocationInfo({ title, locationInfo, classProp }) {
    return(
        <div className={classProp}>
            <h2 className='locationBar__title'>{title}</h2>
            <p className='locationBar__text'>{locationInfo}</p>
        </div>
    )
};

export default IpLocationInfo;