import ErrorPage from '../Organisms/ErrorPage';

export default function Error404Template() {
  const errorCode = '404';

  return <ErrorPage errorCode={errorCode} />;
}
