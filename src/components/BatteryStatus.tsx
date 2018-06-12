import * as React from 'react';
import '../styles/BatteryStatus.css';

class BatteryStatus extends React.Component {
    public render() {
        return (
            <div className="battery-status">
                <div className="status-bar">.....</div><br/>
                <div className="status-bar">....</div><br/>
                <div className="status-bar">...</div><br/>
                <div className="status-bar">..</div><br/>
                <div className="status-bar">.</div><br/>
                B
            </div>
        );
    }
}

export default BatteryStatus;