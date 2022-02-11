import styled from 'styled-components';
import TxtCatchphrase from '../Atoms/Text/TxtCatchphrase';
import HeaderPostingPostButton from '../MoleCules/HeaderPostingPostButton';

const Styles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 120px;
  padding: 30px 20px 20px 20px;
  background: #20c997;
  border-radius: 30px 30px 0 0;

  @media screen and (max-width: 700px) {
    padding: 15px 20px 10px 20px;
    border-radius: 0;
    height: 90px;
  }
`;

export default function HeaderMiddleArea() {
  return (
    <Styles>
      <TxtCatchphrase />
      <HeaderPostingPostButton />
    </Styles>
  );
}
