import type { RequestHandler } from "@sveltejs/kit"
import { each, text } from "svelte/internal"
//TODO: persist in DATABASE
var todos: Todo[] = []

export const GET: RequestHandler<{}, {}> = () => {
    return {
        status: 200,
        body: todos
    }
}

export const POST: RequestHandler<{}, FormData> = async ({ request }) => {
    const res = await request.formData();
    const text1 = await res.get("text");
    todos.push({
        text: String(text1),
        created_at: new Date(),
        done: false,
    })
    // console.log(request.body.get("text"))
    console.log(text1)
    return {
        status: 303,
        headers: {
            location: "/"
        }
    }
}
