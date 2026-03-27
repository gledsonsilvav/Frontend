// src/App.tsx
import { Container } from './components/Container';
import { Heading } from './components/Heading';
import { Timer, History } from 'lucide-react'; // Ícones para ilustrar
import { Logo } from './components/Logo';
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
        <Heading>MENU</Heading>
      </Container>

      {/* Seção de Conteúdo Principal */}
      <Container>
        <div style={{ 
          backgroundColor: 'var(--gray-800)', 
          padding: '4rem', 
          borderRadius: '8px',
          textAlign: 'center' 
        }}>
          <h2>Área do Cronômetro</h2>
          <p style={{ color: 'var(--text-muted)' }}>O formulário virá aqui!</p>
        </div>
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
