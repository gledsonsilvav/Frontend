import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';
import { Cycles } from './components/Cycles';
import { DefaultButton } from './components/DefaultButton';
import { PlayCircleIcon, Rocket } from 'lucide-react'; // Adicionei o ícone Rocket para estilo
import { Footer } from './components/Footer';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  // Função para evitar que a página recarregue ao clicar no botão de Iniciar
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert("🚀 Ciclo Iniciado com Sucesso!");
  };

  return (
    <>
      {/* Cabeçalho com Logo e Menu */}
      <Container>
        <Logo />
      </Container>
      
      <Container>
        <Menu />
      </Container>

      {/* Área do Contador principal */}
      <Container>
        <CountDown />
      </Container>

      {/* Formulário de Tarefas personalizado */}
      <Container>
        <form className='form' onSubmit={handleSubmit}>
          <div className='formRow'>
            <DefaultInput
              labelText='Qual sua próxima missão?'
              id='taskInput'
              type='text'
              placeholder='Ex: Estudar React Hooks...'
            />
          </div>

          <div className='formRow'>
            {/* Texto com cor secundária do nosso novo tema */}
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.4rem', textAlign: 'center' }}>
              <Rocket size={16} style={{ verticalAlign: 'middle', marginRight: '8px', color: 'var(--primary)' }} />
              Desenvolvendo componentes React com foco total.
            </p>
          </div>

          <div className='formRow'>
            <Cycles />
          </div>

          <div className='formRow'>
            {/* O botão agora usará nossa cor --primary (Rosa Neon) automaticamente 
                se o componente DefaultButton estiver usando as classes do CSS global */}
            <DefaultButton 
              icon={<PlayCircleIcon />} 
              title="COMEÇAR JORNADA"
              type="submit" 
            />
          </div>
        </form>
      </Container>

      {/* Rodapé finalizando a página */}
      <Container>
        <Footer />
      </Container>
    </>
  );
}