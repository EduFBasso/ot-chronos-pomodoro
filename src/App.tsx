import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading';

export function App() {
  console.log('Oi');

  return (
    <>
      <Heading />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus hic
        et sint eligendi nobis blanditiis nihil commodi ducimus ut, illo quod
        non quis aut vitae corrupti veritatis in dolor nostrum.
      </p>
    </>
  );
}

// export default App; <- export function App permitindo alterar o name na importação
