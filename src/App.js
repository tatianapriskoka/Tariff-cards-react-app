import './App.css';
import dataCards from './dataCards.js';
import TariffCard from './TariffCard';


function App() {
    return (
        <main className="main">
            {
                dataCards.map((el) =>
                    <TariffCard isSelected={el.isSelected} headColor={el.headColor} price={el.price} tariffColor={el.tariffColor} speed={el.speed}></TariffCard>
                )
            }
        </main>
    );
}

export default App;