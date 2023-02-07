import { Reducer } from "@reduxjs/toolkit"
import * as actionTypes from "./actionTypes"

const initialState: ShotState = {
    shots: []
}
const reducer = (
    tryState: ShotState | undefined,
    action: ShotAction
): ShotState => {
    const state = tryState === undefined ? initialState : tryState as ShotState
    switch (action.type) {
        case actionTypes.ADD_SHOT:
            console.log("Foo")
            const newShot: IShot = {
                id: Math.random(),
                brew_time: action.shot.brew_time,
                grind_size: action.shot.grind_size,
                grind_weight: action.shot.grind_weight,
                temperature: action.shot.temperature,
                yield: action.shot.yield,
            }
            return {
                ...state,
                shots: state.shots.concat(newShot)
            }
        case actionTypes.REMOVE_SHOT:
            const updatedShots: IShot[] = state.shots.filter(
                shot => shot.id !== action.shot.id
            )
            return {
                ...state,
                shots: updatedShots
            }
    }
    return state
}

export default reducer