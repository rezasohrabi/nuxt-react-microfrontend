<template>
  <div>
    <Header />
    <div id="container" class="container">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>
<script>
import Footer from "../components/Footer";
import Header from "../components/Header";
export default {
  components: {
    Footer,
    Header
  }
};
</script>
<style>
.container {
  margin: 50px auto;
  padding: 0 30px;
}
</style>
