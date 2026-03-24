import './home.css';
import ClawEngine from '../components/Home/Engine';
import ClawCine from '../components/Home/Cine';
import ClawClawIcon from '../components/Home/ClawIcon';
import ClawProduct from '../components/Home/Product';
import ClawSolution from '../components/Home/Solution';
import ClawHeroCarousel from '../components/Home/HeroCarousel';

export default function HomePage() {
  return (
    <div className="meta-mirror-home">
      <ClawHeroCarousel />
      <ClawEngine />
      <ClawClawIcon/>
      <ClawCine/>
      <ClawProduct/>
      <ClawSolution/> 
    </div>
  );
}
