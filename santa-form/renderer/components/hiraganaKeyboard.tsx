import React, { useState } from "react";
import KeyboardButton from "./keyboardButton";

type Props = {
    onClick: (keyLabel: string) => void
}

export default function HiraganaKeyboard(props: Props) {
    const charRows: string[][] = [
        ["1","2","3","4","5","6","7","8","9","0"],
        ["わ","ら","や","ま","は","な","た","さ","か","あ"],
        ["を","り",null,"み","ひ","に","ち","し","き","い"],
        ["ん","る","ゆ","む","ふ","ぬ","つ","す","く","う"],
        ["ー","れ",null,"め","へ","ね","て","せ","け","え"],
        ["　","ろ","よ","も","ほ","の","と","そ","こ","お"],
        ["↑","゛","゜",null,null,null,null,null,null,null],
    ]
    const smallCharRows: string[][] = [
        ["1","2","3","4","5","6","7","8","9","0"],
        [null,null,"ゃ",null,null,null,null,null,null,"ぁ"],
        [null,null,null,null,null,null,null,null,null,"ぃ"],
        [null,null,"ゅ",null,null,null,null,null,null,"ぅ"],
        [null,null,null,null,null,null,null,null,null,"ぇ"],
        [null,null,"ょ",null,null,null,null,null,null,"ぉ"],
        ["↑",null,null,null,null,null,null,null,null,null],
    ]
    const [isSmallChar, setIsSmallChar] = useState(false)
    const numCol: number = 10
    const numRow: number = 7
    return (
        <>
            <div className="grid grid-cols-10 grid-rows-7 gap-1">{
                !isSmallChar &&
                charRows.map((row, i) => {
                    return row.map((col, j) => {
                        if (col === "↑") {
                            return (
                                <div key={(numRow * i) + j}>
                                    <KeyboardButton onClick={() => setIsSmallChar(!isSmallChar)} label={col}/>
                                </div>
                            )
                        } else {
                            return (
                                <div key={(numRow * i) + j}>
                                    <KeyboardButton onClick={props.onClick} label={col}/>
                                </div>
                            )
                        }
                    })
                })
            }{
                isSmallChar &&
                smallCharRows.map((row, i) => {
                    return row.map((col, j) => {
                        if (col === "↑") {
                            return (
                                <div key={(numRow * i) + j}>
                                    <KeyboardButton onClick={() => setIsSmallChar(!isSmallChar)} label={col}/>
                                </div>
                            )
                        } else {
                            return (
                                <div key={(numRow * i) + j}>
                                    <KeyboardButton onClick={props.onClick} label={col}/>
                                </div>
                            )
                        }
                    })
                })
            }</div>
        </>
    )
}
