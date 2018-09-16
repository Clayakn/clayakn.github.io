import React from 'react';
import { Link } from 'react-router-dom';


export default function Nav() {
    return (
        <React.Fragment>
            <div className="nav_container">
                <navigation >
                    <h2>Andrew 'Clayakn' Nam</h2>
                    <Link className="nav_link" to='/'>Home</Link>
                    <Link className="nav_link" to='/webProjects'>Web Projects</Link>
                </navigation>
            </div>
        </React.Fragment>
    )
}