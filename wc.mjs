import { BLOG_POSTS, BLOG_POSTS_EN } from '/tmp/bp.ts';
const count = (p) => {
  const t=[p.title,p.description,...p.tldr,...p.sections.flatMap(s=>[s.heading,...s.paragraphs,...(s.bullets||[]),s.image?.caption||'']),...p.faq.flatMap(f=>[f.question,f.answer]),...(p.howTo?[p.howTo.name,p.howTo.description||'',...p.howTo.steps.flatMap(s=>[s.name,s.text])]:[])].join(' ');
  return t.trim().split(/\s+/).length;
};
for (const [loc,arr] of [['tr',BLOG_POSTS],['en',BLOG_POSTS_EN]])
  for (const p of arr) console.log(loc, p.slug, count(p), 'label:'+p.readingMinutes, 'real:'+Math.max(1,Math.round(count(p)/220)));
