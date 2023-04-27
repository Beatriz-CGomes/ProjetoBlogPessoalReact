// primeira é o tipo da ação - 
//a payload armazena o token - segunda é infonração que a action vai levar
export type Action = { type: "ADD_TOKEN"; payload: string };

//uma função para enviar ao destino 
export const addToken = (token: string): Action => ({
    type: "ADD_TOKEN",
    payload: token,
});