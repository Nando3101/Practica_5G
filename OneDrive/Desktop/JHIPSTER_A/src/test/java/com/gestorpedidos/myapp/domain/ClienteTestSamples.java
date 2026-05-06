package com.gestorpedidos.myapp.domain;

import java.util.Random;
import java.util.UUID;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.concurrent.atomic.AtomicLong;

public class ClienteTestSamples {

    private static final Random random = new Random();
    private static final AtomicLong longCount = new AtomicLong(random.nextInt() + (2L * Integer.MAX_VALUE));
    private static final AtomicInteger intCount = new AtomicInteger(random.nextInt() + (2 * Short.MAX_VALUE));

    public static Cliente getClienteSample1() {
        return new Cliente().id(1L).cedula("cedula1").nombre("nombre1").apellido("apellido1").edad(1);
    }

    public static Cliente getClienteSample2() {
        return new Cliente().id(2L).cedula("cedula2").nombre("nombre2").apellido("apellido2").edad(2);
    }

    public static Cliente getClienteRandomSampleGenerator() {
        return new Cliente()
            .id(longCount.incrementAndGet())
            .cedula(UUID.randomUUID().toString())
            .nombre(UUID.randomUUID().toString())
            .apellido(UUID.randomUUID().toString())
            .edad(intCount.incrementAndGet());
    }
}
