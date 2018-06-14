import * as React from 'react';
import '../styles/TopBar.scss';

interface IState {
    date: Date;
};

class TopBar extends React.Component<{}, IState> {
    public timerID: NodeJS.Timer;

    constructor(props: {}) {
        super(props);
        this.state = { date: new Date() };
    }

    public componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    public componentWillUnmount() {
        clearInterval(this.timerID);
    }

    public tick() {
        this.setState({
            date: new Date()
        });
    }
    public render() {
        const { date } = this.state;
        return (
            <div className="top-bar">
                <div>Lock</div>
                <div>{`${date.toLocaleTimeString().slice(0, 5)}`}</div>
            </div>
        )
    }
}

export default TopBar;
