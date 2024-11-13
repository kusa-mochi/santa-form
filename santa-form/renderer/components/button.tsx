import { ReactNode } from "react"

type Props = {
    children?: ReactNode
    onClick?: () => void
}

export default function Button(props: Props) {
    const {children, onClick} = props
    function buttonOnClick() {
        if (!onClick) return null
        else return onClick()
    }

    return (
        <button className="bg-gray-100 hover:bg-gray-300 rounded-lg text-black active:opacity-50" onClick={buttonOnClick}>{children}</button>
    )
}
