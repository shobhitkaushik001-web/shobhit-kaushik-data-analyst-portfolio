create extension if not exists pgcrypto;
create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  title text not null check (char_length(title) between 2 and 100),
  description text not null check (char_length(description) <= 500),
  github_url text not null check (github_url ~ '^https://github\.com/'),
  project_type text default 'Data Analytics',
  tools text[] default '{}',
  image_url text,
  is_published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.projects enable row level security;
drop policy if exists "Public can read published projects" on public.projects;
create policy "Public can read published projects" on public.projects for select to anon, authenticated using (is_published = true OR (auth.jwt() ->> 'email') = 'shobhitkaushik1824@gmail.com');
drop policy if exists "Only Shobhit admin can insert" on public.projects;
create policy "Only Shobhit admin can insert" on public.projects for insert to authenticated with check ((auth.jwt() ->> 'email') = 'shobhitkaushik1824@gmail.com');
drop policy if exists "Only Shobhit admin can update" on public.projects;
create policy "Only Shobhit admin can update" on public.projects for update to authenticated using ((auth.jwt() ->> 'email') = 'shobhitkaushik1824@gmail.com') with check ((auth.jwt() ->> 'email') = 'shobhitkaushik1824@gmail.com');
drop policy if exists "Only Shobhit admin can delete" on public.projects;
create policy "Only Shobhit admin can delete" on public.projects for delete to authenticated using ((auth.jwt() ->> 'email') = 'shobhitkaushik1824@gmail.com');
insert into storage.buckets (id,name,public,file_size_limit,allowed_mime_types) values ('project-images','project-images',true,4194304,array['image/png','image/jpeg','image/webp']) on conflict (id) do update set public=excluded.public,file_size_limit=excluded.file_size_limit,allowed_mime_types=excluded.allowed_mime_types;
drop policy if exists "Public can view project images" on storage.objects;
create policy "Public can view project images" on storage.objects for select to anon, authenticated using (bucket_id='project-images');
drop policy if exists "Only Shobhit admin can upload project images" on storage.objects;
create policy "Only Shobhit admin can upload project images" on storage.objects for insert to authenticated with check (bucket_id='project-images' and (auth.jwt() ->> 'email')='shobhitkaushik1824@gmail.com');
drop policy if exists "Only Shobhit admin can update project images" on storage.objects;
create policy "Only Shobhit admin can update project images" on storage.objects for update to authenticated using (bucket_id='project-images' and (auth.jwt() ->> 'email')='shobhitkaushik1824@gmail.com');
drop policy if exists "Only Shobhit admin can delete project images" on storage.objects;
create policy "Only Shobhit admin can delete project images" on storage.objects for delete to authenticated using (bucket_id='project-images' and (auth.jwt() ->> 'email')='shobhitkaushik1824@gmail.com');
