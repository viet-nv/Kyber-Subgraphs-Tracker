export enum TAB {
  Elastic = 'elastic',
  Classic = 'classic',
  Block = 'block',
  Aggregator = 'aggregator',
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
        'https://avalanche-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-exchange-avalanche',
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
  ],
}
