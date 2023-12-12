import { useState } from "react";
import styles from "./App.module.css";

interface Task {
  name: string;
  desc: string;
  status: number;
}

const Todo = () => {
  const tasks: Task[] = [
    { name: "Task 1", desc: "This is my first task", status: 0 },
    { name: "Task 2", desc: "This is my first task", status: 0 },
    { name: "Task 3", desc: "This is my first task", status: 1 },
  ];

  const [taskName, setName] = useState("");
  const [taskDesc, setDesc] = useState("");
  const [taskList, setTaskList] = useState<Task[]>(tasks);

  // const [newTask, setNewTask] = useState();
  // const [taskStatus, setStatus] = useState(0);

  const addTask = () => {
    const task: Task = {
      name: taskName,
      desc: taskDesc,
      status: 0,
    };
    const updatedTodo = [...taskList, task];
    setTaskList(updatedTodo);
  };

  const completeTask = (value: number) => {
    const updatedTodo = [...taskList];
    updatedTodo[value].status = 1;
    setTaskList(updatedTodo);
  };

  const deleteTask = (value: number) => {
    const updatedTodo = [...taskList];
    updatedTodo.splice(value, 1);
    setTaskList(updatedTodo);
  };

  return (
    <>
      <div className={styles.parentContainer}>
        <h1 className={styles.heading}>My Todos</h1>
        <div className={styles.addContainer}>
          <div className={styles.addInnerContainer}>
            <div>
              <p>Name</p>
              <input
                type="text"
                value={taskName}
                onChange={(event: any) => {
                  setName(event.target.value);
                }}
              />
            </div>
            <div>
              <p>Description</p>
              <input
                type="text"
                value={taskDesc}
                onChange={(event: any) => {
                  setDesc(event.target.value);
                }}
              />
            </div>
          </div>
          <button className={styles.addBtn} onClick={addTask}>
            Add Todo
          </button>
        </div>
        <div className={styles.tasksContainer}>
          {taskList.map((item, key) => {
            return (
              <>
                <div key={key} className={styles.tasks}>
                  <div
                    className={
                      item.status
                        ? styles.tasksInnerCompleted
                        : styles.tasksInnerNotComp
                    }
                  >
                    <p
                      className={
                        item.status
                          ? styles.taskNameCompleted
                          : styles.tasksNameNotComp
                      }
                    >
                      {item.name}
                    </p>
                    <p className={styles.description}>{item.desc}</p>
                  </div>
                  <div className={styles.status}>
                    {item.status ? (
                      <button
                        className={styles.addBtn}
                        onClick={() => deleteTask(key)}
                      >
                        Delete
                      </button>
                    ) : (
                      <div key={key}>
                        <button
                          className={styles.addBtn}
                          onClick={() => completeTask(key)}
                        >
                          Complete
                        </button>
                        <button
                          className={styles.addBtn}
                          onClick={() => deleteTask(key)}
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                {key !== tasks.length - 1 && <hr />}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Todo;
