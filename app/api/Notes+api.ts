let data = [
        { id:1,
        text:"Test text 1"
        },
        { id:2,
        text:"Test text 2"
        },
        { id:3,
        text:"Test text 3"
        },
    ];
let id=3;
export function GET(request: Request) {
  return Response.json({ data});
}
export async function POST(request: Request) {
        const { text } = await request.json();
        if(!text) new Response("No content provided", { status: 400 });
        id=id+1;
        const newNote = {id,text}
        data.push(newNote)
        console.log(data)
        return Response.json( "Successfully posted: '"+ newNote.text +"'");

}
