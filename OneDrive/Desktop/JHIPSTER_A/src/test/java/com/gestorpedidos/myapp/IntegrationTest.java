package com.gestorpedidos.myapp;

import com.gestorpedidos.myapp.config.AsyncSyncConfiguration;
import com.gestorpedidos.myapp.config.EmbeddedSQL;
import com.gestorpedidos.myapp.config.JacksonConfiguration;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
import org.springframework.boot.test.context.SpringBootTest;

/**
 * Base composite annotation for integration tests.
 */
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@SpringBootTest(
    classes = {
        GestorPedidosApp.class,
        JacksonConfiguration.class,
        AsyncSyncConfiguration.class,
        com.gestorpedidos.myapp.config.JacksonHibernateConfiguration.class,
    }
)
@EmbeddedSQL
public @interface IntegrationTest {}
