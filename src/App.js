:\dev\CloudFoundry\NameRing:x



import { userState } from 'react';
import logo from './logo.svg';
import './App.css';
//import spy from './spy.png';


function parseNames() {
    let leftNote = document.getElementById("note-text-area");

    let availableTargets = leftNote.textContent.split(',');
    let newList = "";
    let Assassin = availableTargets.pop().trim();
    let first = Assassin;
    while (availableTargets.length > 0) {
        let randomNum = Math.floor(Math.random() * availableTargets.length);
        console.log("randomNum:" + randomNum);
        let chosenTarget = availableTargets[randomNum].trim();
        availableTargets.splice(randomNum, 1);
        newList += Assassin + " kills " + chosenTarget + ",\n\r";
        Assassin = chosenTarget;
    }
    newList += Assassin + " kills " + first;
    leftNote.textContent = newList;
}
//<img style={{ position: "absolute", top: "10%", right: "15%", width: "15%", paddingTop: "0%" }} src={spy} alt="Image missing!" />         

function App() {

    return (
        <div className="App">
            <header className="App-header">
            </header>
            <div>
                <textarea id="note-text-area" style={{ position: "absolute", top: "0px", left: "0px", height: "50%", width: "50%", }} />
                
                <button onClick={parseNames} style={{ position: "absolute", top: "45%", right: "12%", height: "5%", width: "20%" }} >KILL Assignments</button>
                <p style={{ color: "white", position: "absolute", top: "55%", left: "1%", width: "50%", fontSize: "2vw", }}>
                    Enter in names separated by a comma. Then click the button and let the assassins get to work!
                </p>    
            </div>
        </div>
    );
}

export default App;
