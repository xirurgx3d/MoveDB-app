import React from 'react';
import Nav from './Nav';

const Headers:React.FC = (props) => (
    <header className="ht-header">
            <div className="container">
                <Nav />
                {props.children}
            </div>
    </header>
)
export default Headers