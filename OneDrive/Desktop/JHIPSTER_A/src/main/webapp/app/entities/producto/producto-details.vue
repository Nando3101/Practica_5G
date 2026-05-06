<template>
  <div class="d-flex justify-content-center">
    <div class="col-8">
      <div v-if="producto">
        <h2 class="jh-entity-heading" data-cy="productoDetailsHeading"><span>ProductoProducto</span> {{ producto.id }}</h2>
        <dl class="row-md jh-entity-details">
          <dt>
            <span>Codigo</span>
          </dt>
          <dd>
            <span>{{ producto.codigo }}</span>
          </dd>
          <dt>
            <span>Nombre</span>
          </dt>
          <dd>
            <span>{{ producto.nombre }}</span>
          </dd>
          <dt>
            <span>Descripcion</span>
          </dt>
          <dd>
            <span>{{ producto.descripcion }}</span>
          </dd>
          <dt>
            <span>Precio</span>
          </dt>
          <dd>
            <span>{{ producto.precio }}</span>
          </dd>
          <dt>
            <span>Fecha Creacion</span>
          </dt>
          <dd>
            <span>{{ producto.fechaCreacion }}</span>
          </dd>
        </dl>
        <button type="submit" @click.prevent="previousState()" class="btn btn-info" data-cy="entityDetailsBackButton">
          <font-awesome-icon icon="arrow-left"></font-awesome-icon>&nbsp;<span>Volver</span>
        </button>
        <router-link v-if="producto.id" :to="{ name: 'ProductoEdit', params: { productoId: producto.id } }" custom v-slot="{ navigate }">
          <button @click="navigate" class="btn btn-primary">
            <font-awesome-icon icon="pencil-alt"></font-awesome-icon>&nbsp;<span>Editar</span>
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./producto-details.component.ts"></script>
