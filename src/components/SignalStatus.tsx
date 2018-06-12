import * as React from 'react';
import "../styles/SignalStatus.css";

class SignalStatus extends React.Component {
    /**
     * render
     */
    public render() {
        return (
            <div className="signal-status">
                <div className="status-bar">.....</div><br />
                <div className="status-bar">....</div><br />
                <div className="status-bar">...</div><br />
                <div className="status-bar">..</div><br />
                <div className="status-bar">.</div><br />
                S
            </div>
        )
    }
}

export default SignalStatus;
