<template>
  <section class="font-[var(--font-semiBold)] w-full max-w-[1400px] mx-auto">
    <h1 class="text-[28px] mt-8 mb-8 text-[rgb(var(--color-text))]">Кабинет участника</h1>

    <!-- ВНЕШНИЙ БОЛЬШОЙ ПРЯМОУГОЛЬНИК -->
    <div class="bg-[rgb(var(--color-bg))] rounded-[32px] px-[120px] py-[80px] shadow-[0_10px_30px_rgba(0,0,0,0.30)] mb-4">

      <!-- ВНУТРЕННЯЯ КАРТОЧКА ПОУЖЕ -->
      <div class="max-w-[650px] mx-auto bg-[rgb(var(--color-bg))] rounded-[24px] shadow-[0_10px_30px_rgba(0,0,0,0.30)]">
        <header class="px-[40px] pt-[32px] pb-[24px]">
          <h2 class="text-[18px] mb-4 text-[rgb(var(--color-text))]">Вход /Регистрация</h2>

          <!-- СЕРАЯ ПОЛОСА-ЗАДНИЙ ФОН ДЛЯ ТАБОВ -->
          <div class="grid grid-cols-2 bg-[rgb(var(--color-tab-inactive))] rounded-[6px] p-1">
            <button
              class="relative z-10 py-[10px] rounded-[4px] border-none bg-transparent text-sm cursor-pointer font-[var(--font-medium)] text-[rgb(var(--color-tab-inactive-text))] data-[state=active]:bg-[rgb(var(--color-bg))] data-[state=active]:text-[rgb(var(--color-text))] data-[state=active]:shadow-[0_4px_8px_rgba(0,0,0,0.12)]"
              :data-state="activeTab === 'login' ? 'active' : ''"
              type="button"
              @click="setTab('login')"
            >
              Вход
            </button>
            <button
              class="relative z-10 py-[10px] rounded-[4px] border-none bg-transparent text-sm cursor-pointer font-[var(--font-medium)] text-[rgb(var(--color-tab-inactive-text))] text-center data-[state=active]:bg-[rgb(var(--color-bg))] data-[state=active]:text-[rgb(var(--color-text))] data-[state=active]:shadow-[0_4px_8px_rgba(0,0,0,0.12)]"
              :data-state="activeTab === 'register' ? 'active' : ''"
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
            class="px-[40px] pb-[40px] flex flex-col gap-4"
            @submit.prevent="onLoginSubmit"
          >
            <div class="flex flex-col gap-[4px]">
              <label class="text-sm text-[rgb(var(--color-text))] mt-[10px] mb-[5px]" for="login-email">Email</label>
              <input
                id="login-email"
                v-model="loginForm.email"
                type="email"
                class="h-11 px-3 rounded border border-[rgba(148,163,184,0.5)] text-sm font-[var(--font-medium)]"
                placeholder="ivan.petrov@example.com"
              />
            </div>

            <div class="flex flex-col gap-[4px]">
              <label class="text-sm text-[rgb(var(--color-text))] mt-[10px] mb-[5px]" for="login-password">Пароль</label>
              <div class="relative">
                <input
                  id="login-password"
                  v-model="loginForm.password"
                  :type="loginShowPassword ? 'text' : 'password'"
                  class="h-11 px-3 pr-12 rounded border border-[rgba(148,163,184,0.5)] text-sm font-[var(--font-medium)] w-full"
                  placeholder="• • • • • • • •"
                /> 
                <button
                  type="button"
                  class="absolute right-3 top-1/2 -translate-y-1/2 bg-none border-none cursor-pointer p-1 flex items-center justify-center hover:opacity-75 transition-opacity"
                  @click="toggleLoginPassword"
                  :aria-label="loginShowPassword ? 'Скрыть пароль' : 'Показать пароль'"
                >
                  <!-- Перечеркнутый глаз когда пароль скрыт -->
                  <img 
                    v-if="!loginShowPassword" 
                    src="../assets/icons/eye-off.svg" 
                    alt="Скрыть пароль" 
                    class="w-5 h-5"
                  />
                  <!-- Открытый глаз когда пароль виден -->
                  <img 
                    v-else 
                    src="../assets/icons/eye-on.svg" 
                    alt="Показать пароль" 
                    class="w-5 h-5"
                  />
                </button>
              </div>
            </div>

            <button 
              type="submit" 
              class="mt-4 h-12 w-full rounded border-none bg-[rgb(var(--color-button))] text-[rgb(var(--color-bg))] flex justify-center items-center gap-2 text-sm cursor-pointer"
            >
              <img 
                src="../assets/icons/enter.svg" 
                alt="Войти" 
                class="w-5 h-5 flex-shrink-0"
              />
              <span>Войти</span>
            </button>

          </form>

          <!-- Форма регистрации -->
          <form
            v-else
            key="register"
            class="px-[40px] pb-[40px] flex flex-col gap-4"
            @submit.prevent="onRegisterSubmit"
          >
            <div class="flex flex-col gap-[4px]">
              <label class="text-sm text-[rgb(var(--color-text))] mt-[10px] mb-[5px]" for="fullName">ФИО</label>
              <input
                id="fullName"
                v-model="registerForm.fullName"
                type="text"
                class="h-11 px-3 rounded border border-[rgba(148,163,184,0.5)] text-sm font-[var(--font-medium)]"
                placeholder="Петров Иван Александрович"
              />
            </div>

            <div class="flex flex-col gap-[4px]">
              <label class="text-sm text-[rgb(var(--color-text))] mt-[10px] mb-[5px]" for="reg-email">Email</label>
              <input
                id="reg-email"
                v-model="registerForm.email"
                type="email"
                class="h-11 px-3 rounded border border-[rgba(148,163,184,0.5)] text-sm font-[var(--font-medium)]"
                placeholder="ivan.petrov@example.com"
              />
            </div>

            <div class="flex flex-col gap-[4px]">
              <label class="text-sm text-[rgb(var(--color-text))] mt-[10px] mb-[5px]" for="phone">Телефон</label>
              <input
                id="phone"
                v-model="registerForm.phone"
                type="tel"
                class="h-11 px-3 rounded border border-[rgba(148,163,184,0.5)] text-sm font-[var(--font-medium)]"
                placeholder="+7 (999) 123-45-67"
              />
            </div>

            <div class="flex flex-col gap-[4px]">
              <label class="text-sm text-[rgb(var(--color-text))] mt-[10px] mb-[5px]" for="city">Город</label>
              <input
                id="city"
                v-model="registerForm.city"
                type="text"
                class="h-11 px-3 rounded border border-[rgba(148,163,184,0.5)] text-sm font-[var(--font-medium)]"
                placeholder="Москва"
              />
            </div>

            <div class="flex flex-col gap-[4px]">
              <label class="text-sm text-[rgb(var(--color-text))] mt-[10px] mb-[5px]" for="organization">Учреждение / организация</label>
              <input
                id="organization"
                v-model="registerForm.organization"
                type="text"
                class="h-11 px-3 rounded border border-[rgba(148,163,184,0.5)] text-sm font-[var(--font-medium)]"
                placeholder="Колледж гастрономии №1"
              />
            </div>

            <div class="flex flex-col gap-[4px]">
              <label class="text-sm text-[rgb(var(--color-text))] mt-[10px] mb-[5px]" for="reg-password">Пароль</label>
              <div class="relative">
                <input
                  id="reg-password"
                  v-model="registerForm.password"
                  :type="registerShowPassword ? 'text' : 'password'"
                  class="h-11 px-3 pr-12 rounded border border-[rgba(148,163,184,0.5)] text-sm font-[var(--font-medium)] w-full"
                  placeholder="Придумайте пароль"
                />
                <button
                  type="button"
                  class="absolute right-3 top-1/2 -translate-y-1/2 bg-none border-none cursor-pointer p-1 flex items-center justify-center hover:opacity-75 transition-opacity"
                  @click="toggleRegisterPassword"
                  :aria-label="registerShowPassword ? 'Скрыть пароль' : 'Показать пароль'"
                >
                  <!-- Перечеркнутый глаз когда пароль скрыт -->
                  <img 
                    v-if="!registerShowPassword" 
                    src="../assets/icons/eye-off.svg" 
                    alt="Скрыть пароль" 
                    class="w-5 h-5"
                  />
                  <!-- Открытый глаз когда пароль виден -->
                  <img 
                    v-else 
                    src="../assets/icons/eye-on.svg" 
                    alt="Показать пароль" 
                    class="w-5 h-5"
                  />
                </button>
              </div>
            </div>


            <button 
              type="submit" 
              class="mt-4 h-12 w-full rounded border-none bg-[rgb(var(--color-button))] text-[rgb(var(--color-bg))] flex justify-center items-center gap-2 text-sm cursor-pointer"
            >
              <img 
                src="../assets/icons/check.svg" 
                alt="Создать аккаунт" 
                class="w-5 h-5 flex-shrink-0"
              />
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
import { useRouter } from 'vue-router'  // Добавлен роутер

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

const router = useRouter()  // Экземпляр роутера

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
  // TODO: API запрос на авторизацию
  router.push('/dashboard')  // Переход на Dashboard
}

const onRegisterSubmit = (): void => {
  console.log('register', registerForm)
  // TODO: API запрос на регистрацию
  router.push('/dashboard')  // Переход на Dashboard
}
</script>


<style scoped>
main {
  min-height: 90vh;
  background-color: var(--color-bg);
  display: flex;
  justify-content: center;
  margin: 0;
  align-items: center;
  font-family: var(--font-semiBold);
}
/* Только placeholder и анимации */
input::placeholder {
  color: rgb(var(--color-grey-text));
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
