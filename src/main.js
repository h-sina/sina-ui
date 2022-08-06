// import 'sina-ui/dist/sina-ui.css';

import { createApp } from 'vue';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faGithub,
  faGithubAlt,
} from '@fortawesome/free-brands-svg-icons';
/* import specific icons */
import {
  faAngleDown,
  faAngleRight,
  faAngleUp,
  faBars,
  faCaretUp,
  faCheck,
  faCloudArrowUp,
  faFileLines,
  faGear,
  faLocationDot,
  faPlus,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// import sinaUI from 'sina-ui';
import App from './App.vue';
import router from './router/index';

/* add icons to the library */
library.add(
  faLocationDot,
  faBars,
  faGear,
  faFileLines,
  faAngleDown,
  faAngleUp,
  faCaretUp,
  faAngleRight,
  faPlus,
  faXmark,
  faCheck,
  faCloudArrowUp,
  faGithubAlt,
  faGithub
);

const app = createApp(App);

/* add font awesome icon component */
app.component('font-awesome-icon', FontAwesomeIcon);

// app.use(sinaUI);
app.use(router).mount('#app');
// createApp(App).use(SinaUi).mount('#app');
