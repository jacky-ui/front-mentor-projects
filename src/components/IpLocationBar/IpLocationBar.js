import IpLocationInfo from '../IpLocationInfo/IpLocationInfo';
import './IpLocationBar.scss';

function IpLocationBar({ addressInfo }) {
    return(
            <section className='locationBar'>
                <IpLocationInfo 
                    key={addressInfo.ip}
                    classProp='padding-border-right'
                    title='IP ADDRESS'
                    locationInfo={addressInfo.ip}
                />
                <IpLocationInfo 
                    key={addressInfo.location.region}
                    classProp='padding-border-middle'
                    title='LOCATION'
                    locationInfo={`${addressInfo.location.region}, ${addressInfo.location.city}`}
                />  
                <IpLocationInfo 
                    key={addressInfo.location.timezone}
                    classProp='padding-border-middle'
                    title='TIMEZONE'
                    locationInfo={addressInfo.location.timezone}
                />  
                <IpLocationInfo 
                    key={addressInfo.isp}
                    classProp='padding-all'
                    title='ISP'
                    locationInfo={addressInfo.isp}
                />                                             
                                         
            </section>
    )
};

export default IpLocationBar;