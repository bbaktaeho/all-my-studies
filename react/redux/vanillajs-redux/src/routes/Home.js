import React, { useState } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import Todo from '../components/Todo';

function Home({ todos, addTodo }) {
    const [text, setText] = useState('');
    function onChange(e) {
        setText(e.target.value);
    }
    function onSubmit(e) {
        e.preventDefault();
        setText('');
        addTodo(text);
    }
    return (
        <>
            <h1>To do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange}></input>
                <button>add</button>
            </form>
            <ui>
                {todos.map((todo) => (
                    <Todo {...todo} key={todo.id} />
                ))}
            </ui>
        </>
    );
}

// redux state로 부터 Component에 prop으로써 전달해주는 함수
function mapStateToProps(state) {
    return { todos: state };
}

function mapDispatchToProps(dispatch) {
    return {
        addTodo: (text) => dispatch(actionCreators.addTodo(text)), // reducer에게 dispatch
    };
}

// store와 commponent를 connect 하는 방법
// connect 함수는 컴포넌트로 보내는 props에 추가될 수 있도록 허용해줌
export default connect(mapStateToProps, mapDispatchToProps)(Home); // 여기선 test 속성을 Home의 props로 추가해줌
