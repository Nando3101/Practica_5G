<template>
  <div class="d-flex justify-content-center">
    <div class="col-8">
      <form name="editForm" novalidate @submit.prevent="save()">
        <h2 id="gestorPedidosApp.producto.home.createOrEditLabel" data-cy="ProductoCreateUpdateHeading">Crear o editar Producto</h2>
        <div>
          <div class="mb-3" v-if="producto.id">
            <label for="id">ID</label>
            <input type="text" class="form-control" id="id" name="id" v-model="producto.id" readonly />
          </div>
          <div class="mb-3">
            <label class="form-control-label" for="producto">Codigo</label>
            <input
              type="text"
              class="form-control"
              name="codigo"
              id="producto-codigo"
              data-cy="codigo"
              :class="{ valid: !v$.codigo.$invalid, invalid: v$.codigo.$invalid }"
              v-model="v$.codigo.$model"
              required
            />
            <div v-if="v$.codigo.$anyDirty && v$.codigo.$invalid">
              <small class="form-text text-danger" v-for="error of v$.codigo.$errors" :key="error.$uid">{{ error.$message }}</small>
            </div>
          </div>
          <div class="mb-3">
            <label class="form-control-label" for="producto">Nombre</label>
            <input
              type="text"
              class="form-control"
              name="nombre"
              id="producto-nombre"
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
            <label class="form-control-label" for="producto">Descripcion</label>
            <input
              type="text"
              class="form-control"
              name="descripcion"
              id="producto-descripcion"
              data-cy="descripcion"
              :class="{ valid: !v$.descripcion.$invalid, invalid: v$.descripcion.$invalid }"
              v-model="v$.descripcion.$model"
              required
            />
            <div v-if="v$.descripcion.$anyDirty && v$.descripcion.$invalid">
              <small class="form-text text-danger" v-for="error of v$.descripcion.$errors" :key="error.$uid">{{ error.$message }}</small>
            </div>
          </div>
          <div class="mb-3">
            <label class="form-control-label" for="producto">Precio</label>
            <input
              type="number"
              class="form-control"
              name="precio"
              id="producto-precio"
              data-cy="precio"
              :class="{ valid: !v$.precio.$invalid, invalid: v$.precio.$invalid }"
              v-model.number="v$.precio.$model"
              required
            />
            <div v-if="v$.precio.$anyDirty && v$.precio.$invalid">
              <small class="form-text text-danger" v-for="error of v$.precio.$errors" :key="error.$uid">{{ error.$message }}</small>
            </div>
          </div>
          <div class="mb-3">
            <label class="form-control-label" for="producto">Fecha Creacion</label>
            <b-input-group class="mb-3">
              <b-input-group-prepend>
                <b-form-datepicker
                  aria-controls="producto-fechaCreacion"
                  v-model="v$.fechaCreacion.$model"
                  name="fechaCreacion"
                  class="form-control"
                  :locale="currentLanguage"
                  button-only
                  today-button
                  reset-button
                  close-button
                >
                </b-form-datepicker>
              </b-input-group-prepend>
              <b-form-input
                id="producto-fechaCreacion"
                data-cy="fechaCreacion"
                type="text"
                class="form-control"
                name="fechaCreacion"
                :class="{ valid: !v$.fechaCreacion.$invalid, invalid: v$.fechaCreacion.$invalid }"
                v-model="v$.fechaCreacion.$model"
                required
              />
            </b-input-group>
            <div v-if="v$.fechaCreacion.$anyDirty && v$.fechaCreacion.$invalid">
              <small class="form-text text-danger" v-for="error of v$.fechaCreacion.$errors" :key="error.$uid">{{ error.$message }}</small>
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
<script lang="ts" src="./producto-update.component.ts"></script>
