async function dialogo1(client, message) {
  const texto1 =
    "🩺 Em busca do espaço perfeito para atender seus pacientes na área da saúde? Encontrou! Temos a solução completa para você!\nAlugue agora um consultório totalmente equipado e preparado para receber seus clientes com todo o suporte necessário.🤗\n\n✅ Alvará Sanitário em conformidade com as normas.\n✅ Clínica com uma equipe multidisciplinar especializada, incluindo neurologistas, otorrinolaringologistas, fisioterapeutas, psicólogos, vasculares e outros profissionais qualificados. 👥\n✅ Localizado em uma região privilegiada na Av. Marcos Freitas Costa, número 105.🗺\n\n📞 Entre em Contato Agora: Aproveite essa oportunidade para oferecer um atendimento abrangente aos seus pacientes!";

  await client
    .sendText(message.from, texto1)
    .then(() => {
      console.log("Result: ", "result"); //return object success
    })
    .catch((erro) => {
      console.error("Erro ao enviar mensagem ", erro); //return object error
    });
}

module.exports = dialogo1;
