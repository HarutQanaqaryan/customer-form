<template>
    <div class="select" :class="validation ? 'invalid' : 'valid' ">
        <div class="title" @click="openedOptions = !openedOptions">
            <span>{{ selected }}</span>
            <img src="./select-icon.svg" class="icon" />
        </div>
        <div class="options" v-if="openedOptions">
            <span
                class="option"
                v-for="option in options"
                :key="option.value"
                @mousedown="selectOption(option)"
            >{{ option.label }}</span>
        </div>
    </div>
</template>


<script>
export default {
    props: {
        options: {
            type: Array,
            default() {
                return []
            }
        },
        selected: {
            type: String,
            default: ""
        },
        validation: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return { openedOptions: false }
    },
    methods: {
        selectOption(option) {
            this.$emit("select", option)
            this.openedOptions = false
        }
    }
}
</script>


<style lang="scss">
@import url(./select.scss);
</style>