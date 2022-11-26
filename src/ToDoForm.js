import {useState} from "react";

function ToDoForm({addTask}){

    const [userInput,setUserInput] = useState('')

    const handelChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handelSubmit = (e) => {
        e.preventDefault()
        addTask(userInput);
        setUserInput("")
    }
    const handelKeyPress = (e) => {
        if(e.key === "Enter"){
            handelSubmit(e)
        }
    }

    return (
        <form onSubmit={handelSubmit}>
            <input type="text"
                   value={userInput}
                   type="text"
                   onChange={handelChange}
                   onKeyDown={handelKeyPress}
                   placeholder="Введите значение"
            />
            <button>Сохранить</button>
        </form>
    );

}
export default ToDoForm;