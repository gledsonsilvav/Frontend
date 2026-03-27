import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';
import { Cycles } from './components/Cycles';
import { DefaultButton } from './components/DefaultButton';
import { PlayCircleIcon } from 'lucide-react';
import { Footer } from './components/Footer'; // 1. Importado!

import './styles/theme.css';
import './styles/global.css';

export function App() {
  return (
    <>
      <Container><Logo /></Container>
      <Container><Menu /></Container>
      <Container><CountDown /></Container>

      <Container>
        <form className='form' action=''>
          <div className='formRow'>
            <DefaultInput
              labelText='Tarefa'
              id='taskInput'
              type='text'
              placeholder='No que você vai trabalhar?'
            />
          </div>

          <div className='formRow'>
            <p>Desenvolvendo componentes React com foco.</p>
          </div>

          <div className='formRow'>
            <Cycles />
          </div>

          <div className='formRow'>
            {/* Mantemos apenas o botão verde de Iniciar */}
            <DefaultButton icon={<PlayCircleIcon />} color="green" type="submit" />
          </div>
        </form>
      </Container>

      {/* 2. O Rodapé finalizando a página */}
      <Container>
        <Footer />
      </Container>
    </>
  );
}