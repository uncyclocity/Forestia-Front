import { AppAnimation } from '../styles/boxAnimation';
import HeaderBar from './headerbar';
import Top from './top';

export default function Header() {
  return (
    <AppAnimation>
      <Top />
      <HeaderBar />
    </AppAnimation>
  );
}
