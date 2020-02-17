<template>
  <div class="content">
    <div class="row">
      <div class="col-md-8">
        <edit-profile-form :model="model"> </edit-profile-form>
      </div>
      <div class="col-md-4">
        <user-card :user="user"></user-card>
      </div>
    </div>
  </div>
</template>
<script>
import EditProfileForm from "./Profile/EditProfileForm.vue";
import UserCard from "./Profile/UserCard.vue";

export default {
  components: {
    EditProfileForm,
    UserCard
  },
  data() {
    return {
      model: {
        company: "Diego Torres",
        email: "ing.diego.torres95@gmail.com",
        username: "dtorres",
        firstName: "Diego",
        lastName: "Torres",
        city: "Sydney",
        country: "Australia",        
      },
      user: {}
    };
  }
};
</script>
<style></style>
