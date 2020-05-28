import React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';

function Todo({ text, onBtnClick }) {
    return (
        <li>
            {text} <button onClick={onBtnClick}>DEL</button>
        </li>
    );
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onBtnClick: () => dispatch(actionCreators.deleteTodo(ownProps.id)),
    };
}

export default connect(null, mapDispatchToProps)(Todo);
