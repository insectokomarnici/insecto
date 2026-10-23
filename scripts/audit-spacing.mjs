/* Browser geometry audit for the spacing contract in docs/spacing-audit.md.
 * Requires Playwright/Chromium. Never submits an inquiry or reads environment secrets.
 * Run: PLAYWRIGHT_MODULE_PATH=/absolute/path/to/playwright node scripts/audit-spacing.mjs
 */
import { createRequire } from "node:module";
const loadPackage = createRequire(import.meta.url);
const { chromium } = loadPackage(process.env.PLAYWRIGHT_MODULE_PATH || 'playwright');
import fs from 'node:fs';
import path from 'node:path';
const base = process.env.AUDIT_BASE_URL || 'http://127.0.0.1:3000';
const output = process.env.AUDIT_OUTPUT_DIR || '/tmp/insecto-spacing-2026-10-23';
const routes = ['/', '/kontakt', '/o-nama', '/o-namav1', '/politika-privatnosti', '/uslovi-koriscenja', '/design-system'];
const widths = [320,390,639,640,767,768,1023,1024,1280,1440,1920];
const failures = [], results = [];
fs.mkdirSync(output, { recursive: true });

(async () => {
 const browser = await chromium.launch({channel:'chrome',headless:true});
 const page = await browser.newPage({reducedMotion:'reduce'});
 page.on('pageerror', e => failures.push({kind:'pageerror', message:e.message}));
 for (const route of routes) {
  await page.setViewportSize({width:1440,height:1000});
  await page.goto(base+route,{waitUntil:'networkidle'});
  await page.evaluate(()=>document.fonts.ready);
  for (const width of widths) {
   await page.setViewportSize({width,height:1000});
   const result = await inspect(page,route,width,1);
   results.push(result); failures.push(...result.errors);
   if ([390,1440].includes(width)) {
    const name=route==='/'?'home':route.slice(1);
    // Viewport tiles avoid compositor repetition in very tall full-page captures.
    // Scrolling also loads images before reviewing each part of the page.
    const height=await page.evaluate(()=>document.documentElement.scrollHeight);
    for(let y=0;y<height;y+=900) {
     await page.evaluate(y=>window.scrollTo(0,y),y);
     await page.evaluate(()=>new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r))));
     await page.screenshot({path:path.join(output,`${name}-${width}-${y}.png`)});
    }
    if(route==='/') for(const selector of ['.hero-section','.products-section','.calculator-section','.google-reviews-section','.faq-section','.contact-section']) {
     await page.locator(selector).screenshot({path:path.join(output,`${selector.slice(1)}-${width}.png`),style:".site-chrome,.floating-call-button,nextjs-portal { visibility: hidden !important; }"});
    }
   }
  }
  for (const width of [390,1440]) {
   await page.setViewportSize({width,height:1000});
   await page.evaluate(()=>document.documentElement.style.fontSize='200%');
   const result=await inspect(page,route,width,2);results.push(result);failures.push(...result.errors);
   await page.evaluate(()=>document.documentElement.style.removeProperty('font-size'));
  }
  console.log(`${route}: geometry checked at ${widths.length} widths + 2 enlarged-text views`);
 }
 fs.writeFileSync(path.join(output,'geometry.json'),JSON.stringify({results,failures},null,2));
 await browser.close();
 console.log(JSON.stringify({checks:results.length,failures},null,2));
 if(failures.length)process.exitCode=1;
})().catch(e=>{console.error(e);process.exitCode=1});

async function inspect(page,route,width,scale) {
 return page.evaluate(({route,width,scale})=>{
  const errors=[];
  const fail=(kind,data)=>errors.push({route,width,scale,kind,...data});
  const visible=e=>e.getClientRects().length && getComputedStyle(e).visibility!=='hidden';
  const check=(actual,expected,where)=>{if(Math.abs(actual-expected)>1)fail('spacing',{where,actual,expected});};
  const rect=e=>e.getBoundingClientRect();
  if(document.documentElement.scrollWidth>document.documentElement.clientWidth+1)fail('overflow',{scroll:document.documentElement.scrollWidth,client:document.documentElement.clientWidth});
  for(const e of document.querySelectorAll('h1,h2,h3,.field-label,.button,.gallery-tab,.contact-action-card-copy')) {
   if(visible(e)&&e.clientWidth&&e.scrollWidth>e.clientWidth+1)fail('text-overflow',{selector:e.className,text:e.textContent.slice(0,60)});
  }
  for(const heading of document.querySelectorAll('main .content-flow > .heading,main .stack > .heading')) {
   if(!visible(heading))continue;
   const range=document.createRange();range.selectNodeContents(heading);
   const textBottom=range.getBoundingClientRect().bottom;
   if(rect(heading).bottom-textBottom>parseFloat(getComputedStyle(heading).lineHeight))fail('stretched-heading-row',{text:heading.textContent.slice(0,60)});
  }
  for(const parent of document.querySelectorAll('.content-flow,.section-inner,.section-flow')) {
   const children=[...parent.children].filter(visible);
   for(let i=1;i<children.length;i++) {
    const child=children[i],prev=children[i-1];
    let expected=parent.classList.contains('content-flow')?16:24;
    if(parent.classList.contains('content-flow')&&prev.classList.contains('heading'))expected=12;
    if(child.matches('.content-group,.section-group,.section-controls-content'))expected=16;
    if(child.matches('.content-actions,.section-actions'))expected=20;
    check(rect(child).top-rect(prev).bottom,expected*scale,`${parent.className} > ${child.className}`);
   }
  }
  if(route==='/') {
   const intro=document.querySelector('.calculator-description'),heading=document.querySelector('.calculator-price-heading');
   check(rect(heading).top-rect(intro).bottom,16*scale,'calculator instruction / explanation');
   for(const e of document.querySelectorAll('.product-card-body')) {
    const c=[...e.children];for(let i=1;i<c.length;i++)check(rect(c[i]).top-rect(c[i-1]).bottom,16*scale,'product content groups');
   }
   if(width>=1024&&scale===1) {
    const left=rect(document.querySelector('.calculator-copy')),right=rect(document.querySelector('.calculator-panel'));
    check(left.top,right.top,'calculator top alignment');check(left.height,right.height,'calculator initial height');
   }
  }
  return {route,width,scale,errors};
 },{route,width,scale});
}
