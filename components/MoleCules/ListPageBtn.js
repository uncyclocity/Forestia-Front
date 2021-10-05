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

export default function ListPageBtn({ listLen, page, setNowPageCnt }) {
  const postingAmountDivided = listLen / 15;
  const padInt = parseInt(postingAmountDivided);
  const pageBtnAmount = padInt < postingAmountDivided ? padInt + 1 : padInt;

  return (
    <Styles>
      <IcoPagingLeft
        onClick={() => {
          const pageDivided = parseInt((page - 1) / 20);
          const goPage = pageDivided * 20;
          console.log(pageDivided);
          if (goPage >= 1) {
            setNowPageCnt(goPage);
          } else {
            setNowPageCnt(1);
          }
        }}
      />
      {[...Array(pageBtnAmount)].map((num, index) => {
        if (index + 1 === parseInt(page)) {
          return <TxtPagingNumberSelected key={index} number={index + 1} />;
        } else {
          return (
            <div onClick={() => setNowPageCnt(index + 1)} key={index}>
              <TxtPagingNumber number={index + 1} />
            </div>
          );
        }
      })}
      <IcoPagingRight
        onClick={() => {
          const pageDivided = parseInt(page / 20);
          const goPage = (pageDivided + 1) * 20 + 1;
          console.log(pageDivided);
          if (goPage <= pageBtnAmount) {
            setNowPageCnt(goPage);
          } else {
            setNowPageCnt(pageBtnAmount);
          }
        }}
      />
    </Styles>
  );
}
