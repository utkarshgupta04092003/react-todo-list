import { Link } from "react-router-dom";

function Header(){
    return(
        <>
        <h1>Header</h1>
        <ul>
            <li>
                <Link to="alltasks">All Tasks</Link>
            </li>
            <li>
                <Link to="add-task">Create Task</Link>
            </li>
            <li>
                <Link to="update-task">Update  Tasks</Link>
            </li>
        </ul>

        <br/>
        </>
    )
}
export default Header;