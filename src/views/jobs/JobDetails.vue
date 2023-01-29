<template>
        <div class="job" v-if="job != null">
            <h1>{{ job.title }}</h1>
            <h2>{{ job.details }}</h2>
            <p>The job ID is: {{ job.id }}</p>
        </div>
        <div v-else>
            <h2>Loading job details...</h2>
        </div>
</template>

<script>

export default {
    name: 'JobDetails',
    props: ["id"],
    components: {  },
    data() {
        return {
            job : null
        };
    },

    mounted() {
        fetch("http://localhost:3000/jobs/" + this.id)
            .then((response) => { return response.json(); })
            .then((json) => { this.job = json; })
            .catch((err) => { console.log(err.message); })
    }
}
</script>
