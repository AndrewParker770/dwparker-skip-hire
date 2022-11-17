import errorCSS from '../css/error.module.css'
import ScrollToTopOnMount from '../ScrollToTopOnMount';

import {Link} from "react-router-dom";

function Error(){
    return(
        <div className={errorCSS.errorOuterBody}>
            <ScrollToTopOnMount/>
            <div className={errorCSS.errorBody}>
                <h1> Error 404: Page or Document not found</h1>
                <p>This could be caused by the following: </p>
                <ul>
                    <li>The page or document is temporarily not available</li>
                    <li>The page or document was renamed and no longer exists</li>
                    <li>The bookmark being used is outdated</li>
                    <li>The URL was entered incorrectly</li>
                </ul>
                <p>Please navigate to <Link to="/" content="Our Homepage" className={errorCSS.homeLink}>Our Homepage</Link>.</p>
            </div>
        </div>
    );
}

export default Error;