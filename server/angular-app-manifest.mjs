
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/product/1"
  },
  {
    "renderMode": 2,
    "route": "/product/2"
  },
  {
    "renderMode": 2,
    "route": "/product/3"
  },
  {
    "renderMode": 0,
    "route": "/product/*"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 838, hash: 'ee90726d0038f5452c010824be0b7714f692bc451f57a4fc7411500f49f606b5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1010, hash: '3a5bae71043651a58f4dd254ba2a4da1dbb5f5b95ce00706092cc8191ccee61c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 37141, hash: 'e0e2de42c3cc9fc06707d0385ab6ab16dcb36bb8cbf1207fa7dc7eb62474315e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'product/2/index.html': {size: 22040, hash: '970bbec1d078ece5efaec7e860148d12d71e1d826d501a47e6d77d00e9154980', text: () => import('./assets-chunks/product_2_index_html.mjs').then(m => m.default)},
    'product/1/index.html': {size: 22344, hash: 'cc2f721879aab471edaf4a429a39a0e8f796bc352cb56087419e2d51b33c6272', text: () => import('./assets-chunks/product_1_index_html.mjs').then(m => m.default)},
    'product/3/index.html': {size: 37141, hash: 'e0e2de42c3cc9fc06707d0385ab6ab16dcb36bb8cbf1207fa7dc7eb62474315e', text: () => import('./assets-chunks/product_3_index_html.mjs').then(m => m.default)},
    'styles-JTSNZFDH.css': {size: 494, hash: 'ghjN6nsG8Ic', text: () => import('./assets-chunks/styles-JTSNZFDH_css.mjs').then(m => m.default)}
  },
};
