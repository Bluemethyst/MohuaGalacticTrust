<template>
    <nav class="navbar">
        <ul class="navbar-list">
            <li class="navbar-item"><a href="#home">Home</a></li>
            <li class="navbar-item"><a href="#about">About</a></li>
            <li class="navbar-item"><a href="#services">Services</a></li>
            <li class="navbar-item"><a href="#contact">Contact</a></li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'NavBar',
}
</script>

<style scoped>
@import '@/assets/main.css';

.navbar {
    background-color: rgba(27, 27, 31, 0);
    overflow: hidden;
}

.navbar-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
}

.navbar-item {
    padding: 14px 20px;
}

.navbar-item a {
    color: white;
    text-align: center;
    text-decoration: none;
    display: block;
}

.navbar-item a:hover {
    background-color: #ddd;
    color: black;
}
</style>
