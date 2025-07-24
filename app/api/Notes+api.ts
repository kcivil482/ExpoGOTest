import  fs from "fs"

const readNotes = async () =>{
    const data = await fs.readFileSync('app/database.json', 'utf8')
    return JSON.parse(data)
}
const writeNotes = async (notes)=>{
    await fs.writeFileSync("app/database.json", JSON.stringify(notes, null, 2))
}
export async function GET(request: Request) {
    const notes = await readNotes()
    console.log("Database notes: ", notes)
    return Response.json(notes)
}
export async function POST(request: Request) {
    const { text } = await request.json()
    if(!text) new Response("No content provided", { status: 400 })

    const notes = await readNotes() 
    const id = notes.notes.length+1  
    const newNote = {id,text}
    notes.notes.push(newNote)
    await writeNotes(notes)
    return Response.json( "Successfully posted: '"+ newNote.text +"'")

}
