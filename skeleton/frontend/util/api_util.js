export const fetchAllPokemon = () => (
  $.ajax ({
    url: "/api/pokemon",
    method: "get",
  })
);

export const fetchOnePokemon = (id) => (
  $.ajax ({
    url: `/api/pokemon/${id}`,
    method: 'GET',
    dataType: 'json',
  })
);
