import styled from 'styled-components';

export default function TxtBoard({ boardName }) {
  const Styles = styled.div`
    margin-left: 5px;
    font-size: 20px;
    font-weight: bold;
    width: 100%;
  `;

  return <Styles>{boardName === 'free' ? '자게' : '짤게'}</Styles>;
}
