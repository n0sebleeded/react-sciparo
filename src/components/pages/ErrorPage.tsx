import "../components-styles/errorPage.css"
/*import { Link } from "react-router-dom";*/
function ErrorPage() {
    return (
        <div className="error_page">
            <p className="error_page_text">PAGE NOT FOUND </p>
            {/*<Link to="/" className="error_link">Back to the main page</Link>*/}
        </div>
    );
}

export default ErrorPage;