import Catalogues from '../views/pages/catalogues';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': Catalogues, // default page
  '/detail/:id': Detail,
  '/like': Like,
};
export default routes;
