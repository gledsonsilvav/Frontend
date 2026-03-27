import { Container } from './components/Container';
import { Heading } from './components/Heading';
import { Timer, History, PlayCircleIcon, StopCircleIcon } from 'lucide-react'; 
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';
import { Cycles } from './components/Cycles';
import { DefaultButton } from './components/DefaultButton'; // 1. Importado

import './styles/theme.css';
import './styles/global.css';

export function App() {
  return (
    <>
      <Container>
        <Heading>Ignite Timer <Timer size={24} /></Heading>
      </Container>

      <Container><Logo /></Container>
      <Container><Menu /></Container>
      <Container><CountDown /></Container>

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

          <div className='formRow'>
            <Cycles />
          </div>

          {/* 2. Substituindo o botão antigo pelos novos botões dinâmicos */}
          <div className='formRow'>
            <DefaultButton 
              icon={<PlayCircleIcon />} 
              color='green' 
              type="submit" 
            />
            
            <DefaultButton 
              icon={<StopCircleIcon />} 
              color='red' 
              type="button" 
            />
          </div>
        </form>
      </Container>

      <Container>
        <Heading>Histórico <History size={24} /></Heading>
      </Container>
    </>
  );
}