// https://vuepress.vuejs.org/theme/writing-a-theme.html#app-level-enhancements
import VueHighlightJS from 'vue-highlight.js';
import css from 'highlight.js/lib/languages/css';
import javascript from 'highlight.js/lib/languages/javascript';
import vue from 'vue-highlight.js/lib/languages/vue';

import 'highlight.js/styles/atom-one-dark-reasonable.css';

import DemoCode1 from './components/demoCode1.vue'
import DemoCode2 from './components/demoCode2.vue'

export default ({
  Vue,
  options,
  router,
  siteData
}) => {
  Vue.use(VueHighlightJS,{
    languages:{
      css,
      javascript,
      vue
    }
  })
  Vue.component('demo-code1', DemoCode1)
  Vue.component('demo-code2', DemoCode2)
}
