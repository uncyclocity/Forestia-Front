import styled from 'styled-components';
import IcoPagingLeft from '../Atoms/Icon/IcoPagingLeft';
import TxtPagingNumberSelected from '../Atoms/Text/TxtPagingNumberSelected';
import TxtPagingNumber from '../Atoms/Text/TxtPagingNumber';
import IcoPagingRight from '../Atoms/Icon/IcoPagingRight';

const Styles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  color: #20c997;
  font-size: 15px;
  margin: 15px 0;
`;

export default function ListPageBtn({ listLen, page, setNowPage }) {
  const postingAmountDivided = listLen / 15;
  const padInt = parseInt(postingAmountDivided);
  const pageBtnAmount = padInt < postingAmountDivided ? padInt + 1 : padInt;

  return (
    <Styles>
      <IcoPagingLeft />
      {[...Array(pageBtnAmount)].map((num, index) => {
        if (index + 1 === parseInt(page)) {
          return <TxtPagingNumberSelected key={index} number={index + 1} />;
        } else {
          return (
            <div onClick={() => setNowPage(index + 1)} key={index}>
              <TxtPagingNumber number={index + 1} />
            </div>
          );
        }
      })}
      <IcoPagingRight />
    </Styles>
  );
}
