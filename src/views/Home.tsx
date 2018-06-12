import * as React from "react";
import TopBar from "../components/TopBar";
import '../styles/Home.css';

class Home extends React.Component {
    public render() {
        return (
            <div style={{height: '100%'}}>
                <TopBar />
                <div className="home">
                    Home
                </div>
            </div>
        )
    }
}

export default Home;
