import useSetBodyClass from '../../utils/SetBodyClass';
import useSetTitle from '../../utils/SetTitle';
import IpHeader from '../../components/IpHeader/IpHeader.js';
import './IpAddressPage.scss';

function IpAddressPage() {
    useSetBodyClass('ipBody');
    useSetTitle('Frontend Mentor | IP Address Tracker');
    return(
        <>
            <IpHeader />
        </>
    )
};

export default IpAddressPage;