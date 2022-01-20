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

export default function ListPageBtn({ boardType, postingAmount, page }) {
  const Router = useRouter();

  const onePagePostingAmount = 15;
  const oneLinePageAmount = 20;

  const pageAmount = Math.ceil(postingAmount / onePagePostingAmount);

  const pageDivided = parseInt((parseInt(page) - 1) / oneLinePageAmount);

  return (
    <Styles>
      <BtnPagingLeft
        onClick={() => {
          const goPage = pageDivided * oneLinePageAmount;
          if (goPage >= 1) {
            Router.push(`/board/boardlist/${boardType}?page=${goPage}`);
          } else {
            Router.push(`/board/boardlist/${boardType}?page=${1}`);
          }
        }}
      />
      {[...Array(oneLinePageAmount)].map((num, index) => {
        const nowPageCnt = pageDivided * oneLinePageAmount + (index + 1);
        if (nowPageCnt <= pageAmount) {
          if (nowPageCnt === parseInt(page)) {
            return <TxtPagingNumberSelected key={index} number={nowPageCnt} />;
          } else {
            return (
              <BtnPagingNumber
                key={index}
                onClick={() =>
                  Router.push(
                    `/board/boardlist/${boardType}?page=${nowPageCnt}`,
                  )
                }
                number={nowPageCnt}
              />
            );
          }
        }
      })}
      <BtnPagingRight
        onClick={() => {
          const goPage = (pageDivided + 1) * oneLinePageAmount + 1;
          if (goPage <= pageAmount) {
            Router.push(`/board/boardlist/${boardType}?page=${goPage}`);
          } else {
            Router.push(`/board/boardlist/${boardType}?page=${pageAmount}`);
          }
        }}
      />
    </Styles>
  );
}
