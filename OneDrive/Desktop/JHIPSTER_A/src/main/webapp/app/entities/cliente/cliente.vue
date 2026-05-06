<template>
  <div>
    <h2 id="page-heading" data-cy="ClienteHeading">
      <span id="cliente">Clientes</span>
      <div class="d-flex justify-content-end">
        <button class="btn btn-info me-2" @click="handleSyncList" :disabled="isFetching">
          <font-awesome-icon icon="sync" :spin="isFetching"></font-awesome-icon> <span>Refrescar lista</span>
        </button>
        <router-link :to="{ name: 'ClienteCreate' }" custom v-slot="{ navigate }">
          <button
            @click="navigate"
            id="jh-create-entity"
            data-cy="entityCreateButton"
            class="btn btn-primary jh-create-entity create-cliente"
          >
            <font-awesome-icon icon="plus"></font-awesome-icon>
            <span>Crear nuevo Cliente</span>
          </button>
        </router-link>
      </div>
    </h2>
    <br />
    <div class="alert alert-warning" v-if="!isFetching && clientes?.length === 0">
      <span>Ningún Clientes encontrado</span>
    </div>
    <div class="table-responsive" v-if="clientes?.length > 0">
      <table class="table table-striped" aria-describedby="clientes">
        <thead>
          <tr>
            <th scope="col"><span>ID</span></th>
            <th scope="col"><span>Cedula</span></th>
            <th scope="col"><span>Nombre</span></th>
            <th scope="col"><span>Apellido</span></th>
            <th scope="col"><span>Edad</span></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="cliente in clientes" :key="cliente.id" data-cy="entityTable">
            <td>
              <router-link :to="{ name: 'ClienteView', params: { clienteId: cliente.id } }">{{ cliente.id }}</router-link>
            </td>
            <td>{{ cliente.cedula }}</td>
            <td>{{ cliente.nombre }}</td>
            <td>{{ cliente.apellido }}</td>
            <td>{{ cliente.edad }}</td>
            <td class="text-end">
              <div class="btn-group">
                <router-link :to="{ name: 'ClienteView', params: { clienteId: cliente.id } }" custom v-slot="{ navigate }">
                  <button @click="navigate" class="btn btn-info btn-sm details" data-cy="entityDetailsButton">
                    <font-awesome-icon icon="eye"></font-awesome-icon>
                    <span class="d-none d-md-inline">Vista</span>
                  </button>
                </router-link>
                <router-link :to="{ name: 'ClienteEdit', params: { clienteId: cliente.id } }" custom v-slot="{ navigate }">
                  <button @click="navigate" class="btn btn-primary btn-sm edit" data-cy="entityEditButton">
                    <font-awesome-icon icon="pencil-alt"></font-awesome-icon>
                    <span class="d-none d-md-inline">Editar</span>
                  </button>
                </router-link>
                <b-button
                  @click="prepareRemove(cliente)"
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
        <span id="gestorPedidosApp.cliente.delete.question" data-cy="clienteDeleteDialogHeading">Confirmar operación de borrado</span>
      </template>
      <div class="modal-body">
        <p id="jhi-delete-cliente-heading">¿Seguro que quiere eliminar Cliente {{ removeId }}?</p>
      </div>
      <template #footer>
        <div>
          <button type="button" class="btn btn-secondary" @click="closeDialog()">Cancelar</button>
          <button
            type="button"
            class="btn btn-primary"
            id="jhi-confirm-delete-cliente"
            data-cy="entityConfirmDeleteButton"
            @click="removeCliente"
          >
            Eliminar
          </button>
        </div>
      </template>
    </b-modal>
  </div>
</template>

<script lang="ts" src="./cliente.component.ts"></script>
