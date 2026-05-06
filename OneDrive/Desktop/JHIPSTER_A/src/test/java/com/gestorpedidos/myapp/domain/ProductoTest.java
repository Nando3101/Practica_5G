package com.gestorpedidos.myapp.domain;

import static com.gestorpedidos.myapp.domain.ProductoTestSamples.*;
import static org.assertj.core.api.Assertions.assertThat;

import com.gestorpedidos.myapp.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class ProductoTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Producto.class);
        Producto producto1 = getProductoSample1();
        Producto producto2 = new Producto();
        assertThat(producto1).isNotEqualTo(producto2);

        producto2.setId(producto1.getId());
        assertThat(producto1).isEqualTo(producto2);

        producto2 = getProductoSample2();
        assertThat(producto1).isNotEqualTo(producto2);
    }
}
