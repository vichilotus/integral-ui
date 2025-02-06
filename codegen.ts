import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    overwrite: true,
    schema: [
        'https://deploy.kiaora.xyz/subgraphs/name/analytics',
        'https://deploy.kiaora.xyz/subgraphs/name/blocklytics',
        'https://deploy.kiaora.xyz/subgraphs/name/farms',
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
