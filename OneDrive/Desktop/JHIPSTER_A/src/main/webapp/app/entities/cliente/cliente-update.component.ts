import { type Ref, computed, defineComponent, inject, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { useVuelidate } from '@vuelidate/core';

import { useAlertService } from '@/shared/alert/alert.service';
import { useValidation } from '@/shared/composables';
import { Cliente, type ICliente } from '@/shared/model/cliente.model';

import ClienteService from './cliente.service';

export default defineComponent({
  name: 'ClienteUpdate',
  setup() {
    const clienteService = inject('clienteService', () => new ClienteService());
    const alertService = inject('alertService', () => useAlertService(), true);

    const cliente: Ref<ICliente> = ref(new Cliente());
    const isSaving = ref(false);
    const currentLanguage = inject('currentLanguage', () => computed(() => navigator.language ?? 'es'), true);

    const route = useRoute();
    const router = useRouter();

    const previousState = () => router.go(-1);

    const retrieveCliente = async clienteId => {
      try {
        const res = await clienteService().find(clienteId);
        cliente.value = res;
      } catch (error) {
        alertService.showHttpError(error.response);
      }
    };

    if (route.params?.clienteId) {
      retrieveCliente(route.params.clienteId);
    }

    const validations = useValidation();
    const validationRules = {
      cedula: {
        required: validations.required('Este campo es obligatorio.'),
      },
      nombre: {
        required: validations.required('Este campo es obligatorio.'),
      },
      apellido: {
        required: validations.required('Este campo es obligatorio.'),
      },
      edad: {
        required: validations.required('Este campo es obligatorio.'),
        integer: validations.integer('Este campo debe ser un número.'),
      },
    };
    const v$ = useVuelidate(validationRules, cliente as any);
    v$.value.$validate();

    return {
      clienteService,
      alertService,
      cliente,
      previousState,
      isSaving,
      currentLanguage,
      v$,
    };
  },
  created(): void {},
  methods: {
    save(): void {
      this.isSaving = true;
      if (this.cliente.id) {
        this.clienteService()
          .update(this.cliente)
          .then(param => {
            this.isSaving = false;
            this.previousState();
            this.alertService.showInfo(`A Cliente is updated with identifier ${param.id}`);
          })
          .catch(error => {
            this.isSaving = false;
            this.alertService.showHttpError(error.response);
          });
      } else {
        this.clienteService()
          .create(this.cliente)
          .then(param => {
            this.isSaving = false;
            this.previousState();
            this.alertService.showSuccess(`A Cliente is created with identifier ${param.id}`);
          })
          .catch(error => {
            this.isSaving = false;
            this.alertService.showHttpError(error.response);
          });
      }
    },
  },
});
