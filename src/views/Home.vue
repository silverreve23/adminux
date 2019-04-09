<template>
    <div class="main_wrp flex-row"
         style="background-image: url(https://images.pexels.com/photos/884788/pexels-photo-884788.jpeg?auto=compress&cs=tinysrgb&h=650&w=940)">
        <sidebar :contentArr="contentArr"></sidebar>
        <sidebar-window></sidebar-window>
        <control-panel></control-panel>
        <main-window :data="contentArr"></main-window>
        <div class="app_wrp"
             @contextmenu.self="$refs.menu.open">
            <drag-it-dude v-for="(data, index) in contentArr" :key="index">
                <div @contextmenu.prevent="$refs.folder.open"
                     @click.right="takeIndex(index)"
                     class="item">
                    <img @dblclick.self="dblclickEvent(index)"
                         :src="data.icon" :alt="data.description">
                    <span @dblclick.self="edit(index)"
                          class="folder-title"
                          v-if="!data.active"
                    >{{ data.short_name }}</span>
                    <span class="folder-tip">{{data.full_name}}</span>
                    <div v-if="data.active" class="flex-row align-center">
                        <input class="edit-field" v-model="model.edit[index]" type="text">
                        <div class="icons flex-row align-center">
                            <i @click="save(index)" class="fas fa-check"></i>
                            <i @click="close(index)" class="fas fa-times"></i>
                        </div>
                    </div>
                </div>
            </drag-it-dude>
            <!---->
            <vue-context ref="menu">
                <ul>
                    <li @click="addNew">New Folder</li>
                </ul>
            </vue-context>
            <!---->
            <vue-context ref="folder">
                <ul>
                    <li @click="remove">Delete</li>
                    <li @click="edit(curentIndexFolder)">Rename</li>
                </ul>
            </vue-context>
        </div>
    </div>
</template>

<script>
    import DragItDude from 'vue-drag-it-dude'
    import {VueContext} from 'vue-context'
    import Sidebar from '@programs/TestProgram'
    import SidebarWindow from '@systray/MainTopPanel'
    import ControlPanel from '@systray/MainControlPanel'
    import MainWindow from '@windows/MainWindow'
    import BackFoldersModel from '@models/folders/BackFolders'

    export default {
        components: {
            DragItDude,
            VueContext,
            Sidebar,
            SidebarWindow,
            ControlPanel,
            MainWindow
        },
        data() {
            return {
                contentArr: [],
                model: {
                    edit: []
                },
                curentIndexFolder: null,
                isShowTip: false
            }
        },
        created() {
            this.contentArr = BackFoldersModel.get()
        },
        methods: {
            takeIndex(index) {
                this.curentIndexFolder = index
            },
            addNew() {
                this.contentArr.push({
                    icon: 'http://icons.iconarchive.com/icons/mcdo-design/smooth-leopard/512/Open-Folder-Blue-icon.png',
                    short_name: 'New Folder',
                    full_name: 'New Folder',
                    description: 'directory icon',
                    active: false
                })
            },
            remove() {
                this.contentArr.splice(this.curentIndexFolder, 1)
            },
            dblclickEvent(index) {
                this.$root.$emit('open-window', index)
                this.$root.$emit('active-program', index)
            },
            edit(index) {
                this.contentArr[index].active = true
                this.model.edit[index] = this.contentArr[index].short_name
            },
            close(index) {
                this.contentArr[index].active = false
            },
            save(index) {
                this.contentArr[index].short_name = this.model.edit[index]
                this.contentArr[index].active = false
            }
        }
    }
</script>
