import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        error: false,
    };

    // error에 대한 정보, info는 어디에서 발생했는지에 대한 정보
    componentDidCatch(error, info) {
        console.error('error!');
        console.log({ error, info });
        this.setState({ error: true });
    }

    render() {
        if (this.state.error) {
            return <h1>에러 발생</h1>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
