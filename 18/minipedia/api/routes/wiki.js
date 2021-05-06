import { Router } from 'express';
import WikiJs from 'wikijs';

const router = Router();
const Wiki = WikiJs({
 apiUrl: 'https://en.wikipedia.org/w/api.php',
 headers: { 'User-Agent': 'api-test (https://api-test; my@email) wiki.js'}
});

router.get('/info/page/:id/property/:property', async (req, res) => {
 const id = req.params.id; 
 const property = req.params.property;
 
 const page = await Wiki.page(id);
 const info = await page.info(property);
	
 return res.status(200).json({ info });
});

router.get('/content/page/:id', async (req, res) => {
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

router.get('/rawImages/page/:id', async (req, res) => {
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

router.get('/summary/page/:id', async (req, res) => {
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

router.get('/mainImage/page/:id', async (req, res) => {
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


router.get('/fullInfo/page/:id', async (req, res) => {
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