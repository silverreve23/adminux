<template>
    <div class="control-panel flex-row">
        <div @click="needCalendar"
             class="time">
            {{ new Date() | moment("dd H: mm") }}
        </div>
        {{ 'control' }}
        <FunctionalCalendar
                v-if="isCalender"
                :configs="calendarConfigs"
        ></FunctionalCalendar>

        <ul>
            <li>
                <i @click="exit" class="fas fa-sign-out-alt"></i>
            </li>
        </ul>
    </div>
</template>

<script>
    import FunctionalCalendar from 'vue-functional-calendar';

    export default {
        components: {
            FunctionalCalendar
        },
        data() {
            return {
                isCalender: false,
                calendarData: {},
                calendarConfigs: {
                    sundayStart: false,
                    dateFormat: 'dd/mm/yyyy',
                    changeMonthFunction: true,
                    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    dayNames: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
                }
            }
        },
        methods: {
            needCalendar() {
                this.isCalender = !this.isCalender
            },
            exit() {
                if (confirm("Close Window?")) {
                    window.close();
                }
            }
        }
    }
</script>
