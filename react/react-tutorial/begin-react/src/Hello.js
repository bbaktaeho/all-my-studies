import React from 'react';

function Hello({ name, color, isSpecial }) {
    return (
        <div style={{ color }}>
            {isSpecial && <b>*</b>}
            {name}
        </div>
    );
}

// defaultProps
Hello.defaultProps = {
    name: '이름없음',
};

export default Hello;
