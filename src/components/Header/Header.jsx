import React from 'react';
import styled from '@emotion/styled';

const Titulo = styled.b`
  text-transform: uppercase;
`;

const Header = ({titulo}) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <span className="navbar-brand mb-0 h1">
        <Titulo>{titulo}</Titulo>
      </span>
    </nav>
  );
};

export default Header;