"use client"

import { useRouter } from "next/navigation"

export default function BackBtn() {
    const router = useRouter()
    return (
        <p onClick={() => router.back()} className="cursor-pointer"> ◄ Return to previous page</p>
    )
}