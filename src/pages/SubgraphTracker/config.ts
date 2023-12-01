export enum TAB {
  Elastic = 'elastic',
  Classic = 'classic',
  Block = 'block',
  Aggregator = 'aggregator',
  ELASTIC_LEGACY = 'elastic-legacy',
  FEE_COLLECTED = 'fee-collected',
  limit_order = 'limit-order',
  knc_holders = 'knc-holders',
}

export const config: {
  [key in TAB]: {
    network: string
    kyberLink: string
    thegraphLink: string
    alchemyLink: string
  }[]
} = {
  elastic: [
    {
      network: 'Ethereum',
      kyberLink:
        'https://ethereum-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-elastic-ethereum',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/kyberswap-elastic-mainnet',
      alchemyLink:
        'https://subgraphs-proxy.kyberengineering.io/?subgraph=kyberswap-elastic-mainnet&chain=ethereum',
    },
    {
      network: 'BSC',
      kyberLink:
        'https://bsc-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-elastic-bsc',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/kyberswap-elastic-bsc',
      alchemyLink: '',
    },
    {
      network: 'Polygon',
      kyberLink:
        'https://polygon-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-elastic-polygon',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/kyberswap-elastic-matic',
      alchemyLink:
        'https://subgraphs-proxy.kyberengineering.io/?subgraph=kyberswap-elastic-matic&chain=polygon',
    },
    {
      network: 'Avalanche',
      kyberLink:
        'https://avalanche-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-elastic-avalanche',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/kyberswap-elastic-avalanche',
      alchemyLink: '',
    },
    {
      network: 'Arbitrum',
      kyberLink:
        'https://arbitrum-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-elastic-arbitrum',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/kyberswap-elastic-arbitrum-one',
      alchemyLink:
        'https://subgraphs-proxy.kyberengineering.io/?subgraph=kyberswap-elastic-arbitrum-one&chain=arbitrum',
    },
    {
      network: 'Optimism',
      kyberLink:
        'https://optimism-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-elastic-optimism',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/kyberswap-elastic-optimism',
      alchemyLink:
        'https://subgraphs-proxy.kyberengineering.io/?subgraph=kyberswap-elastic-optimism&chain=optimism',
    },
    {
      network: 'Fantom',
      kyberLink:
        'https://fantom-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-elastic-fantom',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/kyberswap-elastic-fantom',
      alchemyLink: '',
    },
    {
      network: 'BTTC',
      kyberLink:
        'https://bttc-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-elastic-bttc',
      thegraphLink: '',
      alchemyLink: '',
    },
    {
      network: 'Cronos',
      kyberLink:
        'https://cronos-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-elastic-cronos',
      thegraphLink: '',
      alchemyLink: '',
    },
    {
      network: 'Aurora',
      kyberLink: '',
      thegraphLink: '',
      alchemyLink: '',
    },
    {
      network: 'Linea',
      kyberLink:
        'https://linea-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-elastic-linea',
      thegraphLink:
        'https://graph-query.linea.build/subgraphs/name/kybernetwork/kyberswap-elastic-linea',
      alchemyLink: '',
    },
    {
      network: 'Polygon zkEvm',
      kyberLink:
        'https://polygon-zkevm-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-elastic-polygon-zkevm',
      thegraphLink: '',
      alchemyLink: '',
    },
    {
      network: 'Base',
      kyberLink:
        'https://base-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-elastic-base',
      thegraphLink: '',
      alchemyLink: '',
    },
    {
      network: 'Scroll',
      kyberLink:
        'https://subgraphs-proxy.kyberengineering.io/?subgraph=kyberswap-elastic-scroll&chain=scroll',
      thegraphLink: '',
      alchemyLink: '',
    },
  ],
  classic: [
    {
      network: 'Ethereum',
      kyberLink:
        'https://ethereum-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-exchange-ethereum',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/kyberswap-exchange-ethereum',
      alchemyLink:
        'https://subgraphs-proxy.kyberengineering.io/?subgraph=kyberswap-exchange-mainnet&chain=ethereum',
    },
    {
      network: 'BSC',
      kyberLink:
        'https://bsc-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-exchange-bsc',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/kyberswap-exchange-bsc',
      alchemyLink: '',
    },
    {
      network: 'Polygon',
      kyberLink:
        'https://polygon-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-exchange-polygon',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/kyberswap-exchange-polygon',
      alchemyLink:
        'https://subgraphs-proxy.kyberengineering.io/?subgraph=kyberswap-exchange-matic&chain=polygon',
    },
    {
      network: 'Avalanche',
      kyberLink:
        'https://avalanche-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-exchange-avalanche',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/kyberswap-exchange-avalanche',
      alchemyLink: '',
    },
    {
      network: 'Arbitrum',
      kyberLink:
        'https://arbitrum-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-exchange-arbitrum',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/viet-nv/kyberswap-arbitrum',
      alchemyLink:
        'https://subgraphs-proxy.kyberengineering.io/?subgraph=kyberswap-exchange-arbitrum-one&chain=arbitrum',
    },
    {
      network: 'Optimism',
      kyberLink:
        'https://optimism-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-exchange-optimism',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/kyberswap-exchange-optimism',
      alchemyLink:
        'https://subgraphs-proxy.kyberengineering.io/?subgraph=kyberswap-exchange-optimism&chain=optimism',
    },
    {
      network: 'Fantom',
      kyberLink:
        'https://fantom-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-exchange-fantom',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/kyberswap-exchange-fantom',
      alchemyLink: '',
    },
    {
      network: 'BTTC',
      kyberLink:
        'https://bttc-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-exchange-bttc',
      thegraphLink: '',
      alchemyLink: '',
    },
    {
      network: 'Cronos',
      kyberLink:
        'https://cronos-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-exchange-cronos',
      thegraphLink: '',
      alchemyLink: '',
    },
    {
      network: 'Aurora',
      kyberLink:
        'https://aurora-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-exchange-aurora',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/kyberswap-exchange-aurora',
      alchemyLink: '',
    },
    {
      network: 'ZkSync',
      kyberLink:
        'https://zksync-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-exchange-zksync',
      thegraphLink: '',
      alchemyLink: '',
    },
    {
      network: 'Linea',
      kyberLink:
        'https://linea-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-classic-linea',
      thegraphLink:
        'https://graph-query.linea.build/subgraphs/name/kybernetwork/kyberswap-classic-linea',
      alchemyLink: '',
    },
    {
      network: 'Polygon zkEvm',
      kyberLink:
        'https://polygon-zkevm-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-exchange-polygon-zkevm',
      thegraphLink: '',
      alchemyLink: '',
    },
    {
      network: 'Scroll',
      kyberLink:
        'https://subgraphs-proxy.kyberengineering.io/?subgraph=kyberswap-exchange-scroll&chain=scroll',
      thegraphLink: '',
      alchemyLink: '',
    },
  ],
  block: [
    {
      network: 'Ethereum',
      kyberLink:
        'https://ethereum-graph.kyberengineering.io/subgraphs/name/kybernetwork/ethereum-blocks',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/ethereum-blocks',
      alchemyLink:
        'https://subgraphs-proxy.kyberengineering.io/?subgraph=ethereum-blocks&chain=ethereum',
    },
    {
      network: 'BSC',
      kyberLink:
        'https://bsc-graph.kyberengineering.io/subgraphs/name/kybernetwork/bsc-blocks',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/bsc-blocks',
      alchemyLink: '',
    },
    {
      network: 'Polygon',
      kyberLink:
        'https://polygon-graph.kyberengineering.io/subgraphs/name/kybernetwork/polygon-blocks',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/polygon-blocks',
      alchemyLink:
        'https://subgraphs-proxy.kyberengineering.io/?subgraph=polygon-blocks&chain=polygon',
    },
    {
      network: 'Avalanche',
      kyberLink:
        'https://avalanche-graph.kyberengineering.io/subgraphs/name/kybernetwork/avalanche-blocks',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/avalanche-blocks',
      alchemyLink: '',
    },
    {
      network: 'Arbitrum',
      kyberLink:
        'https://arbitrum-graph.kyberengineering.io/subgraphs/name/kybernetwork/arbitrum-blocks',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/arbitrum-blocks',
      alchemyLink:
        'https://subgraphs-proxy.kyberengineering.io/?subgraph=arbitrum-blocks&chain=arbitrum',
    },
    {
      network: 'Optimism',
      kyberLink:
        'https://optimism-graph.kyberengineering.io/subgraphs/name/kybernetwork/optimism-blocks',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/optimism-blocks',
      alchemyLink:
        'https://subgraphs-proxy.kyberengineering.io/?subgraph=optimism-blocks&chain=optimism',
    },
    {
      network: 'Fantom',
      kyberLink:
        'https://fantom-graph.kyberengineering.io/subgraphs/name/kybernetwork/fantom-blocks',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/fantom-blocks',
      alchemyLink: '',
    },
    {
      network: 'BTTC',
      kyberLink:
        'https://bttc-graph.kyberengineering.io/subgraphs/name/kybernetwork/bttc-blocks',
      thegraphLink: '',
      alchemyLink: '',
    },
    {
      network: 'Cronos',
      kyberLink:
        'https://cronos-graph.kyberengineering.io/subgraphs/name/kybernetwork/cronos-blocks',
      thegraphLink: '',
      alchemyLink: '',
    },
    {
      network: 'Aurora',
      kyberLink:
        'https://aurora-graph.kyberengineering.io/subgraphs/name/kybernetwork/aurora-blocks',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/aurora-blocks',
      alchemyLink: '',
    },
    {
      network: 'ZkSync',
      kyberLink:
        'https://zksync-graph.kyberengineering.io/subgraphs/name/kybernetwork/zksync-blocks',
      thegraphLink: '',
      alchemyLink: '',
    },
    {
      network: 'Linea',
      kyberLink:
        'https://linea-graph.kyberengineering.io/subgraphs/name/kybernetwork/linea-blocks',
      thegraphLink:
        'https://graph-query.linea.build/subgraphs/name/kybernetwork/linea-blocks',
      alchemyLink: '',
    },
  ],

  aggregator: [
    {
      network: 'Ethereum',
      kyberLink:
        'https://ethereum-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-aggregator-ethereum',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/kyberswap-aggregator-ethereum',
      alchemyLink:
        'https://subgraphs-proxy.kyberengineering.io/?subgraph=kyberswap-aggregator-ethereum&chain=ethereum',
    },
    {
      network: 'BSC',
      kyberLink:
        'https://bsc-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-aggregator-bsc',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/kyberswap-aggregator-bsc',
      alchemyLink: '',
    },
    {
      network: 'Polygon',
      kyberLink:
        'https://polygon-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-aggregator-polygon',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/kyberswap-aggregator-polygon',
      alchemyLink:
        'https://subgraphs-proxy.kyberengineering.io/?subgraph=kyberswap-aggregator-polygon&chain=polygon',
    },
    {
      network: 'Avalanche',
      kyberLink:
        'https://avalanche-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-aggregator-avalanche',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/kyberswap-aggregator-avalanche',
      alchemyLink: '',
    },
    {
      network: 'Arbitrum',
      kyberLink:
        'https://arbitrum-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-aggregator-arbitrum',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/kyberswap-aggregator-arbitrum',
      alchemyLink:
        'https://subgraphs-proxy.kyberengineering.io/?subgraph=kyberswap-aggregator-arbitrum&chain=arbitrum',
    },
    {
      network: 'Optimism',
      kyberLink:
        'https://optimism-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-aggregator-optimism',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/kyberswap-aggregator-optimism',
      alchemyLink:
        'https://subgraphs-proxy.kyberengineering.io/?subgraph=kyberswap-aggregator-optimism&chain=optimism',
    },
    {
      network: 'Fantom',
      kyberLink:
        'https://fantom-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-aggregator-fantom',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/kyberswap-aggregator-fantom',
      alchemyLink: '',
    },
    {
      network: 'BTTC',
      kyberLink:
        'https://bttc-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-aggregator-bttc',
      thegraphLink: '',
      alchemyLink: '',
    },
    {
      network: 'Cronos',
      kyberLink:
        'https://cronos-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-aggregator-cronos',
      thegraphLink: '',
      alchemyLink: '',
    },
    {
      network: 'Aurora',
      kyberLink:
        'https://aurora-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-aggregator-aurora',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/kyberswap-aggregator-aurora',
      alchemyLink: '',
    },
    {
      network: 'ZkSync',
      kyberLink:
        'https://zksync-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-aggregator-zksync',
      thegraphLink: '',
      alchemyLink: '',
    },
    {
      network: 'Linea',
      kyberLink:
        'https://linea-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-aggregator-zksync',
      thegraphLink:
        'https://graph-query.linea.build/subgraphs/name/kybernetwork/kyberswap-aggregator-linea',
      alchemyLink: '',
    },
    {
      network: 'Polygon zkEvm',
      kyberLink:
        'https://polygon-zkevm-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-aggregator-polygon-zkevm',
      thegraphLink: '',
      alchemyLink: '',
    },
    {
      network: 'Base',
      kyberLink:
        'https://base-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-aggregator-base',
      thegraphLink: '',
      alchemyLink: '',
    },
    {
      network: 'Scroll',
      kyberLink:
        'https://subgraphs-proxy.dev.kyberengineering.io/?subgraph=kyberswap-aggregator-scroll&chain=scroll',
      thegraphLink: '',
      alchemyLink: '',
    },
  ],

  'elastic-legacy': [
    {
      network: 'Ethereum',
      kyberLink:
        'https://ethereum-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-elastic-ethereum-legacy',
      thegraphLink: '',
      alchemyLink:
        'https://subgraphs-proxy.kyberengineering.io/?subgraph=kyberswap-elastic-mainnet-legacy&chain=ethereum',
    },
    {
      network: 'BSC',
      kyberLink:
        'https://bsc-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-elastic-bsc-legacy',
      thegraphLink: '',
      alchemyLink: '',
    },
    {
      network: 'Polygon',
      kyberLink:
        'https://polygon-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-elastic-polygon-legacy',
      thegraphLink: '',
      alchemyLink:
        'https://subgraphs-proxy.kyberengineering.io/?subgraph=kyberswap-elastic-matic-legacy&chain=polygon',
    },
    {
      network: 'Avalanche',
      kyberLink:
        'https://avalanche-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-elastic-avalanche-legacy',
      thegraphLink: '',
      alchemyLink: '',
    },
    {
      network: 'Arbitrum',
      kyberLink:
        'https://arbitrum-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-elastic-arbitrum-legacy',
      thegraphLink: '',
      alchemyLink:
        'https://subgraphs-proxy.kyberengineering.io/?subgraph=kyberswap-elastic-arbitrum-one-legacy&chain=arbitrum',
    },
    {
      network: 'Optimism',
      kyberLink:
        'https://optimism-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-elastic-optimism-legacy',
      thegraphLink: '',
      alchemyLink:
        'https://subgraphs-proxy.kyberengineering.io/?subgraph=kyberswap-elastic-optimism-legacy&chain=optimism',
    },
    {
      network: 'Fantom',
      kyberLink:
        'https://fantom-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-elastic-fantom-legacy',
      thegraphLink: '',
      alchemyLink: '',
    },
    {
      network: 'BTTC',
      kyberLink:
        'https://bttc-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-elastic-bttc-legacy',
      thegraphLink: '',
      alchemyLink: '',
    },
    {
      network: 'Cronos',
      kyberLink:
        'https://cronos-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-elastic-cronos-legacy',
      thegraphLink: '',
      alchemyLink: '',
    },
    {
      network: 'Aurora',
      kyberLink: '',
      thegraphLink: '',
      alchemyLink: '',
    },
  ],

  'fee-collected': [
    {
      network: 'Ethereum',
      kyberLink:
        'https://ethereum-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyber-aggregator-executor-ethereum',
      thegraphLink: '',
      alchemyLink:
        'https://subgraphs-proxy.kyberengineering.io/?subgraph=kyber-aggregator-executor-ethereum&chain=ethereum',
    },
    {
      network: 'BSC',
      kyberLink:
        'https://bsc-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyber-aggregator-executor-bsc',
      thegraphLink: '',
      alchemyLink: '',
    },
    {
      network: 'Polygon',
      kyberLink:
        'https://polygon-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyber-aggregator-executor-polygon',
      thegraphLink: '',
      alchemyLink:
        'https://subgraphs-proxy.kyberengineering.io/?subgraph=kyber-aggregator-executor-polygon&chain=polygon',
    },
    {
      network: 'Avalanche',
      kyberLink:
        'https://avalanche-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyber-aggregator-executor-avalanche',
      thegraphLink: '',
      alchemyLink: '',
    },
    {
      network: 'Arbitrum',
      kyberLink:
        'https://arbitrum-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyber-aggregator-executor-arbitrum',
      thegraphLink: '',
      alchemyLink:
        'https://subgraphs-proxy.kyberengineering.io/?subgraph=kyber-aggregator-executor-arbitrum&chain=arbitrum',
    },
    {
      network: 'Optimism',
      kyberLink:
        'https://optimism-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyber-aggregator-executor-optimism',
      thegraphLink: '',
      alchemyLink:
        'https://subgraphs-proxy.kyberengineering.io/?subgraph=kyber-aggregator-executor-optimism&chain=optimism',
    },
    {
      network: 'Fantom',
      kyberLink:
        'https://fantom-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyber-aggregator-executor-fantom',
      thegraphLink: '',
      alchemyLink: '',
    },
    {
      network: 'BTTC',
      kyberLink:
        'https://bttc-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyber-aggregator-executor-bttc',
      thegraphLink: '',
      alchemyLink: '',
    },
    {
      network: 'Cronos',
      kyberLink:
        'https://cronos-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyber-aggregator-executor-cronos',
      thegraphLink: '',
      alchemyLink: '',
    },
    {
      network: 'Aurora',
      kyberLink:
        'https://aurora-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyber-aggregator-executor-aurora/graphql',
      thegraphLink: '',
      alchemyLink: '',
    },
  ],

  'limit-order': [
    {
      network: 'Ethereum',
      kyberLink:
        'https://ethereum-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-limit-order-ethereum',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/kyberswap-limit-order-ethereum',
      alchemyLink:
        'https://subgraphs-proxy.kyberengineering.io/?subgraph=kyberswap-limit-order-ethereum&chain=ethereum',
    },
    {
      network: 'BSC',
      kyberLink: '',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/kyberswap-limit-order-bsc',
      alchemyLink: '',
    },
    {
      network: 'Polygon',
      kyberLink:
        'https://polygon-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-limit-order-polygon',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/kyberswap-limit-order-polygon',
      alchemyLink:
        'https://subgraphs-proxy.kyberengineering.io/?subgraph=kyberswap-limit-order-polygon&chain=polygon',
    },
    {
      network: 'Avalanche',
      kyberLink: '',
      thegraphLink: '',
      alchemyLink: '',
    },
    {
      network: 'Arbitrum',
      kyberLink: '',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/kyberswap-limit-order-arbitrum',
      alchemyLink:
        'https://subgraphs-proxy.kyberengineering.io/?subgraph=kyberswap-limit-order-arbitrum&chain=arbitrum',
    },
    {
      network: 'Optimism',
      kyberLink: '',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/kyberswap-limit-order-optimism',
      alchemyLink:
        'https://subgraphs-proxy.kyberengineering.io/?subgraph=kyberswap-limit-order-optimism&chain=optimism',
    },
    {
      network: 'Fantom',
      kyberLink: '',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/kyberswap-limit-order-fantom',
      alchemyLink: '',
    },
    {
      network: 'BTTC',
      kyberLink: '',
      thegraphLink: '',
      alchemyLink: '',
    },
    {
      network: 'Cronos',
      kyberLink: '',
      thegraphLink: '',
      alchemyLink: '',
    },
    {
      network: 'Linea',
      kyberLink: '',
      thegraphLink: '',
      alchemyLink: '',
    },
  ],

  'knc-holders': [
    {
      network: 'Ethereum',
      kyberLink:
        'https://ethereum-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyber-knc-holders-ethereum',
      thegraphLink: '',
      alchemyLink:
        'https://subgraphs-proxys.kyberengineering.io/?subgraph=kyber-knc-holders-ethereum&chain=ethereum',
    },
    {
      network: 'BSC',
      kyberLink:
        'https://bsc-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyber-knc-holders-bsc',
      thegraphLink: '',
      alchemyLink: '',
    },
    {
      network: 'Polygon',
      kyberLink:
        'https://polygon-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyber-knc-holders-polygon',
      thegraphLink: '',
      alchemyLink:
        'https://subgraphs-proxy.kyberengineering.io/?subgraph=kyber-knc-holders-polygon&chain=polygon',
    },
    {
      network: 'Avalanche',
      kyberLink:
        'https://polygon-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyber-knc-holders-polygon',
      thegraphLink: '',
      alchemyLink: '',
    },
    {
      network: 'Abitrum',
      kyberLink:
        'https://polygon-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyber-knc-holders-polygon',
      thegraphLink: '',
      alchemyLink:
        'https://subgraphs-proxy.kyberengineering.io/?subgraph=kyber-knc-holders-arbitrum&chain=arbitrum',
    },
    {
      network: 'Optimism',
      kyberLink:
        'https://optimism-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyber-knc-holders-optimism',
      thegraphLink: '',
      alchemyLink:
        'https://subgraphs-proxy.kyberengineering.io/?subgraph=kyber-knc-holders-optimism&chain=optimism',
    },
    {
      network: 'BTTC',
      kyberLink:
        'https://bttc-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyber-knc-holders-bttc-bsc',
      thegraphLink: '',
      alchemyLink: '',
    },
    {
      network: 'Linea',
      kyberLink:
        'https://linea-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyber-knc-holders-linea',
      thegraphLink: '',
      alchemyLink: '',
    },
    {
      network: 'BTTC-E',
      kyberLink:
        'https://bttc-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyber-knc-holders-bttc-ethereum',
      thegraphLink: '',
      alchemyLink: '',
    },
    {
      network: 'Fantom',
      kyberLink:
        'https://fantom-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyber-knc-holders-fantom',
      thegraphLink: '',
      alchemyLink: '',
    },
    {
      network: 'Scroll',
      kyberLink:
        'https://subgraphs-proxy.kyberengineering.io/?subgraph=kyber-knc-holders-scroll&chain=scroll',
      thegraphLink: '',
      alchemyLink: '',
    },
  ],
}
