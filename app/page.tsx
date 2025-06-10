import PokemonWrapper from '@/components/pokemon-wrapper';

export default async function Home() {
  const initialPokemons = 100;
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-500 to-red-600">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-white mb-8">
          Pokédex
        </h1>
        <PokemonWrapper pokemons={initialPokemons} />
      </div>
    </div>
  );
}

