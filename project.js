
const data = {
 starbucks:{
  type:"POWER BI",title:"Starbucks Sales Dashboard",
  summary:"A retail analytics dashboard focused on sales, profit, orders, products, geography, payment behavior and business performance.",
  tags:["Power BI","Power Query","DAX","Excel"],
  images:["assets/starbucks-dashboard-1.png","assets/starbucks-dashboard-2.png"],
  repo:"https://github.com/shobhitkaushik001-web?tab=repositories&q=starbucks",
  objective:"Create a clear executive view of retail sales performance while allowing interactive exploration of products, locations and customer-related patterns.",
  prep:"Cleaned and standardized the dataset in Power Query, handled data-quality issues and prepared reporting-ready fields.",
  analysis:"Created DAX measures for sales, orders, profit, AOV, quantity and rating, then analyzed monthly, state and category performance.",
  dashboard:"Built branded dashboard pages with KPI cards, slicers, monthly trend, state analysis, category breakdown and business insights.",
  steps:["Review raw data and business requirements.","Clean and transform data in Power Query.","Create DAX measures and KPI logic.","Build executive visuals and slicers.","Validate filters and interactions.","Package dashboard screenshots, PBIX and documentation for GitHub."]
 },
 spotify:{
  type:"POWER BI",title:"Spotify Music Analytics Dashboard",
  summary:"A music analytics dashboard covering total streams, tracks, artists, likes, saves, average popularity, duration, yearly trends, genre contribution, devices and top artists.",
  tags:["Power BI","Power Query","DAX","Streaming Analytics"],
  images:["assets/spotify-dashboard.png"],
  repo:"https://github.com/shobhitkaushik001-web?tab=repositories&q=spotify",
  objective:"Turn music streaming data into interactive KPIs and visual insights across artists, genres, devices, countries and release years.",
  prep:"Cleaned and standardized release year, genre, country, device and other fields in Power Query.",
  analysis:"Created measures for streams, tracks, artists, likes, saves, popularity, duration and trend analysis.",
  dashboard:"Built a Spotify-themed dashboard with KPI cards, filters, streaming trend, genre donut, top artists, streams by device and key insights.",
  steps:["Load the dataset into Power BI.","Clean text, dates and dimensions in Power Query.","Create DAX measures.","Build KPI cards and filters.","Create trend, genre, artist and device visuals.","Validate interactions and publish the dashboard to the portfolio."]
 },
 amazon:{
  type:"MYSQL + POWER BI",title:"Amazon E-Commerce Analysis",
  summary:"An end-to-end e-commerce analytics project covering revenue, orders, profit, categories, customers, regions and payments.",
  tags:["MySQL","Power BI","DAX","Data Modeling"],
  images:["assets/amazon-dashboard.png"],
  repo:"https://github.com/shobhitkaushik001-web?tab=repositories&q=amazon",
  objective:"Create an end-to-end BI solution combining relational data analysis with interactive dashboard reporting.",
  prep:"Loaded and validated multiple e-commerce tables, cleaned the data and prepared relationships for analysis.",
  analysis:"Used SQL for validation and analytical queries, then created Power BI relationships and DAX measures for business KPIs.",
  dashboard:"Built a dark Amazon-themed dashboard with revenue trends, category analysis, customer metrics and interactive filters.",
  steps:["Import tables into MySQL.","Clean and validate source data.","Write SQL queries for business analysis.","Connect MySQL to Power BI.","Create relationships and DAX measures.","Build and test interactive dashboard pages."]
 },
 netflix:{
  type:"POWER BI",title:"Netflix Content Analytics",
  summary:"A two-page analytics solution covering content performance, subscriptions, revenue, plans, regions and customer status.",
  tags:["Power BI","Power Query","DAX","Data Modeling"],
  images:["assets/netflix-dashboard-1.png","assets/netflix-dashboard-2.png"],
  repo:"https://github.com/shobhitkaushik001-web?tab=repositories&q=netflix",
  objective:"Connect content analytics with commercial subscription and revenue analysis in a single BI experience.",
  prep:"Cleaned and standardized content and subscription fields and prepared dimension relationships.",
  analysis:"Created measures for titles, ratings, watch hours, revenue, subscriptions, active customers and plan performance.",
  dashboard:"Built separate Content Performance and Subscription & Revenue pages with synchronized filters and a Netflix-inspired visual theme.",
  steps:["Clean and structure source data.","Create dimensions and relationships.","Build DAX measures.","Design the content page.","Design the subscription/revenue page.","Synchronize slicers and validate cross-filtering."]
 },
 airbnb:{
  type:"TABLEAU",title:"Airbnb India Analysis",
  summary:"A Tableau analytics project focused on bookings, estimated revenue, pricing, room types, cities, states and neighbourhoods across India.",
  tags:["Tableau","Data Visualization","KPI Design","Market Analysis"],
  images:["assets/airbnb-dashboard.png"],
  repo:"https://github.com/shobhitkaushik001-web?tab=repositories&q=airbnb",
  objective:"Build a polished market-performance dashboard for pricing, booking and geographic analysis.",
  prep:"Prepared and validated listing, host, geography, room type, price, reviews, availability and booking fields.",
  analysis:"Compared estimated bookings and revenue by state, city, neighbourhood and room type.",
  dashboard:"Built Tableau KPI cards, market rankings, monthly trend, room-type analysis and geographic visual storytelling.",
  steps:["Review data and define analytical questions.","Prepare Tableau fields and calculations.","Create core worksheets.","Build KPI cards and charts.","Add filters and navigation.","Refine alignment and publish documentation."]
 }
};

const id = new URLSearchParams(location.search).get("id") || "starbucks";
const p = data[id] || data.starbucks;

document.title = p.title + " | Shobhit Kaushik";
document.getElementById("type").textContent = p.type;
document.getElementById("title").textContent = p.title;
document.getElementById("summary").textContent = p.summary;
document.getElementById("tags").innerHTML = p.tags.map(t=>`<span class="tag">${t}</span>`).join("");
document.getElementById("gallery").innerHTML = p.images.map(src=>`<img src="${src}" alt="${p.title} dashboard">`).join("");
document.getElementById("objective").textContent = p.objective;
document.getElementById("prep").textContent = p.prep;
document.getElementById("analysis").textContent = p.analysis;
document.getElementById("dashboard").textContent = p.dashboard;
document.getElementById("steps").innerHTML = p.steps.map(s=>`<li>${s}</li>`).join("");
document.getElementById("repo").href = p.repo;
document.getElementById("repo2").href = p.repo;
