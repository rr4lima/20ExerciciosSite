function acender(cor) {
  const cores = ['vermelho', 'amarelo', 'verde'];

  cores.forEach(c => {
    const luz = document.getElementById(c);
    if (c === cor) {
      luz.classList.add('aceso');
    } else {
      luz.classList.remove('aceso');
    }
  });
}
