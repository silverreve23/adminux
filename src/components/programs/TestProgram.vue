<template>
    <div class="sidebar">
        <div class="blur"></div>
        {{ 'sidebar' }}
        <div class="content">
            <ul>
                <li v-for="(data, index) in programs">
                    <div :class="{'active':activeProgram}"
                         @click="open(index)"
                         class="item">
                        <img :src="data.icon" alt="">
                        <span>{{ data.name }} {{ index }}</span>
                    </div>
                </li>
                <li style="cursor: pointer"
                    @click="openFolder(index)"
                    v-if="isShowWindow && contentArr"
                    class="folder-is-open">
                    <img src="http://icons.iconarchive.com/icons/mcdo-design/smooth-leopard/512/Open-Folder-Blue-icon.png"
                         alt="">
                    <span>{{contentArr[index].short_name}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

    export default {
        props: [
            'contentArr'
        ],
        data() {
            return {
                programs: [],
                activeProgram: false,
                index: null,
                isShowWindow: false
            }
        },
        created() {
            this.programs = [
                {
                    icon: 'https://cdn.svgporn.com/logos/linux-tux.svg',
                    name: 'Linux Pro'
                }
            ]
            this.$root.$on('minimaze', (index) => {
                this.activeProgram = true
            })
            this.$root.$on('closeWindow', (index) => {
                this.activeProgram = false
            })
            this.$root.$on('active-program', (index) => {
                this.isShowWindow = true
                this.index = index
            })
            this.$root.$on('close-program-icon', () => {
                this.isShowWindow = false
            })
        },
        methods: {
            open(index) {
                this.$root.$emit('open', index)
            },
            openFolder(index) {
                this.$root.$emit('openFolder', index)
            }
        }
    }
</script>
