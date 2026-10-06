function Overview({ bp, onNav, toast }) {
  const { Card, StatCard, DonutChart, ChartLegend, AreaChart, DataTable, Avatar, IconButton, Menu, Select, Badge, Tag, Button, ProgressBar, Icon } = window.AKP3DDesignSystem_42d958;
  const D = window.AKP_DATA, F = window.AKP_FMT;
  const mobile = bp === 'mobile', narrow = bp === 'mobile' || bp === 'tablet';
  const more = (name) => (
    <Menu trigger={<IconButton icon="more-vertical" label={'Opções de ' + name} size="sm" />} items={[
      { icon: 'download', label: 'Exportar CSV', onSelect: () => toast('Exportação iniciada', 'Você receberá o arquivo por e-mail.') },
      { icon: 'refresh-cw', label: 'Atualizar dados', hint: 'R' },
      { icon: 'maximize-2', label: 'Expandir' },
    ]} />
  );
  const gap = mobile ? 12 : 16;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
        {mobile ? <span style={{ font: 'var(--type-body-sm)', color: 'var(--text-tertiary)' }}>Olá, Guy — aqui está o resumo de hoje.</span>
          : <h1 style={{ margin: 0, font: 'var(--type-page-title)', letterSpacing: '-0.01em' }}>Visão geral</h1>}
        <Select size="sm" options={['Hoje', 'Últimos 7 dias', 'Este mês', 'Este trimestre']} style={{ width: 150, flex: 'none' }} />
      </div>

      <div style={mobile
        ? { display: 'grid', gridAutoFlow: 'column', gridAutoColumns: '78%', gap, overflowX: 'auto', scrollSnapType: 'x mandatory', scrollPaddingLeft: 16, scrollbarWidth: 'none', margin: '0 -16px', padding: '0 16px' }
        : { display: 'grid', gridTemplateColumns: narrow ? 'repeat(2,minmax(0,1fr))' : 'repeat(4,minmax(0,1fr))', gap }}>
        {D.kpis.map((k) => (
          <StatCard key={k.label} label={k.label} value={k.value} delta={k.delta} comparison={k.comparison} caption={k.caption} style={{ scrollSnapAlign: 'start' }}>
            {k.progress ? <ProgressBar value={k.progress} /> : null}
          </StatCard>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: narrow ? 'minmax(0,1fr)' : 'minmax(0,1.55fr) minmax(0,1fr)', gap }}>
        <Card title="Visão de vendas" actions={more('vendas')}>
          <div style={{ display: 'flex', gap: mobile ? 20 : 32, alignItems: 'center', flexDirection: mobile ? 'column' : 'row', flex: 1 }}>
            <DonutChart data={D.categories} size={mobile ? 180 : 168} thickness={22} value="102 mil" label="Visitas/semana" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, flex: 1, width: '100%' }}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <span style={{ width: 36, height: 36, borderRadius: 10, background: 'var(--accent-soft)', color: 'var(--text-accent)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="dollar-sign" size={18} /></span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <span style={{ font: 'var(--type-caption)', color: 'var(--text-secondary)' }}>Total em vendas</span>
                  <span className="akp-num" style={{ font: '600 20px/1.1 var(--font-sans)', letterSpacing: '-0.02em' }}>R$ 71.020</span>
                </div>
              </div>
              <ChartLegend items={D.categories} />
            </div>
          </div>
        </Card>

        <div style={{ display: 'grid', gridTemplateRows: 'auto 1fr', gap }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,minmax(0,1fr))', gap }}>
            <StatCard variant="raised" icon="users" label="Novos clientes" value="862" delta="-8%" comparison="semana" />
            <StatCard variant="raised" icon="chart-column" label="Lucro total" value="R$ 25,6 mil" delta="42%" comparison="semana" />
          </div>
          <Card title="Lucro acumulado" subtitle="1–14 fev 2026" actions={<Badge tone="accent" icon="trending-up">+42%</Badge>}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginTop: -6 }}>
              <span className="akp-num" style={{ font: '600 22px/1.1 var(--font-sans)', letterSpacing: '-0.02em' }}>R$ 136.755,77</span>
            </div>
            <AreaChart data={D.profit} labels={D.profitLabels} height={110} showAxis={false} formatValue={(v) => 'R$ ' + v + ' mil'} />
          </Card>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: narrow ? 'minmax(0,1fr)' : 'minmax(0,1.55fr) minmax(0,1fr)', gap }}>
        <Card title="Clientes" flush actions={<><Button size="sm" variant="ghost" iconRight="arrow-right" onClick={() => onNav('customers')}>Ver todos</Button>{more('clientes')}</>}>
          <DataTable rowKey="id" defaultSort={{ key: 'total', dir: 'desc' }} rows={D.customers.slice(0, 4)} columns={[
            { key: 'name', label: 'Nome', sortable: true, render: (r) => (
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, minWidth: 0 }}>
                <Avatar name={r.name} />
                <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}><span style={{ fontWeight: 500 }}>{r.name}</span><span style={{ font: 'var(--type-caption)', color: 'var(--text-tertiary)' }}>{r.email}</span></div>
              </div>
            ) },
            { key: 'deals', label: 'Negócios', align: 'right', sortable: true, render: (r) => F.int(r.deals) },
            { key: 'total', label: 'Valor total', align: 'right', sortable: true, render: (r) => F.brl(r.total) },
          ]} />
        </Card>

        <Card variant="promo" style={{ justifyContent: 'space-between', minHeight: 300 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
              <span style={{ width: 30, height: 30, borderRadius: '50%', background: 'rgba(255,255,255,.08)', boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.18)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--lime-300)' }}><Icon name="zap" size={14} /></span>
              <Tag size="sm" style={{ color: '#fff', background: 'rgba(255,255,255,.06)', boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.18)' }}>Plano Premium</Tag>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <span className="akp-num" style={{ font: '600 52px/1 var(--font-sans)', letterSpacing: '-0.03em' }}>R$ 30</span>
            <span style={{ font: '400 14px/1.3 var(--font-sans)', color: 'rgba(255,255,255,.72)', borderLeft: '1px solid rgba(255,255,255,.24)', paddingLeft: 14 }}>por mês<br />por usuário</span>
          </div>
          <p style={{ margin: 0, font: '400 15px/1.5 var(--font-sans)', color: 'rgba(255,255,255,.88)', textWrap: 'pretty' }}>Melhore a gestão da sua operação: acompanhe lucros, prejuízos e pedidos em tempo real.</p>
          <div style={{ display: 'flex', gap: 8 }}>
            <Button size="lg" block onClick={() => toast('Plano Premium ativado', 'Os novos recursos já estão disponíveis.')}>Assinar agora</Button>
            <IconButton icon="star" label="Favoritar" size="lg" style={{ background: 'rgba(184,254,87,.16)', color: 'var(--lime-300)' }} />
          </div>
        </Card>
      </div>
    </div>
  );
}
window.Overview = Overview;
