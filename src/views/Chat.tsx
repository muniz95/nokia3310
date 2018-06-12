import * as React from "react";
import TopBar from "../components/TopBar";
import '../styles/Home.css';

class Chat extends React.Component {
    public render() {
        return (
            <div style={{ height: '100%' }}>
                <TopBar />
                <div className="home">
                    Chat View
                </div>
            </div>
        )
    }
}

export default Chat;
