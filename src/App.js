import { useState } from 'react';
import './App.css';
import Box from './component/Box';

const choice = {
  rock:{
    name:"rock",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDJKVEnkhkPgib0JuYfd-z92tmP7yDD4DWuA&s"
  },
  scissors:{
    name:"scissors",
    img:"https://ecimg.cafe24img.com/pg269b58528344071/ors1338/web/product/big/20230413/8f82f060df19a6616d916355ae549e9a.jpg"
  },
  paper:{
    name:"paper",
    img:"https://us.123rf.com/450wm/naiauss/naiauss1608/naiauss160800411/67246521-%EC%B0%A2%EC%96%B4%EC%A7%84-%EC%A2%85%EC%9D%B4.jpg"
  }
};
function App() {
  const [userSelect,setUserSelect] = useState(null);
  const [computerSelect,setComputerSelect] = useState(null);
  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    console.log("itemArray",itemArray);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };

  return (
    <div>
    <div className="main">
      <Box title="병구" item={userSelect}/>
      <Box title="콤퓨타" item={computerSelect}/>
    </div>
    <div className="main">
      <button onClick={()=> play("scissors")}>가위</button>
      <button onClick={()=> play("rock")}>바위</button>
      <button onClick={()=> play("paper")}>보</button> 
    </div>
    </div>
  );
}

export default App;
