import React ,{useState} from "react";
import './../styles/App.css';

const App = () => {
    let [sum , setSum] = useState(0);
    function func(event) {
        if(event.target.value>0) {
            let num = event.target.value - '0';
            setSum(sum + num);
        }
        else if(event.target.value<0) {
            let num = event.target.value - '0';
            setSum(sum + num);
        }
    }
return (
    <div>
        <h1>Sum Calculator</h1>
        <input type="number" onChange={func}/>
        <p>Sum: {sum}</p>
    </div>
)
}

export default App;
