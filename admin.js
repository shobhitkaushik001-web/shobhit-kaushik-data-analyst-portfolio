const cfg=window.PORTFOLIO_CONFIG||{};
const warning=document.getElementById('setupWarning');
const configured = !!(
  cfg.SUPABASE_URL &&
  cfg.SUPABASE_ANON_KEY &&
  cfg.SUPABASE_URL.startsWith('https://') &&
  cfg.SUPABASE_URL.includes('.supabase.co') &&
  cfg.SUPABASE_ANON_KEY.startsWith('sb_publishable_')
);
if(configured) warning.hidden=true;
const sb=configured?window.supabase.createClient(cfg.SUPABASE_URL,cfg.SUPABASE_ANON_KEY):null;
const loginView=document.getElementById('loginView'),adminView=document.getElementById('adminView');
const loginForm=document.getElementById('loginForm'),email=document.getElementById('loginEmail'),password=document.getElementById('loginPassword'),loginMessage=document.getElementById('loginMessage');
email.value='';
const msg=(el,t,type='')=>{el.textContent=t;el.className='message '+type};
const esc=s=>String(s??'').replace(/[&<>\"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',"'":'&#039;'}[c]));
document.getElementById('togglePassword').onclick=()=>{password.type=password.type==='password'?'text':'password'};
loginForm.onsubmit=async e=>{e.preventDefault();if(!configured){msg(loginMessage,'Complete Supabase setup first.','error');return;}const em=email.value.trim().toLowerCase();if(cfg.ADMIN_EMAIL&&em!==cfg.ADMIN_EMAIL.toLowerCase()){msg(loginMessage,'This account is not authorized.','error');return;}msg(loginMessage,'Checking credentials...');const {data,error}=await sb.auth.signInWithPassword({email:em,password:password.value});if(error){msg(loginMessage,'Login failed. Check email/password.','error');return;}if(cfg.ADMIN_EMAIL&&data.user.email.toLowerCase()!==cfg.ADMIN_EMAIL.toLowerCase()){await sb.auth.signOut();msg(loginMessage,'Unauthorized account.','error');return;}await showAdmin(data.user)};
document.getElementById('logoutBtn').onclick=async()=>{await sb.auth.signOut();adminView.hidden=true;loginView.hidden=false;password.value=''};
async function showAdmin(user){loginView.hidden=true;adminView.hidden=false;document.getElementById('adminIdentity').textContent='Signed in as '+user.email;await loadProjects()}
async function loadProjects(){const list=document.getElementById('projectList');list.innerHTML='<div class="message">Loading projects...</div>';const {data,error}=await sb.from('projects').select('*').order('created_at',{ascending:false});if(error){list.innerHTML='<div class="message error">'+esc(error.message)+'</div>';return;}document.getElementById('totalProjects').textContent=data.length;document.getElementById('publishedProjects').textContent=data.filter(p=>p.is_published).length;if(!data.length){list.innerHTML='<div class="message">No managed projects yet. Click Add Project.</div>';return;}list.innerHTML=data.map(p=>`<article class="project-row">${p.image_url?`<img class="thumb" src="${esc(p.image_url)}" alt="">`:'<div class="thumb"></div>'}<div><h3>${esc(p.title)}</h3><p>${esc(p.description)}</p><div class="meta"><span class="chip">${esc(p.project_type)}</span><span class="chip ${p.is_published?'live':''}">${p.is_published?'Published':'Draft'}</span></div></div><div class="row-actions"><button class="secondary" data-edit="${p.id}"><i class="fa-solid fa-pen"></i> Edit</button><button class="danger" data-delete="${p.id}"><i class="fa-solid fa-trash"></i> Delete</button></div></article>`).join('');list.querySelectorAll('[data-edit]').forEach(b=>b.onclick=()=>editProject(data.find(p=>p.id===b.dataset.edit)));list.querySelectorAll('[data-delete]').forEach(b=>b.onclick=()=>deleteProject(b.dataset.delete))}
const modal=document.getElementById('editorModal'),form=document.getElementById('projectForm'),editorMsg=document.getElementById('editorMessage');
const f={id:document.getElementById('projectId'),title:document.getElementById('pTitle'),github:document.getElementById('pGithub'),description:document.getElementById('pDescription'),insight:document.getElementById('pInsight'),type:document.getElementById('pType'),tools:document.getElementById('pTools'),image:document.getElementById('pImage'),logo:document.getElementById('pLogo'),published:document.getElementById('pPublished')};
function openEditor(){modal.classList.add('open')}function closeEditor(){modal.classList.remove('open');form.reset();f.id.value='';editorMsg.textContent=''}
document.getElementById('newProjectBtn').onclick=()=>{document.getElementById('editorTitle').textContent='Add Project';f.published.checked=true;openEditor()};document.getElementById('editorClose').onclick=closeEditor;document.getElementById('cancelEditor').onclick=closeEditor;modal.onclick=e=>{if(e.target===modal)closeEditor()};
function editProject(p){document.getElementById('editorTitle').textContent='Edit Project';f.id.value=p.id;f.title.value=p.title;f.github.value=p.github_url;f.description.value=p.description;f.insight.value=p.key_insight||'';f.type.value=p.project_type||'Data Analytics';f.tools.value=(p.tools||[]).join(', ');f.published.checked=!!p.is_published;openEditor()}
async function uploadImage(file){if(!file)return null;if(file.size>4*1024*1024)throw new Error('Image is too large. Use an image below 4 MB.');const ext=(file.name.split('.').pop()||'png').toLowerCase().replace(/[^a-z0-9]/g,'');const path=`${Date.now()}-${crypto.randomUUID()}.${ext}`;const {error}=await sb.storage.from('project-images').upload(path,file,{cacheControl:'3600',upsert:false});if(error)throw error;return sb.storage.from('project-images').getPublicUrl(path).data.publicUrl}
form.onsubmit=async e=>{e.preventDefault();msg(editorMsg,'Saving...');try{let imageUrl=null;let logoUrl=null;if(f.image.files[0])imageUrl=await uploadImage(f.image.files[0]);if(f.logo.files[0])logoUrl=await uploadImage(f.logo.files[0]);const payload={title:f.title.value.trim(),github_url:f.github.value.trim(),description:f.description.value.trim(),key_insight:f.insight.value.trim(),project_type:f.type.value,tools:f.tools.value.split(',').map(x=>x.trim()).filter(Boolean),is_published:f.published.checked,updated_at:new Date().toISOString()};if(!/^https:\/\/github\.com\//i.test(payload.github_url))throw new Error('Use a valid https://github.com/... repository URL.');if(imageUrl)payload.image_url=imageUrl;if(logoUrl)payload.logo_url=logoUrl;const result=f.id.value?await sb.from('projects').update(payload).eq('id',f.id.value):await sb.from('projects').insert(payload);if(result.error)throw result.error;msg(editorMsg,'Project saved.','success');setTimeout(async()=>{closeEditor();await loadProjects()},450)}catch(err){msg(editorMsg,err.message||'Could not save project.','error')}};
async function deleteProject(id){if(!confirm('Delete this project permanently?'))return;const {error}=await sb.from('projects').delete().eq('id',id);if(error){alert(error.message);return;}await loadProjects()}
(async()=>{if(!configured)return;const {data}=await sb.auth.getSession();const user=data.session?.user;if(user&&(!cfg.ADMIN_EMAIL||user.email.toLowerCase()===cfg.ADMIN_EMAIL.toLowerCase()))await showAdmin(user);else if(user)await sb.auth.signOut()})();
// ===== ADMIN LIGHT / DARK THEME =====
const adminThemeToggle = document.getElementById('adminThemeToggle');

if (adminThemeToggle) {
    const savedAdminTheme = localStorage.getItem('portfolio-theme');

    if (savedAdminTheme === 'light') {
        document.body.classList.add('light');
        adminThemeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }

    adminThemeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light');

        const isLight = document.body.classList.contains('light');

        localStorage.setItem(
           'portfolio-theme',
            isLight ? 'light' : 'dark'
        );

        adminThemeToggle.innerHTML = isLight
            ? '<i class="fa-solid fa-sun"></i>'
            : '<i class="fa-solid fa-moon"></i>';
    });
}