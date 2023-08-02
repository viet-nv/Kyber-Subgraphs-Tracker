export enum TAB {
  Elastic = 'elastic',
  Classic = 'classic',
  Block = 'block',
  Aggregator = 'aggregator',
  ELASTIC_LEGACY = 'elastic-legacy',
  FEE_COLLECTED = 'fee-collected',
}

export const config: {
  [key in TAB]: { network: string; kyberLink: string; thegraphLink: string }[]
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
      network: 'Velas',
      kyberLink:
        'https://velas-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-elastic-velas',
      thegraphLink: '',
    },
    {
      network: 'Oasis',
      kyberLink:
        'https://oasis-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-elastic-oasis',
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
      network: 'Velas',
      kyberLink:
        'https://velas-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-exchange-velas',
      thegraphLink: '',
    },
    {
      network: 'Oasis',
      kyberLink:
        'https://oasis-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-exchange-oasis',
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
      network: 'Velas',
      kyberLink:
        'https://velas-graph.kyberengineering.io/subgraphs/name/kybernetwork/velas-blocks',
      thegraphLink: '',
    },
    {
      network: 'Oasis',
      kyberLink:
        'https://oasis-graph.kyberengineering.io/subgraphs/name/kybernetwork/oasis-blocks',
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
      network: 'Velas',
      kyberLink:
        'https://velas-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-aggregator-velas',
      thegraphLink: '',
    },
    {
      network: 'Oasis',
      kyberLink:
        'https://oasis-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-aggregator-oasis',
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
  ],

  'elastic-legacy': [
    {
      network: 'Ethereum',
      kyberLink:
        'https://ethereum-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-elastic-ethereum-legacy',
      thegraphLink: '',
    },
    {
      network: 'BSC',
      kyberLink:
        'https://bsc-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-elastic-bsc-legacy',
      thegraphLink: '',
    },
    {
      network: 'Polygon',
      kyberLink:
        'https://polygon-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-elastic-polygon-legacy',
      thegraphLink: '',
    },
    {
      network: 'Avalanche',
      kyberLink:
        'https://avalanche-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-elastic-avalanche-legacy',
      thegraphLink: '',
    },
    {
      network: 'Arbitrum',
      kyberLink:
        'https://arbitrum-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-elastic-arbitrum-legacy',
      thegraphLink: '',
    },
    {
      network: 'Optimism',
      kyberLink:
        'https://optimism-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-elastic-optimism-legacy',
      thegraphLink: '',
    },
    {
      network: 'Fantom',
      kyberLink:
        'https://fantom-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-elastic-fantom-legacy',
      thegraphLink: '',
    },
    {
      network: 'BTTC',
      kyberLink:
        'https://bttc-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-elastic-bttc-legacy',
      thegraphLink: '',
    },
    {
      network: 'Cronos',
      kyberLink:
        'https://cronos-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-elastic-cronos-legacy',
      thegraphLink: '',
    },
    {
      network: 'Velas',
      kyberLink:
        'https://velas-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-elastic-velas-legacy',
      thegraphLink: '',
    },
    {
      network: 'Oasis',
      kyberLink:
        'https://oasis-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-elastic-oasis-legacy',
      thegraphLink: '',
    },
    {
      network: 'Aurora',
      kyberLink: '',
      thegraphLink: '',
    },
  ],

  'fee-collected': [
    {
      network: 'Ethereum',
      kyberLink:
        'https://ethereum-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyber-aggregator-executor-ethereum',
      thegraphLink: '',
    },
    {
      network: 'BSC',
      kyberLink:
        'https://bsc-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyber-aggregator-executor-bsc',
      thegraphLink: '',
    },
    {
      network: 'Polygon',
      kyberLink:
        'https://polygon-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyber-aggregator-executor-polygon',
      thegraphLink: '',
    },
    {
      network: 'Avalanche',
      kyberLink:
        'https://avalanche-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyber-aggregator-executor-avalanche',
      thegraphLink: '',
    },
    {
      network: 'Arbitrum',
      kyberLink:
        'https://arbitrum-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyber-aggregator-executor-arbitrum',
      thegraphLink: '',
    },
    {
      network: 'Optimism',
      kyberLink:
        'https://optimism-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyber-aggregator-executor-optimism',
      thegraphLink: '',
    },
    {
      network: 'Fantom',
      kyberLink:
        'https://fantom-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyber-aggregator-executor-fantom',
      thegraphLink: '',
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
      network: 'Velas',
      kyberLink: '',
      thegraphLink: '',
    },
    {
      network: 'Oasis',
      kyberLink:
        'https://oasis-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyber-aggregator-executor-oasis',
      thegraphLink: '',
    },
    {
      network: 'Aurora',
      kyberLink:
        'https://aurora-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyber-aggregator-executor-aurora/graphql',
      thegraphLink: '',
    },
  ],
}
