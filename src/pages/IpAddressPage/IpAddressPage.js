import useSetBodyClass from '../../utils/SetBodyClass';
import useSetTitle from '../../utils/SetTitle';
import './IpAddressPage.scss';

function IpAddressPage() {
    useSetBodyClass('ipBody');
    useSetTitle('Frontend Mentor | IP Address Tracker');
    return(
        <>
            <h1>Helo World</h1>
        </>
    )
};

export default IpAddressPage;