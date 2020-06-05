import React, { useState, useRef } from 'react';

function InputSample() {
    const [inputs, setInputs] = useState({ name: '', nickname: '' });
    const { name, nickname } = inputs;
    const nameInput = useRef();
    const onChange = (event) => {
        const { name, value } = event.target;
        // 리액트에서 객체를 업데이트할 땐 기존의 객체를 복사해야됨
        // 불변성을 지키기 위함
        // 스프레드 문법을 사용해서 복사를 하고 그 다음 업데이트할 값을 덮어씌운다
        setInputs({ ...inputs, [name]: value });
    };

    const onReset = () => {
        setInputs({ name: '', nickname: '' });
        nameInput.current.focus();
    };
    return (
        <div>
            <input name="name" placeholder="이름" onChange={onChange} value={name} ref={nameInput}></input>
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname}></input>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값 :</b>
                {name} {nickname}
            </div>
        </div>
    );
}
export default InputSample;
