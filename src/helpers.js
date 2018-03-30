export const sortPokemons = pokemons => pokemons.sort((a, b) => (
  a.id - b.id
));

export const findCurrPoke = (pokes, Id) => pokes.filter(poke => poke.id === Number(Id))[0];

export const filterPokemonsByType = (pokes, typeName) =>
  pokes.filter(poke => poke.type.filter(typeItem => typeItem === typeName)[0] === typeName);

export const splitByOffset = (pokes, activePage) => {
  switch (activePage) {
  case 1:
    return pokes.slice(0, 10);
  case 2:
    return pokes.slice(10, 20);
  case 3:
    return pokes.slice(20);
  default:
    break;
  }
};
