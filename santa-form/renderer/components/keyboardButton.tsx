type Props = {
    key: string
    width: number
    height: number
}

export default function KeyboardButton(props: Props) {
    return (
        <>
            <div>
                {props.key}
            </div>
        </>
    )
}
