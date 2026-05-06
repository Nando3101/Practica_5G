import { type Ref, defineComponent, inject, onMounted, ref } from 'vue';

import { useAlertService } from '@/shared/alert/alert.service';
import { type IProducto } from '@/shared/model/producto.model';

import ProductoService from './producto.service';

export default defineComponent({
  name: 'Producto',
  setup() {
    const productoService = inject('productoService', () => new ProductoService());
    const alertService = inject('alertService', () => useAlertService(), true);

    const productos: Ref<IProducto[]> = ref([]);

    const isFetching = ref(false);

    const clear = () => {};

    const retrieveProductos = async () => {
      isFetching.value = true;
      try {
        const res = await productoService().retrieve();
        productos.value = res.data;
      } catch (err) {
        alertService.showHttpError(err.response);
      } finally {
        isFetching.value = false;
      }
    };

    const handleSyncList = () => {
      retrieveProductos();
    };

    onMounted(async () => {
      await retrieveProductos();
    });

    const removeId: Ref<number> = ref(null);
    const removeEntity = ref<any>(null);
    const prepareRemove = (instance: IProducto) => {
      removeId.value = instance.id;
      removeEntity.value.show();
    };
    const closeDialog = () => {
      removeEntity.value.hide();
    };
    const removeProducto = async () => {
      try {
        await productoService().delete(removeId.value);
        const message = `A Producto is deleted with identifier ${removeId.value}`;
        alertService.showInfo(message, { variant: 'danger' });
        removeId.value = null;
        retrieveProductos();
        closeDialog();
      } catch (error) {
        alertService.showHttpError(error.response);
      }
    };

    return {
      productos,
      handleSyncList,
      isFetching,
      retrieveProductos,
      clear,
      removeId,
      removeEntity,
      prepareRemove,
      closeDialog,
      removeProducto,
    };
  },
});
