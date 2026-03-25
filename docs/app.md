## APP de PODCASTS
App de podcast manager

## DESCRIPTION
App estilo netflix, centralizando varios podcasts

## Dominio
Podcasts feitos em videos

## Features
- Listar episodios de Podcastas em categorias (games, saude, fitness, etc.)
- Filtrar episodios de podcast por nome

## HOW
- Features - Listar episodios de Podcastas em categorias (games, saude, fitness, etc.)
    -Vou retornar uma api REST-Json (nome podcast, episodio, imagem de capa e link) 
... js
[
{
    podcastName: "Flow Podcast",
    episode: "SERGIO FELIPE - Flow #574",
    videoID: "KzdyrtEFVE8",
    cover: "https://i.ytimg.com/vi/KzdyrtEFVE8/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=KzdyrtEFVE8&t=2s",
    categories: ["saude", "curiosidades"]
},
{
   podcastName: "Flow Podcast",
    episode: "DANIEL LOPEZ - Flow #573",
    videoID: "0EDNeef2J5M",
    cover: "https://i.ytimg.com/vi/0EDNeef2J5M/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=0EDNeef2J5M",
    categories: ["guerra", "politica","curiosidades"] 
}
]

- Filtrar episodios de podcast por nome
    GET: retorna lsiat de episodios baseado em paramentro pelo cliente pelo nome do podcast




