import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
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
        <div style={{
            display: "grid",
            gridRowGap: "20px",
            padding: "20px",
        }}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 300 }} size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Property</TableCell>
                            <TableCell align="right">Value</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow
                            key="grind_weight"
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                Grind Weight
                            </TableCell>
                            <TableCell align="right">{shot.grind_weight}</TableCell>
                        </TableRow>
                        <TableRow
                            key="grind_size"
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                Grind Weight
                            </TableCell>
                            <TableCell align="right">{shot.grind_size}</TableCell>
                        </TableRow>
                        <TableRow
                            key="yield"
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                Yield
                            </TableCell>
                            <TableCell align="right">{shot.yield}</TableCell>
                        </TableRow>
                        <TableRow
                            key="temperature"
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                Temperature
                            </TableCell>
                            <TableCell align="right">{shot.temperature}</TableCell>
                        </TableRow>
                        <TableRow
                            key="brew_time"
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                Brew Time
                            </TableCell>
                            <TableCell align="right">{shot.brew_time}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <Button onClick={() => deleteShot(shot)}>Delete</Button>
        </div>
        // <div className="Shot">
        //     <div>
        //         <p>{shot.grind_weight}</p>
        //         <p>{shot.grind_size}</p>
        //         <p>{shot.brew_time}</p>
        //         <p>{shot.yield}</p>
        //         <p>{shot.temperature}</p>
        //     </div>
        //     
        //     {/* <button onClick={() => deleteShot(shot)}>Delete</button> */}
        // </div>
    )
}