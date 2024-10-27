import { prisma } from './utils/prisma';

async function main() {
  await prisma.pokemon.createMany({
    data: [
      // {
      //   name: 'bulbasaur',
      //   types: ['grass'],
      //   sprite: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png',
      // },
      // {
      //   name: 'charmander',
      //   types: ['fire'],
      //   sprite: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png',
      // },
      // {
      //   name: 'squirtle',
      //   types: ['water'],
      //   sprite: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png',
      // },
      // {
      //   name: 'pikachu',
      //   types: ['Electric'],
      //   sprite: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png',
      // },
      // Add more Pokémon here...
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
