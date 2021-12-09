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
          if (goPage >= 1) {
            setNowPageCnt(goPage);
          } else {
            setNowPageCnt(1);
          }
        }}
      />
      {[...Array(20)].map((num, index) => {
        const pageDivided = parseInt((page - 1) / 20) * 20;
        const nowPageCnt = pageDivided + index + 1;
        if (nowPageCnt <= pageBtnAmount) {
          if (nowPageCnt === parseInt(page)) {
            return <TxtPagingNumberSelected key={index} number={nowPageCnt} />;
          } else {
            return (
              <div onClick={() => setNowPageCnt(nowPageCnt)} key={index}>
                <TxtPagingNumber number={nowPageCnt} />
              </div>
            );
          }
        }
      })}
      <IcoPagingRight
        onClick={() => {
          const pageDivided = parseInt((page - 1) / 20);
          const goPage = (pageDivided + 1) * 20 + 1;
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
