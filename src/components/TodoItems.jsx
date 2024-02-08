import './CSS/TodoItems.css'
import tick from './Assets/tick.png';
import cross from './Assets/cross.png';
import not_tick from './Assets/not_tick.png';
import circle from './Assets/circle.png'

function TodoItems({no,display,text,setTodos}) {

    const deleteA = (no) =>{
        let data = JSON.parse(localStorage.getItem('todos'));
        data = data.filter((todo)=> todo.no!==no);
        setTodos(data);

    }
 
 const  toggle = (no)=>{
    let data = JSON.parse(localStorage.getItem('todos'));
    for(let i =0; i< data.length;i++){
        if(data[i].no === no){
            if(data[i].display===""){
                data[i].display = "line-through";
            }else{
                data[i].display = "";
            }
            break;
        }
    }

    setTodos(data);
 }
 
    return (
    <div className='todoitems'>
        <div className={`todoitems-container ${display}`} onClick={()=>{toggle(no)}}>
            {display===""?<img height='50'width='50' src={circle} alt="" />:<img height='50'width='50' src={tick} alt="" />}
            
            
            <div className="todoitems-text">{text}</div>
        </div>
        <img className='todoitems-cross' height='50'width='50' src={cross} alt="" onClick={()=>{deleteA(no)}}/>

    </div>
  )
}

export default TodoItems