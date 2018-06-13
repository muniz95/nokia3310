import * as React from "react";
import Hammer from "react-hammerjs";
import '../../styles/Home.css';

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

class PhoneBook extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            menus: [
                { path: "phonebook/search", title: "Search" },
                { path: "phonebook/servicenos", title: "Service Nos" },
                { path: "phonebook/addname", title: "Add name" },
                { path: "phonebook/erase", title: "Erase" },
                { path: "phonebook/edit", title: "Edit" },
                { path: "phonebook/assigntone", title: "Assign tone" },
                { path: "phonebook/sendbcard", title: "Send b’card" },
                { path: "phonebook/options", title: "Options" },
                { path: "phonebook/speeddials", title: "Speed Dials" },
                { path: "phonebook/voicetags", title: "Voice Tags" }
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
        const { position } = this.state;
        this.setState({ position: position === 12 ? 0 : position + 1 })
    }

    public swipeRight() {
        const { position } = this.state;
        this.setState({ position: position === 0 ? 12 : position - 1 })
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

export default PhoneBook;
