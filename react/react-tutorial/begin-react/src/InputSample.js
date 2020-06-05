import React, { useState } from 'react';

function InputSample() {
    const [inputs, setInputs] = useState({ name: '', nickname: '' });
    const { name, nickname } = inputs;
    const onChange = (event) => {};

    const onReset = () => {};
    return (
        <div>
            <input name="name" placeholder="이름"></input>
            <input name="nickname" placeholder="닉네임"></input>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값 :</b>
            </div>
        </div>
    );
}
export default InputSample;
