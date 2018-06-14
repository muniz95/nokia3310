import * as React from "react";
import Hammer from 'react-hammerjs';
import '../styles/Home.css';

interface IProps {
    history: {
        push: (obj: object) => {};
    };
}

interface IState {
    menus: Array<{
        path: string,
        title: string
    }>;
    position: number;
}

class Home extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            menus: [
                {path: "/phonebook", title: "Phone Book"},
                {path: "/messages", title: "Messages"},
                {path: "/chat", title: "Chat"},
                {path: "/callregister", title: "Call Register"},
                {path: "/tones", title: "Tones"},
                {path: "/settings", title: "Settings"},
                {path: "/calldivert", title: "Call Divert"},
                {path: "/games", title: "Games"},
                {path: "/calculator", title: "Calculator"},
                {path: "/reminders", title: "Reminders"},
                {path: "/clock", title: "Clock"},
                {path: "/profiles", title: "Profiles"},
                {path: "/simservices", title: "SIM Services"}
            ],
            position: 0 
        };

        this.swipeLeft = this.swipeLeft.bind(this);
        this.swipeRight = this.swipeRight.bind(this);
        this.handleTap = this.handleTap.bind(this);
    }

    public handleTap() {
        this.props.history.push({
            pathname: this.state.menus[this.state.position].path
        });
    }
    
    public swipeLeft() {
        const { position, menus } = this.state;
        this.setState({ position: position === menus.length-1 ? 0 : position + 1 })
    }

    public swipeRight() {
        const { position, menus } = this.state;
        this.setState({ position: position === 0 ? menus.length-1 : position - 1 })
    }

    public render() {
        const label = this.state.menus[this.state.position];
        return (
            <Hammer onTap={this.handleTap}
                    onSwipeLeft={this.swipeLeft}
                    onSwipeRight={this.swipeRight}>
                <div className="home">
                    {label.title}
                </div>
            </Hammer>
        )
    }
}

export default Home;
