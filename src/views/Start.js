import {apiKey} from '@/lastfm.json';

import StartAuth from '@/components/auth/StartAuth';
import Stage from './Stage';

export default {
  name: 'Start',
  mixins: [
    StartAuth
  ],
  components: {
    Stage
  },
  data() {
    return {
      loading: false // Control the pageloader state
    };
  },
  computed: {
    callbackUrl() {
      return location.origin + location.pathname;
    }
  },
  template: /*html*/ `
    <Stage :fit="true">
        <Hero title="Log Scrobbler"></Hero>
        <Column :vcentered="true">
            <a :href="'http://www.last.fm/api/auth/?api_key=${apiKey}&cb='+callbackUrl"
                class="button is-link is-medium">
                Log in with Lastfm
            </a>
        </Column>
        <div class="pageloader" :class="{'is-active': loading}"></div>
    </Stage>`
};

