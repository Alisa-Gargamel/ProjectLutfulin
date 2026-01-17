<template>
  <section class="page">
    <h1 class="page-title">Кабинет участника</h1>

    <!-- ВНЕШНИЙ БОЛЬШОЙ ПРЯМОУГОЛЬНИК -->
    <div class="card-outer">
      <!-- ВНУТРЕННЯЯ КАРТОЧКА ПОУЖЕ -->
      <div class="card-inner">
        <header class="card-header">
          <h2 class="card-title">Вход /Регистрация</h2>

          <!-- СЕРАЯ ПОЛОСА-ЗАДНИЙ ФОН ДЛЯ ТАБОВ -->
          <div class="tabs-bar">
            <button
              class="tab-pill"
              :class="{ 'tab-pill--active': activeTab === 'login' }"
              type="button"
              @click="setTab('login')"
            >
              Вход
            </button>
            <button
              class="tab-pill tab-pill--right"
              :class="{ 'tab-pill--active': activeTab === 'register' }"
              type="button"
              @click="setTab('register')"
            >
              Регистрация
            </button>
          </div>
        </header>

        <transition name="fade" mode="out-in">
          <!-- Форма входа -->
          <form
            v-if="activeTab === 'login'"
            key="login"
            class="form"
            @submit.prevent="onLoginSubmit"
          >
            <div class="field">
              <label class="label" for="login-email">Email</label>
              <input
                id="login-email"
                v-model="loginForm.email"
                type="email"
                class="input"
                placeholder="ivan.petrov@example.com"
              />
            </div>

            <div class="field">
              <label class="label" for="login-password">Пароль</label>
              <div class="password-field">
                <input
                  id="login-password"
                  v-model="loginForm.password"
                  :type="loginShowPassword ? 'text' : 'password'"
                  class="input password-input"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  class="password-toggle"
                  @click="toggleLoginPassword"
                  :aria-label="loginShowPassword ? 'Скрыть пароль' : 'Показать пароль'"
                >
                  <span class="eye-icon" :class="{ 'eye-slash': loginShowPassword }">
                    👁
                  </span>
                </button>
              </div>
            </div>

            <button type="submit" class="submit-btn">
              <span class="submit-icon">⏎</span>
              <span>Войти</span>
            </button>
          </form>

          <!-- Форма регистрации -->
          <form
            v-else
            key="register"
            class="form"
            @submit.prevent="onRegisterSubmit"
          >
            <div class="field">
              <label class="label" for="fullName">ФИО</label>
              <input
                id="fullName"
                v-model="registerForm.fullName"
                type="text"
                class="input"
                placeholder="Петров Иван Александрович"
              />
            </div>

            <div class="field">
              <label class="label" for="reg-email">Email</label>
              <input
                id="reg-email"
                v-model="registerForm.email"
                type="email"
                class="input"
                placeholder="ivan.petrov@example.com"
              />
            </div>

            <div class="field">
              <label class="label" for="phone">Телефон</label>
              <input
                id="phone"
                v-model="registerForm.phone"
                type="tel"
                class="input"
                placeholder="+7 (999) 123-45-67"
              />
            </div>

            <div class="field">
              <label class="label" for="city">Город</label>
              <input
                id="city"
                v-model="registerForm.city"
                type="text"
                class="input"
                placeholder="Москва"
              />
            </div>

            <div class="field">
              <label class="label" for="organization">Учреждение / организация</label>
              <input
                id="organization"
                v-model="registerForm.organization"
                type="text"
                class="input"
                placeholder="Колледж гастрономии №1"
              />
            </div>

            <div class="field">
              <label class="label" for="reg-password">Пароль</label>
              <div class="password-field">
                <input
                  id="reg-password"
                  v-model="registerForm.password"
                  :type="registerShowPassword ? 'text' : 'password'"
                  class="input password-input"
                  placeholder="Придумайте пароль"
                />
                <button
                  type="button"
                  class="password-toggle"
                  @click="toggleRegisterPassword"
                  :aria-label="registerShowPassword ? 'Скрыть пароль' : 'Показать пароль'"
                >
                  <span class="eye-icon" :class="{ 'eye-slash': registerShowPassword }">
                    👁
                  </span>
                </button>
              </div>
            </div>

            <button type="submit" class="submit-btn">
              <span class="submit-icon">✔</span>
              <span>Создать аккаунт</span>
            </button>
          </form>
        </transition>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

