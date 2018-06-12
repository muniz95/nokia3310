import * as React from "react";
import TopBar from "../components/TopBar";
import '../styles/Home.css';

class SimServices extends React.Component {
    public render() {
        return (
            <div style={{ height: '100%' }}>
                <TopBar />
                <div className="home">
                    SIM Services View
                </div>
            </div>
        )
    }
}

export default SimServices;
