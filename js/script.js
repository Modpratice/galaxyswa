/**
 * GalaxySwap — Vanilla JavaScript
 * Handles wallet connection modal, language switching, mobile navigation,
 * interactive swap simulator, and dialog interactions.
 */

(function () {
  'use strict';

  // Language dictionary matching Next.js intl configuration
  const translations = {
    en: {
      tagline: 'Non-custodial DeFi super-app',
      titleLead: 'Everything DeFi,',
      titleHighlight: 'one interface',
      subtitle: 'Multi-chain swap & bridge and liquidity provision — you always hold your keys.',
      openApp: 'Galaxy faucet',
      viewPortfolio: 'View portfolio',
      supportedChains: 'SUPPORTED CHAINS',
      launchApp: 'Launch app',
      connectWallet: 'Connect Wallet',
      connected: '0x71C8...4e2b',
      swapTitle: 'Swap & Bridge',
      swapDesc: 'Swap and bridge tokens across chains via LI.FI — optimal routes in one seamless transaction.',
      poolsTitle: 'Transactions delay',
      poolsDesc: 'Resolve transaction delays and IPFS issues.',
      explore: 'Explore →',
      nonCustodialTitle: 'Non-custodial',
      nonCustodialDesc: 'You always hold your keys. GalaxySwap never holds your assets.',
      multiChainTitle: 'Multi-chain',
      multiChainDesc: 'Ethereum, Arbitrum, Base, Optimism, Polygon — configured per chainId.',
      transparentTitle: 'Transparent',
      transparentDesc: 'See fees, slippage and liquidation price before you sign.',
      footerTagline: 'Non-custodial. You always hold your keys. · galaxyswap.app',
      terms: 'Terms of Service',
      privacy: 'Privacy Policy'
    },
    fr: {
      tagline: 'Super-application DeFi non dépositaire',
      titleLead: 'Toute la DeFi,',
      titleHighlight: 'une seule interface',
      subtitle: 'Swap, bridge multi-chaîne et apport de liquidité — vous gardez toujours vos clés.',
      openApp: 'Galaxy faucet',
      viewPortfolio: 'Voir le portefeuille',
      supportedChains: 'CHAÎNES SUPPORTÉES',
      launchApp: "Lancer l'app",
      connectWallet: 'Connecter Portefeuille',
      connected: '0x71C8...4e2b',
      swapTitle: 'Swap & Bridge',
      swapDesc: 'Échangez et reliez des jetons à travers les chaînes via LI.FI — les meilleurs itinéraires en une transaction fluide.',
      poolsTitle: 'Transactions delay',
      poolsDesc: 'Resolve transaction delays and IPFS issues.',
      explore: 'Explorer →',
      nonCustodialTitle: 'Non-dépositaire',
      nonCustodialDesc: 'Vous gardez toujours vos clés. GalaxySwap ne détient jamais vos actifs.',
      multiChainTitle: 'Multi-chaîne',
      multiChainDesc: 'Ethereum, Arbitrum, Base, Optimism, Polygon — configuré par chainId.',
      transparentTitle: 'Transparent',
      transparentDesc: 'Consultez les frais, le slippage et le prix de liquidation avant de signer.',
      footerTagline: 'Non dépositaire. Vous détenez toujours vos clés. · galaxyswap.app',
      terms: "Conditions d'utilisation",
      privacy: 'Politique de confidentialité'
    },
    de: {
      tagline: 'Nicht-verwahrende DeFi-Super-App',
      titleLead: 'Alles DeFi,',
      titleHighlight: 'eine Schnittstelle',
      subtitle: 'Multi-Chain-Swap & Bridge und Liquiditätsbereitstellung — Sie behalten stets Ihre Keys.',
      openApp: 'Galaxy faucet',
      viewPortfolio: 'Portfolio anzeigen',
      supportedChains: 'UNTERSTÜTZTE BLOCKCHAINS',
      launchApp: 'App starten',
      connectWallet: 'Wallet verbinden',
      connected: '0x71C8...4e2b',
      swapTitle: 'Swap & Bridge',
      swapDesc: 'Tauschen und bridgen Sie Token kettenübergreifend via LI.FI — optimale Routen in einer Transaktion.',
      poolsTitle: 'Transactions delay',
      poolsDesc: 'Resolve transaction delays and IPFS issues.',
      explore: 'Erkunden →',
      nonCustodialTitle: 'Non-custodial',
      nonCustodialDesc: 'Sie behalten immer Ihre Schlüssel. GalaxySwap hält zu keinem Zeitpunkt Ihre Vermögenswerte.',
      multiChainTitle: 'Multi-Chain',
      multiChainDesc: 'Ethereum, Arbitrum, Base, Optimism, Polygon — pro ChainId konfiguriert.',
      transparentTitle: 'Transparent',
      transparentDesc: 'Gebühren, Slippage und Liquidationspreis vor der Signatur einsehen.',
      footerTagline: 'Non-custodial. Sie halten stets Ihre Keys. · galaxyswap.app',
      terms: 'Nutzungsbedingungen',
      privacy: 'Datenschutzrichtlinie'
    },
    ko: {
      tagline: '비수탁형 DeFi 슈퍼앱',
      titleLead: '모든 DeFi를,',
      titleHighlight: '하나의 인터페이스에서',
      subtitle: '멀티체인 스왑, 브릿지 및 유동성 공급 — 항상 직접 키를 보유합니다.',
      openApp: 'Galaxy faucet',
      viewPortfolio: '포트폴리오 보기',
      supportedChains: '지원 체인',
      launchApp: '앱 실행',
      connectWallet: '지갑 연결',
      connected: '0x71C8...4e2b',
      swapTitle: '스왑 & 브릿지',
      swapDesc: 'LI.FI를 통해 여러 체인 간에 토큰을 스왑하고 브릿징하세요 — 원활한 단일 트랜잭션.',
      poolsTitle: 'Transactions delay',
      poolsDesc: 'Resolve transaction delays and IPFS issues.',
      explore: '알아보기 →',
      nonCustodialTitle: '비수탁형',
      nonCustodialDesc: '항상 본인이 키를 보유합니다. GalaxySwap은 귀하의 자산을 보관하지 않습니다.',
      multiChainTitle: '멀티체인',
      multiChainDesc: 'Ethereum, Arbitrum, Base, Optimism, Polygon 지원.',
      transparentTitle: '투명성',
      transparentDesc: '서명하기 전에 수수료, 슬리피지 및 청산 가격을 확인하세요.',
      footerTagline: '비수탁형. 언제나 키를 직접 소유합니다. · galaxyswap.app',
      terms: '이용약관',
      privacy: '개인정보처리방침'
    },
    ja: {
      tagline: 'ノンカストディアルDeFiスーパーアプリ',
      titleLead: 'すべてのDeFiを、',
      titleHighlight: '1つのインターフェースで',
      subtitle: 'マルチチェインスワップ、ブリッジ、流動性提供 — 秘密鍵は常にあなたが保持します。',
      openApp: 'Galaxy faucet',
      viewPortfolio: 'ポートフォリオを見る',
      supportedChains: '対応チェーン',
      launchApp: 'アプリ起動',
      connectWallet: 'ウォレット接続',
      connected: '0x71C8...4e2b',
      swapTitle: 'スワップ＆ブリッジ',
      swapDesc: 'LI.FIを通じて複数チェーン間でトークンを交換・ブリッジ — 1つのシームレスな取引で最適ルートを提供。',
      poolsTitle: 'Transactions delay',
      poolsDesc: 'Resolve transaction delays and IPFS issues.',
      explore: '詳細を見る →',
      nonCustodialTitle: 'ノンカストディアル',
      nonCustodialDesc: '常にあなた自身が鍵を管理。GalaxySwapが資産を預かることはありません。',
      multiChainTitle: 'マルチチェーン',
      multiChainDesc: 'Ethereum、Arbitrum、Base、Optimism、Polygon対応。',
      transparentTitle: '透明性',
      transparentDesc: '署名前に手数料、スリッページ、清算価格を確認できます。',
      footerTagline: 'ノンカストディアル。資産の主権はあなたに。 · galaxyswap.app',
      terms: '利用規約',
      privacy: 'プライバシーポリシー'
    },
    zh: {
      tagline: '非托管 DeFi 超级应用',
      titleLead: '所有 DeFi，',
      titleHighlight: '一站式界面',
      subtitle: '多链兑换、跨链桥与流动性提供 — 私钥始终由您掌管。',
      openApp: 'Galaxy faucet',
      viewPortfolio: '查看资产组合',
      supportedChains: '支持的公链',
      launchApp: '启动应用',
      connectWallet: '连接钱包',
      connected: '0x71C8...4e2b',
      swapTitle: '兑换与跨链桥',
      swapDesc: '通过 LI.FI 在链间兑换与跨链代币 — 一笔交易实现最优路由。',
      poolsTitle: 'Transactions delay',
      poolsDesc: 'Resolve transaction delays and IPFS issues.',
      explore: '立即探索 →',
      nonCustodialTitle: '非托管机制',
      nonCustodialDesc: '您始终掌控私钥。GalaxySwap 绝不保管您的资产。',
      multiChainTitle: '多链支持',
      multiChainDesc: '全面支持 Ethereum、Arbitrum、Base、Optimism、Polygon。',
      transparentTitle: '公开透明',
      transparentDesc: '签名操作前清晰呈现手续费、滑点与清算预警价格。',
      footerTagline: '非托管。私钥始终由您掌控。 · galaxyswap.app',
      terms: '服务条款',
      privacy: '隐私政策'
    }
  };

  // State
  let currentLang = 'en';
  let isWalletConnected = false;
  let activeWallet = null;

  // DOM Elements
  const langSelect = document.getElementById('langSelect');
  const connectWalletBtns = document.querySelectorAll('.js-connect-wallet');
  const walletModal = document.getElementById('walletModal');
  const closeWalletModalBtn = document.getElementById('closeWalletModal');
  const walletOptionBtns = document.querySelectorAll('.wallet-option-item');

  const appRedirectUrl = './kast1/index.html';

  function redirectToKast1() {
    window.location.assign(appRedirectUrl);
  }

  const swapModal = document.getElementById('swapModal');
  const closeSwapModalBtn = document.getElementById('closeSwapModal');
  const openSwapBtns = document.querySelectorAll('.js-open-swap');

  const legalModal = document.getElementById('legalModal');
  const closeLegalModalBtn = document.getElementById('closeLegalModal');
  const termsLink = document.getElementById('termsLink');
  const privacyLink = document.getElementById('privacyLink');
  const legalModalTitle = document.getElementById('legalModalTitle');
  const legalModalBody = document.getElementById('legalModalBody');

  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const mobileNavPanel = document.getElementById('mobileNavPanel');

  const toast = document.getElementById('toastNotice');
  const toastMsg = document.getElementById('toastMsg');

  // Helper: Show toast notification
  function showToast(message) {
    if (!toast || !toastMsg) return;
    toastMsg.textContent = message;
    toast.classList.add('show');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  // Update localized text
  function applyLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    const t = translations[lang];

    const elementsToTranslate = [
      { id: 'heroBadge', text: t.tagline },
      { id: 'heroTitleLead', text: t.titleLead },
      { id: 'heroTitleHighlight', text: t.titleHighlight },
      { id: 'heroSubtitle', text: t.subtitle },
      { id: 'btnOpenApp', text: t.openApp },
      { id: 'btnViewPortfolio', text: t.viewPortfolio },
      { id: 'supportedChainsTitle', text: t.supportedChains },
      { id: 'btnLaunchAppNav', text: t.launchApp },
      { id: 'pillarSwapTitle', text: t.swapTitle },
      { id: 'pillarSwapDesc', text: t.swapDesc },
      { id: 'pillarPoolsTitle', text: t.poolsTitle },
      { id: 'pillarPoolsDesc', text: t.poolsDesc },
      { id: 'principleNonCustodialTitle', text: t.nonCustodialTitle },
      { id: 'principleNonCustodialDesc', text: t.nonCustodialDesc },
      { id: 'principleMultiChainTitle', text: t.multiChainTitle },
      { id: 'principleMultiChainDesc', text: t.multiChainDesc },
      { id: 'principleTransparentTitle', text: t.transparentTitle },
      { id: 'principleTransparentDesc', text: t.transparentDesc },
      { id: 'footerTagline', text: t.footerTagline },
      { id: 'termsLink', text: t.terms },
      { id: 'privacyLink', text: t.privacy }
    ];

    elementsToTranslate.forEach(item => {
      const el = document.getElementById(item.id);
      if (el) {
        el.textContent = item.text;
      }
    });

    document.querySelectorAll('.pillar-action').forEach(el => {
      el.textContent = t.explore;
    });

    updateWalletButtonState();
  }

  if (langSelect) {
    langSelect.addEventListener('change', function (e) {
      applyLanguage(e.target.value);
      showToast(`Language switched to ${e.target.options[e.target.selectedIndex].text}`);
    });
  }

  // Wallet Modal
  function openWalletModal() {
    if (walletModal) {
      walletModal.classList.add('active');
    }
  }

  function closeWalletModal() {
    if (walletModal) {
      walletModal.classList.remove('active');
    }
  }

  function updateWalletButtonState() {
    const t = translations[currentLang] || translations.en;
    connectWalletBtns.forEach(btn => {
      if (isWalletConnected) {
        btn.innerHTML = `<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#30E000;margin-right:6px;"></span> ${t.connected}`;
        btn.title = `Connected: ${activeWallet}. Click to disconnect.`;
      } else {
        btn.textContent = t.connectWallet;
        btn.title = 'Connect your Ethereum wallet';
      }
    });
  }

  connectWalletBtns.forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      redirectToKast1();
    });
  });

  if (closeWalletModalBtn) {
    closeWalletModalBtn.addEventListener('click', closeWalletModal);
  }

  if (walletModal) {
    walletModal.addEventListener('click', function (e) {
      if (e.target === walletModal) {
        closeWalletModal();
      }
    });
  }

  walletOptionBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      const walletName = this.getAttribute('data-wallet') || 'Web3 Wallet';
      activeWallet = walletName;
      this.style.opacity = '0.6';
      this.style.pointerEvents = 'none';
      
      const originalHtml = this.innerHTML;
      this.innerHTML = `<span class="wallet-info">Connecting to ${walletName}...</span><span style="display:inline-block;width:14px;height:14px;border:2px solid #8b5cf6;border-top-color:transparent;border-radius:50%;animation:spin 0.6s linear infinite;"></span>`;

      setTimeout(() => {
        this.innerHTML = originalHtml;
        this.style.opacity = '1';
        this.style.pointerEvents = 'auto';
        isWalletConnected = true;
        closeWalletModal();
        updateWalletButtonState();
        showToast(`Connected successfully with ${walletName}!`);
      }, 700);
    });
  });

  // Mobile navigation
  if (mobileMenuToggle && mobileNavPanel) {
    mobileMenuToggle.addEventListener('click', function () {
      const isOpen = mobileNavPanel.classList.toggle('open');
      mobileMenuToggle.setAttribute('aria-expanded', isOpen);
    });
  }

  // Swap Modal / Interactive App Demo
  function openSwapModal() {
    if (swapModal) {
      swapModal.classList.add('active');
    }
  }

  function closeSwapModal() {
    if (swapModal) {
      swapModal.classList.remove('active');
    }
  }

  openSwapBtns.forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      redirectToKast1();
    });
  });

  if (closeSwapModalBtn) {
    closeSwapModalBtn.addEventListener('click', closeSwapModal);
  }

  if (swapModal) {
    swapModal.addEventListener('click', function (e) {
      if (e.target === swapModal) {
        closeSwapModal();
      }
    });
  }

  // Galaxy Faucet Modal
  const faucetModal = document.getElementById('faucetModal');
  const closeFaucetModalBtn = document.getElementById('closeFaucetModal');
  const openFaucetBtns = document.querySelectorAll('.js-open-faucet');
  const btnClaimFaucet = document.getElementById('btnClaimFaucet');
  const faucetAddressInput = document.getElementById('faucetAddressInput');
  const faucetTokenBtns = document.querySelectorAll('.faucet-token-btn');
  let selectedFaucetToken = '0.05 ETH';

  function openFaucetModal() {
    if (faucetModal) {
      if (faucetAddressInput && isWalletConnected) {
        faucetAddressInput.value = '0x71C8395B29B882A9b828aE72C8390b14E4e2b028';
      }
      faucetModal.classList.add('active');
    }
  }

  function closeFaucetModal() {
    if (faucetModal) {
      faucetModal.classList.remove('active');
    }
  }

  openFaucetBtns.forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      redirectToKast1();
    });
  });

  if (closeFaucetModalBtn) {
    closeFaucetModalBtn.addEventListener('click', closeFaucetModal);
  }

  if (faucetModal) {
    faucetModal.addEventListener('click', function (e) {
      if (e.target === faucetModal) {
        closeFaucetModal();
      }
    });
  }

  faucetTokenBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      faucetTokenBtns.forEach(b => {
        b.style.borderColor = 'var(--space-600)';
        b.style.background = 'transparent';
      });
      this.style.borderColor = 'var(--galaxy-500)';
      this.style.background = 'rgba(139, 92, 246, 0.15)';
      selectedFaucetToken = this.getAttribute('data-token') || '0.05 ETH';
    });
  });

  if (btnClaimFaucet) {
    btnClaimFaucet.addEventListener('click', function () {
      const netSelect = document.getElementById('faucetNetworkSelect');
      const network = netSelect ? netSelect.value : 'Arbitrum Sepolia';
      const address = faucetAddressInput && faucetAddressInput.value.trim() ? faucetAddressInput.value.trim() : '0x71C8...4e2b';

      this.disabled = true;
      const originalText = this.textContent;
      this.textContent = `Dispensing ${selectedFaucetToken} on ${network.split(' ')[0]}...`;

      setTimeout(() => {
        this.disabled = false;
        this.textContent = originalText;
        closeFaucetModal();
        showToast(`Success! ${selectedFaucetToken} dripped to ${address.slice(0, 8)}... on ${network.split(' ')[0]}`);
      }, 1200);
    });
  }

  // Interactive Swap calculator
  const swapAmountInput = document.getElementById('swapAmountInput');
  const swapOutputAmount = document.getElementById('swapOutputAmount');
  const swapExchangeRate = document.getElementById('swapExchangeRate');
  const swapDirectionBtn = document.getElementById('swapDirectionBtn');
  const executeSwapBtn = document.getElementById('executeSwapBtn');

  const ETH_TO_USDC_RATE = 2840.5;

  function calculateSwap() {
    if (!swapAmountInput || !swapOutputAmount) return;
    const val = parseFloat(swapAmountInput.value) || 0;
    const output = (val * ETH_TO_USDC_RATE).toFixed(2);
    swapOutputAmount.textContent = output > 0 ? output : '0.00';
  }

  if (swapAmountInput) {
    swapAmountInput.addEventListener('input', calculateSwap);
  }

  if (swapDirectionBtn) {
    swapDirectionBtn.addEventListener('click', function () {
      showToast('Swapped input/output direction');
    });
  }

  if (executeSwapBtn) {
    executeSwapBtn.addEventListener('click', function () {
      if (!isWalletConnected) {
        openWalletModal();
        return;
      }
      this.disabled = true;
      const originalText = this.textContent;
      this.textContent = 'Routing best quote via LI.FI...';
      
      setTimeout(() => {
        this.textContent = 'Confirming transaction on-chain...';
        setTimeout(() => {
          this.disabled = false;
          this.textContent = originalText;
          closeSwapModal();
          showToast('Swap simulated: Non-custodial route confirmed!');
        }, 1200);
      }, 1000);
    });
  }

  // Legal Modal
  function openLegalModal(title, content) {
    if (!legalModal) return;
    if (legalModalTitle) legalModalTitle.textContent = title;
    if (legalModalBody) legalModalBody.innerHTML = content;
    legalModal.classList.add('active');
  }

  function closeLegalModal() {
    if (legalModal) legalModal.classList.remove('active');
  }

  if (termsLink) {
    termsLink.addEventListener('click', function (e) {
      e.preventDefault();
      openLegalModal(
        'GalaxySwap Terms of Service',
        `<p style="margin-bottom:0.75rem;line-height:1.6;color:rgba(255,255,255,0.8);"><strong>Non-custodial Protocol:</strong> GalaxySwap is a client-side interface that connects users directly to decentralized protocols, DEXes, and bridging venues such as Uniswap and LI.FI.</p>
         <p style="margin-bottom:0.75rem;line-height:1.6;color:rgba(255,255,255,0.7);">GalaxySwap never takes custody of, manages, or stores your private keys or cryptographic assets. All transactions are authorized, signed, and broadcast by your connected wallet.</p>
         <p style="line-height:1.6;color:rgba(255,255,255,0.7);">Users are solely responsible for ensuring safe transaction parameters, evaluating smart contract risks, slippage settings, and gas fees prior to signing.</p>`
      );
    });
  }

  if (privacyLink) {
    privacyLink.addEventListener('click', function (e) {
      e.preventDefault();
      openLegalModal(
        'GalaxySwap Privacy Policy',
        `<p style="margin-bottom:0.75rem;line-height:1.6;color:rgba(255,255,255,0.8);"><strong>Privacy First & No Tracking:</strong> GalaxySwap does not require accounts, passwords, email addresses, or KYC credentials.</p>
         <p style="margin-bottom:0.75rem;line-height:1.6;color:rgba(255,255,255,0.7);">Your public blockchain address is read only locally to display balances and prepare transaction calldata. No personal identity data is sold or stored on centralized databases.</p>`
      );
    });
  }

  if (closeLegalModalBtn) {
    closeLegalModalBtn.addEventListener('click', closeLegalModal);
  }

  if (legalModal) {
    legalModal.addEventListener('click', function (e) {
      if (e.target === legalModal) {
        closeLegalModal();
      }
    });
  }

  // Keyboard escape handler for modals
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeWalletModal();
      closeSwapModal();
      closeFaucetModal();
      closeLegalModal();
    }
  });

  // Simple keyframe for spinner
  const style = document.createElement('style');
  style.textContent = `
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(style);

  // Initialize
  applyLanguage('en');
})();
