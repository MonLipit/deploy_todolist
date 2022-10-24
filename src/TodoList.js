import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";

const TodoList = ({ lang, tasks, isFiltered, changeStatus, sort }) => {
  const timeLeft = (time) => {
    const distance = new Date(time).getTime() - new Date().getTime();
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    if (lang === "vi") {
      return ` còn lại ${days} ngày, ${hours} giờ, ${minutes} phút`;
    }
    return ` ${days} day${(days > 1 || days === 0) && "s"}, ${hours} hour${
      (hours > 1 || hours === 0) && "s"
    }, ${minutes} minute${(minutes > 1 || minutes === 0) && "s"} left`;
  };
  return (
    <div className="todo-list-container">
      {tasks.map(({ title, isCompleted, date }, index) => (
        <div
          key={index}
          className={`todo-item-container ${(isCompleted && "done") || ""} ${
            (isFiltered && isCompleted && "hidden") || ""
          }`}
        >
          {isCompleted ? (
            <FaRegCheckCircle
              color="#9a9a9a"
              className="item-done-button"
              onClick={() => changeStatus(index)}
            />
          ) : (
            <FaRegCircle
              className="item-done-button"
              color="#9a9a9a"
              onClick={() => changeStatus(index)}
            />
          )}
          <div className="item-title">
            <span>{title}</span> -<span>{timeLeft(date)}</span>
          </div>
          <div>
            <span className="sort" onClick={() => sort(index, "up")}>
              ⬆️
            </span>
            <span className="sort" onClick={() => sort(index, "down")}>
              ⬇️
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
