export enum TAB {
  Elastic = 'elastic',
  Classic = 'classic',
  Block = 'block',
  Aggregator = 'aggregator',
  FEE_COLLECTED = 'fee-collected',
  limit_order = 'limit-order',
  knc_holders = 'knc-holders',
}

export const config: {
  [key in TAB]: {
    network: string
    kyberLink: string
    thegraphLink: string
  }[]
} = {
  elastic: [
    {
      network: 'Ethereum',
      kyberLink:
        'https://ethereum-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-elastic-ethereum',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/kyberswap-elastic-mainnet',
    },
    {
      network: 'BSC',
      kyberLink:
        'https://bsc-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-elastic-bsc',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/kyberswap-elastic-bsc',
    },
    {
      network: 'Polygon',
      kyberLink:
        'https://polygon-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-elastic-polygon',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/kyberswap-elastic-matic',
    },
    {
      network: 'Avalanche',
      kyberLink:
        'https://avalanche-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-elastic-avalanche',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/kyberswap-elastic-avalanche',
    },
    {
      network: 'Arbitrum',
      kyberLink:
        'https://arbitrum-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-elastic-arbitrum',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/kyberswap-elastic-arbitrum-one',
    },
    {
      network: 'Optimism',
      kyberLink:
        'https://optimism-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-elastic-optimism',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/kyberswap-elastic-optimism',
    },
    {
      network: 'Fantom',
      kyberLink:
        'https://fantom-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-elastic-fantom',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/kyberswap-elastic-fantom',
    },
    {
      network: 'BTTC',
      kyberLink:
        'https://bttc-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-elastic-bttc',
      thegraphLink: '',
    },
    {
      network: 'Cronos',
      kyberLink:
        'https://cronos-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-elastic-cronos',
      thegraphLink: '',
    },
    {
      network: 'Aurora',
      kyberLink: '',
      thegraphLink: '',
    },
    {
      network: 'Linea',
      kyberLink:
        'https://linea-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-elastic-linea',
      thegraphLink:
        'https://graph-query.linea.build/subgraphs/name/kybernetwork/kyberswap-elastic-linea',
    },
    {
      network: 'Polygon zkEvm',
      kyberLink:
        'https://polygon-zkevm-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-elastic-polygon-zkevm',
      thegraphLink: '',
    },
    {
      network: 'Base',
      kyberLink:
        'https://base-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-elastic-base',
      thegraphLink: '',
    },
    {
      network: 'Scroll',
      kyberLink:
        'https://subgraphs-proxy.kyberengineering.io/?subgraph=kyberswap-elastic-scroll&chain=scroll',
      thegraphLink: '',
    },
  ],
  classic: [
    {
      network: 'Ethereum',
      kyberLink:
        'https://ethereum-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-exchange-ethereum',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/kyberswap-exchange-ethereum',
    },
    {
      network: 'BSC',
      kyberLink:
        'https://bsc-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-exchange-bsc',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/kyberswap-exchange-bsc',
    },
    {
      network: 'Polygon',
      kyberLink:
        'https://polygon-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-exchange-polygon',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/kyberswap-exchange-polygon',
    },
    {
      network: 'Avalanche',
      kyberLink:
        'https://avalanche-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-exchange-avalanche',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/kyberswap-exchange-avalanche',
    },
    {
      network: 'Arbitrum',
      kyberLink:
        'https://arbitrum-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-exchange-arbitrum',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/viet-nv/kyberswap-arbitrum',
    },
    {
      network: 'Optimism',
      kyberLink:
        'https://optimism-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-exchange-optimism',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/kyberswap-exchange-optimism',
    },
    {
      network: 'Fantom',
      kyberLink:
        'https://fantom-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-exchange-fantom',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/kyberswap-exchange-fantom',
    },
    {
      network: 'BTTC',
      kyberLink:
        'https://bttc-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-exchange-bttc',
      thegraphLink: '',
    },
    {
      network: 'Cronos',
      kyberLink:
        'https://cronos-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-exchange-cronos',
      thegraphLink: '',
    },
    {
      network: 'Aurora',
      kyberLink:
        'https://aurora-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-exchange-aurora',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/kyberswap-exchange-aurora',
    },
    {
      network: 'ZkSync',
      kyberLink:
        'https://zksync-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-exchange-zksync',
      thegraphLink: '',
    },
    {
      network: 'Linea',
      kyberLink:
        'https://linea-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-classic-linea',
      thegraphLink:
        'https://graph-query.linea.build/subgraphs/name/kybernetwork/kyberswap-classic-linea',
    },
    {
      network: 'Polygon zkEvm',
      kyberLink:
        'https://polygon-zkevm-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-exchange-polygon-zkevm',
      thegraphLink: '',
    },
    {
      network: 'Scroll',
      kyberLink:
        'https://subgraphs-proxy.kyberengineering.io/?subgraph=kyberswap-exchange-scroll&chain=scroll',
      thegraphLink: '',
    },
  ],
  block: [
    {
      network: 'Ethereum',
      kyberLink:
        'https://ethereum-graph.kyberengineering.io/subgraphs/name/kybernetwork/ethereum-blocks',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/ethereum-blocks',
    },
    {
      network: 'BSC',
      kyberLink:
        'https://bsc-graph.kyberengineering.io/subgraphs/name/kybernetwork/bsc-blocks',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/bsc-blocks',
    },
    {
      network: 'Polygon',
      kyberLink:
        'https://polygon-graph.kyberengineering.io/subgraphs/name/kybernetwork/polygon-blocks',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/polygon-blocks',
    },
    {
      network: 'Avalanche',
      kyberLink:
        'https://avalanche-graph.kyberengineering.io/subgraphs/name/kybernetwork/avalanche-blocks',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/avalanche-blocks',
    },
    {
      network: 'Arbitrum',
      kyberLink:
        'https://arbitrum-graph.kyberengineering.io/subgraphs/name/kybernetwork/arbitrum-blocks',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/arbitrum-blocks',
    },
    {
      network: 'Optimism',
      kyberLink:
        'https://optimism-graph.kyberengineering.io/subgraphs/name/kybernetwork/optimism-blocks',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/optimism-blocks',
    },
    {
      network: 'Fantom',
      kyberLink:
        'https://fantom-graph.kyberengineering.io/subgraphs/name/kybernetwork/fantom-blocks',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/fantom-blocks',
    },
    {
      network: 'BTTC',
      kyberLink:
        'https://bttc-graph.kyberengineering.io/subgraphs/name/kybernetwork/bttc-blocks',
      thegraphLink: '',
    },
    {
      network: 'Cronos',
      kyberLink:
        'https://cronos-graph.kyberengineering.io/subgraphs/name/kybernetwork/cronos-blocks',
      thegraphLink: '',
    },
    {
      network: 'Aurora',
      kyberLink:
        'https://aurora-graph.kyberengineering.io/subgraphs/name/kybernetwork/aurora-blocks',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/aurora-blocks',
    },
    {
      network: 'ZkSync',
      kyberLink:
        'https://zksync-graph.kyberengineering.io/subgraphs/name/kybernetwork/zksync-blocks',
      thegraphLink: '',
    },
    {
      network: 'Linea',
      kyberLink:
        'https://linea-graph.kyberengineering.io/subgraphs/name/kybernetwork/linea-blocks',
      thegraphLink:
        'https://graph-query.linea.build/subgraphs/name/kybernetwork/linea-blocks',
    },
  ],

  aggregator: [
    {
      network: 'Ethereum',
      kyberLink:
        'https://ethereum-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-aggregator-ethereum',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/kyberswap-aggregator-ethereum',
    },
    {
      network: 'BSC',
      kyberLink:
        'https://bsc-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-aggregator-bsc',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/kyberswap-aggregator-bsc',
    },
    {
      network: 'Polygon',
      kyberLink:
        'https://polygon-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-aggregator-polygon',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/kyberswap-aggregator-polygon',
    },
    {
      network: 'Avalanche',
      kyberLink:
        'https://avalanche-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-aggregator-avalanche',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/kyberswap-aggregator-avalanche',
    },
    {
      network: 'Arbitrum',
      kyberLink:
        'https://arbitrum-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-aggregator-arbitrum',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/kyberswap-aggregator-arbitrum',
    },
    {
      network: 'Optimism',
      kyberLink:
        'https://optimism-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-aggregator-optimism',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/kyberswap-aggregator-optimism',
    },
    {
      network: 'Fantom',
      kyberLink:
        'https://fantom-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-aggregator-fantom',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/kyberswap-aggregator-fantom',
    },
    {
      network: 'BTTC',
      kyberLink:
        'https://bttc-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-aggregator-bttc',
      thegraphLink: '',
    },
    {
      network: 'Cronos',
      kyberLink:
        'https://cronos-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-aggregator-cronos',
      thegraphLink: '',
    },
    {
      network: 'Aurora',
      kyberLink:
        'https://aurora-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-aggregator-aurora',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/kyberswap-aggregator-aurora',
    },
    {
      network: 'ZkSync',
      kyberLink:
        'https://zksync-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-aggregator-zksync',
      thegraphLink: '',
    },
    {
      network: 'Linea',
      kyberLink:
        'https://linea-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-aggregator-zksync',
      thegraphLink:
        'https://graph-query.linea.build/subgraphs/name/kybernetwork/kyberswap-aggregator-linea',
    },
    {
      network: 'Polygon zkEvm',
      kyberLink:
        'https://polygon-zkevm-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-aggregator-polygon-zkevm',
      thegraphLink: '',
    },
    {
      network: 'Base',
      kyberLink:
        'https://base-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-aggregator-base',
      thegraphLink: '',
    },
    {
      network: 'Scroll',
      kyberLink:
        'https://subgraphs-proxy.dev.kyberengineering.io/?subgraph=kyberswap-aggregator-scroll&chain=scroll',
      thegraphLink: '',
    },
  ],

  'fee-collected': [
    {
      network: 'Ethereum',
      kyberLink:
        'https://ethereum-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyber-aggregator-executor-ethereum',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/ks-aggregator-fee-ethereum',
    },
    {
      network: 'BSC',
      kyberLink:
        'https://bsc-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyber-aggregator-executor-bsc',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/ks-aggregator-fee-bsc',
    },
    {
      network: 'Polygon',
      kyberLink:
        'https://polygon-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyber-aggregator-executor-polygon',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/ks-aggregator-fee-polygon',
    },
    {
      network: 'Avalanche',
      kyberLink:
        'https://avalanche-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyber-aggregator-executor-avalanche',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/ks-aggregator-fee-avalanche',
    },
    {
      network: 'Arbitrum',
      kyberLink:
        'https://arbitrum-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyber-aggregator-executor-arbitrum',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/ks-aggregator-fee-arbitrum',
    },
    {
      network: 'Optimism',
      kyberLink:
        'https://optimism-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyber-aggregator-executor-optimism',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/ks-aggregator-fee-optimism',
    },
    {
      network: 'Fantom',
      kyberLink:
        'https://fantom-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyber-aggregator-executor-fantom',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/ks-aggregator-fee-fantom',
    },
    {
      network: 'BTTC',
      kyberLink:
        'https://bttc-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyber-aggregator-executor-bttc',
      thegraphLink: '',
    },
    {
      network: 'Cronos',
      kyberLink:
        'https://cronos-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyber-aggregator-executor-cronos',
      thegraphLink: '',
    },
    {
      network: 'Aurora',
      kyberLink:
        'https://aurora-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyber-aggregator-executor-aurora/graphql',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/ks-aggregator-fee-aurora',
    },
  ],

  'limit-order': [
    {
      network: 'Ethereum',
      kyberLink:
        'https://ethereum-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-limit-order-ethereum',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/kyberswap-limit-order-ethereum',
    },
    {
      network: 'BSC',
      kyberLink: '',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/kyberswap-limit-order-bsc',
    },
    {
      network: 'Polygon',
      kyberLink:
        'https://polygon-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-limit-order-polygon',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/kyberswap-limit-order-polygon',
    },
    {
      network: 'Avalanche',
      kyberLink: '',
      thegraphLink: '',
    },
    {
      network: 'Arbitrum',
      kyberLink: '',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/kyberswap-limit-order-arbitrum',
    },
    {
      network: 'Optimism',
      kyberLink: '',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/kyberswap-limit-order-optimism',
    },
    {
      network: 'Fantom',
      kyberLink: '',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/kyberswap-limit-order-fantom',
    },
    {
      network: 'BTTC',
      kyberLink: '',
      thegraphLink: '',
    },
    {
      network: 'Cronos',
      kyberLink: '',
      thegraphLink: '',
    },
    {
      network: 'Linea',
      kyberLink: '',
      thegraphLink: '',
    },
  ],

  'knc-holders': [
    {
      network: 'Ethereum',
      kyberLink:
        'https://ethereum-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyber-knc-holders-ethereum',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/knc-holders-ethereum',
    },
    {
      network: 'BSC',
      kyberLink:
        'https://bsc-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyber-knc-holders-bsc',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/knc-holders-bsc',
    },
    {
      network: 'Polygon',
      kyberLink:
        'https://polygon-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyber-knc-holders-polygon',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/knc-holders-polygon',
    },
    {
      network: 'Avalanche',
      kyberLink:
        'https://polygon-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyber-knc-holders-polygon',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/knc-holders-avalanche',
    },
    {
      network: 'Abitrum',
      kyberLink:
        'https://polygon-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyber-knc-holders-polygon',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/knc-holders-arbitrum',
    },
    {
      network: 'Optimism',
      kyberLink:
        'https://optimism-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyber-knc-holders-optimism',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/knc-holders-optimism',
    },
    {
      network: 'BTTC',
      kyberLink:
        'https://bttc-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyber-knc-holders-bttc-bsc',
      thegraphLink: '',
    },
    {
      network: 'Linea',
      kyberLink:
        'https://linea-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyber-knc-holders-linea',
      thegraphLink: '',
    },
    {
      network: 'BTTC-E',
      kyberLink:
        'https://bttc-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyber-knc-holders-bttc-ethereum',
      thegraphLink: '',
    },
    {
      network: 'Fantom',
      kyberLink:
        'https://fantom-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyber-knc-holders-fantom',
      thegraphLink:
        'https://api.thegraph.com/subgraphs/name/kybernetwork/knc-holders-fantom',
    },
    {
      network: 'Scroll',
      kyberLink:
        'https://subgraphs-proxy.kyberengineering.io/?subgraph=kyber-knc-holders-scroll&chain=scroll',
      thegraphLink: '',
    },
  ],
}