type ActiveTab = 'login' | 'register'

interface LoginForm {
  email: string
  password: string
}

interface RegisterForm {
  fullName: string
  email: string
  phone: string
  city: string
  organization: string
  password: string
}

const activeTab = ref<ActiveTab>('login')

const loginForm = reactive<LoginForm>({
  email: '',
  password: ''
})

const registerForm = reactive<RegisterForm>({
  fullName: '',
  email: '',
  phone: '',
  city: '',
  organization: '',
  password: ''
})

const loginShowPassword = ref<boolean>(false)
const registerShowPassword = ref<boolean>(false)

const setTab = (tab: ActiveTab): void => {
  activeTab.value = tab
}

const toggleLoginPassword = (): void => {
  loginShowPassword.value = !loginShowPassword.value
}

const toggleRegisterPassword = (): void => {
  registerShowPassword.value = !registerShowPassword.value
}

const onLoginSubmit = (): void => {
  console.log('login', loginForm)
}

const onRegisterSubmit = (): void => {
  console.log('register', registerForm)
}
</script>

<style scoped>
.page {
  font-family: var(--font-semiBold);
  width: 100%;
  max-width: 1400px;
  margin-inline: auto;
}

.page-title {
  font-size: 28px;
  margin-bottom: 32px;
  color: var(--color-text);
}

/* ВНЕШНИЙ БОЛЬШОЙ ПРЯМОУГОЛЬНИК */
.card-outer {
  background-color: var(--color-bg);
  border-radius: 32px;
  padding: 80px 120px;
  box-shadow: 0 30px 60px var(--color-shadow);
}

/* ВНУТРЕННЯЯ КАРТОЧКА С КОНТЕНТОМ */
.card-inner {
  max-width: 650px;
  margin-inline: auto;
  background-color: var(--color-bg);
  border-radius: 24px;
  box-shadow: 0 20px 40px var(--color-shadow);
}

/* ВЕРХ ВНУТРЕННЕЙ КАРТОЧКИ */
.card-header {
  padding: 32px 40px 24px;
}

.card-title {
  font-size: 18px;
  margin-bottom: 16px;
  color: var(--color-text);
}

/* СЕРАЯ ПОЛОСА ПОД ВКЛАДКИ */
.tabs-bar {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: var(--color-tab-inactive);
  border-radius: 6px;
  padding: 4px;
}

/* БЕЛАЯ ПИЛЮЛЯ-КНОПКА */
.tab-pill {
  position: relative;
  z-index: 1;
  padding: 10px 0;
  border-radius: 4px;
  border: none;
  background-color: transparent;
  font-size: 14px;
  cursor: pointer;
  font-family: var(--font-medium);
  color: var(--color-tab-inactive-text);
}

.tab-pill--active {
  background-color: var(--color-bg);
  color: var(--color-text);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12);
}

.tab-pill--right {
  text-align: center;
}

/* ФОРМЫ ВНУТРИ КАРТОЧКИ */
.form {
  padding: 0 40px 40px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.label {
  font-size: 14px;
  color: var(--color-text);
  margin-top: 10px;
  margin-bottom: 5px;
}

.input {
  height: 44px;
  padding: 0 12px;
  border-radius: 4px;
  border: 1px solid rgba(148, 163, 184, 0.5);
  font-size: 14px;
  font-family: var(--font-medium);
}

.input::placeholder {
  color: var(--color-grey-text);
}

/* ПОЛЕ С ПАРОЛЕМ + ГЛАЗ */
.password-field {
  position: relative;
}

.password-input {
  padding-right: 48px; /* место под глазик */
}

.password-toggle {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.eye-icon {
  font-size: 18px;
  transition: transform 0.2s ease;
}

.eye-icon.eye-slash {
  transform: scale(0.9);
}

/* КНОПКИ */
.submit-btn {
  margin-top: 16px;
  height: 48px;
  width: 100%;
  border-radius: 4px;
  border: none;
  background-color: var(--color-button);
  color: var(--color-bg);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  cursor: pointer;
}

.submit-icon {
  font-size: 16px;
}

/* Плавное переключение форм */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
