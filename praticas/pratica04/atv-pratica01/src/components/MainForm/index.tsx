import { useRef } from 'react'; // Trocamos o import
import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';

export function MainForm() {
  const { state } = useTaskContext();

  // Criamos a referência para o input (começa como null)
  const taskNameInput = useRef<HTMLInputElement>(null);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Acessamos o valor apenas no momento do envio!
    // O sinal '?' garante que não dê erro se o input não existir por algum motivo.
    const taskValue = taskNameInput.current?.value;

    console.log('DEU CERTO - Valor capturado via Ref:', taskValue);
    console.log('Dados do contexto:', state);

    // Dica extra: Para limpar o campo após o envio usando Ref:
    if (taskNameInput.current) {
      taskNameInput.current.value = '';
    }
  }

  return (
    <form onSubmit={handleCreateNewTask} className='form'>
      <div className='formRow'>
        <DefaultInput 
          labelText='Tarefa' 
          id='meuInput' 
          type='text' 
          placeholder='No que está trabalhando?' 
          // Conectamos a nossa referência aqui
          ref={taskNameInput} 
        />
      </div>
      <div className='formRow'>
        <p>Próximo intervalo é de 25min</p>
      </div>
      <div className='formRow'>
        <Cycles />
      </div>
      <div className='formRow'>
        <DefaultButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}