<template>
    <drag-it-dude v-if="isShowWindow && data" class="z-index">
        <div :class="{'full-window':isFullScreanWindow}"
             class="main-window__wrp">
            <div class="top-panel">
                {{ 'main-window' }}
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
            <div class="data">
                {{ data[index].full_name }}
            </div>
        </div>
    </drag-it-dude>
</template>

<script>
    import DragItDude from 'vue-drag-it-dude'

    export default {
        props: [
            'data'
        ],
        components: {
            DragItDude,
        },
        data() {
            return {
                isShowWindow: false,
                index: null,
                isFullScreanWindow: false
            }
        },
        created() {
            this.$root.$on('open-window', (index) => {
                this.isShowWindow = true
                this.index = index
            })
            this.$root.$on('openFolder', (index) => {
                this.isShowWindow = true
                this.index = index
            })
        },
        methods: {
            closeWindow() {
                this.isShowWindow = false
                this.$root.$emit('close-program-icon')
            },
            fullScreanWindow() {
                this.isFullScreanWindow = !this.isFullScreanWindow
            },
            minimazeWindow() {
                this.isShowWindow = false
            }
        }
    }
</script>
