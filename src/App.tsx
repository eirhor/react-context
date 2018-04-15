import * as React from 'react';
import './App.css';

import logo from './logo.svg';
import {PeopleService} from './services/people';
import {IPagedPeopleResponse} from './types/people';

interface IAppState {
    People: IPagedPeopleResponse | null;
}

class App extends React.Component<any, IAppState> {
    public state = {
        People: null
    };

    public componentDidMount() {
        PeopleService.GetAll()
            .then(r => this.setState({ People: r}))
    }

    public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
