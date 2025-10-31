import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';

export function MainForm() {
  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    console.log('Criando nova tarefa', Date.now());
    event.preventDefault();
    // Lógica para criar uma nova tarefa
  }

  return (
    <form onSubmit={handleCreateNewTask} className='form'>
      <div className='formRow'>
        <DefaultInput
          labelText='Task'
          id='meuInput'
          type='text'
          placeholder='Digite algo'
        />
      </div>

      <div className='formRow'>
        <p>Próximo intervalo: 25 minutos</p>
      </div>

      <div className='formRow'>
        <Cycles />
      </div>

      <div className='formRow'>
        <DefaultButton icon={<PlayCircleIcon />} color='green' type='submit' />
      </div>
    </form>
  );
}
