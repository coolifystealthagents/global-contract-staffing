import {Library} from '../library';
import {normalizePosts} from '../library-normalize';
import {researchPosts} from '@/lib/content';
export const metadata={title:'Research',alternates:{canonical:'/research'}};
export default function Page(){return <><main id="main-content"><Library kind="research" posts={normalizePosts(researchPosts,"research")}/></main></>}
