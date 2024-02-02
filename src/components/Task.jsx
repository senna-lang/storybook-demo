import PropType from 'prop-types';

export default function Task({
  task: { id, title, state },
  onPinTask,
  archiveTask,
}) {
  return (
    <div className={`list-item ${state}`}>
      <label
        htmlFor="checked"
        className="checkbox"
        aria-label={`archiveTask-${id}`}
      >
        <input type="checkbox" name="checked" id={`archiveTask-${id}`} />
        <span
          className="check-box-custom"
          onClick={() => archiveTask(id)}
        ></span>
      </label>
      <label htmlFor="title" className="title" aria-label={title}>
        <input
          type="text"
          value={title}
          readOnly={true}
          name="title"
          placeholder="title"
        />
      </label>
      {state !== 'TASK_ARCHIVED' && (
        <button
          className=" pin-button"
          id={`pinTask-${id}`}
          aria-label={`pinTask-${id}`}
          onClick={() => onPinTask(id)}
        >
          <span className="icon-star"></span>
        </button>
      )}
    </div>
  );
}

Task.PropType = {
  task: PropType.shape({
    id: PropType.string.isRequired,
    title: PropType.string.isRequired,
    state: PropType.string.isRequired,
    onPinTask: PropType.func.isRequired,
    archiveTask: PropType.func.isRequired,
  }),
};
