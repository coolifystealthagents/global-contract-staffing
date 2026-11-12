import {Library} from '../library';
import {normalizePosts} from '../library-normalize';
import {blogPosts} from '@/lib/content';
export const metadata={title:'Blog',alternates:{canonical:'/blog'}};
export default function Page(){return <><main id="main-content"><Library kind="blog" posts={normalizePosts(blogPosts,"blog")}/></main></>}
