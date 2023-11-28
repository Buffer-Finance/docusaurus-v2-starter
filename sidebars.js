module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'introduction', 
      label: 'Introduction',
    },
    {
      type: 'category',
      label: '📈 TRADING', 
      collapsible: false,
      items: [
        {
          type: 'category',
          label: '↕️ Up & Down Options',
          items: [
            'trading/up-&-down-options/what-are-up-down-options', 
            'trading/up-&-down-options/multi-asset-collateral',  
            'trading/up-&-down-options/order-types',            
            'trading/up-&-down-options/pair-list',              
            'trading/up-&-down-options/market-schedule',        
            'trading/up-&-down-options/trading-parameters',    
            'trading/up-&-down-options/advanced-features',      
            'trading/up-&-down-options/order-settlement',
            'trading/up-&-down-options/fee',    
          ],
        },
        {
          type: 'category',
          label: '🔄 Perpetual Futures',
          items: [
            'trading/perpetual-futures/what-are-perpetual-futures', 
            'trading/perpetual-futures/collateral',
            'trading/perpetual-futures/pair-list',
            'trading/perpetual-futures/leverage',
            'trading/perpetual-futures/funding-curve',
            'trading/perpetual-futures/liquidation',
            'trading/perpetual-futures/fee',
          ],
        },
        {
          type: 'category',
          label: '🎁 Trader Incentives',
          items: [
            'trading/trader-incentives/referral-program',
            'trading/trader-incentives/optopi-collection',
          ],
        },
        {
          type: 'doc',
          id: 'trading/tournaments',
          label: 'No Loss Tournaments'
        }
      ],
    },
    {
      type: 'category',
      label: '💧 LIQUIDITY',
      collapsible: false,
      items: [
        'liquidity/market-making-vault',
        'liquidity/risk-management',
      ],
    },
    {
      type: 'category',
      label: '📊 TOKENOMICS',
      collapsible: false,
      items: [
        'tokenomics/bfr-token',
        'tokenomics/rewards',
      ],
    },
    {
      type: 'category',
      label: '🖥 DEVELOPER RESOURCES', 
      collapsible: false,
      items: [
        'developer docs/trading-core',
        'developer docs/actor-functions',
        'developer docs/technicalities',
        'developer docs/one-click-trading-flow',
        'developer docs/all-configs',
        'developer docs/deployed-contracts',
        'developer docs/contract-functions',
        'developer docs/audit',
      ],
        },
      {
        type: 'category',
        label: '🆘 SUPPORT CENTER',
        collapsible: false,
        items: [
          'support center/video-tutorials',
          'support center/official-links',
          'support center/media-kit',
        ],
      }
  ],
};
