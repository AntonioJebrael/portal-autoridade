create extension if not exists pgcrypto;

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  service_interest text not null,
  message text,
  source text not null default 'portal-autoridade',
  created_at timestamptz not null default now()
);

comment on table public.leads is 'Stores contact leads captured from the portal.';

alter table public.leads enable row level security;

grant insert on table public.leads to anon;
grant select, update, delete on table public.leads to authenticated;

create index if not exists leads_email_idx on public.leads (email);
create index if not exists leads_created_at_idx on public.leads (created_at desc);

drop policy if exists anon_can_insert_leads on public.leads;
create policy anon_can_insert_leads
on public.leads
for insert
to anon
with check (true);

drop policy if exists authenticated_can_select_leads on public.leads;
create policy authenticated_can_select_leads
on public.leads
for select
to authenticated
using (true);

drop policy if exists authenticated_can_update_leads on public.leads;
create policy authenticated_can_update_leads
on public.leads
for update
to authenticated
using (true)
with check (true);

drop policy if exists authenticated_can_delete_leads on public.leads;
create policy authenticated_can_delete_leads
on public.leads
for delete
to authenticated
using (true);
