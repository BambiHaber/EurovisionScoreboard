import React, {Component} from 'react';
import './App.css';
import ComponentBoxDisplay from "./Components/ComponentBoxDisplay";
import {semifinal1} from './data/semifinal1';
import {semifinal2} from './data/semifinal2';
import ComponentVoterBoxDisplay from "./Components/ComponentVoterBoxDisplay";

class App extends Component {
    constructor() {
        super();
    }

    render() {

        return (
            <div className={'parentContainer'}>
                <div className="contentContainer">
                    <h1>SEMI FINAL 1</h1>
                    <div className={'semiFinal-container'}>
                        <ComponentBoxDisplay semifinaldata={{data: semifinal1, semifinal: 1}}/>
                        <ComponentVoterBoxDisplay semifinaldata={{data: semifinal2, semifinal: 2}}/>
                    </div>

                    <div><h1>SEMI FINAL 2</h1></div>
                    <div className={'semiFinal-container'}>
                        <ComponentBoxDisplay semifinaldata={{data: semifinal1, semifinal: 1}}/>
                        <ComponentVoterBoxDisplay semifinaldata={{data: semifinal2, semifinal: 2}}/>
                    </div>
                </div>
            </div>
        )

    }
}

export default App;


