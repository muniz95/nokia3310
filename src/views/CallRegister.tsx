import * as React from "react";
import TopBar from "../components/TopBar";
import '../styles/Home.css';

class CallRegister extends React.Component {
    public render() {
        return (
            <div style={{ height: '100%' }}>
                <TopBar />
                <div className="home">
                    Call Register View
                </div>
            </div>
        )
    }
}

export default CallRegister;
