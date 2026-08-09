# Oficina 02 — Data Logger de Temperatura: Investigando Reações Químicas

**Robótica Educacional com Micro:bit**

-----

## 🎯 Objetivo Principal

O foco central desta oficina é a investigação científica de fenômenos termoquímicos por meio de coleta e análise de dados em tempo real. Utilizando a sonda de temperatura DS18B20 acoplada ao BBC micro:bit, as estudantes constroem um **data logger** — um registrador contínuo de dados — e investigam o comportamento térmico de duas reações químicas reais: uma endotérmica e uma exotérmica. A montagem do circuito na protoboard, a programação e a análise do gráfico gerado no MakeCode são os instrumentos que tornam o invisível visível.

-----

## 🔬 O Ciclo Investigativo (Baseado nas Fichas de Campo)

A oficina orienta as estudantes por um ciclo de investigação científica estruturado na Ficha de Investigação:

1. **Formulação de Hipóteses:** As estudantes registram previamente o que esperam observar na temperatura ao realizar cada mistura química — se vai subir, cair ou permanecer estável, e por quê.
1. **Montagem e Teste do Circuito:** Construção do termômetro digital na protoboard (sonda DS18B20 + resistor + cabos jumper e jacaré), programação no MakeCode com extensão específica e verificação do funcionamento antes das missões.
1. **Missão A Queda (vinagre + bicarbonato de sódio):** Realização da mistura e acompanhamento da curva de temperatura em tempo real. A reação endotérmica absorve energia térmica do meio, provocando queda observável na leitura do sensor.
1. **Missão A Escalada (água oxigenada + levedura):** Realização da segunda mistura e registro da curva. A decomposição catalisada do peróxido de hidrogênio é exotérmica — a temperatura sobe.
1. **Análise do Gráfico:** Interpretação conjunta das curvas geradas no MakeCode, identificando o ponto de mistura, a tendência térmica e possíveis anomalias de leitura.
1. **Retomada da Hipótese:** Análise crítica final para determinar se as predições iniciais foram *Confirmadas, Parciais ou Refutadas*, com justificativa baseada nos dados coletados.
1. **Escala de Experiência (NRS):** Avaliação quantitativa individual (escala numérica de 0 a 10) sobre a experiência geral da oficina.

-----

## 👥 Divisão de Funções em Equipe (Equidade de Gênero)

Para promover o engajamento ativo e inclusivo de todas (🎓 Estudantes na Ciência), a ficha de campo exige a rotação explícita de papéis técnicos:

- **Pesquisadora / Analista:** Lidera o registro das hipóteses, acompanha a leitura do gráfico no MakeCode e interpreta os dados ao longo das missões.
- **Química / Manipuladora:** Realiza as misturas químicas com atenção e precisão, seguindo as quantidades e a sequência indicadas na ficha.
- **Operadora do Sensor:** Posiciona e mantém a sonda DS18B20 imersa corretamente durante as misturas, garantindo leituras estáveis.
- **Registradora de Dados:** Anota os valores observados, o comportamento da curva e os eventos relevantes na ficha de investigação.

-----

## 🧪 Estrutura Detalhada das Aulas (Guia do Professor)

A oficina está organizada em **2 Aulas de 50 minutos**:

### 💻 Aula 1 — Construção do Data Logger (50 min)

- **Momento 1 — Provocação Científica (10 min):** Discussão sobre o que é energia térmica, como ela se transfere e o conceito de reação endotérmica e exotérmica. Apresentação da sonda DS18B20 e comparação com termômetros tradicionais.
- **Momento 2 — Instalação da Extensão e Programação (25 min):** Instalação da extensão DS18B20 no MakeCode, construção do algoritmo em blocos para leitura contínua de temperatura e ativação do gráfico serial em tempo real.
- **Momento 3 — Montagem do Circuito e Teste (15 min):** Montagem na protoboard (sonda + resistor + cabos), transferência do código e verificação do funcionamento do termômetro digital antes das missões. Distribuição das funções na equipe e preenchimento da hipótese inicial.

### 🔬 Aula 2 — Missões Práticas e Conclusão (50 min)

- **Momento 1 — Missão A Queda (15 min):** Realização da mistura vinagre + bicarbonato de sódio com a sonda posicionada. Registro da curva e observação da queda de temperatura. Discussão sobre o conceito de reação endotérmica.
- **Momento 2 — Missão A Escalada (20 min):** Realização da mistura água oxigenada + levedura. Registro da curva e observação da elevação de temperatura. Discussão sobre reação exotérmica e energia liberada.
- **Momento 3 — Análise, Conclusão e NRS (15 min):** Interpretação conjunta dos dois gráficos, retomada das hipóteses e preenchimento da avaliação NRS. O professor media a discussão sobre o “pulo do gato”: para onde foi a energia?

-----

## 🧰 Planejamento e Materiais (Suporte ao Professor)

### Materiais Necessários:

