/* Stateful spacing checks. No form request is allowed to reach the server. */
import { createRequire } from "node:module";
const loadPackage = createRequire(import.meta.url);
const { chromium } = loadPackage(process.env.PLAYWRIGHT_MODULE_PATH||'playwright');
import fs from 'node:fs';
const base=process.env.AUDIT_BASE_URL||'http://127.0.0.1:3000';
const output=process.env.AUDIT_OUTPUT_DIR||'/tmp/insecto-spacing-2026-10-23';
fs.mkdirSync(output,{recursive:true});
const assert=(x,msg)=>{if(!x)throw Error(msg)};
(async()=>{
 const b=await chromium.launch({channel:'chrome',headless:true});
 const p=await b.newPage({reducedMotion:'reduce'});
 let requests=0;
 await p.route('**/api/contact',route=>{requests++;return route.fulfill({status:500,contentType:'application/json',body:JSON.stringify({error:'Local audit: simulated failure'})})});
 for(const width of [390,1440]){
  await p.setViewportSize({width,height:1000});await p.goto(base,{waitUntil:'networkidle'});
  await p.evaluate(()=>document.fonts.ready);
  const initial=await p.locator('.calculator-copy').boundingBox();
  for(const [id,value] of [['width','100'],['height','120'],['quantity','3']])await p.locator('#calculator-'+id).fill(value);
  const choice=await p.locator('.calculator-choice').nth(1).boundingBox();
  await p.locator('.calculator-choice').nth(1).click();
  const selected=await p.locator('.calculator-choice').nth(1).boundingBox();
  assert(Math.abs(choice.height-selected.height)<1,'Choice selection shifts layout');
  await p.locator('.calculator-add-button').click();
  assert(await p.locator('.calculator-item').count()===3,'Quantity must add three individual rows');
  const after=await p.locator('.calculator-copy').boundingBox();
  assert(Math.abs(initial.height-after.height)<1,'Adding items grew the explanation card');
  await p.locator('.calculator-section').screenshot({path:`${output}/calculator-added-${width}.png`,style:'.site-chrome {visibility:hidden}'});
  while(await p.locator('.calculator-remove').count())await p.locator('.calculator-remove').first().click();
  const faq=p.locator('.faq-trigger').first();await faq.click();
  assert(await faq.getAttribute('aria-expanded')==='true','FAQ did not open');
  const faqHeights=await p.evaluate(()=>{const e=document.querySelector('.faq-content-inner');return [e.clientHeight,e.scrollHeight]});
  assert(faqHeights[0]>=faqHeights[1]-1,'FAQ answer clipped');
  await faq.click();
  const product=p.locator('.product-accordion summary').first();await product.click();
  assert(await p.locator('.product-accordion').first().evaluate(e=>e.classList.contains('is-open')),'Product accordion did not open');await product.click();
  for(let i=0;i<3;i++){
   await p.locator('.gallery-tab').nth(i).click();
   assert(await p.locator('.gallery-tab').nth(i).getAttribute('aria-selected')==='true','Tab did not switch');
  }
  await p.locator('.gallery-tab').first().click();await p.locator('.gallery-card').first().click();
  assert(await p.locator('.gallery-lightbox').evaluate(e=>e.open),'Lightbox did not open');
  const modal=await p.locator('.gallery-lightbox-panel').boundingBox();assert(modal.x>=0&&modal.x+modal.width<=width,'Lightbox overflows viewport');
  await p.getByRole('button',{name:'Sledeća fotografija',exact:true}).click();
  await p.keyboard.press('Escape');assert(!(await p.locator('.gallery-lightbox').evaluate(e=>e.open)),'Escape failed');
  const more=p.locator('.google-review-more').first();if(await more.count()){await more.click();assert(await more.getAttribute('aria-expanded')==='true','Review did not expand');await more.click()}
  if(width===390){await p.locator('.site-menu-trigger').click();await p.locator('.site-menu-products summary').click();assert(await p.locator('.site-menu-products').getAttribute('open')!==null,'Mobile menu nested links hidden');await p.locator('.site-menu-trigger').click()}
  else{await p.locator('.site-nav-trigger').hover();assert(await p.locator('.site-dropdown-menu').isVisible(),'Desktop menu hidden')}
  await p.goto(base+'/kontakt',{waitUntil:'networkidle'});
  await p.locator('button[type="submit"]').click();assert(await p.locator('.field-error').count()>0,'Empty form does not show errors');assert(requests===0,'Empty form made a request');
  await p.locator('input[name="name"]').fill('Local audit');await p.locator('input[name="surname"]').fill('Test');await p.locator('input[name="email"]').fill('audit@example.com');await p.locator('input[name="phone"]').fill('0611234567');await p.locator('textarea[name="message"]').fill('Local-only layout check');
  await p.locator('input[type="file"]').setInputFiles({name:'spacing.png',mimeType:'image/png',buffer:Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAusB9Y9ZlS8AAAAASUVORK5CYII=','base64')});
  assert(await p.locator('.file-upload-item').count()===1,'Photo row not displayed');
  await p.locator('button[type="submit"]').click();await p.locator('.notice-error').waitFor();
  assert(await p.locator('input[name="name"]').inputValue()==='Local audit','Failed form lost entries');
  await p.locator('input[name="name"]').focus();
  assert(await p.locator('input[name="name"]').evaluate(e=>getComputedStyle(e).borderColor!=='rgba(0, 0, 0, 0)'),'Input lost focus border');
  await p.screenshot({path:`${output}/contact-errors-upload-${width}.png`,fullPage:true,style:'.site-chrome {visibility:hidden}'});
  console.log(`${width}: calculator, disclosures, gallery, reviews, navigation and form states passed`);
  requests=0;
 }
 await b.close();
})().catch(e=>{console.error(e);process.exitCode=1});
