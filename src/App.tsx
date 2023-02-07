import { Dispatch, FC, useCallback } from 'react';
import './App.css';
import { shallowEqual, useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addShot, removeShot } from './store/actionCreators';
import { AddShot } from './components/AddShot';
import { Shot } from './components/Shot';

import { Paper, Typography } from "@mui/material";

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

      <AddShot saveShot={saveShot} />
      <Paper
        style={{
          display: "grid",
          gridRowGap: "20px",
          padding: "20px",
          margin: "10px 300px",
        }}>
        <Typography variant="h6" style={{ margin: "20px 20px" }}> Shot History</Typography>
        {shots.map((shot: IShot) => (
          <Shot
            key={shot.id}
            shot={shot}
            removeShot={removeShot}
          />
        ))}
      </Paper>
    </main>
  )
}

export default App 