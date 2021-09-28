import styled from 'styled-components';
import IcoPagingLeft from '../../../../components/Atoms/Icon/IcoPagingLeft';
import IcoPagingRight from '../../../../components/Atoms/Icon/IcoPagingRight';
import TxtPagingNumber from '../../../../components/Atoms/Text/TxtPagingNumber';
import TxtPagingNumberSelected from '../../../../components/Atoms/Text/TxtPagingNumberSelected';

const Styles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  color: #20c997;
  font-size: 15px;
`;

export default function PageBtn({ photoLen, page, setNowPage }) {
  const postingAmountDivided = photoLen / 15;
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
