function Customers({ bp }) {
  const { Card, DataTable, SegmentedControl, Input, Button, Avatar, Badge, IconButton, Menu, Icon } = window.AKP3DDesignSystem_42d958;
  const D = window.AKP_DATA, F = window.AKP_FMT;
  const mobile = bp === 'mobile';
  const [view, setView] = React.useState('grid');
  const [q, setQ] = React.useState('');
  const rows = D.customers.filter((c) => !q || (c.name + c.email + c.city).toLowerCase().includes(q.toLowerCase()));
  const cols = bp === 'wide' ? 3 : bp === 'mobile' ? 1 : 2;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: mobile ? 12 : 16 }}>
      <PageHeader bp={bp} title="Clientes" subtitle={mobile ? null : '1.284 clientes ativos'} actions={<Button icon="user-plus" size={mobile ? 'sm' : 'md'}>Adicionar cliente</Button>} />
      <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
        <Input icon="search" placeholder="Buscar clientes" value={q} onChange={(e) => setQ(e.target.value)} style={{ flex: '1 1 240px', maxWidth: mobile ? 'none' : 360 }} />
        <SegmentedControl value={view} onChange={setView} options={[{ value: 'grid', label: 'Grade', icon: 'layout-grid' }, { value: 'list', label: 'Lista', icon: 'list' }]} style={{ marginLeft: 'auto' }} />
      </div>
      {view === 'grid' ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(' + cols + ',minmax(0,1fr))', gap: mobile ? 12 : 16 }}>
          {rows.map((c) => (
            <Card key={c.id} interactive>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <Avatar name={c.name} size={44} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: 2, flex: 1, minWidth: 0 }}>
                  <span style={{ font: 'var(--type-label)', fontSize: 15 }}>{c.name}</span>
                  <span style={{ font: 'var(--type-caption)', color: 'var(--text-tertiary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{c.email}</span>
                </div>
                <Menu trigger={<IconButton icon="more-vertical" label="Mais" size="sm" />} items={[{ icon: 'mail', label: 'Enviar e-mail' }, { icon: 'pencil', label: 'Editar' }, '-', { icon: 'archive', label: 'Arquivar', danger: true }]} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, font: 'var(--type-caption)', color: 'var(--text-secondary)' }}><Icon name="map-pin" size={14} />{c.city}</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr auto', gap: 12, alignItems: 'end', paddingTop: 14, borderTop: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}><span style={{ font: 'var(--type-caption)', color: 'var(--text-tertiary)' }}>Negócios</span><span className="akp-num" style={{ fontWeight: 500 }}>{F.int(c.deals)}</span></div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}><span style={{ font: 'var(--type-caption)', color: 'var(--text-tertiary)' }}>Valor total</span><span className="akp-num" style={{ fontWeight: 500 }}>{F.brl(c.total)}</span></div>
                <Badge tone={F.tone[c.status]} dot>{c.status}</Badge>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <Card flush>
          <DataTable rowKey="id" rows={rows} columns={[
            { key: 'name', label: 'Nome', sortable: true, render: (r) => (
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}><Avatar name={r.name} /><div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}><span style={{ fontWeight: 500 }}>{r.name}</span><span style={{ font: 'var(--type-caption)', color: 'var(--text-tertiary)' }}>{r.email}</span></div></div>
            ) },
            { key: 'city', label: 'Cidade', sortable: true },
            { key: 'status', label: 'Status', render: (r) => <Badge tone={F.tone[r.status]} dot>{r.status}</Badge> },
            { key: 'deals', label: 'Negócios', align: 'right', sortable: true, render: (r) => F.int(r.deals) },
            { key: 'total', label: 'Valor total', align: 'right', sortable: true, render: (r) => F.brl(r.total) },
          ]} />
        </Card>
      )}
    </div>
  );
}
window.Customers = Customers;
