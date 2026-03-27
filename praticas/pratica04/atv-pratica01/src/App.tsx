import { Container } from './components/Container';
import { Heading } from './components/Heading';
import { Timer, History } from 'lucide-react'; 
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput'; // <-- Novo Componente

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

      {/* Seção de Conteúdo Principal (Formulário Refatorado) */}
      <Container>
        <form className='form' action=''>
          
          {/* Grupo 1: Usando o componente Tipado DefaultInput */}
          <div className='formRow'>
            <DefaultInput 
              id='taskInput' 
              type='text' 
              placeholder='No que você vai trabalhar?' 
              required // Exemplo de prop nativa que o TS agora aceita
            />
          </div>

          {/* Grupo 2: Texto de apoio */}
          <div className='formRow'>
            <p>Desenvolvendo componentes React com foco.</p>
          </div>

          {/* Grupo 3: Ciclos realizados */}
          <div className='formRow'>
            <p>Ciclos realizados</p>
            <p>○ ○ ○ ○ ○ ○ ○</p>
          </div>

          {/* Grupo 4: Botão de Ação */}
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