- **Kits micro:bit (1 por equipe):** Placa micro:bit (V2 recomendada), cabo USB, case de bateria e 2 pilhas AAA.
- **Computadores/Notebooks (1 por equipe):** Com acesso à internet para uso da plataforma online do MakeCode.
- **Fichas de Investigação:** 1 cópia impressa por equipe. Guia do Professor: uso do professor.
- **Sensor DS18B20 impermeável (1 por equipe):** Sonda de temperatura digital de precisão — R$25/kit com 5 unidades.
- **Resistor de 4,7 kΩ ou 10 kΩ (1 por equipe):** Necessário para funcionamento correto do sensor — R$1,00/unidade.
- **Mini protoboard (1 por equipe):** R$30/kit com 6 unidades.
- **Cabos jumper (4 por equipe):** R$20/kit com 40 cabos.
- **Cabos jacaré (3 por equipe):** R$20/kit com 10.
- **Vinagre (50 ml por equipe)**, **bicarbonato de sódio (2 colheres de chá por equipe)**.
- **Água oxigenada 10 a 40 volumes (30 ml por equipe)**, **água morna (300 ml por equipe)**, **fermento biológico seco (1 sachê por equipe)**.
- **Copos plásticos descartáveis (4 por equipe)**, **palitos de madeira (2)**, **papel absorvente (bastante!)**.
- **Óculos e luvas de proteção** (recomendável e reutilizável).
- **Apoio para fichas** (prancheta ou caderno), canetas ou lápis.

> **Custo estimado (junho de 2026):** R$ 20,00 por equipe, considerando reuso dos componentes eletrônicos e equipamentos de proteção em outras turmas. Recomenda-se a organização de 4 equipes.

### ⚠️ Preparação Prévia Recomendada:

Separe os materiais por equipe antes da aula. Os reagentes devem estar em quantidades pré-medidas. Realize o experimento você mesmo antes da aplicação — especialmente a Missão A Escalada, que pode gerar espuma abundante dependendo da concentração da água oxigenada. Tenha papel absorvente em quantidade.

-----

## 📊 Critérios de Avaliação (Rubrica de 15 Pontos)

O Guia do Professor estabelece uma rubrica de avaliação formativa baseada em 5 critérios (de 1 a 3 pontos cada):

1. **Montagem do Circuito:** Avalia a qualidade e autonomia na montagem da protoboard com sonda, resistor e cabos — conexões corretas e estáveis.
1. **Leitura do Instrumento:** Avalia o posicionamento correto da sonda durante as misturas e a capacidade de interpretar a curva de temperatura em tempo real.
1. **Investigação (Ficha de Campo):** Avalia a qualidade científica das hipóteses, o preenchimento das medições e a coerência na retomada das hipóteses com base nos dados.
1. **Trabalho em Equipe:** Avalia a cooperação, a divisão equitativa de funções e o revezamento prático de papéis técnicos.
1. **Análise dos Resultados:** Avalia a capacidade de identificar e explicar a diferença entre as duas curvas de temperatura, relacionando os dados ao conceito de reação endotérmica e exotérmica.

-----

## ⚠️ Erro Controlado

Nesta oficina, variações inesperadas na leitura da sonda — causadas por conexões instáveis na protoboard, bolhas de ar ao redor do sensor ou interferências na extensão — não podem ser consideradas somente como  falhas, mas podem se tornar **oportunidades de calibração científica**. As estudantes aprendem a distinguir ruído de dado, a estabilizar o circuito e a interpretar anomalias com raciocínio lógico, por erro, tentativa, dedução e inferência. O erro de montagem é parte do processo — não um obstáculo a ser eliminado, mas um dado a ser investigado.

-----

## 📂 Arquivos do Repositório

### 📁 Pasta `Oficina_02_Quimica_Sensores_Temperatura`

- **`Oficina02_Guia_Professor.pdf`**: Documento de planejamento pedagógico passo a passo, com cronograma detalhado, orientações de segurança, competências curriculares e critérios de avaliação.
- **`Oficina02_Ficha_Investigativa.pdf`**: Diário de bordo das missões A Queda e A Escalada, com seções para hipóteses, registro de dados e retomada da hipótese.
- **`Oficina_02_data_logger.js`**: Código-fonte em JavaScript para leitura contínua da sonda DS18B20 e geração do gráfico serial no MakeCode.
- **`README.md`**: Este guia rápido de orientação da oficina.

-----

## 📎 Créditos e Inspiração

O código JavaScript e os materiais pedagógicos (Guia do Professor e Ficha Investigativa) são de autoria original do projeto **Meninas nas Exatas / UFRJ**.

-----

## 💻 Código do Data Logger (JavaScript)

> ⚠️ **Atenção:** Este código requer a instalação da extensão DS18B20 no MakeCode antes de ser colado. Consulte o Guia do Professor para o passo a passo de instalação da extensão.

```javascript
// Leitura sob demanda (Interação)
input.onButtonPressed(Button.A, function () {
    basic.showNumber(temp)
    // Apaga a tela depois de mostrar
    basic.clearScreen()
})
let temp = 0 //Cria a variável
serial.redirectToUSB()
// O "Motor" do Data Logger (Trabalho invisível)
basic.forever(function () {

    // 1. Lê a temperatura no pino correto (P0)
    temp = dstemp.celsius(DigitalPin.P1)

    // 2. Envia para gerar o gráfico no PC
    serial.writeValue("Temp", temp) // Joga os dados para a porta serial "USB"
    basic.pause(200) // Pequena pausa
    basic.showIcon(IconNames.SmallDiamond) 
    basic.clearScreen() // Apaga a tela depois de mostrar
    basic.pause(200) // Pequena pausa
})
```

---

## 📄 Licença

Este material faz parte do repositório [Oficinas de Robótica Educacional com BBC Micro:bit](https://github.com/bjnobrega/oficinas-robotica-microbit) e está disponível sob **MIT License**. Consulte o arquivo LICENSE na raiz do repositório.
