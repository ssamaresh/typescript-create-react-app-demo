import * as React from 'react';
import logo from './logo.svg';

interface IProps {
    name?: string
};

const Header: React.SFC<IProps> = (props: IProps) => {
    return (
        <header>
            <img src = { logo } className = "App-logo" alt = "logo" />
            <h1>Hello { props.name }, Welcome to React and Typescipt with create-react-app</h1>
        </header>
    );
};

Header.defaultProps = {
    name: 'world'
};

export default Header;