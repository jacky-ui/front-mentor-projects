import SearchBar from '../SearchBar/SearchBar.js';
import './IpHeader.scss';

function IpHeader() {
    return(
        <header className='header'>
            <h1 className='header__title'>IP Address Tracker</h1>
            <SearchBar />
        </header>
    )
};

export default IpHeader;