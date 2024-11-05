import { useState } from "react";
import KeyboardButton from "./keyboardButton";

export default function HiraganaKeyboard() {
    const charCols: string[][] = [
        ["0", "あ", "い", "う", "え", "お"],
        ["9", "か", "き", "く", "け", "こ"],
        ["8", "さ", "し", "す", "せ", "そ"],
        ["7", "た", "ち", "つ", "て", "と"],
        ["6", "な", "に", "ぬ", "ね", "の"],
        ["5", "は", "ひ", "ふ", "へ", "ほ"],
        ["4", "ま", "み", "む", "め", "も"],
        ["3", "や", null, "ゆ", null, "よ", "゜"],
        ["2", "ら", "り", "る", "れ", "ろ", "゛"],
        ["1", "わ", "を", "ん", "ー", "　", "⬆"],
    ]
    const smallCharCols: string[][] = [
        ["0", "ぁ", "ぃ", "ぅ", "ぇ", "ぉ"],
        ["9", null, null, null, null, null],
        ["8", null, null, null, null, null],
        ["7", null, null, null, null, null],
        ["6", null, null, null, null, null],
        ["5", null, null, null, null, null],
        ["4", null, null, null, null, null],
        ["3", "ゃ", null, "ゅ", null, "ょ", null],
        ["2", null, null, null, null, null, null],
        ["1", null, null, null, null, null, "⬆"],
    ]
    const [isSmallChar, setIsSmallChar] = useState(false)
    const numCol: number = 10
    const numRow: number = 7
    return (
        <>
            <div className="grid grid-cols-10 grid-rows-7">{
                !isSmallChar &&
                charCols.map((col, i) => {
                    return col.map((row, j) => {
                        return (
                            <div className={`col-start-${i+1} row-start-${j+1} col-span-1 row-span-1`}>
                                {row}
                                <KeyboardButton key={row} width={25} height={25}/>
                            </div>
                        )
                    })
                })
            }{
                isSmallChar &&
                smallCharCols.map((col, i) => {
                    return col.map((row, j) => {
                        return (
                            <div className={`col-start-${i+1} row-start-${j+1} col-span-1 row-span-1`}>
                                {row}
                                <KeyboardButton key={row} width={25} height={25}/>
                            </div>
                        )
                    })
                })
            }</div>
        </>
    )
}
