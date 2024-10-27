import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type Props = {
  params: {
    name: string;
  };
};

export async function GET(
  request: NextRequest,
  context: Props
) {
  const { name } = context.params;

  if (!name) {
    return NextResponse.json({ error: 'Name parameter is required.' }, { status: 400 });
  }

  try {
    const pokemon = await prisma.pokemon.findUnique({
      where: {
        name: name,
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
      types,
      sprite: pokemon.sprite,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'An error occurred while fetching the Pokémon.' },
      { status: 500 }
    );
  }
}