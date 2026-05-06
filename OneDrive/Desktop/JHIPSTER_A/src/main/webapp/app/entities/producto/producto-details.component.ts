import { type Ref, defineComponent, inject, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { useAlertService } from '@/shared/alert/alert.service';
import { type IProducto } from '@/shared/model/producto.model';

import ProductoService from './producto.service';

export default defineComponent({
  name: 'ProductoDetails',
  setup() {
    const productoService = inject('productoService', () => new ProductoService());
    const alertService = inject('alertService', () => useAlertService(), true);

    const route = useRoute();
    const router = useRouter();

    const previousState = () => router.go(-1);
    const producto: Ref<IProducto> = ref({});

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

    return {
      alertService,
      producto,

      previousState,
    };
  },
});
