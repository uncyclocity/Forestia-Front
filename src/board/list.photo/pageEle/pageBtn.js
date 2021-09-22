import styled from 'styled-components';
import IcoPagingLeft from '../../../../components/Atoms/IcoPagingLeft';
import IcoPagingRight from '../../../../components/Atoms/IcoPagingRight';
import TxtPagingNumber from '../../../../components/Atoms/TxtPagingNumber';
import TxtPagingNumberSelected from '../../../../components/Atoms/TxtPagingNumberSelected';

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
          return <TxtPagingNumberSelected number={index + 1} />;
        } else {
          return (
            <div onClick={() => setNowPage(index + 1)}>
              <TxtPagingNumber number={index + 1} />
            </div>
          );
        }
      })}
      <IcoPagingRight />
    </Styles>
  );
}
