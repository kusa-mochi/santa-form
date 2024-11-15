import { ReactNode } from "react"

type Props = {
    children?: ReactNode
    primary?: boolean
    onClick?: () => void
}

export default function Button(props: Props) {
    const {children, primary, onClick} = props
    function buttonOnClick() {
        if (!onClick) return null
        else return onClick()
    }

    return (
        <button className={`${primary ? "bg-emerald-300 hover:bg-emerald-400" : "bg-gray-100 hover:bg-gray-300"} text-2xl p-4 rounded-lg text-black active:opacity-50`} onClick={buttonOnClick}>{children}</button>
    )
}
