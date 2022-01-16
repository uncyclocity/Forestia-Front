import styled from 'styled-components';
import BtnPagingLeft from '../Atoms/Button/BtnPagingLeft';
import TxtPagingNumberSelected from '../Atoms/Text/TxtPagingNumberSelected';
import BtnPagingNumber from '../Atoms/Button/BtnPagingNumber';
import BtnPagingRight from '../Atoms/Button/BtnPagingRight';
import { useRouter } from 'next/router';

const Styles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  color: #20c997;
  font-size: 15px;
  margin: 15px 0;
`;

export default function ListPageBtn({ boardSort, listLen, page }) {
  const postingAmountDivided = listLen / 15;
  const padInt = parseInt(postingAmountDivided);
  const pageBtnAmount = padInt < postingAmountDivided ? padInt + 1 : padInt;
  const Router = useRouter();

  return (
    <Styles>
      <BtnPagingLeft
        onClick={() => {
          const pageDivided = parseInt((page - 1) / 20);
          const goPage = pageDivided * 20;
          if (goPage >= 1) {
            Router.push(`/board/boardlist/${boardSort}?page=${goPage}`);
          } else {
            Router.push(`/board/boardlist/${boardSort}?page=${1}`);
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
              <div
                onClick={() =>
                  Router.push(
                    `/board/boardlist/${boardSort}?page=${nowPageCnt}`,
                  )
                }
                key={index}
              >
                <BtnPagingNumber number={nowPageCnt} />
              </div>
            );
          }
        }
      })}
      <BtnPagingRight
        onClick={() => {
          const pageDivided = parseInt((page - 1) / 20);
          const goPage = (pageDivided + 1) * 20 + 1;
          if (goPage <= pageBtnAmount) {
            Router.push(`/board/boardlist/${boardSort}?page=${goPage}`);
          } else {
            Router.push(`/board/boardlist/${boardSort}?page=${pageBtnAmount}`);
          }
        }}
      />
    </Styles>
  );
}
