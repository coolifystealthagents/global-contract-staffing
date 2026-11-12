'use client';
import {useEffect} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import data from './refresh-data.json';
gsap.registerPlugin(ScrollTrigger);
export function RefreshMotion(){useEffect(()=>{const mm=gsap.matchMedia();mm.add('(prefers-reduced-motion: no-preference)',()=>{const ctx=gsap.context(()=>{if(data.theme==='labor'||data.theme==='assistants')gsap.utils.toArray<HTMLElement>('.fr-journal-grid img,.fr-card-image img').forEach(el=>gsap.fromTo(el,{scale:1.06},{scale:1,ease:'none',scrollTrigger:{trigger:el,start:'top bottom',end:'bottom center',scrub:1}}));if(data.theme==='labor'||data.theme==='fitness')gsap.utils.toArray<HTMLElement>('.fr-process h2,.fr-working h2').forEach(el=>gsap.from(el,{y:24,scrollTrigger:{trigger:el,start:'top 90%',end:'top 45%',scrub:1}}));if(['assistants','fitness','global'].includes(data.theme))gsap.utils.toArray<HTMLElement>('.fr-process-items article').forEach((el,i)=>gsap.from(el,{y:26+i*12,scrollTrigger:{trigger:el,start:'top 95%',end:'top 65%',scrub:1}}));if(data.theme==='global'&&window.innerWidth>1100)ScrollTrigger.create({trigger:'.fr-pin',start:'top 140px',endTrigger:'.fr-process-items',end:'bottom 500px',pin:true,pinSpacing:false});},'.fr-page');return()=>ctx.revert()});return()=>mm.revert()},[]);return null}
