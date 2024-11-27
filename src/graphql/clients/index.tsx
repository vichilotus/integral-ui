import { ApolloClient, InMemoryCache } from '@apollo/client';

export const infoClientTestnet = new ApolloClient({
    uri: import.meta.env.VITE_INFO_GRAPH_TESTNET,
    cache: new InMemoryCache(),
});

export const blocksClientTestnet = new ApolloClient({
    uri: import.meta.env.VITE_BLOCKS_GRAPH_TESTNET,
    cache: new InMemoryCache(),
});

export const farmingClientTestnet = new ApolloClient({
    uri: import.meta.env.VITE_FARMING_GRAPH_TESTNET,
    cache: new InMemoryCache(),
});

export const infoClientMainnet = new ApolloClient({
    uri: import.meta.env.VITE_INFO_GRAPH_MAINNET,
    cache: new InMemoryCache(),
});

export const blocksClientMainnet = new ApolloClient({
    uri: import.meta.env.VITE_BLOCKS_GRAPH_MAINNET,
    cache: new InMemoryCache(),
});

export const farmingClientMainnet = new ApolloClient({
    uri: import.meta.env.VITE_FARMING_GRAPH_MAINNET,
    cache: new InMemoryCache(),
});
