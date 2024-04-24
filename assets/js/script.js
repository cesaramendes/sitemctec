function enviarWhatsApp() {
	// Obtendo os valores dos campos do formulário
	const form = document.getElementById('form');

	if (form.checkValidity()) {
		const nome = document.getElementById('nome').value;
		const email = document.getElementById('email').value;
		const dispositivo = document.getElementById('dispositivo').value;
		const modelo = document.getElementById('modelo').value;
		const problema = document.getElementById('problema').value;

		// Verificando se todos os campos estão preenchidos
		// Formatando a mensagem
		const mensagem = `Nome: ${nome}\nEmail: ${email}\nDispositivo: ${dispositivo}\nModelo: ${modelo}\nDescrição do problema: ${problema}`;

		// Substitua 'SEU_NUMERO' pelo seu número de telefone com código do país e código de área, sem espaços, sinais de adição ou caracteres especiais
		const numeroWhatsApp = '558488533477';
		const mensagemWhatsApp = encodeURIComponent(mensagem);

		// Redirecionar para o WhatsApp com a mensagem preenchida
		window.open(
			`https://wa.me/${numeroWhatsApp}?text=${mensagemWhatsApp}`,
			'_blank'
		);
	}
}

function limparURL() {
	if (window.location.search.length > 0) {
		const novaURL = window.location.href.split('?')[0];
		window.history.replaceState({}, document.title, novaURL);
	}
}

let enviarOrcamento = document.getElementById('solicitarOrcamento');
enviarOrcamento.addEventListener('click', enviarWhatsApp, limparURL);

limparURL();
