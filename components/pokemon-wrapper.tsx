'use client';

import { Pokemon } from '@/utils/types';
import { useState, useEffect } from 'react';
import { PokemonList } from './pokemon-list';
import SearchInput from './search-input';
import { getPokemonData } from '@/app/page';

interface PokemonWrapperProps {
  pokemons: number;
}

export default function PokemonWrapper({ pokemons: initialNumber }: PokemonWrapperProps) {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([]);
  const [currentNumber, setCurrentNumber] = useState(initialNumber);
  const [nameSearch, setNameSearch] = useState('');
  const [idSearch, setIdSearch] = useState('');

  useEffect(() => {
    getPokemonData(currentNumber).then((newPokemons) => {
      setPokemonList(newPokemons);
      setFilteredPokemons(newPokemons);
    });
  }, [currentNumber]);

  const handleSearch = (search: string) => {
    const filtered = pokemonList.filter((pokemon) => {
      const matchesName = pokemon.name.toLowerCase().includes(nameSearch.toLowerCase());
      const matchesId = pokemon.id.toString().includes(idSearch);
      
      if (nameSearch && idSearch) {
        return matchesName && matchesId;
      } else if (nameSearch) {
        return matchesName;
      } else if (idSearch) {
        return matchesId;
      }
      return true;
    });
    setFilteredPokemons(filtered);
  };

  useEffect(() => {
    handleSearch('');
  }, [nameSearch, idSearch]);

  return (
    <div>
      <div className="flex flex-col space-y-4">
        <div className="flex space-x-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">Search by Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
              value={nameSearch}
              onChange={(e) => setNameSearch(e.target.value)}
              placeholder="Enter Pokemon name..."
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">Search by Number</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
              value={idSearch}
              onChange={(e) => setIdSearch(e.target.value)}
              placeholder="Enter Pokemon number..."
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-4 mb-6">
        <p className="text-gray-700 mb-2">Enter the number of Pokémon to display (max 100):</p>
        <input
          type="number"
          min="1"
          max="100"
          className="w-32 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
          value={currentNumber}
          onChange={(e) => {
            setCurrentNumber(parseInt(e.target.value));
          }}
        />
      </div>
      <PokemonList pokemons={filteredPokemons} />
    </div>
  );
}
