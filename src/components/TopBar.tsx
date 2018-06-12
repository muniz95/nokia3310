import * as React from 'react';
import '../styles/TopBar.css';

class TopBar extends React.Component {
    public render() {
        const today = new Date(Date.now());
        return (
            <div className="top-bar">
                <div>Lock</div>
                <div>{`${today.toLocaleTimeString()}`}</div>
            </div>
        )
    }
}

export default TopBar;
