import { ReactNode } from "react"

type Props = {
    children?: ReactNode
}

export default function Button(props: Props) {
    const {children} = props

    return (
        <button className="bg-gray-100 hover:bg-gray-300 rounded-lg text-black active:opacity-50">{children}</button>
    )
}
