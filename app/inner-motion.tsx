'use client';
import {useRef} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {useGSAP} from '@gsap/react';
gsap.registerPlugin(ScrollTrigger,useGSAP);
export function InnerMotion(){const ref=useRef<HTMLSpanElement>(null);useGSAP(()=>{const root=ref.current?.closest('.ip-page');if(!root)return;const mm=gsap.matchMedia();mm.add('(prefers-reduced-motion: no-preference)',()=>{root.querySelectorAll('.ip-related-grid img,.ip-team figure').forEach(el=>gsap.from(el,{scale:.97,y:12,ease:'none',scrollTrigger:{trigger:el,start:'top 98%',end:'top 78%',scrub:true}}));root.querySelectorAll('.ip-quality-content article,.ip-next article').forEach(el=>gsap.from(el,{y:16,opacity:.85,duration:.5,scrollTrigger:{trigger:el,start:'top 93%'}}));});mm.add('(min-width:1100px) and (prefers-reduced-motion: no-preference)',()=>{const el=root.querySelector('.ip-sticky-title'),section=root.querySelector('.ip-quality');if(el&&section)ScrollTrigger.create({trigger:el,pin:el,pinSpacing:false,start:'top 135px',endTrigger:section,end:'bottom bottom'});});return()=>mm.revert();},{scope:ref});return <span ref={ref} hidden/>}
