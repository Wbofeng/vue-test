<template>
    <div>
        <p>Original message: {{ message }}</p>
        <p>Reversed message: {{ reverseMessage }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
           message: 'hello',
        }
    },
    computed: {
        reverseMessage() {
            return this.message.split('').reverse().join('')
        }
    }
}
</script>