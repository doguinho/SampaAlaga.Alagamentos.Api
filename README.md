# SampaAlaga.Alagamentos.Api
API do app SampaAlaga

Para iniciar a o banco de dados:
1) mongod --dbPath [caminho a sua escolha]
2) criar banco de dados com nome sampa_alaga
3) criar colllection regioes dentro do banco sampa_alaga
4) importar arquivo src/migrations/regioes.json para a colletion regioes


Para iniciar a api:

1) yarn install
2) npx ts-node-dev server.ts
