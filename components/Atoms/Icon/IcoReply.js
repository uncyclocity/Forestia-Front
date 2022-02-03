import styled from 'styled-components';
import { BsArrowReturnRight } from 'react-icons/bs';

const Styles = styled.div`
  font-size: 26px;
  color: #20c997;
  margin-right: 10px;
`;

export default function IcoReply() {
  return (
    <Styles>
      <BsArrowReturnRight />
    </Styles>
  );
}
