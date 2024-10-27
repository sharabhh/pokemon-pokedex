import { prisma } from '../../../../prisma/utils/prisma';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const type = searchParams.get('type');

  let pokemonList;

  if (type) {
    pokemonList = await prisma.pokemon.findMany({
      where: {
        types: {
          has: type,
        },
      },
    });
  } else {
    pokemonList = await prisma.pokemon.findMany();
  }

  return NextResponse.json(pokemonList);
}
