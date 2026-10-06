const shellNS = window.AKP3DDesignSystem_42d958;

function useBreakpoint() {
  const get = () => {
    if (window.__AKP_BP) return window.__AKP_BP;
    const w = window.innerWidth;
    return w < 640 ? 'mobile' : w < 1024 ? 'tablet' : w < 1280 ? 'desktop' : 'wide';
  };
  const [bp, setBp] = React.useState(get);
  React.useEffect(() => {
    const on = () => setBp(get());
    window.addEventListener('resize', on);
    return () => window.removeEventListener('resize', on);
  }, []);
  return bp;
}

const NAV = [
  { section: 'Painéis', items: [
    { id: 'overview', icon: 'layout-dashboard', label: 'Visão geral' },
    { id: 'orders', icon: 'shopping-bag', label: 'Pedidos', badge: 4 },
    { id: 'analytics', icon: 'chart-column', label: 'Análises' },
    { id: 'customers', icon: 'users', label: 'Clientes' },
  ] },
  { section: 'Ajustes', items: [
    { id: 'messages', icon: 'message-square', label: 'Mensagens', badge: 5 },
    { id: 'reviews', icon: 'star', label: 'Avaliações' },
    { id: 'settings', icon: 'settings', label: 'Configurações' },
    { id: 'help', icon: 'circle-help', label: 'Central de ajuda' },
  ] },
];
const TITLES = { overview: 'Visão geral', orders: 'Pedidos', analytics: 'Análises', customers: 'Clientes', messages: 'Mensagens', reviews: 'Avaliações', settings: 'Configurações', help: 'Central de ajuda' };

function Wordmark({ small }) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
      <span style={{ font: `600 ${small ? 16 : 18}px/1 var(--font-sans)`, letterSpacing: '-0.03em' }}>AKP3D</span>
      {small ? null : <span style={{ font: '400 13px/1 var(--font-sans)', color: 'var(--text-tertiary)' }}>sistemas</span>}
    </div>
  );
}

function UserMenu({ onLogout, compact }) {
  const { Menu, Avatar, Icon } = shellNS;
  const u = window.AKP_DATA.user;
  return (
    <Menu align="start" trigger={
      <button type="button" style={{ all: 'unset', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10, padding: '4px 6px', borderRadius: 999 }}>
        <Avatar name={u.name} size={compact ? 36 : 32} ring />
        {compact ? null : <><span style={{ font: 'var(--type-label)', flex: 1 }}>{u.name}</span><Icon name="chevron-down" size={14} color="var(--text-tertiary)" /></>}
      </button>
    } items={[
      { heading: u.email },
      { icon: 'user', label: 'Meu perfil' },
      { icon: 'settings', label: 'Configurações' },
      '-',
      { icon: 'log-out', label: 'Sair', danger: true, onSelect: onLogout },
    ]} />
  );
}

function SidebarNav({ screen, onNav, collapsed }) {
  const { NavItem, NavSection } = shellNS;
  return NAV.map((g) => (
    <NavSection key={g.section} label={g.section} collapsed={collapsed}>
      {g.items.map((it) => (
        <NavItem key={it.id} icon={it.icon} label={it.label} badge={it.badge} collapsed={collapsed} active={screen === it.id} onClick={() => onNav(it.id)} />
      ))}
    </NavSection>
  ));
}

function Sidebar({ screen, onNav, collapsed, onLogout }) {
  const { Input, IconButton } = shellNS;
  return (
    <aside className="akp-scroll" style={{ width: collapsed ? 'var(--sidebar-w-collapsed)' : 'var(--sidebar-w)', flex: 'none', background: 'var(--surface-sidebar)', display: 'flex', flexDirection: 'column', padding: collapsed ? '20px 14px' : '20px 16px', gap: 16, overflowY: 'auto', overflowX: 'hidden', alignItems: collapsed ? 'center' : 'stretch' }}>
      <UserMenu onLogout={onLogout} compact={collapsed} />
      {collapsed ? <IconButton icon="search" label="Buscar" /> : <Input icon="search" placeholder="Buscar…" kbd="⌘K" size="sm" />}
      <nav style={{ display: 'flex', flexDirection: 'column', marginTop: -12 }}>
        <SidebarNav screen={screen} onNav={onNav} collapsed={collapsed} />
      </nav>
      <div style={{ marginTop: 'auto', paddingTop: 16, display: 'flex', justifyContent: collapsed ? 'center' : 'flex-start', paddingLeft: collapsed ? 0 : 12 }}>
        <Wordmark small={collapsed} />
      </div>
    </aside>
  );
}

