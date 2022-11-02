import Fastify from 'fastify'

async function bootstrap() {
    const fastfy = Fastify({
        logger: true,
    })

    fastfy.get('/pools/count', () => {
        return { count: 0}
    })

    await fastfy.listen({port:3333})
}

bootstrap()