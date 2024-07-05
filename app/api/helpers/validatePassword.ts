export default function validatePassword(senha: string): boolean {
  // Verifica se a senha tem pelo menos 4 caracteres
  return senha.length >= 4
}
