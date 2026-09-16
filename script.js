
const projects = {
  starbucks: {
    title: "Starbucks Sales Dashboard",
    image: "assets/starbucks-dashboard-1.png",
    logo: "assets/starbucks-logo.png",
    images: ["assets/starbucks-dashboard-1.png","assets/starbucks-dashboard-2.png"],
    desc: "Sales trends, product performance, customer behavior and regional analysis.",
    insight: "Identified sales patterns across products, categories and regions to support revenue-focused decisions.",
    tags: ["Power BI","Excel","DAX"],
    badge: "☕ Starbucks",
    repo: "https://github.com/shobhitkaushik001-web?tab=repositories&q=starbucks"
  },
  spotify: {
    title: "Spotify Music Analytics",
    logo: "assets/spotify-logo.png",
    image: "assets/spotify-dashboard.png",
    images: ["assets/spotify-dashboard.png"],
    desc: "Streaming trends, top artists, genres, countries, devices and listener behavior analysis.",
    insight: "Discovered user preferences and listening habits to inform content curation and marketing strategies.",
    tags: ["Power BI","Data Cleaning","DAX"],
    badge: "<i class='fa-brands fa-spotify'></i> Spotify",
    repo: "https://github.com/shobhitkaushik001-web?tab=repositories&q=spotify"
  },
  amazon: {
    logo: "assets/amazon-logo.png",
    title: "Amazon E-Commerce Analysis",
    image: "assets/amazon-dashboard.png",
    images: ["assets/amazon-dashboard.png"],
    desc: "End-to-end analysis using MySQL and Power BI with interactive dashboards.",
    insight: "Analyzed revenue, orders, profitability and regional performance to identify growth opportunities and support business decisions.",
    tags: ["MySQL","Power BI","Data Modeling"],
    badge: "a→ Amazon",
    repo: "https://github.com/shobhitkaushik001-web?tab=repositories&q=amazon"
  },
  netflix: {
    title: "Netflix Content Analytics",
    image: "assets/netflix-dashboard-1.png",
    logo: "assets/netflix-logo.png",
    images: ["assets/netflix-dashboard-1.png","assets/netflix-dashboard-2.png"],
    desc: "Content, subscription and revenue analytics with interactive Power BI reporting.",
    insight: "Analyzed content, subscription and revenue trends to uncover audience preferences and support data-driven content decisions.",
    tags: ["Power BI","DAX","Power Query"],
    badge: "N Netflix",
    repo: "https://github.com/shobhitkaushik001-web?tab=repositories&q=netflix"
  },
  airbnb: {
    title: "Airbnb India Analysis",
    logo: "assets/airbnb-logo.png",
    image: "assets/airbnb-dashboard.png",
    images: ["assets/airbnb-dashboard.png"],
    desc: "Market performance, pricing, room type and city-wise revenue analysis.",
    insight: "Analyzed booking trends, pricing, room types and city-wise revenue to identify high-performing markets and growth opportunities.",
    tags: ["Tableau","Data Visualization","Market Analysis"],
    badge: "<i class='fa-brands fa-airbnb'></i> Airbnb",
    repo: "https://github.com/shobhitkaushik001-web?tab=repositories&q=airbnb"
  }
};

const order = ["starbucks","spotify","amazon","airbnb","netflix"];

document.getElementById("projectsGrid").innerHTML = order.map(id => {
  const p = projects[id];
  return `
    <article class="project-card">
      <div class="project-image">
    <img src="${p.image}" alt="${p.title}">

    <div class="project-logo-badge">
        <img src="${p.logo}" alt="${p.title} logo">
    </div>
</div>

      <div class="project-content">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
<div class="project-insight">
    <i class="fa-solid fa-lightbulb"></i>
    <strong>Key Insight:</strong> ${p.insight}
</div>
        <div class="tags">
          ${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}
        </div>

        <div class="project-actions">
          <button class="view-dashboard" data-project="${id}">
            <i class="fa-solid fa-expand"></i> View Dashboard
          </button>
          <a href="${p.repo}" target="_blank">
            <i class="fa-brands fa-github"></i> GitHub
          </a>
        </div>
      </div>
    </article>
  `;
}).join("");

