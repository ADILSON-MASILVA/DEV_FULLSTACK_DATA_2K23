/**   */
var tipoUsuario = "Gerente";

switch (tipoUsuario) {
    case "Admin":
        mensagem = "*|*| Feliz Natal, chefe! |*|*";
        break;
    case "Gerente":
        mensagem = "Boas festas, meu amigo!";
        break;
    default:
        mensagem = "Boas festas!";
}