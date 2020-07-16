import React from 'react';

type GreetingsProps = {
  name: string;
  onClick: (name: string) => void;
};

const Greetings: React.FC<GreetingsProps> = ({ name, onClick }) => {
  const handleClick = () => onClick(name);
  return (
    <div>
      {name}
      <div>
        <button onClick={handleClick}></button>
      </div>
    </div>
  );
};

export default Greetings;