const certs = [
  {
    icon:"fa-brands fa-google",
    title:"Google Data Analytics",
    issuer:"Professional Certificate",
    link:"https://coursera.org/share/c6c9087ac80d3d48a7a19085e39598ca"
  },
  {
    icon:"fa-solid fa-chart-line",
    title:"Deloitte Australia",
    issuer:"Data Analytics Job Simulation",
    link:"https://www.theforage.com/completion-certificates/tMjbs76F526fF5v3G/NjynCWzGSaWXQCxSX_tMjbs76F526fF5v3G_xZJpafmsx7vbd2GEq_1784706218725_completion_certificate.pdf"
  },
  {
    icon:"fa-solid fa-shield-halved",
    title:"PwC Switzerland",
    issuer:"Digital Assurance Job Simulation",
    link:"https://www.theforage.com/completion-certificates/4sLyCPgmsy8DA6Dh3/HvttDDjBQuo57CgpP_4sLyCPgmsy8DA6Dh3_xZJpafmsx7vbd2GEq_1784652876048_completion_certificate.pdf"
  },
  {
    icon:"fa-solid fa-plane",
    title:"British Airways",
    issuer:"Data Science Job Simulation",
    link:"https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_xZJpafmsx7vbd2GEq_1784628976765_completion_certificate.pdf"
  }
];

document.getElementById("certGrid").innerHTML = certs.map(c => `
  <article class="cert-card">
    <div class="cert-icon"><i class="${c.icon}"></i></div>
    <div class="cert-body">
      <h4>${c.title}</h4>
      <p>${c.issuer}</p>
      <a href="${c.link}" target="_blank">
        View Certificate <i class="fa-solid fa-arrow-up-right-from-square"></i>
      </a>
    </div>
  </article>
`).join("");

const skills = [
  ["fa-chart-column","Power BI","Dashboards"],
  ["fa-database","SQL","Analysis"],
  ["fa-file-excel","Excel","Reporting"],
  ["fa-brands fa-python","Python","Data Analysis"],
  ["fa-chart-simple","Tableau","Visualization"],
  ["fa-server","MySQL","Databases"],
  ["fa-bolt","DAX","Measures"],
  ["fa-wand-magic-sparkles","Power Query","Cleaning"]
];

document.getElementById("skillsGrid").innerHTML = skills.map(([icon,name,desc]) => `
  <div class="skill-card">
    <i class="${icon.includes("fa-brands") ? icon : "fa-solid "+icon}"></i>
    <b>${name}</b>
    <small>${desc}</small>
  </div>
`).join("");

const modal = document.getElementById("previewModal");
const modalTitle = document.getElementById("modalTitle");
const modalGallery = document.getElementById("modalGallery");
const caseStudyBtn = document.getElementById("caseStudyBtn");

function openProject(id){
  const p = projects[id];
  modalTitle.textContent = p.title;
  modalGallery.innerHTML = p.images.map(src => `<img src="${src}" alt="${p.title} dashboard">`).join("");
  caseStudyBtn.href = `project.html?id=${id}`;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden","false");
  document.body.style.overflow = "hidden";
}
function closeModal(){
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden","true");
  document.body.style.overflow = "";
}

document.querySelectorAll("[data-project]").forEach(btn => {
  btn.addEventListener("click", () => openProject(btn.dataset.project));
});
document.getElementById("modalClose").addEventListener("click", closeModal);
modal.addEventListener("click", e => { if(e.target === modal) closeModal(); });
document.addEventListener("keydown", e => { if(e.key === "Escape") closeModal(); });

const themeToggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("portfolio-theme");
if(savedTheme === "light"){
  document.body.classList.add("light");
  themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
}
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  const light = document.body.classList.contains("light");
  localStorage.setItem("portfolio-theme", light ? "light" : "dark");
  themeToggle.innerHTML = light
    ? '<i class="fa-solid fa-moon"></i>'
    : '<i class="fa-solid fa-sun"></i>';
});

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
menuBtn.addEventListener("click", () => nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

// Load projects securely published from the private admin panel.
(async function loadSecureProjects(){
  const cfg=window.PORTFOLIO_CONFIG||{};
  if(!cfg.SUPABASE_URL || cfg.SUPABASE_URL.includes('YOUR_PROJECT') || !cfg.SUPABASE_ANON_KEY || cfg.SUPABASE_ANON_KEY.includes('YOUR_')) return;
  try{
    const sb=window.supabase.createClient(cfg.SUPABASE_URL,cfg.SUPABASE_ANON_KEY);
    const {data,error}=await sb.from('projects').select('id,title,description,github_url,project_type,tools,image_url,key_insight,logo_url,created_at').eq('is_published',true).order('created_at',{ascending:false});
    if(error) throw error;
    if(!data?.length) return;
    const grid=document.getElementById('projectsGrid');
    const esc=s=>String(s??'').replace(/[&<>\"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',"'":'&#039;'}[c]));
    const cards=data.map(p=>{
      const tools=Array.isArray(p.tools)?p.tools:[];
      const image=p.image_url?`<img src="${esc(p.image_url)}" alt="${esc(p.title)}">`:`<div style="height:100%;display:grid;place-items:center;background:linear-gradient(135deg,#071711,#10372a);color:#fff;text-align:center;padding:20px"><div><i class="fa-brands fa-github" style="font-size:44px;color:#39f09a"></i><b style="display:block;margin-top:10px">${esc(p.title)}</b></div></div>`;
      return `<article class="project-card">
  <div class="project-image">
    ${image}
    ${p.logo_url ? `<div class="project-logo-badge"><img src="${esc(p.logo_url)}" alt="${esc(p.title)} logo"></div>` : ''}
  </div>
  <div class="project-content">
    <h3>${esc(p.title)}</h3>
    <p>${esc(p.description)}</p>
    ${p.key_insight ? `<div class="project-insight"><i class="fa-solid fa-lightbulb project-insight-icon"></i><strong>Key Insight:</strong><span>${esc(p.key_insight)}</span></div>` : ''}
    <div class="tags">${tools.slice(0,4).map(t => `<span class="tag">${esc(t)}</span>`).join('')}</div>
    <div class="project-actions">
      <a class="view-dashboard" href="${esc(p.github_url)}" target="_blank" rel="noopener"><i class="fa-solid fa-arrow-up-right-from-square"></i> View Dashboard</a>
      <a href="${esc(p.github_url)}" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i> GitHub</a>
    </div>
  </div>
</article>`;
    }).join('');
    grid.insertAdjacentHTML('beforeend',cards);
  }catch(e){console.warn('Secure projects could not be loaded:',e.message)}
})();

/* ===== HERO TYPING ANIMATION ===== */

const typingText = document.getElementById("typingText");

if (typingText) {
    const roles = [
        "Data Analyst",
        "Power BI Developer",
        "SQL Analyst",
        "Dashboard Builder"
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeRole() {
        const currentRole = roles[roleIndex];

        if (!deleting) {
            typingText.textContent =
                currentRole.substring(0, charIndex + 1);

            charIndex++;

            if (charIndex === currentRole.length) {
                deleting = true;
                setTimeout(typeRole, 1600);
                return;
            }
        } else {
            typingText.textContent =
                currentRole.substring(0, charIndex - 1);

            charIndex--;

            if (charIndex === 0) {
                deleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
            }
        }

        setTimeout(typeRole, deleting ? 45 : 85);
    }

    typeRole();
}

/* ===== OPEN TO OPPORTUNITIES ===== */

const opportunityButton = document.getElementById("openOpportunityModal");

if (opportunityButton) {
    opportunityButton.addEventListener("click", function () {
        document.getElementById("opportunityModal")?.classList.add("active");
        document.body.style.overflow = "hidden";
    });
}

const opportunityClose = document.getElementById("closeOpportunityModal");
const opportunityModal = document.getElementById("opportunityModal");

if (opportunityClose) {
    opportunityClose.addEventListener("click", function () {
        opportunityModal.classList.remove("active");
        document.body.style.overflow = "";
    });
}

if (opportunityModal) {
    opportunityModal.addEventListener("click", function (event) {
        if (event.target === opportunityModal) {
            opportunityModal.classList.remove("active");
            document.body.style.overflow = "";
        }
    });
}

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && opportunityModal) {
        opportunityModal.classList.remove("active");
        document.body.style.overflow = "";
    }
});