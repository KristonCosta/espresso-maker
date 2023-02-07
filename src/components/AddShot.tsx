import { ChangeEvent, FC, FormEvent, useState } from "react"
import { Button, TextField, InputAdornment, Paper, Typography } from "@mui/material";

type Props = {
    saveShot: (shot: IShot | any) => void
}


export const AddShot: FC<Props> = ({ saveShot }) => {
    const [shot, setShot] = useState<IShot | {}>()

    const handleShotData = (e: ChangeEvent<HTMLInputElement>): void => {
        setShot({
            ...shot,
            [e.target.id]: e.target.value,
        })
    }

    const addNewShot = (e: FormEvent) => {
        e.preventDefault()
        saveShot({
            ...shot,
            brew_time: new Date().toLocaleString()
        })
    }

    return (
        <Paper style={{ margin: "10px 300px" }}>
            <Typography variant="h6" style={{
                margin: "20px 0px 0px 20px",
                padding: "20px",
            }}> Add Shot</Typography>
            <form onSubmit={addNewShot} className="Add-shot" style={{
                display: "grid",
                gridRowGap: "20px",
                padding: "20px",
            }}>
                <TextField
                    id="grind_weight"
                    label="Grind Weight"
                    onChange={handleShotData}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">g</InputAdornment>,
                    }}
                />

                <TextField
                    id="grind_size"
                    label="Grind Size"
                    onChange={handleShotData}
                />

                <TextField
                    id="brew_time"
                    label="Brew Time"
                    onChange={handleShotData}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">seconds</InputAdornment>,
                    }}
                />

                <TextField
                    id="yield"
                    label="Yield"
                    onChange={handleShotData}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">g</InputAdornment>,
                    }}
                />

                <TextField
                    id="temperature"
                    label="Temperature"
                    onChange={handleShotData}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">°F</InputAdornment>,
                    }}
                />
                <Button type="submit" disabled={shot === undefined}>
                    Add Shot
                </Button>
            </form>
        </Paper >
    )
}