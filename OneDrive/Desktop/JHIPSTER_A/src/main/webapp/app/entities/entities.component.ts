import { defineComponent, provide } from 'vue';

import UserService from '@/entities/user/user.service';

import ClienteService from './cliente/cliente.service';
import ProductoService from './producto/producto.service';
// jhipster-needle-add-entity-service-to-entities-component-import - JHipster will import entities services here

export default defineComponent({
  name: 'Entities',
  setup() {
    provide('userService', () => new UserService());
    provide('clienteService', () => new ClienteService());
    provide('productoService', () => new ProductoService());
    // jhipster-needle-add-entity-service-to-entities-component - JHipster will import entities services here
  },
});
