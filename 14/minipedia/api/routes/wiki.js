import { Router } from 'express';
import Wiki from 'wikijs';


const router = Router();

router.get('/wiki/info/page/:id/property/:property', (req, res) => {
 const id = req.params.id;
 const property = req.params.property;
 Wiki()
	 .page(id)
	 .then(page => {
   return page.info(property);
  })
  .then(value => {
   return res.status(200).json({ value });
  });
});


export default router;