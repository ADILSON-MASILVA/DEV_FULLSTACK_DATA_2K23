// Define a variável booleana para representar o estado de login do usuário
var usuarioLogado = true; // Defina como 'true' se o usuário estiver logado ou 'false' se não estiver

// Verifica o estado de login e exibe a mensagem de boas-vindas apropriada
if (usuarioLogado) {
    console.log("Bem-vindo! Você está logado no aplicativo.");
} else {
    console.log("Bem-vindo! Por favor, faça o login para acessar o aplicativo.");
}