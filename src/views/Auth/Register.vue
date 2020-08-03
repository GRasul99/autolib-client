<template>
  <section class="section">
    <form class="form" @submit.prevent="register">
      <!--      <div class="form-steppers">-->
      <!--        <p class="form-steppers__step step-active">1</p>-->
      <!--        <p class="form-steppers__step">2</p>-->
      <!--        <p class="form-steppers__step">3</p>-->
      <!--      </div>-->
      <div class="form-card -shadow">
        <div class="form-header">
          Register
        </div>
        <div class="form-content" v-if="currentStep === 1">
          <BaseInput
            class="form-content__input"
            placeholder="Username"
            v-model="username"
            type="text"
          ></BaseInput>
          <BaseInput
            class="form-content__input"
            placeholder="Email"
            v-model="email"
            type="email"
          ></BaseInput>
          <BaseInput
            class="form-content__input"
            placeholder="password"
            v-model="password"
            type="password"
          ></BaseInput>
          <BaseSelect
            :options="roles"
            class="form-content__select "
            v-model="role"
          />
        </div>
        <div class="form-content" v-if="currentStep === 2">
          <BaseInput
            class="form-content__input"
            placeholder="F. I. O"
            v-model="full_name"
            type="text"
          ></BaseInput>
          <BaseInput
            class="form-content__input"
            placeholder="Passport serial"
            v-model="passport"
            type="text"
          ></BaseInput>
          <BaseInput
            class="form-content__input"
            placeholder="University"
            v-model="university_id"
            type="text"
          ></BaseInput>
          <BaseInput
            class="form-content__input"
            placeholder="Faculty"
            v-model="faculty_id"
            type="text"
          ></BaseInput>
          <BaseInput
            class="form-content__input"
            placeholder="Group"
            v-model="group_id"
            type="text"
          ></BaseInput>
          <BaseInput
            class="form-content__input"
            placeholder="Phone number"
            v-model="phone"
            type="tel"
          ></BaseInput>
        </div>
        <div
          class="form-content"
          v-if="currentStep === 3 && role === 'Teacher'"
        >
          <BaseInput
            class="form-content__input"
            placeholder="F. I. O"
            v-model="full_name"
            type="text"
          ></BaseInput>
          <BaseInput
            class="form-content__input"
            placeholder="Passport serial"
            v-model="passport"
            type="text"
          ></BaseInput>
          <BaseInput
            class="form-content__input"
            placeholder="University"
            v-model="university_id"
            type="text"
          ></BaseInput>
          <BaseInput
            class="form-content__input"
            placeholder="Cathedra"
            v-model="cathedra"
            type="text"
          ></BaseInput>
          <BaseInput
            class="form-content__input"
            placeholder="Position"
            v-model="position"
            type="text"
          ></BaseInput>
          <BaseInput
            class="form-content__input"
            placeholder="Phone number"
            v-model="phone"
            type="tel"
          ></BaseInput>
        </div>
        <div
          class="form-content"
          v-if="currentStep === 3 && role === 'Librarian'"
        >
          <BaseInput
            class="form-content__input"
            placeholder="F. I. O"
            v-model="full_name"
            type="text"
          ></BaseInput>
          <BaseInput
            class="form-content__input"
            placeholder="Passport serial"
            v-model="passport"
            type="text"
          ></BaseInput>
          <BaseInput
            class="form-content__input"
            placeholder="University"
            v-model="university_id"
            type="text"
          ></BaseInput>
          <BaseInput
            class="form-content__input"
            placeholder="Position"
            v-model="position"
            type="text"
          ></BaseInput>
          <BaseInput
            class="form-content__input"
            placeholder="Phone number"
            v-model="phone"
            type="tel"
          ></BaseInput>
        </div>
        <div class="form-buttons">
          <BaseButton
            class="form-buttons__button"
            v-if="currentStep !== 1"
            @click.prevent="prevStep"
            >Prev</BaseButton
          >
          <BaseButton
            class="form-buttons__button"
            v-if="currentStep === 2 && role === 'Student'"
            @click.prevent="registerStudent"
            >Register</BaseButton
          >
          <BaseButton
            class="form-buttons__button"
            v-if="currentStep === 2 && role === 'Teacher'"
            @click.prevent="registerTeacher"
            >Register</BaseButton
          >
          <BaseButton
            class="form-buttons__button"
            v-if="currentStep === 2 && role === 'Librarian'"
            @click="registerLibrarian"
            >Register</BaseButton
          >
          <BaseButton
            class="form-buttons__button"
            v-if="currentStep !== totalSteps"
            @click.prevent="nextStep"
            >Next</BaseButton
          >
        </div>
      </div>
    </form>
  </section>
</template>

<script>
import BaseButton from '@/components/BaseButton'
import BaseInput from '@/components/BaseInput'
import BaseSelect from '@/components/BaseSelect'
export default {
  name: 'Register',
  components: { BaseInput, BaseButton, BaseSelect },
  data() {
    return {
      username: '',
      password: '',
      email: '',
      role: null,
      full_name: '',
      passport: '',
      university_id: '',
      cathedra: '',
      faculty_id: '',
      group_id: '',
      position: null,
      phone: '',
      currentStep: 1,
      totalSteps: 2
    }
  },
  mounted() {
    this.$store.dispatch('university/fetchUniversities')
  },
  computed: {
    roles() {
      return this.$store.state.role.roles
    }
  },
  methods: {
    prevStep() {
      this.currentStep--
    },
    nextStep() {
      this.currentStep++
    }
  }
}
</script>

<style scoped></style>
