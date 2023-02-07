import { FC, FormEvent, useState } from "react"

type Props = {
    saveShot: (shot: IShot | any) => void 
}

export const AddShot: FC<Props> = ({saveShot}) => {
    const [shot, setShot] = useState<IShot | {}>()

    const handleShotData = (e : FormEvent<HTMLInputElement>) => {
        setShot({
            ...shot, 
            [e.currentTarget.id]: e.currentTarget.value,
        })
    }

    const addNewShot = (e: FormEvent) => {
        e.preventDefault() 
        saveShot(shot)
    }

    return (
        <form onSubmit={addNewShot} className="Add-shot"> 
            <input type="text" id="grind_weight" placeholder="Grind Weight" onChange={handleShotData}/>
            <input type="text" id="grind_size" placeholder="Grind Size" onChange={handleShotData}/>
            <input type="text" id="brew_time" placeholder="Brew Time" onChange={handleShotData}/>
            <input type="text" id="yield" placeholder="Yield" onChange={handleShotData}/>
            <input type="text" id="temperature" placeholder="Temperature" onChange={handleShotData}/>
            <button disabled={shot === undefined}>
                Add Shot
            </button>
        </form>
    )
}