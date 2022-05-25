function Todo({todo,index,remove}){
  function handle(){
    console.log('Ping:',index);
    remove(index);
  }
  return <div className="todo" onClick={handle}>{todo.text} <img src="trash.jpg" width ="40px" height = "40px"></img></div>
}
