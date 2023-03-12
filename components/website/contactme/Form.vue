<template>
  <section class="contactForm my-4">
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="4">
          <div class="flex flex-col items-start justify-center">
            <h5
              class="text-secondary tracking-[0.4em] ms-2 font-semibold uppercase text-[0.8rem]"
            >
              Contact me
            </h5>
            <h1
              class="text-primary my-1 ms-1 font-semibold capitalize text-[3.6rem]"
            >
              Get in touch
              <br />
              — let’s work together.
            </h1>
            <h5
              class="text-secondary tracking-[0.4em] ms-2 font-semibold uppercase text-[0.8rem] mb-1"
            >
              address
            </h5>
            <h1 class="text-primary">Mansoura - Egypt</h1>
          </div>
        </v-col>
        <v-col cols="12" md="8">
          <div class="form-container">
            <form>
              <v-container fluid>
                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="state.name"
                      variant="solo"
                      :error-messages="v$.name.$errors.map((e) => e.$message)"
                      :counter="10"
                      label="Name"
                      required
                      @input="v$.name.$touch"
                      @blur="v$.name.$touch"
                      density="compact"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="state.email"
                      :error-messages="v$.email.$errors.map((e) => e.$message)"
                      label="E-mail"
                      required
                      variant="solo"
                      @input="v$.email.$touch"
                      @blur="v$.email.$touch"
                      density="compact"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-select
                      v-model="state.service"
                      :items="serveices"
                      :error-messages="v$.service.$errors.map((e) => e.$message)"
                      label="Service"
                      required
                      @change="v$.service.$touch"
                      @blur="v$.service.$touch"
                      density="compact"
                      variant="solo"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-select
                      v-model="state.budget"
                      :items="budgets"
                      :error-messages="v$.budget.$errors.map((e) => e.$message)"
                      label="Budget"
                      required
                      @change="v$.budget.$touch"
                      @blur="v$.budget.$touch"
                      variant="solo"
                      density="compact"
                      ></v-select>
                    </v-col>
                    <v-col cols="12" md="12">
                      <v-textarea
                      variant="solo"
                      density="compact"
                      label="Message"
                      v-model="state.message"
                      @change="v$.message.$touch"
                      @blur="v$.message.$touch"
                      :error-messages="v$.message.$errors.map((e) => e.$message)"
                    ></v-textarea>
                  </v-col>
                  <v-col cols="12">
                    <v-btn
                      class="me-4"
                      prepend-icon="mdi-email-fast-outline"
                      @click="submit"
                    >
                      SEND MESSAGE
                    </v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </form>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script setup>
import useContactmeForm from "~~/composables/pages/useContactmeForm";
const { state, v$, serveices, budgets, submit } = useContactmeForm();
</script>

<style lang="scss" scoped></style>
