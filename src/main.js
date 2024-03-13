import "bootstrap/dist/css/bootstrap.css"
import '@/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// default layout
import NavBar from '@/layouts/NavBar.vue'
import NavbarTwo from '@/layouts/NavbarTwo.vue'
import FooterPage from '@/layouts/FooterPage.vue'

// components cards
import PropertyCard from '@/components/cards/PropertyCard.vue'
import ProjectCard from '@/components/cards/ProjectCard.vue'
import ServiceCard from '@/components/cards/ServiceCard.vue'
import NewsCard from '@/components/cards/NewsCard.vue'
// components buttons
import BaseButton from '@/components/buttons/BaseButton.vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.component('nav-bar', NavBar)
app.component('navbar-two', NavbarTwo)
app.component('footer-page', FooterPage)
// cards
app.component('property-card', PropertyCard)
app.component('project-card', ProjectCard)
app.component('service-card', ServiceCard)
app.component('news-card', NewsCard)
// buttons
app.component('base-button', BaseButton)


app.use(createPinia())
app.use(router)
import "bootstrap/dist/js/bootstrap.js"
app.mount('#app')
