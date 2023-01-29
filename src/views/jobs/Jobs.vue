<template>
        <div class="jobs">
            <h1>Jobs</h1>
            <p v-if="jobs.length == 0">Fetching data...</p>
            <div v-else v-for="job in jobs" :key="job">
                <router-link :to="{ name: 'job_details', params: { id: job.id } }">
                    <h2>{{ job.title }}</h2>
                </router-link>
            </div>
        </div>
</template>

<script>

export default {
    name: 'JobsView',
    components: {  },
    data() {
        return {
            jobs : []
        };
    },

    mounted() {
        fetch("http://localhost:3000/jobs")
            .then((response) => { return response.json(); })
            .then((json) => { this.jobs = json; })
            .catch((err) => { console.log(err.message); })
    }
}
</script>

<style>
    .jobs h2 {
        background: #f4f4f4;
        padding: 20px;
        border-radius: 10px;
        margin: 10px auto;
        max-width: 600px;
        cursor: pointer;
        color: #444;
    }

    .jobs h2:hover {
        background: #ddd;
    }

    .jobs a {
        text-decoration: none;
    }
</style>
