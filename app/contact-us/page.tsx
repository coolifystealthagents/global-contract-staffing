import {ContactExperience} from '../inner-pages';
import {LeadForm} from '@/components/LeadForm';
export const metadata={title:'Contact Us',description:"Let\u2019s connect the next part of your team.",alternates:{canonical:'/contact-us'}};
export default function Contact(){return <><main id="main-content"><ContactExperience><LeadForm source="contact-page-consultation"/></ContactExperience></main></>}
