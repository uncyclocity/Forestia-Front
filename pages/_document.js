import Document, { Html, Main, Head, NextScript } from 'next/document';
import { ServerStyleSheet, createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    background: #f6f6f6;
    height: 100%;
    padding: 0;
    font-family: 'Spoqa Han Sans Neo';

    @media screen and (max-width: 700px) {
      font-size: 14px;
      width: 100%;
      overflow-x: hidden;
    }

    /* FireFox Scrollbar */
    scrollbar-width: thin;
    scrollbar-color: #20c997 transparent;

    /* Webkit Scrollbar */
    &::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    &::-webkit-scrollbar-thumb {
      height: 17%;
      background: #20c997;
      border-radius: 12px;

      &:active {
        background: #1db486;
      }
    }
    &::-webkit-scrollbar-track {
      opacity: 0;
    }
    
  }

  body {
    margin: 0 auto;
    width: 900px;
    @media screen and (max-width: 700px) {
      width: 100%;
      overflow-x: hidden;
    }
  }

  * {
    box-sizing: border-box;
    ::selection {
      background: #20c997;
      color: white;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // 1단계 : 변수를 만들어 ServerStyleSheet() 함수를 넣어준다.
    const sheet = new ServerStyleSheet();

    // 2단계 : 페이지의 구성 요소 中 스타일들을 검색한다.
    const page = renderPage(
      (App) => (props) =>
        sheet.collectStyles(
          <>
            <GlobalStyles />
            <App {...props} />
          </>,
        ),
    );

    // 3단계 : style 태그 역할을 하는 변수를 선언하고, 검색한 스타일들을 넣어준다.
    const styleTags = sheet.getStyleElement();

    // 4단계 : prop으로 스타일태그를 넘겨준다.
    return { ...page, styleTags };
  }

  render() {
    return (
      <Html>
        {this.props.styleTags}
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
