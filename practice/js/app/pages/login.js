export const login = {
    data: function() {
        return {
            hs: 0,
            parent: ""
        }
    },
    mounted: function() {
        this.parent = this.$parent.$parent;
    },
    methods: {
    },
    template: `
        <div class="flex">
            rpznazar
        </div>
    `
};