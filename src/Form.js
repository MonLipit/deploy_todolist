import { useRef } from "react";

const Form = ({ lang, submitTask }) => {
  let newTask = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTask.current.value) {
      submitTask(newTask.current.value);
      event.target.reset();
    }
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        placeholder={lang === "en" ? "Enter task ..." : "Nhập"}
        ref={newTask}
      />
      <button>{lang === "en" ? "Submit" : "Tạo mới"}</button>
    </form>
  );
};

export default Form;
