import { AppAnimation } from '../styles/animation';
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
