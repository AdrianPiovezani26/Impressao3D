function OrderDetail({ order, onClose, toast }) {
  const { Sheet, ListItem, Avatar, Badge, Button, Icon } = window.AKP3DDesignSystem_42d958;
  const F = window.AKP_FMT;
  if (!order) return null;
  const lines = [
    { name: 'Kit sensor de presença', qty: 1, price: order.total * 0.55 },
    { name: 'Módulo de controle', qty: 1, price: order.total * 0.3 },
    { name: 'Frete', qty: 1, price: order.total * 0.15 },
  ];
  return (
    <Sheet side="right" width={400} title={'Pedido #' + order.id} onClose={onClose}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <Badge tone={F.tone[order.status]} dot size="md">{order.status}</Badge>
          <span style={{ font: 'var(--type-caption)', color: 'var(--text-tertiary)' }}>Criado em {order.date}</span>
        </div>
        <div style={{ background: 'var(--surface-card)', borderRadius: 'var(--radius-card)', padding: '8px 16px' }}>
          <ListItem leading={<Avatar name={order.customer} size={40} />} title={order.customer} description="Cliente desde 2023" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <span style={{ font: 'var(--type-overline)', letterSpacing: 'var(--ls-caps)', textTransform: 'uppercase', color: 'var(--text-tertiary)' }}>Itens</span>
          {lines.map((l) => (
            <div key={l.name} style={{ display: 'flex', justifyContent: 'space-between', gap: 12, font: 'var(--type-body-sm)' }}>
              <span>{l.name} <span style={{ color: 'var(--text-tertiary)' }}>× {l.qty}</span></span>
              <span className="akp-num">{F.brl(l.price)}</span>
            </div>
          ))}
          <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 12, borderTop: '1px solid var(--border-subtle)', font: '600 16px var(--font-sans)' }}>
            <span>Total</span><span className="akp-num">{F.brl(order.total)}</span>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center', font: 'var(--type-body-sm)', color: 'var(--text-secondary)' }}>
          <Icon name="truck" size={16} /> Entrega prevista em 3 dias úteis
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <Button size="lg" block icon="send" onClick={() => { onClose(); toast('Pedido #' + order.id + ' enviado', 'O cliente foi notificado por e-mail.'); }}>Marcar como enviado</Button>
          <Button size="lg" block variant="secondary" icon="printer">Imprimir nota</Button>
        </div>
      </div>
    </Sheet>
  );
}

function Orders({ bp, toast }) {
  const { Card, DataTable, Tabs, Input, Select, Button, Badge, Avatar, Pagination, Dialog, Alert, Tag } = window.AKP3DDesignSystem_42d958;
  const D = window.AKP_DATA, F = window.AKP_FMT;
  const mobile = bp === 'mobile';
  const [tab, setTab] = React.useState('all');
  const [q, setQ] = React.useState('');
  const [sel, setSel] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [open, setOpen] = React.useState(null);
  const [confirm, setConfirm] = React.useState(false);
  const [rows, setRows] = React.useState(D.orders);
  const map = { all: null, pending: 'Pendente', paid: 'Pago', shipped: 'Enviado', canceled: 'Cancelado' };
  const vis = rows.filter((o) => (!map[tab] || o.status === map[tab]) && (!q || (o.customer + o.id).toLowerCase().includes(q.toLowerCase())));
  const count = (s) => rows.filter((o) => o.status === s).length;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: mobile ? 12 : 16 }}>
      <PageHeader bp={bp} title="Pedidos" subtitle={mobile ? null : rows.length + ' pedidos nos últimos 30 dias'} actions={
        <><Button variant="secondary" icon="download" size={mobile ? 'sm' : 'md'}>Exportar</Button><Button icon="plus" size={mobile ? 'sm' : 'md'}>Novo pedido</Button></>
      } />
      <Tabs value={tab} onChange={(v) => { setTab(v); setSel([]); }} items={[
        { value: 'all', label: 'Todos', count: rows.length },
        { value: 'pending', label: 'Pendentes', count: count('Pendente') },
        { value: 'paid', label: 'Pagos' },
        { value: 'shipped', label: 'Enviados' },
        { value: 'canceled', label: 'Cancelados' },
      ]} />
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
        <Input icon="search" placeholder="Buscar por cliente ou nº" value={q} onChange={(e) => setQ(e.target.value)} style={{ flex: mobile ? '1 1 100%' : '0 1 300px' }} />
        <Select options={['Últimos 30 dias', 'Últimos 7 dias', 'Hoje']} style={{ width: mobile ? 'calc(50% - 4px)' : 170 }} />
        <Select options={['Todos os canais', 'Loja online', 'Marketplace', 'Balcão']} style={{ width: mobile ? 'calc(50% - 4px)' : 170 }} />
        {mobile ? null : <Tag onRemove={() => {}}>Valor &gt; R$ 100</Tag>}
      </div>
      {sel.length ? (
        <Alert tone="accent" icon="square-check" title={sel.length + (sel.length > 1 ? ' pedidos selecionados' : ' pedido selecionado')}
          action={<div style={{ display: 'flex', gap: 6 }}><Button size="sm" variant="ghost" onClick={() => setSel([])}>Limpar</Button><Button size="sm" variant="danger" icon="trash-2" onClick={() => setConfirm(true)}>Excluir</Button></div>} />
      ) : null}
      <Card flush>
        <DataTable selectable rowKey="id" rows={vis} selected={sel} onSelectChange={setSel} onRowClick={setOpen} defaultSort={{ key: 'id', dir: 'desc' }} columns={[
          { key: 'id', label: 'Pedido', sortable: true, primary: true, render: (r) => (
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, minWidth: 0 }}>
              <Avatar name={r.customer} />
              <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}><span style={{ fontWeight: 500 }}>{r.customer}</span><span style={{ font: 'var(--type-caption)', fontFamily: 'var(--font-mono)', color: 'var(--text-tertiary)' }}>#{r.id}</span></div>
            </div>
          ) },
          { key: 'date', label: 'Data', sortable: true },
          { key: 'status', label: 'Status', render: (r) => <Badge tone={F.tone[r.status]} dot>{r.status}</Badge> },
          { key: 'items', label: 'Itens', align: 'right', sortable: true },
          { key: 'total', label: 'Total', align: 'right', sortable: true, render: (r) => <span style={{ fontWeight: 500 }}>{F.brl(r.total)}</span> },
        ]} />
        <div style={{ padding: mobile ? '12px 16px' : '12px 20px', borderTop: '1px solid var(--border-subtle)' }}>
          <Pagination page={page} totalPages={13} onChange={setPage} compact={mobile} info={mobile ? null : '1–' + vis.length + ' de 128'} />
        </div>
      </Card>
      <OrderDetail order={open} onClose={() => setOpen(null)} toast={toast} />
      <Dialog open={confirm} onClose={() => setConfirm(false)} title={'Excluir ' + sel.length + (sel.length > 1 ? ' pedidos?' : ' pedido?')} description="Os pedidos serão removidos do painel e dos relatórios. Esta ação não pode ser desfeita."
        footer={<><Button variant="ghost" onClick={() => setConfirm(false)}>Cancelar</Button><Button variant="danger" icon="trash-2" onClick={() => { setRows(rows.filter((r) => !sel.includes(r.id))); toast(sel.length + ' pedido(s) excluído(s)', null, 'danger'); setSel([]); setConfirm(false); }}>Excluir</Button></>} />
    </div>
  );
}
window.Orders = Orders;
