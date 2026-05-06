<template>
  <div class="d-flex justify-content-center">
    <div class="col-8">
      <form name="editForm" novalidate @submit.prevent="save()">
        <h2 id="gestorPedidosApp.cliente.home.createOrEditLabel" data-cy="ClienteCreateUpdateHeading">Crear o editar Cliente</h2>
        <div>
          <div class="mb-3" v-if="cliente.id">
            <label for="id">ID</label>
            <input type="text" class="form-control" id="id" name="id" v-model="cliente.id" readonly />
          </div>
          <div class="mb-3">
            <label class="form-control-label" for="cliente">Cedula</label>
            <input
              type="text"
              class="form-control"
              name="cedula"
              id="cliente-cedula"
              data-cy="cedula"
              :class="{ valid: !v$.cedula.$invalid, invalid: v$.cedula.$invalid }"
              v-model="v$.cedula.$model"
              required
            />
            <div v-if="v$.cedula.$anyDirty && v$.cedula.$invalid">
              <small class="form-text text-danger" v-for="error of v$.cedula.$errors" :key="error.$uid">{{ error.$message }}</small>
            </div>
          </div>
          <div class="mb-3">
            <label class="form-control-label" for="cliente">Nombre</label>
            <input
              type="text"
              class="form-control"
              name="nombre"
              id="cliente-nombre"
              data-cy="nombre"
              :class="{ valid: !v$.nombre.$invalid, invalid: v$.nombre.$invalid }"
              v-model="v$.nombre.$model"
              required
            />
            <div v-if="v$.nombre.$anyDirty && v$.nombre.$invalid">
              <small class="form-text text-danger" v-for="error of v$.nombre.$errors" :key="error.$uid">{{ error.$message }}</small>
            </div>
          </div>
          <div class="mb-3">
            <label class="form-control-label" for="cliente">Apellido</label>
            <input
              type="text"
              class="form-control"
              name="apellido"
              id="cliente-apellido"
              data-cy="apellido"
              :class="{ valid: !v$.apellido.$invalid, invalid: v$.apellido.$invalid }"
              v-model="v$.apellido.$model"
              required
            />
            <div v-if="v$.apellido.$anyDirty && v$.apellido.$invalid">
              <small class="form-text text-danger" v-for="error of v$.apellido.$errors" :key="error.$uid">{{ error.$message }}</small>
            </div>
          </div>
          <div class="mb-3">
            <label class="form-control-label" for="cliente">Edad</label>
            <input
              type="number"
              class="form-control"
              name="edad"
              id="cliente-edad"
              data-cy="edad"
              :class="{ valid: !v$.edad.$invalid, invalid: v$.edad.$invalid }"
              v-model.number="v$.edad.$model"
              required
            />
            <div v-if="v$.edad.$anyDirty && v$.edad.$invalid">
              <small class="form-text text-danger" v-for="error of v$.edad.$errors" :key="error.$uid">{{ error.$message }}</small>
            </div>
          </div>
        </div>
        <div>
          <button type="button" id="cancel-save" data-cy="entityCreateCancelButton" class="btn btn-secondary" @click="previousState()">
            <font-awesome-icon icon="ban"></font-awesome-icon>&nbsp;<span>Cancelar</span>
          </button>
          <button
            type="submit"
            id="save-entity"
            data-cy="entityCreateSaveButton"
            :disabled="v$.$invalid || isSaving"
            class="btn btn-primary"
          >
            <font-awesome-icon icon="save"></font-awesome-icon>&nbsp;<span>Guardar</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script lang="ts" src="./cliente-update.component.ts"></script>
