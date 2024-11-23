import { addPosts, getPosts } from "@/app/lib/data"
import { NextResponse } from "next/server"

export const GET = async (req) => {
    try {
        const posts = getPosts()
        return NextResponse.json(
            { message: "ok", posts },
            { status: 200 }
        )

    } catch (error) {
        return NextResponse.json(
            { message: "Error", err },
            { status: 500 }
        )
    }
}

export const POST = async (req) => {
    // console.log("Anas Raza POST Api Request")

    const { name, discription, title } = await req.json()
    try {
        const post = { name, discription, title, id: Date.now().toString() }
        addPosts(post)
        return NextResponse.json(
            { message: "ok", post },
            { status: 200 }
        )
 
    } catch (error) {
        return NextResponse.json(
            { message: "Error", err },
            { status: 500 }
        )
    }
}