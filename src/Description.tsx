import * as React from 'react';

interface IProps {
    countBy: number
};

interface IState {
    count: number
}

class Description extends React.Component<IProps, IState> {

    public static defaultProps: IProps = {
        countBy: 1
    };

    public state: IState =  {
        count: 0
    };

    public handleIncrement = () => {
        this.setState((prevState) => (
            { count: prevState.count + this.props.countBy })
        );
    };

    public handleDecrement = () => {
        if(this.state.count > 0) {
            this.setState((prevState) => (
                { count: prevState.count - this.props.countBy })
            );
        }
    };

    public render() {
        return (
            <div>
                <p>Count is { this.state.count }</p>
                <button onClick = { this.handleIncrement }>
                    Increment
                </button>
                <button onClick = { this.handleDecrement }>
                    Decrement
                </button>
            </div>
        );
    }
}

export default Description;