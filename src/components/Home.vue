<template>
<title>just leo</title>
        <div id="center">
            <br>
            <div id="avatar" style="background-image: url('https://cdn.discordapp.com/attachments/910257275120271390/910633584820375562/dae2a7831cc58f448310be1898f4c1b6.jpg')">
            </div></div>
            <br>
    <h1>hi, I'm Leo, I develop things and play</h1>

    <div id="button" style="cursor:pointer" @click="github">github</div>
    <div id="button" style="cursor:pointer" @click="portfolio">portfolio</div>
</template>
<script>
export default {
    methods: {
        github: () => window.location.href = "https://github.com/leoo027",
        portfolio: () => window.location.href = "https://leooo-portfolio.vercel.app",
    },
};
</script>
