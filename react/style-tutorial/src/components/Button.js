import React from 'react';
import classNames from 'classnames';
import './Button.scss';

function Button({ children, size, color, outline, fullWidth, ...rest }) {
  return (
    outline,
    (
      <button
        {...rest}
        className={classNames('Button', size, color, { outline, fullWidth })}
      >
        {children}
      </button>
    )
  );
}

Button.defaultProps = {
  size: 'medium',
  color: 'blue',
};

export default Button;
