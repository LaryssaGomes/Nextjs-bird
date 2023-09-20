import { Background } from './patterns/Background/Background';
import { Footer } from './patterns/Footer/Footer';

export default function HomeScreen() {
  return (
    <div>
      <Background>
        <Footer />
      </Background>
    </div>
  );
}
