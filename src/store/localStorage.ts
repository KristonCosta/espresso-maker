const SHOT_STATE_KEY = "SHOT_STATE_KEY"

export const loadState = (): ShotState | undefined =>  {
    const localState = localStorage.getItem(SHOT_STATE_KEY)
    if (localState === null) {
        return undefined
    }
    return JSON.parse(localState)
}

export const saveState = (state: ShotState): void => {
    const localState = JSON.stringify(state)
    localStorage.setItem(SHOT_STATE_KEY, localState)
}