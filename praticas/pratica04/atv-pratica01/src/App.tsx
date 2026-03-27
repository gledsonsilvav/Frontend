import { Container } from './components/Container';
import { Heading } from './components/Heading';
import { Timer, History } from 'lucide-react'; 
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';
import { Cycles } from './components/Cycles'; // <-- Novo Componente importado

import './styles/theme.css';
import './styles/global.css';

export function App() {
  return (
    <>
      {/* Seção de Cabeçalho */}
      <Container>
        <Heading>
          Ignite Timer
          <Timer size={24} />
        </Heading>
      </Container>

      <Container>
        <Logo />
      </Container>
      
      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      {/* Seção de Conteúdo Principal (Formulário) */}
      <Container>
        <form className='form' action=''>
          
          <div className='formRow'>
            <DefaultInput 
              id='taskInput' 
              type='text' 
              labelText='Tarefa'
              placeholder='No que você vai trabalhar?' 
              required 
            />
          </div>

          <div className='formRow'>
            <p>Desenvolvendo componentes React com foco.</p>
          </div>

          {/* Substituído o HTML antigo pelo componente Cycles */}
          <div className='formRow'>
            <Cycles />
          </div>

          <div className='formRow'>
            <button type="submit">Iniciar Foco</button>
          </div>
        </form>
      </Container>

      {/* Seção de Rodapé ou Histórico */}
      <Container>
        <Heading>
          Histórico
          <History size={24} />
        </Heading>
      </Container>
    </>
  );
}