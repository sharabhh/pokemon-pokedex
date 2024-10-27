import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: Request, { params }: { params: { name: string } }) {
  const { name } = params; // Use the params object directly

  if (!name) {
    return NextResponse.json({ error: 'Name parameter is required.' }, { status: 400 });
  }

  try {
    const pokemon = await prisma.pokemon.findUnique({
      where: {
        name: name, // Use the name field which is unique
      },
    });

    if (!pokemon) {
      return NextResponse.json({ error: 'Pokemon not found.' }, { status: 404 });
    }

    // If `types` is an array, join it
    const types = Array.isArray(pokemon.types) ? pokemon.types.join(', ') : '';

    // Respond with the Pokémon data
    return NextResponse.json({
      id: pokemon.id,
      name: pokemon.name,
      types, // Join types into a string
      sprite: pokemon.sprite,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'An error occurred while fetching the Pokémon.' }, { status: 500 });
  }
}
