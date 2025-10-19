import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';
import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <>
      <Heading>
        Olá mundo 1
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus hic
        et sint eligendi nobis blanditiis nihil commodi ducimus ut, illo quod
        non quis aut vitae corrupti veritatis in dolor nostrum.
      </p>
    </>
  );
}
