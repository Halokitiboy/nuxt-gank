import { mapGetters } from 'vuex';
export default {
    data () {
        return {
            currentPageData:[]
        }
    },
    computed: {
        ...mapGetters(['todayData'])
    },
    methods:{
        _currentPage(name){
            this.currentPageData = this.todayData[name];
        }
    }
}