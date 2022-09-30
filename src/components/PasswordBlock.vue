<template>
    <div class="bg-yellow-200 shadow rounded p-16 md:mx-0 mx-5">
        <h4 class="text-center font-semibold text-2xl p-5">Password Generator</h4>
        <div class="flex items-center flex-col gap-3">
            <div class="w-full relative">
                <input type="text" class="w-full py-2 px-8 rounded-md outline-none bg-slate-200 text-center" id="password" disabled v-model="password">
                <img 
                    src="../assets/check.png" 
                    class="w-4 absolute right-2 top-1/4" 
                    v-if="copiedIcon" 
                    alt="check icon password copied"
                >

                <img 
                    src="../assets/copy.png" 
                    class="w-4 absolute right-2 top-1/4 cursor-pointer" 
                    v-else 
                    alt="copy icon"
                    @click="handleCopyPassword" 
                >
            </div>

            <section class="my-5 w-full">
                <p class="block text-center font-medium">Number of characters: {{formPassword.range}}</p>
                <input @change="handleChangeForm" min="5" max="40" type="range" v-model="formPassword.range" class="w-full h-3 bg-white rounded-lg appearance-none cursor-pointer accent-teal-600">
            </section>

            <CheckboxComponent @change="handleChangeForm" v-model="formPassword.numbers" text="Include Numbers"/>
            <CheckboxComponent @change="handleChangeForm" v-model="formPassword.symbols" text="Include Symbols"/>

        </div>
    </div>
</template>
<script setup>
    import { reactive, ref } from '@vue/reactivity';

    import CheckboxComponent from './UI/Checkbox.vue';

    import generatePassword from '../helpers/PasswordGenerator'

    const password = ref('')
    const copiedIcon = ref(false)

    const formPassword = reactive({
        range: 0,
        upperCase: false,
        lowerCase: false,
        numbers: false,
        symbols: false
    });

    const handleChangeForm = () => {
        const newPassword = generatePassword(formPassword)
        password.value = newPassword
    }

    const handleCopyPassword = () => {
        if ( !password.value ) return
        
        const copiedText = document.getElementById('password')
        copiedText.select();
        copiedText.setSelectionRange(0, 99999); 

        navigator.clipboard.writeText(copiedText.value);

        copiedIcon.value = true
        setTimeout(() => copiedIcon.value = false, 3000);
    }


</script>