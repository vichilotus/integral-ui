import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    overwrite: true,
    schema: [
        'https://gateway.thegraph.com/api/2dd92aa51a427b78e573a140a3fa8376/subgraphs/id/gcCPc5579qYLoXDTPnCDUwFjzmBf5urdaGnxtj78Ahv',
        'https://gateway.thegraph.com/api/2dd92aa51a427b78e573a140a3fa8376/subgraphs/id/64DCU8nq48qdDABnobpDafsg7RF75Rx5soKrHiGA8mqp',
        'https://gateway.thegraph.com/api/2dd92aa51a427b78e573a140a3fa8376/subgraphs/id/56WLWCfdZ1ZEgFBwLboFUiDy8ZQFpaZ7bMLekUwnzxRB',
    ],
    documents: 'src/graphql/queries/!(*.d).{ts,tsx}',
    generates: {
        'src/graphql/generated/graphql.tsx': {
            plugins: [
                'typescript',
                'typescript-operations',
                'typescript-react-apollo',
            ],
            config: {
                withHooks: true,
                withResultType: true,
            },
        },
    },
};

export default config;
