import { useRef, useState } from 'react';
import { CenteredLayout } from '~/components';
import { useRenderHighlight } from '~/utils';
import css from './optimize-1.module.scss';

interface TodoProps {
  text: string;
  done: boolean;
}

const Todo = ({ text, done }: TodoProps) => {
  const ref = useRenderHighlight(css.render);
  const [doneItem, setDoneItem] = useState(done);

  const handleTodoClick = () => setDoneItem(!doneItem);

  return (
    <li ref={ref} onClick={handleTodoClick} className={css.listItem}>
      {doneItem ? '[x]' : '[ ]'} {text}
    </li>
  );
};

export const Optimize1 = () => {
  const todosData = useRef([
    { id: 1, text: 'run a marathon', done: false },
    { id: 2, text: 'ride an elephant', done: false },
    { id: 3, text: 'swim with a fish', done: false },
  ]);

  return (
    <CenteredLayout className="gap-4">
      <div className="text-3xl">It re-renders all items! =\</div>
      <div>We need to fix that</div>
      <ul>
        {todosData.current.map((item) => (
          <Todo
            key={item.id}
            text={item.text}
            done={item.done}
          />
        ))}
      </ul>
    </CenteredLayout>
  );
};
