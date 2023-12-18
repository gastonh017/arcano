import { NextResponse } from "next/server";

export function GET() { 
  return NextResponse.json("Listando usuarios");
}

export function POST() {
  return NextResponse.json("Creando usuarios");
}

// export function PUT() {
//   return NextResponse.json("Modificando producto");
// }

// export function DELETE() {
//   return NextResponse.json("Eliminando producto");
// }
