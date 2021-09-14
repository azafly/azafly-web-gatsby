
import { ApolloClient, InMemoryCache, split, ApolloLink, HttpLink } from '@apollo/client';

import { WebSocketLink } from "@apollo/client/link/ws"
import { onError } from "@apollo/client/link/error";
import { getMainDefinition } from '@apollo/client/utilities';

const HTTPS_URL = process.env.REACT_APP_HASURA_GRAPHQL_HTTPS_URL as string
const WSS_URL = HTTPS_URL.replace(/^https?/, process.env.REACT_APP_ENV === 'dev' ? 'ws' : 'wss')


//log errors to the console
const logErrors = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
            console.log(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            )
        )
    if (networkError) console.log(`[Network error]: ${networkError}`)
})


// Instance of a cache
const cache = new InMemoryCache()

// pass authentication header when exists
const authMiddleware = new ApolloLink((operation: any, forward: any) => {
    console.log(localStorage.getItem('token'))
    if (localStorage.getItem('token')) {
        operation.setContext({
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
    }
    return forward(operation)
})



// Set up subscription
const wsLink = new WebSocketLink({
    uri: WSS_URL as string,
    options: {
        reconnect: true,
        connectionParams: {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }
    }
})

// Set up http link
const httpLink = new HttpLink({
    uri: HTTPS_URL,
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
})

// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
const link = split(
    // split based on operation type
    ({ query }) => {
        const { kind, operation }: any = getMainDefinition(query)
        return kind === 'OperationDefinition' && operation === 'subscription'
    },
    wsLink,
    httpLink

)

// Apollo
const client = new ApolloClient({
    link,
    cache,
})

export default client