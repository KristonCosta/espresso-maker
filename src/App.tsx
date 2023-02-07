import React, { Dispatch, FC, useCallback } from 'react';
import logo from './logo.svg';
import './App.css';
import { shallowEqual, useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addShot, removeShot } from './store/actionCreators';
import { AddShot } from './components/AddShot';
import { Shot } from './components/Shot';

import 'bootstrap/dist/css/bootstrap.min.css';

const App: FC = () => {
  const shots: readonly IShot[] = useSelector(
    (state: ShotState) => state.shots, 
    shallowEqual
  )

  const dispatch: Dispatch<any> = useDispatch()

  const saveShot = useCallback(
    (shot: IShot) => dispatch(addShot(shot)), 
    [dispatch]
  )

  return (
    <main>
      <h1>My Shots</h1>
      <AddShot saveShot={saveShot} />
      {shots.map((shot: IShot) => (
        <Shot 
          key={shot.id}
          shot={shot} 
          removeShot={removeShot}
        />
      ))}
    </main>
  )
}

export default App 