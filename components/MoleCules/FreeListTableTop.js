import styled from 'styled-components';
import TxtFreeGridTopAuthor from '../Atoms/Text/TxtFreeGridTopAuthor';
import TxtFreeGridTopDate from '../Atoms/Text/TxtFreeGridTopDate';
import TxtFreeGridTopName from '../Atoms/Text/TxtFreeGridTopName';

const Styles = styled.tr`
  cursor: pointer;
`;

export default function FreeListTableTop() {
  return (
    <Styles>
      <td>
        <TxtFreeGridTopName />
      </td>
      <td>
        <TxtFreeGridTopAuthor />
      </td>
      <td>
        <TxtFreeGridTopDate />
      </td>
    </Styles>
  );
}
