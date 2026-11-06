export const EMAIL='tharusanduni33@gmail.com',GITHUB='https://github.com/TharuSenevirathne',LINKEDIN='https://www.linkedin.com/in/tharu-senevirathne-8933b8343/';
export const intro=["I'm a Full Stack Developer and Software Engineering undergraduate with hands on industry experience in backend development, RESTful API design, and production level system integration.","I'm passionate about building scalable applications, creating meaningful digital experiences, and continuously exploring new technologies."];
// Featured projects. `live` is a Vercel URL; leave it '' to hide the Live Demo link.
// TODO: the MyMusic and BookMe.lk repo/live URLs below are PLACEHOLDER guesses (not found as public repos
// on the profile) and the CompliQ live URL is a guess. Replace with the real URLs; set live:'' if none.
export const projects:{n:string;title:string;lang:string;d:string;url:string;live:string}[]=[
{n:'MyMusic',title:'MyMusic',lang:'Full-Stack',d:'A music streaming platform for browsing and playing tracks.',url:`${GITHUB}/MyMusic`,live:'https://mymusic.vercel.app'},
{n:'BookMe.lk',title:'BookMe.lk',lang:'Full-Stack',d:'A booking platform built for the Sri Lankan market.',url:`${GITHUB}/BookMe.lk`,live:'https://bookme-lk.vercel.app'},
{n:'CompliQ',title:'CompliQ',lang:'Full-Stack',d:'A Smart Complaint Management System for submitting, tracking and resolving complaints.',url:`${GITHUB}/CompliQ`,live:'https://compliq.vercel.app'},
...[
{n:'Layered-Architecture-Project',lang:'',d:'Java application organised in a layered architecture.'},
{n:'Serenity-Mental-Health-Therapy-Center',lang:'',d:'Java management application for a therapy centre.'},
{n:'Complaint-Management-System',lang:'',d:'Java system for managing complaints.'},
].map(p=>({...p,title:p.n.replace(/-/g,' '),url:`${GITHUB}/${p.n}`,live:''}))
];
export const exp={role:'Backend Developer Intern',co:'i4Matrix (Pvt) Ltd',when:'10 MAR 2026 — 11 SEP 2026',where:'Colombo, Sri Lanka',
pts:['Developed backend services and RESTful APIs using Node.js, Express.js, NestJS, and TypeScript.','Contributed to a Staff Transportation Management System on a microservices architecture: authentication, booking, payment, chat, notification, review, and complaint services.','Contributed to a Worker Platform Management System using Next.js, PostgreSQL, Redis, and MinIO.','Worked with PostgreSQL, MongoDB, Prisma, Supabase, Redis, and Docker.','Supported integration testing, debugging, cloud deployment, and technical documentation.','Collaborated with the development team to implement and maintain backend functionality.']};
export const skills:Record<string,string[]>={
'Programming Languages':['Java','Python'],
'Frontend':['React.js','React Native','Next.js','HTML','CSS','Bootstrap','TypeScript','JavaScript'],
'Backend':['Node.js','Express.js','NestJS','Spring Boot'],
'Databases':['MySQL','MongoDB','PostgreSQL','Firebase Firestore'],
'Cloud & Infrastructure':['Docker','Google Cloud Platform'],
'Tools':['Git','GitHub','Postman','Swagger','Docker','IntelliJ IDEA','Visual Studio Code','Figma']};
export const edu=[['HND in Software Engineering','Institute of Software Engineering (IJSE)'],['English Language Studies','British Council'],['G.C.E. Advanced Level','G/Ananda Central College'],['G.C.E. Ordinary Level','G/Ananda Central College']];
