import { Container, Painel } from './styles.js'

import { Menu, BankData } from './components'

function App() {
  return (
    <Container>

      <Painel>
        <Menu />
        
        <BankData />
      </Painel>
      
    </Container>
  );
}

export default App;
