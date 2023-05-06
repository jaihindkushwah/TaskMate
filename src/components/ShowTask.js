const ShowTask = ({tasks,setTasks,setInput}) => {
  const clearAll=()=>{
    setTasks([]);
  }
  const handleDelete=(taskId)=>{
    // const clickedDeleteBtn=e.target.parentElement.id;
    const filter = tasks.filter((item)=>item.id!==Number(taskId));
    setTasks([...filter]);

  }
  const handleEdit=(taskId)=>{
      const filterObject = tasks.find((item)=>item.id===Number(taskId));
      setInput({...filterObject});
    //   const filter = tasks.filter((item)=>item.id!==Number(taskId));
    // setTasks([...filter]);
  }

  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{tasks.length}</span>
        </div>
        <button className="clearAll" onClick={clearAll}>Clear All</button>
      </div>
      <ul>
        {
          tasks.map((task)=>{
            return(
              <li key={task.id}>
                <p>
                    <span className="name">{task.name}</span>
                    <span className="time"> {task.time}</span>
                </p>
                <i className="bi bi-pencil-square" onClick={()=>{handleEdit(task.id)}}></i>
                <i className="bi bi-trash" onClick={()=>{handleDelete(task.id)}}></i>
              </li>
            )
          })
        }
        
      </ul>
    </section>
  );
};

export default ShowTask;
