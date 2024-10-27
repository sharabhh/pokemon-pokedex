import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface RouteParams {
  params: {
    name: string;
  };
}

export async function GET(
  request: Request,  // Changed to Request instead of NextRequest
  { params }: RouteParams
) {
  try {
    const pokemon = await prisma.pokemon.findUnique({
      where: {
        name: params.name,
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