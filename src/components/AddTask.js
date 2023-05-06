
const AddTask = ({tasks,setTasks,input,setInput}) => {
    const handleSubmit=(e)=>{
        e.preventDefault();

        if(input.id){
            const date=new Date();
            const updateTask=tasks.map((task)=>(
                task.id===input.id ?{id:task.id,name:input.name,time:`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`} :{...task}
            ))
            setTasks([...updateTask]);
            e.target.reset();
        }
        else{
            const date=new Date();
            const newTask={id:date.getTime(),name:input.name,time:`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`}
            setTasks([...tasks,newTask]);
            e.target.reset();
        }
        setInput({});
        
    }
  return (
    <section className="addTask">
        <form onSubmit={handleSubmit}>
            <input type="text" name="text" value={input.name} onChange={(e)=>{setInput({...input,name:e.target.value})}} id="" placeholder="add task" maxLength={25} />
            <button type="submit">{input.id?'Update':'Add'}</button>
        </form>
    </section>
  )
}

export default AddTask