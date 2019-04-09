<template>
    <drag-it-dude class="z-index">
        {{ 'top' }}
        <div v-if="show"
             :class="{'full-window':isFullScreanWindow}"
             class="sidebar-window">
            <div class="top-panel">
                <ul>
                    <li @click="minimazeWindow" class="minimaze">
                        <i class="fas fa-minus"></i>
                    </li>
                    <li @click="fullScreanWindow" class="full-screen">
                        <i class="far fa-square"></i>
                    </li>
                    <li @click="closeWindow" class="close">
                        <i class="fas fa-times"></i>
                    </li>
                </ul>
            </div>
            <div class="window-content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores expedita, illo illum perspiciatis
                rerum
                voluptas voluptate? Accusamus asperiores corporis earum eius exercitationem incidunt inventore, iure
                laudantium
                quae quam quod reiciendis.
            </div>
        </div>
    </drag-it-dude>
</template>

<script>
    import DragItDude from 'vue-drag-it-dude'

    export default {
        components: {
            DragItDude,
        },
        data() {
            return {
                isFullScreanWindow: false,
                show: false,
                index: null
            }
        },
        created() {
            this.$root.$on('open', (index) => {
                this.show = true
                this.index = index
            })
        },
        methods: {
            fullScreanWindow() {
                this.isFullScreanWindow = !this.isFullScreanWindow
            },
            closeWindow() {
                this.show = false
                this.isFullScreanWindow = false
                this.$root.$emit('closeWindow', this.index)

            },
            minimazeWindow() {
                this.show = false
                this.$root.$emit('minimaze', this.index)
            }
        }
    }
</script>
