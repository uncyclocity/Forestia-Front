import styled, { css } from 'styled-components';

const BgStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  width: 100%;
  background: #a3e7d8;
`;

const GaugeStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  ${({ progress }) =>
    css`
      width: ${progress}%;
    `};
  background: #20c997;
  transition: 0.25s all ease-in-out;
`;

export default function Progress(props) {
  if (props.active) {
    return (
      <BgStyle>
        <GaugeStyle progress={props.progress} />
      </BgStyle>
    );
  } else return <></>;
}
