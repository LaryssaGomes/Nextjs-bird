import { Background } from './patterns/Background/Background';
import { Footer } from './patterns/Footer/Footer';
import { Menu } from './patterns/Menu/Menu';

export default function HomeScreen() {
  return (
    <div>
      <Background>
        <Menu />
        <Footer />
      </Background>
    </div>
  );
}
