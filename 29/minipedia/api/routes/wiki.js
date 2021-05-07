import { Router } from 'express';
import WikiJs from 'wikijs';

const router = Router();

router.get('/content/page/:id/lang/:lang', async (req, res) => {
 const lang = req.params.lang || 'en';
 const Wiki = WikiJs({
   apiUrl: `https://${lang}.wikipedia.org/w/api.php`,
   headers: { 'User-Agent': process.env.BOT_USER_AGENT}
 });
 
 try {
  const id = req.params.id;
  
  const page = await Wiki.page(id);
  const content = await page.content();
  return res.status(200).json(content);

 } catch (e) {
  console.error(e);
  return res.status(500).json(e);
 }
});

router.get('/rawImages/page/:id/lang/:lang', async (req, res) => {
 const lang = req.params.lang || 'en';
 const Wiki = WikiJs({
   apiUrl: `https://${lang}.wikipedia.org/w/api.php`,
   headers: { 'User-Agent': process.env.BOT_USER_AGENT}
 });
 
 try {
  const id = req.params.id;
  
  const page = await Wiki.page(id);
  const content = await page.rawImages();
  return res.status(200).json(content);

 } catch (e) {
  console.error(e);
  return res.status(500).json(e);
 }
});

router.get('/summary/page/:id/lang/:lang', async (req, res) => {
 const lang = req.params.lang || 'en';
 const Wiki = WikiJs({
   apiUrl: `https://${lang}.wikipedia.org/w/api.php`,
   headers: { 'User-Agent': process.env.BOT_USER_AGENT}
 });
 try {
  const id = req.params.id;
  
  const page = await Wiki.page(id);
  const content = await page.summary();
  return res.status(200).json(content);

 } catch (e) {
  console.error(e);
  return res.status(500).json(e);
 }
});

router.get('/langlinks/page/:id/lang/:lang', async (req, res) => {
 const lang = req.params.lang || 'en';
 const Wiki = WikiJs({
   apiUrl: `https://${lang}.wikipedia.org/w/api.php`,
   headers: { 'User-Agent': process.env.BOT_USER_AGENT}
 });
 try {
  const id = req.params.id;
  
  const page = await Wiki.page(id);
  const content = await page.langlinks();
  return res.status(200).json(content);

 } catch (e) {
  console.error(e);
  return res.status(500).json(e);
 }
});

router.get('/summary/page/:id/lang/:lang', async (req, res) => {
 const lang = req.params.lang || 'en';
 const Wiki = WikiJs({
   apiUrl: `https://${lang}.wikipedia.org/w/api.php`,
   headers: { 'User-Agent': process.env.BOT_USER_AGENT}
 });
 try {
  const id = req.params.id;
  
  const page = await Wiki.page(id);
  const content = await page.summary();
  return res.status(200).json(content);

 } catch (e) {
  console.error(e);
  return res.status(500).json(e);
 }
});

router.get('/mainImage/page/:id/lang/:lang', async (req, res) => {
 const lang = req.params.lang || 'en';
 const Wiki = WikiJs({
   apiUrl: `https://${lang}.wikipedia.org/w/api.php`,
   headers: { 'User-Agent': process.env.BOT_USER_AGENT}
 });
 try {
  const id = req.params.id;
  
  const page = await Wiki.page(id);
  const content = await page.mainImage();
  return res.status(200).json(content);
 } catch (e) {
  console.error(e);
  return res.status(500).json(e);
 }
});


router.get('/fullInfo/page/:id/lang/:lang', async (req, res) => {
 const lang = req.params.lang || 'en';
 const Wiki = WikiJs({
   apiUrl: `https://${lang}.wikipedia.org/w/api.php`,
   headers: { 'User-Agent': process.env.BOT_USER_AGENT}
 });
 try {
  const id = req.params.id;
  
  const page = await Wiki.page(id);
  const content = await page.fullInfo();
  return res.status(200).json(content);

 } catch (e) {
  console.error(e);
  return res.status(500).json(e);
 }
});



export default router;