import styled from 'styled-components';

export default function Box({ children }) {
  const BoxStyles = styled.div`
    max-width: 700px;

    margin: 15px auto;

    background: white;
    border-radius: 25px;

    box-shadow: 0px 5px 5px #dedede;
  `;

  return <BoxStyles>{children}</BoxStyles>;
}
