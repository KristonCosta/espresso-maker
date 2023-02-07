interface IShot {
    id: number 
    grind_weight: number, 
    grind_size: number, 
    brew_time: string, 
    yield: number,
    temperature: number, 
}

type ShotState = {
    shots: IShot[]
}

type ShotAction = {
    type: string
    shot: IShot
}

type DispatchType = (args: ShotAction) => ShotAction
