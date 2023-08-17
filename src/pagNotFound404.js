import { Link } from "react-router-dom"

function PageNotFound(){
    return (
        <>
        
        <div id="nopg-container">
            <div id="go-home">
                <Link to='/'><input type="button" value="Go Back Home" /></Link>
            </div>
        </div>
        
        </>
    )
}


export default PageNotFound