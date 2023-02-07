import { Dispatch, FC, useCallback } from "react"
import { useDispatch } from "react-redux"

type Props = {
    shot: IShot 
    removeShot: (shot: IShot) => void 
}

export const Shot: FC<Props> = ({ shot, removeShot }) => {
    const dispatch: Dispatch<any> = useDispatch()

    const deleteShot = useCallback(
        (shot: IShot) => dispatch(removeShot(shot)),
        [dispatch, removeShot]
    )
    
    return (
        <div className="Shot"> 
            <div> 
                <p>{shot.grind_weight}</p>
                <p>{shot.grind_size}</p>
                <p>{shot.brew_time}</p>
                <p>{shot.yield}</p>
                <p>{shot.temperature}</p>
            </div>
            <button onClick={() => deleteShot(shot)}>Delete</button>
        </div>
    )
}