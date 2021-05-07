import { Router } from 'express';
import WikiJs from 'wikijs';

const router = Router();

router.get('/:fn/page/:id/lang/:lang', async (req, res) => {
 const lang = req.params.lang || 'en';
 const fn = req.params.fn;
 
 const Wiki = WikiJs({
   apiUrl: `https://${lang}.wikipedia.org/w/api.php`,
   headers: { 'User-Agent': process.env.BOT_USER_AGENT}
 });
 
 try {
  const id = req.params.id;
  
  const page = await Wiki.page(id);
  const content = await page[fn]();
  return res.status(200).json(content);

 } catch (e) {
  console.error(e);
  return res.status(500).json(e);
 }
});

export default router;