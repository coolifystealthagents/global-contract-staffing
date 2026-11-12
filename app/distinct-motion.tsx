'use client';
import {useEffect} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import d from './refresh-data.json';
gsap.registerPlugin(ScrollTrigger);
export function DistinctMotion(){useEffect(()=>{const mm=gsap.matchMedia();mm.add('(prefers-reduced-motion: no-preference)',()=>{const ctx=gsap.context(()=>{gsap.utils.toArray<HTMLElement>('.dx-working h2,.dx-brief h2').forEach(el=>gsap.from(el,{y:18,duration:.7,scrollTrigger:{trigger:el,start:'top 90%',end:'top 65%',scrub:.5}}));gsap.utils.toArray<HTMLElement>('.dx-card-image img,.dx-journal img').forEach(el=>gsap.from(el,{scale:1.04,duration:.8,scrollTrigger:{trigger:el,start:'top 95%'}}));if(d.theme==='labor'||d.theme==='fitness')gsap.utils.toArray<HTMLElement>('.dx-working-grid article').forEach((el,i)=>gsap.from(el,{y:16+i*8,scrollTrigger:{trigger:el,start:'top 95%',end:'top 70%',scrub:.5}}));if((d.theme==='global'||d.theme==='assistants')&&window.innerWidth>1100){const title=document.querySelector<HTMLElement>('.dx-brief>div:first-child'),list=document.querySelector<HTMLElement>('.dx-brief-list');if(title&&list&&list.offsetHeight>title.offsetHeight+100)ScrollTrigger.create({trigger:title,start:'top 130px',endTrigger:list,end:'bottom 450px',pin:true,pinSpacing:false})};},'.dx-page');return()=>ctx.revert()});return()=>mm.revert()},[]);return null}
