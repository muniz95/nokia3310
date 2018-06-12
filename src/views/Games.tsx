import * as React from "react";
import TopBar from "../components/TopBar";
import '../styles/Home.css';

class Games extends React.Component {
    public render() {
        return (
            <div style={{ height: '100%' }}>
                <TopBar />
                <div className="home">
                    Games
                </div>
            </div>
        )
    }
}

export default Games;
