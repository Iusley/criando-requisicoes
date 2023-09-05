// conectaAPI.js

  async function listaVideos() {
    const conexao = await fetch("http://localhost:3000/videos");
    const conexaoConvertida = await conexao.json();
    console.table(conexaoConvertida);
    return conexaoConvertida;
    }

    async function criaVideo(titulo, descricao, url, imagem) {
        const response = await fetch("http://localhost:3000/videos", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem,
          })
        });

        if (!conexao.ok) {
          throw new Error ("Não foi possível Enviar o vídeo")
        }
      
        const conexaoConvertida = await conexao.json();
        return conexaoConvertida;
      }
      
      
  async function buscarVideo(termoDeBusca) {
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`)
    const conexaoConvertida = conexao.json();
    return conexaoConvertida;
  }

  export const conectaAPI = {
    listaVideos,
    criaVideo,
    buscarVideo,
    };
  