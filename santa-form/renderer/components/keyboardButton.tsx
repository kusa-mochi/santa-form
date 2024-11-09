type Props = {
    // key: number
    label: string
}

export default function KeyboardButton(props: Props) {
    return (
        <>
            <div className="w-12 h-12 bg-gray-500">
                {props.label}
            </div>
        </>
    )
}
