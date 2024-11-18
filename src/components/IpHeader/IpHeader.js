import SearchBar from '../SearchBar/SearchBar.js';
import './IpHeader.scss';

function IpHeader({ submitFunction }) {
    return(
        <header className='header'>
            <h1 className='header__title'>IP Address Tracker</h1>
            <SearchBar 
                submitFunction={submitFunction}
            />
        </header>
    )
};

export default IpHeader;