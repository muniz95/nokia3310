import * as React from "react";
import TopBar from "../components/TopBar";
import '../styles/Home.css';

class Messages extends React.Component {
    public render() {
        return (
            <div style={{ height: '100%' }}>
                <TopBar />
                <div className="home">
                    Messages View
                </div>
            </div>
        )
    }
}

export default Messages;
