import { useDispatch, useSelector } from 'react-redux';
import Task from './Task';
import PropType from 'prop-types';
import { updateTaskState } from '../lib/store';

export default function TaskList() {
  const tasks = useSelector(state => {
    //データのソート
    const tasksInOrder = [
      ...state.taskbox.tasks.filter(t => t.state === 'TASK_PINNED'), //TASK_PINNEDのみ残る
      ...state.taskbox.tasks.filter(t => t.state !== 'TASK_PINNED'), //TASK_PINNED以外がその後ろに配置
    ];
    const filteredTasks = tasksInOrder.filter(
      t => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED' //TASK_ARCHIVEDが除外される
    );
    return filteredTasks;
  });

  const { status } = useSelector(state => state.taskbox);

  const dispatch = useDispatch();

  const pinTask = value => {
    dispatch(updateTaskState({ id: value, newTaskState: 'TASK_PINNED' }));
  };
  const archiveTask = value => {
    dispatch(updateTaskState({ id: value, newTaskState: 'TASK_ARCHIVED' }));
  };

  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox"></span>
      <span className="glow-text">
        <span>Loading</span>
        <span>cool</span>
        <span>state</span>
      </span>
    </div>
  );

  if (status === 'loading') {
    return (
      <div className="list-items">
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
  }
  if (tasks.length === 0) {
    return (
      <div className="list-items">
        <div className="wrapper-message">
          <span className="icon-check"></span>
          <p className="title-message">You have no tasks</p>
          <p className="subtitle-message">Sit back and relax</p>
        </div>
      </div>
    );
  }
  return (
    <div className="list-items">
      {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          onPinTask={task => pinTask(task)}
          archiveTask={task => archiveTask(task)}
        />
      ))}
    </div>
  );
}

TaskList.propType = {
  loading: PropType.bool,
  tasks: PropType.arrayOf(Task.PropType.task).isRequired,
};
TaskList.defaultProps = {
  loading: false,
};
