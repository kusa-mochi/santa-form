import React from "react"

type Props = {
    label: string
    onClick: (keyLabel: string) => void
}

export default function KeyboardButton(props: Props) {
    return (
        <>
            {props.label !== null &&
            <button onClick={() => props.onClick(props.label)} className="w-12 h-12 bg-gray-500 flex justify-center items-center text-3xl select-none hover:bg-gray-600 active:bg-gray-700">
                {props.label}
            </button>}
            {props.label === null &&
            <div className="w-12 h-12">
                {/* no content */}
            </div>}
        </>
    )
}