function Topbar({ screen, bp, onMenu, onBell, dark, onTheme }) {
  const { IconButton, Breadcrumbs, Tooltip } = shellNS;
  const mobile = bp === 'mobile';
  return (
    <header style={{ height: 'var(--topbar-h)', flex: 'none', display: 'flex', alignItems: 'center', gap: 8, padding: mobile ? '0 8px 0 12px' : '0 16px 0 24px', borderBottom: '1px solid var(--border-subtle)', background: 'var(--bg-app)' }}>
      {mobile ? (
        <>
          <IconButton icon="menu" label="Abrir menu" onClick={onMenu} />
          <span style={{ font: 'var(--type-card-title)', flex: 1, letterSpacing: '-0.01em' }}>{TITLES[screen]}</span>
          <IconButton icon="search" label="Buscar" />
          <IconButton icon="bell" label="Notificações" dot onClick={onBell} />
        </>
      ) : (
        <>
          <IconButton icon="layers" label="Painéis" size="sm" />
          <IconButton icon="star" label="Favoritar página" size="sm" />
          <Breadcrumbs items={[{ label: 'Painéis' }, { label: TITLES[screen] }]} style={{ marginLeft: 8, flex: 1 }} />
          <Tooltip content={dark ? 'Tema claro' : 'Tema escuro'} placement="bottom"><IconButton icon={dark ? 'moon' : 'sun'} label="Alternar tema" onClick={onTheme} /></Tooltip>
          <Tooltip content="Atualizar" kbd="R" placement="bottom"><IconButton icon="refresh-cw" label="Atualizar" /></Tooltip>
          <Tooltip content="Notificações" placement="bottom"><IconButton icon="bell" label="Notificações" dot onClick={onBell} /></Tooltip>
          <Tooltip content="Idioma" placement="bottom"><IconButton icon="globe" label="Idioma" /></Tooltip>
        </>
      )}
    </header>
  );
}

function RailSection({ title, children }) {
  return (
    <section style={{ display: 'flex', flexDirection: 'column', gap: 10, paddingBottom: 20, borderBottom: '1px solid var(--border-subtle)' }}>
      <h3 style={{ margin: 0, font: 'var(--type-card-title)', letterSpacing: '-0.01em' }}>{title}</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>{children}</div>
    </section>
  );
}

function RailContent() {
  const { ListItem, Avatar, IconButton } = shellNS;
  const D = window.AKP_DATA;
  const [sel, setSel] = React.useState('Nataniel Donowan');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <RailSection title="Notificações">
        {D.notifications.map((n) => <ListItem key={n.title} icon={n.icon} title={n.title} description={n.time} />)}
      </RailSection>
      <RailSection title="Atividades">
        {D.activities.map((a) => <ListItem key={a.title} timeline leading={<Avatar name={a.who} size={24} />} title={a.title} description={a.time} />)}
      </RailSection>
      <section style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <h3 style={{ margin: 0, font: 'var(--type-card-title)', letterSpacing: '-0.01em' }}>Gerentes de conta</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {D.managers.map((m) => (
            <ListItem key={m.name} selected={sel === m.name} onClick={() => setSel(m.name)} leading={<Avatar name={m.name} status={m.status} />} title={m.name}
              trailing={sel === m.name ? <><IconButton icon="mail" label="E-mail" size="sm" /><IconButton icon="phone" label="Ligar" size="sm" /></> : <IconButton icon="more-horizontal" label="Mais" size="sm" />} />
          ))}
        </div>
      </section>
    </div>
  );
}

function RightRail() {
  return (
    <aside className="akp-scroll" style={{ width: 'var(--rail-w)', flex: 'none', background: 'var(--surface-sidebar)', borderLeft: '1px solid var(--border-subtle)', padding: '20px 20px 24px', overflowY: 'auto' }}>
      <RailContent />
    </aside>
  );
}

function PageHeader({ title, subtitle, actions, bp }) {
  return (
    <div style={{ display: 'flex', alignItems: bp === 'mobile' ? 'flex-start' : 'center', gap: 12, flexWrap: 'wrap', justifyContent: 'space-between' }}>
      {bp === 'mobile' && !subtitle ? null : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: 0 }}>
          {bp === 'mobile' ? null : <h1 style={{ margin: 0, font: 'var(--type-page-title)', letterSpacing: '-0.01em' }}>{title}</h1>}
          {subtitle ? <span style={{ font: 'var(--type-body-sm)', color: 'var(--text-tertiary)' }}>{subtitle}</span> : null}
        </div>
      )}
      {actions ? <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>{actions}</div> : null}
    </div>
  );
}

Object.assign(window, { useBreakpoint, NAV, TITLES, Wordmark, Sidebar, SidebarNav, Topbar, RightRail, RailContent, PageHeader, UserMenu });
