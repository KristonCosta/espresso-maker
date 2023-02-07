import * as actionTypes from "./actionTypes"

export function addShot(shot: IShot) {
    const action: ShotAction = {
        type: actionTypes.ADD_SHOT, 
        shot
    }

    return dispatcher(action)
}

export function removeShot(shot: IShot) {
    const action: ShotAction = {
        type: actionTypes.REMOVE_SHOT, 
        shot
    }
    
    return dispatcher(action)
}


export function dispatcher(action: ShotAction) {
    return (dispatch: DispatchType) => {
        dispatch(action)
    }
}
