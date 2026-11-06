import {useEffect,useState,ReactNode} from 'react';
import {motion,MotionConfig,useScroll,useSpring} from 'framer-motion';
import {ArrowUpRight,Github,Linkedin,Mail} from 'lucide-react';
import {EMAIL,GITHUB,LINKEDIN,intro,projects,exp,skills,edu} from './data';

const NAV=[['info','01','About'],['archive','02','Work'],['work','03','Projects'],['contact','04','Contact']];
const ease=[0.22,1,0.36,1] as const;
const CV_PATH='/assets/Tharu_Senevirathne_CV.pdf';
const CV_FILENAME='Tharu_Senevirathne_CV.pdf';

function Reveal({children,delay=0,className=''}:{children:ReactNode;delay?:number;className?:string}){
  return <motion.div className={className} initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-10%'}} transition={{duration:.9,ease,delay}}>{children}</motion.div>;
}
function Title({children}:{children:string}){
  return <motion.h2 className="title select-none" aria-label={children} initial={{opacity:0,letterSpacing:'.2em'}} whileInView={{opacity:1,letterSpacing:'0em'}} viewport={{once:true}} transition={{duration:1.2,ease}}>
    {children.split('').map((c,i)=><motion.span key={i} aria-hidden="true" className="inline-block" initial={{opacity:0,y:'.18em'}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.9,ease,delay:i*.06}}>{c}</motion.span>)}
  </motion.h2>;
}
function ScrollProgress(){
  const {scrollYProgress}=useScroll();const x=useSpring(scrollYProgress,{stiffness:120,damping:30,mass:.3});
  return <motion.div aria-hidden="true" style={{scaleX:x}} className="pointer-events-none fixed inset-x-0 top-0 z-50 h-px origin-left bg-vio"/>;
}
function Clock(){
  const [t,setT]=useState(new Date());
  useEffect(()=>{const i=setInterval(()=>setT(new Date()),1000);return()=>clearInterval(i)},[]);
  const o={timeZone:'Asia/Colombo'} as const;
  return <div className="text-right md:text-left"><div>{t.toLocaleTimeString('en-US',{...o,hour:'numeric',minute:'2-digit'})} [LK]</div><div>{t.toLocaleDateString('en-GB',{...o,day:'numeric',month:'long',year:'numeric'}).toUpperCase()}</div></div>;
}
function Nav(){
  const [a,setA]=useState('info');
  useEffect(()=>{const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&setA(e.target.id)),{rootMargin:'-45% 0px -50% 0px'});
    NAV.forEach(([id])=>{const el=document.getElementById(id);el&&io.observe(el)});return()=>io.disconnect()},[]);
  return <motion.nav initial={{opacity:0,x:-12}} animate={{opacity:1,x:0}} transition={{duration:.8,ease,delay:.3}} className="fixed left-0 top-4 z-40 flex flex-col gap-3 pl-3 text-[10px]">
    {NAV.map(([id,n,l])=><a key={id} href={`#${id}`} className={`flex items-center gap-2 border-l-2 pl-2 transition-all duration-300 ease-out hover:translate-x-1 ${a===id?'border-vio text-lav':'border-transparent mut hover:text-lav'}`}><span className="mut text-[8px]">{n}</span>{l}</a>)}
  </motion.nav>;
}
function Header(){
  return <motion.header initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.9,ease,delay:.2}} className="pointer-events-none fixed inset-x-0 top-0 z-30 grid grid-cols-[1fr_auto] gap-6 px-4 pt-4 text-[10px] md:grid-cols-[1fr_1fr_1fr] md:px-0">
    <div className="hidden md:block"/><div className="md:pl-[8vw]"><div>THARU SENEVIRATHNE</div><div className="mut">FULL-STACK DEVELOPER</div></div><div className="md:pl-[10vw]"><Clock/></div></motion.header>;
}
function Section({id,title,children}:{id:string;title:string;children:ReactNode}){
  return <section id={id} className="relative mx-auto max-w-6xl px-5 pb-32 pt-36 md:px-10"><Title>{title}</Title>{children}</section>;
}
export default function App(){
  return <MotionConfig reducedMotion="user"><motion.main initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.8,ease}} className="min-h-screen overflow-x-hidden bg-ink">
    <ScrollProgress/><Nav/><Header/>
    <Section id="info" title="About">
      <div className="relative mt-4 flex justify-center md:mt-4">
        <motion.img src="/tharu.jpg" alt="Portrait of Tharu Senevirathne" initial={{clipPath:'inset(100% 0 0 0)',scale:1.08}} whileInView={{clipPath:'inset(0% 0 0 0)',scale:1}} viewport={{once:true}} transition={{duration:1.4,ease}} className="aspect-[4/5] w-[62vw] max-w-[260px] object-cover"/>
      </div>
      <div className="mx-auto mt-20 grid max-w-4xl gap-10 md:grid-cols-2">
        {intro.map((p,i)=><Reveal key={i} delay={i*.12}><p className="text-[13px] leading-relaxed">{p}</p></Reveal>)}
      </div>
      <Reveal className="mx-auto mt-10 flex max-w-4xl flex-wrap gap-4">
        <a href={CV_PATH} target="_blank" rel="noreferrer" className="mut border border-lav/20 px-5 py-2 text-[11px] transition-colors duration-300 hover:text-lav">
          View CV
        </a>
        <a href={CV_PATH} download={CV_FILENAME} className="mut border border-lav/20 px-5 py-2 text-[11px] transition-colors duration-300 hover:text-lav">
          Download CV
        </a>
      </Reveal>
      <Reveal className="mx-auto mt-24 max-w-4xl"><div className="mut mb-4 text-[10px]">EDUCATION</div>
        {edu.map(([a,b],i)=><motion.div key={a} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.7,ease,delay:i*.08}} className="flex flex-col justify-between gap-1 border-t border-lav/15 py-4 md:flex-row"><span>{a}</span><span className="mut">{b}</span></motion.div>)}</Reveal>
    </Section>

    <Section id="archive" title="Work">
      <Reveal className="mx-auto mt-20 max-w-4xl">
        <div className="mut mb-4 text-[10px]">EXPERIENCE</div>
        <div className="relative border-l border-vio pl-6">
          <motion.span initial={{scale:0}} whileInView={{scale:1}} viewport={{once:true}} transition={{duration:.6,ease,delay:.2}} className="absolute -left-[5px] top-1 h-2 w-2 bg-vio"/>
          <div className="flex flex-col justify-between gap-1 md:flex-row"><h3 className="text-base">{exp.role} — {exp.co}</h3><span className="mut">{exp.when}</span></div>
          <div className="mut mt-1">{exp.where}</div>
          <ul className="mt-5 space-y-3 leading-relaxed">{exp.pts.map((x,i)=><motion.li key={x} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-5%'}} transition={{duration:.7,ease,delay:i*.07}} className="flex gap-3"><span className="text-vio">—</span>{x}</motion.li>)}</ul>
        </div>
      </Reveal>
      <Reveal className="mx-auto mt-24 max-w-4xl"><div className="mut mb-4 text-[10px]">SKILLS</div>
        {Object.entries(skills).map(([k,v],i)=><motion.div key={k} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.7,ease,delay:i*.07}} className="grid gap-2 border-t border-lav/15 py-4 md:grid-cols-[14rem_1fr]"><span className="mut">{k}</span><span className="leading-relaxed">{v.join('  /  ')}</span></motion.div>)}
      </Reveal>
    </Section>

    <Section id="work" title="Projects">
      <ul className="mx-auto mt-20 max-w-4xl">
        {projects.map((p,i)=><Reveal key={p.n} delay={.04}><div className="group relative grid grid-cols-[2rem_1fr_auto] items-baseline gap-4 border-t border-lav/15 py-6 transition-colors hover:bg-lav/5 md:grid-cols-[3rem_1.2fr_1.5fr_auto]">
          <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-px origin-top scale-y-0 bg-vio transition-transform duration-500 ease-out group-hover:scale-y-100"/>
          <span className="mut">0{i+1}</span>
          {p.url
            ? <a href={p.url} target="_blank" rel="noreferrer" className="break-words font-black text-2xl text-lav transition-transform duration-500 group-hover:translate-x-2 md:text-3xl">{p.title}</a>
            : <span className="break-words font-black text-2xl text-lav md:text-3xl">{p.title}</span>}
          <span className="mut col-span-3 col-start-2 md:col-span-1 md:col-start-auto">{p.d}</span>
          <span className="col-span-3 col-start-2 flex items-center gap-4 md:col-span-1 md:col-start-auto md:justify-self-end"><span className="mut">{p.lang}</span>
            {p.githubLinks?.length
              ? p.githubLinks.map(link=><a key={link.label} href={link.url} target="_blank" rel="noreferrer" aria-label={`${p.title} ${link.label}`} className="group/l flex items-center gap-1 transition-colors hover:text-white">{link.label}<ArrowUpRight size={14} className="transition-transform duration-300 group-hover/l:-translate-y-0.5 group-hover/l:translate-x-0.5"/></a>)
              : p.url
              ? <a href={p.url} target="_blank" rel="noreferrer" aria-label={`${p.title} on GitHub`} className="group/l flex items-center gap-1 transition-colors hover:text-white">GITHUB<ArrowUpRight size={14} className="transition-transform duration-300 group-hover/l:-translate-y-0.5 group-hover/l:translate-x-0.5"/></a>
              : <span className="mut" title={p.repoNote ?? 'GitHub repo unavailable'}>GITHUB N/A</span>}
            {p.live
              ? <a href={p.live} target="_blank" rel="noreferrer" aria-label={`${p.title} live demo`} className="group/l flex items-center gap-1 transition-colors hover:text-white">LIVE<ArrowUpRight size={14} className="transition-transform duration-300 group-hover/l:-translate-y-0.5 group-hover/l:translate-x-0.5"/></a>
              : <span className="mut" title={p.liveNote ?? 'Live URL unavailable'}>LIVE N/A</span>}
          </span>
        </div></Reveal>)}
        <li className="border-t border-lav/15 pt-6"><a className="mut transition-colors duration-300 hover:text-lav" href={`${GITHUB}?tab=repositories`} target="_blank" rel="noreferrer">ALL REPOSITORIES ON GITHUB ↗</a></li>
      </ul>
    </Section>

    <Section id="contact" title="Contact">
      <Reveal className="mx-auto mt-20 max-w-4xl text-center">
        <p className="font-black text-3xl text-lav md:text-5xl">{['Code with clarity.','Create with purpose.'].map((l,i)=><motion.span key={l} className="block" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.9,ease,delay:.15+i*.18}}>{l}</motion.span>)}</p>
        <div className="mt-8 flex justify-center gap-6">
          {[[GITHUB,Github,'GitHub'],[LINKEDIN,Linkedin,'LinkedIn'],[`mailto:${EMAIL}`,Mail,'Email']].map(([h,I,l])=>{const Icon=I as typeof Mail;return <a key={l as string} href={h as string} target="_blank" rel="noreferrer" aria-label={l as string} className="mut transition-all duration-300 hover:-translate-y-0.5 hover:scale-110 hover:text-lav"><Icon size={18}/></a>})}
        </div>
      </Reveal>
      <footer className="mut mt-32 text-center text-[10px]">© 2026 THARU SENEVIRATHNE</footer>
    </Section>
  </motion.main></MotionConfig>;
}
