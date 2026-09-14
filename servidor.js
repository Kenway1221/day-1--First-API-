import { fastify } from 'fastify'

const server = fastify()

// nosso banco fake por enquanto
const videos = []

server.post('/videos', (request, reply) => {
  const { title, description } = request.body
  
  videos.push({
    id: videos.length + 1,
    title,
    description
  })

  return reply.status(201).send()
})

server.get('/videos', () => {
  return videos
})

server.listen({ port: 3333 })