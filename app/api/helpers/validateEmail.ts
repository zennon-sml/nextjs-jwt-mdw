export default function validateEmail(email: string): boolean {
  // Expressão regular para validar email
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}
