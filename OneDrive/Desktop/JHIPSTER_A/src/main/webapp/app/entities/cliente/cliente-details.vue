<template>
  <div class="d-flex justify-content-center">
    <div class="col-8">
      <div v-if="cliente">
        <h2 class="jh-entity-heading" data-cy="clienteDetailsHeading"><span>ClienteCliente</span> {{ cliente.id }}</h2>
        <dl class="row-md jh-entity-details">
          <dt>
            <span>Cedula</span>
          </dt>
          <dd>
            <span>{{ cliente.cedula }}</span>
          </dd>
          <dt>
            <span>Nombre</span>
          </dt>
          <dd>
            <span>{{ cliente.nombre }}</span>
          </dd>
          <dt>
            <span>Apellido</span>
          </dt>
          <dd>
            <span>{{ cliente.apellido }}</span>
          </dd>
          <dt>
            <span>Edad</span>
          </dt>
          <dd>
            <span>{{ cliente.edad }}</span>
          </dd>
        </dl>
        <button type="submit" @click.prevent="previousState()" class="btn btn-info" data-cy="entityDetailsBackButton">
          <font-awesome-icon icon="arrow-left"></font-awesome-icon>&nbsp;<span>Volver</span>
        </button>
        <router-link v-if="cliente.id" :to="{ name: 'ClienteEdit', params: { clienteId: cliente.id } }" custom v-slot="{ navigate }">
          <button @click="navigate" class="btn btn-primary">
            <font-awesome-icon icon="pencil-alt"></font-awesome-icon>&nbsp;<span>Editar</span>
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./cliente-details.component.ts"></script>
