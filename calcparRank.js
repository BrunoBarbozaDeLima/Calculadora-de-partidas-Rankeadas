// Função para calcular o saldo de vitórias e derrotas
function calcularSaldo(vitorias, derrotas) {
    return vitorias - derrotas;
}

// Função para determinar o nível baseado nas vitórias
function determinarNivel(vitorias) {
    if (vitorias < 10) {
        return 'Ferro';
    } else if (vitorias <= 20) {
        return 'Bronze';
    } else if (vitorias <= 50) {
        return 'Prata';
    } else if (vitorias <= 80) {
        return 'Ouro';
    } else if (vitorias <= 90) {
        return 'Diamante';
    } else if (vitorias <= 100) {
        return 'Lendário';
    } else {
        return 'Imortal';
    }
}

// Função principal para calcular o saldo e determinar o nível
function calcularPartidasRankeadas(vitorias, derrotas) {
    if (isNaN(vitorias) || isNaN(derrotas)) {
        console.log('Por favor, insira valores válidos para vitórias e derrotas.');
        return;
    }

    const saldo = calcularSaldo(vitorias, derrotas);
    const nivel = determinarNivel(vitorias);

    console.log(`O Herói tem de saldo de ${saldo} e está no nível de ${nivel}`);
}

