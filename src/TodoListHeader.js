const Header = ({ lang, tasks }) => {
  const tasksLeft = tasks.filter((task) => !task.isCompleted).length;
  return (
    <div className="header">
      {lang === "vi"
        ? `Bạn còn ${tasksLeft} công việc`
        : `You have ${tasksLeft} task${
            (tasksLeft > 1 || tasksLeft === 0) && "s"
          } left!`}
    </div>
  );
};

export default Header;
