<template>
  <div>
    <h2 id="page-heading" data-cy="ProductoHeading">
      <span id="producto">Productos</span>
      <div class="d-flex justify-content-end">
        <button class="btn btn-info me-2" @click="handleSyncList" :disabled="isFetching">
          <font-awesome-icon icon="sync" :spin="isFetching"></font-awesome-icon> <span>Refrescar lista</span>
        </button>
        <router-link :to="{ name: 'ProductoCreate' }" custom v-slot="{ navigate }">
          <button
            @click="navigate"
            id="jh-create-entity"
            data-cy="entityCreateButton"
            class="btn btn-primary jh-create-entity create-producto"
          >
            <font-awesome-icon icon="plus"></font-awesome-icon>
            <span>Crear nuevo Producto</span>
          </button>
        </router-link>
      </div>
    </h2>
    <br />
    <div class="alert alert-warning" v-if="!isFetching && productos?.length === 0">
      <span>Ningún Productos encontrado</span>
    </div>
    <div class="table-responsive" v-if="productos?.length > 0">
      <table class="table table-striped" aria-describedby="productos">
        <thead>
          <tr>
            <th scope="col"><span>ID</span></th>
            <th scope="col"><span>Codigo</span></th>
            <th scope="col"><span>Nombre</span></th>
            <th scope="col"><span>Descripcion</span></th>
            <th scope="col"><span>Precio</span></th>
            <th scope="col"><span>Fecha Creacion</span></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="producto in productos" :key="producto.id" data-cy="entityTable">
            <td>
              <router-link :to="{ name: 'ProductoView', params: { productoId: producto.id } }">{{ producto.id }}</router-link>
            </td>
            <td>{{ producto.codigo }}</td>
            <td>{{ producto.nombre }}</td>
            <td>{{ producto.descripcion }}</td>
            <td>{{ producto.precio }}</td>
            <td>{{ producto.fechaCreacion }}</td>
            <td class="text-end">
              <div class="btn-group">
                <router-link :to="{ name: 'ProductoView', params: { productoId: producto.id } }" custom v-slot="{ navigate }">
                  <button @click="navigate" class="btn btn-info btn-sm details" data-cy="entityDetailsButton">
                    <font-awesome-icon icon="eye"></font-awesome-icon>
                    <span class="d-none d-md-inline">Vista</span>
                  </button>
                </router-link>
                <router-link :to="{ name: 'ProductoEdit', params: { productoId: producto.id } }" custom v-slot="{ navigate }">
                  <button @click="navigate" class="btn btn-primary btn-sm edit" data-cy="entityEditButton">
                    <font-awesome-icon icon="pencil-alt"></font-awesome-icon>
                    <span class="d-none d-md-inline">Editar</span>
                  </button>
                </router-link>
                <b-button
                  @click="prepareRemove(producto)"
                  variant="danger"
                  class="btn btn-sm"
                  data-cy="entityDeleteButton"
                  v-b-modal.removeEntity
                >
                  <font-awesome-icon icon="times"></font-awesome-icon>
                  <span class="d-none d-md-inline">Eliminar</span>
                </b-button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <b-modal ref="removeEntity" id="removeEntity">
      <template #title>
        <span id="gestorPedidosApp.producto.delete.question" data-cy="productoDeleteDialogHeading">Confirmar operación de borrado</span>
      </template>
      <div class="modal-body">
        <p id="jhi-delete-producto-heading">¿Seguro que quiere eliminar Producto {{ removeId }}?</p>
      </div>
      <template #footer>
        <div>
          <button type="button" class="btn btn-secondary" @click="closeDialog()">Cancelar</button>
          <button
            type="button"
            class="btn btn-primary"
            id="jhi-confirm-delete-producto"
            data-cy="entityConfirmDeleteButton"
            @click="removeProducto"
          >
            Eliminar
          </button>
        </div>
      </template>
    </b-modal>
  </div>
</template>

<script lang="ts" src="./producto.component.ts"></script>
