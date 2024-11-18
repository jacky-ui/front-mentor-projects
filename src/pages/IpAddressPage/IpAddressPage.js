import axios from 'axios';
import { useState } from 'react';
import { address } from '../../assets/constants/constants.js';
import useSetBodyClass from '../../utils/SetBodyClass';
import useSetTitle from '../../utils/SetTitle';
import IpHeader from '../../components/IpHeader/IpHeader.js';
import IpLocationBar from '../../components/IpLocationBar/IpLocationBar.js';
import Map from '../../components/Map/Map.js';
import './IpAddressPage.scss';

function IpAddressPage() {
    useSetBodyClass('ipBody');
    useSetTitle('Frontend Mentor | IP Address Tracker');
    const [addressData, setAddressData] = useState(address); 

    const API_WEBSITE = `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_API_KEY}`;

    const handleSubmitIp = ((ipvalue) => {
        axios
        .get(`${API_WEBSITE}&ipAddress=${ipvalue}`)
        .then((response) => {
            return setAddressData(response.data);
        })
    });

    return (
        <>
            <IpHeader 
                submitFunction={handleSubmitIp}
            />
            <IpLocationBar 
                addressInfo={addressData}
            />
            <Map 
                latLong={addressData}
            />
        </>
  );
};


export default IpAddressPage;