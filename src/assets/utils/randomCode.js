const CHARS = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789';

export function setCodigo(length) {
  let codigo = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * CHARS.length);
    codigo += CHARS[randomIndex];
  }
  return codigo;
}
