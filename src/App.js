import { Container, Painel } from './styles.js'

import { Menu, BankData, Info } from './components'

function App() {
  return (
    <Container>

      <Painel>
        <Menu />
        
        <BankData />

        <Info />
      </Painel>
      
    </Container>
  );
}

export default App;
