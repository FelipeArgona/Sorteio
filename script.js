document.getElementById('sorteioBtn').addEventListener('click', () => {
    fetch('http://localhost:3000/sortear')
      .then(response => response.json())
      .then(data => {
        document.getElementById('resultado').textContent = `Número sorteado: ${data.numero}`;
      })
      .catch(error => console.error('Erro:', error));
  });
  