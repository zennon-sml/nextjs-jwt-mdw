export async function POST(req: Request) {
  const body = await req.json()
  const { email, password } = body
  return Response.json({})
}
