import * as lastfmJson from '@/lastfm.json';
const LastfmAPI = require('lastfmapi');

export default {
    data: function () {
        return {
            lfm: null,
        }
    },
    methods: {
        setUpLfm: function () {
            this.lfm = new LastfmAPI({
                api_key: "f2131bd128a477ca7277ff8c3f33f65b",
                secret: "543bba93bfcbbe685309c88eeb61f18c"
            });
        },
    }
}
