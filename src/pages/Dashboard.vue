<template>
  <div class="min-h-screen bg-[rgb(var(--color-bg))] p-8">
    <div class="max-w-7xl mx-auto">
        <aside class="sidebar">
        <nav class="sidebar-nav">
            <button 
            @click="setActiveSection('main')" 
            :class="{ active: activeSection === 'main' }"
            class="nav-item"
            >
            Главная
            </button>
            <button 
            @click="setActiveSection('team')" 
            :class="{ active: activeSection === 'team' }"
            class="nav-item"
            >
            Моя команда
            </button>
            <button 
            @click="setActiveSection('uploads')" 
            :class="{ active: activeSection === 'uploads' }"
            class="nav-item"
            >
            Загрузки
            </button>
            <button 
            @click="setActiveSection('results')" 
            :class="{ active: activeSection === 'results' }"
            class="nav-item"
            >
            Результаты
            </button>
            <button 
            @click="setActiveSection('profile')" 
            :class="{ active: activeSection === 'profile' }"
            class="nav-item"
            >
            Профиль
            </button>
        </nav>
        </aside>

        <!-- Основной контент -->
        <main class="dashboard-main">
        <!-- Верхняя панель -->
        <header class="dashboard-header">
            <h1>Петр Ильин (подтвержден)</h1>
            <button class="logout-btn">Выход</button>
        </header>

        <!-- Контент по секциям -->
        <transition name="fade" mode="out-in">
            <div v-if="activeSection === 'main'" key="main" class="section">
            <h2>Главная</h2>
            <!-- Статистика, обзор -->
            </div>
            <div v-else-if="activeSection === 'team'" key="team" class="section">
            <h2>Моя команда</h2>
            <!-- Список участников -->
            </div>
            <!-- Остальные секции... -->
        </transition>
        </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeSection = ref<'main' | 'team' | 'uploads' | 'results' | 'profile'>('main')

const setActiveSection = (section: typeof activeSection.value) => {
  activeSection.value = section
}

</script>
