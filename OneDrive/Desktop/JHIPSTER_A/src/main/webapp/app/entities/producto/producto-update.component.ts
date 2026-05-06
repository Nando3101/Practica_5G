import { type Ref, computed, defineComponent, inject, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { useVuelidate } from '@vuelidate/core';

import { useAlertService } from '@/shared/alert/alert.service';
import { useValidation } from '@/shared/composables';
import { type IProducto, Producto } from '@/shared/model/producto.model';

import ProductoService from './producto.service';

export default defineComponent({
  name: 'ProductoUpdate',
  setup() {
    const productoService = inject('productoService', () => new ProductoService());
    const alertService = inject('alertService', () => useAlertService(), true);

    const producto: Ref<IProducto> = ref(new Producto());
    const isSaving = ref(false);
    const currentLanguage = inject('currentLanguage', () => computed(() => navigator.language ?? 'es'), true);

    const route = useRoute();
    const router = useRouter();

    const previousState = () => router.go(-1);

    const retrieveProducto = async productoId => {
      try {
        const res = await productoService().find(productoId);
        producto.value = res;
      } catch (error) {
        alertService.showHttpError(error.response);
      }
    };

    if (route.params?.productoId) {
      retrieveProducto(route.params.productoId);
    }

    const validations = useValidation();
    const validationRules = {
      codigo: {
        required: validations.required('Este campo es obligatorio.'),
      },
      nombre: {
        required: validations.required('Este campo es obligatorio.'),
      },
      descripcion: {
        required: validations.required('Este campo es obligatorio.'),
      },
      precio: {
        required: validations.required('Este campo es obligatorio.'),
      },
      fechaCreacion: {
        required: validations.required('Este campo es obligatorio.'),
      },
    };
    const v$ = useVuelidate(validationRules, producto as any);
    v$.value.$validate();

    return {
      productoService,
      alertService,
      producto,
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
      if (this.producto.id) {
        this.productoService()
          .update(this.producto)
          .then(param => {
            this.isSaving = false;
            this.previousState();
            this.alertService.showInfo(`A Producto is updated with identifier ${param.id}`);
          })
          .catch(error => {
            this.isSaving = false;
            this.alertService.showHttpError(error.response);
          });
      } else {
        this.productoService()
          .create(this.producto)
          .then(param => {
            this.isSaving = false;
            this.previousState();
            this.alertService.showSuccess(`A Producto is created with identifier ${param.id}`);
          })
          .catch(error => {
            this.isSaving = false;
            this.alertService.showHttpError(error.response);
          });
      }
    },
  },
});
