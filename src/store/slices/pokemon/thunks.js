import { pokemonApi } from "../../../api/pokemonApi";
import {  setPokemons ,startLoadingPokemons } from "./pokemonSlice"

export const getPokemons = (page = 0) => {
    return async(dispatch, getState) => {
        dispatch(startLoadingPokemons());

        //TODO: realizar peticion http
        const resp =  await pokemonApi.get(`pokemon?limit=10&offset=${page * 10 }`)
        console.log(resp);
        
        //data-pokemons


        dispatch(setPokemons({pokemons: DataTransfer.results, page: page + 1}));

    }
}