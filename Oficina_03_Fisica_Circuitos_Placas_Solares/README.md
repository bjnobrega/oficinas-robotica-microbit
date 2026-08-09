# Oficina 03 — Energia Solar: Investigando a Conversão Fotovoltaica

**Robótica Educacional com Micro:bit**

-----

## 🎯 Objetivo Principal

O foco central desta oficina é tornar visível um fenômeno que normalmente permanece invisível no cotidiano: a conversão de energia luminosa em energia elétrica e, em seguida, em energia luminosa novamente. Utilizando miniplacas solares de 3V conectadas ao BBC micro:bit, as estudantes constroem um circuito responsivo e investigam como a incidência, o ângulo e a intensidade da luz afetam a geração de energia fotovoltaica. Os LEDs coloridos funcionam como indicadores vivos do comportamento do circuito — e as perguntas que surgem naturalmente durante a experimentação são o motor da atividade.

-----

## 🔬 O Ciclo Investigativo (Baseado nas Fichas de Campo)

A oficina orienta as estudantes por um ciclo de investigação científica estruturado na Ficha de Investigação:

1. **Formulação de Hipóteses:** Antes dos testes, as estudantes registram suas previsões: qual LED vai acender? Com qual inclinação o brilho será maior? Todos os LEDs se comportarão da mesma forma?
1. **Investigação 1 — Ângulo de Incidência:** Variação sistemática da inclinação da miniplaca solar em relação à fonte de luz. As estudantes registram o comportamento do LED (aceso, apagado, brilho fraco ou forte) em cada posição testada.
1. **Investigação 2 — Comparação entre LEDs:** Substituição sequencial de LEDs de cores diferentes no mesmo circuito. Observação e registro das diferenças de comportamento — alguns acendem, outros não, com a mesma fonte de energia.
1. **Investigação 3 — Registro de Anomalias:** Coleta de dados qualitativos sobre situações inesperadas: sombras parciais, variações com a lanterna do celular, diferenças entre ambientes com mais ou menos luz.
1. **Retomada da Hipótese:** Análise crítica final para determinar se as predições iniciais foram *Confirmadas, Parciais ou Refutadas*, com justificativa baseada nos dados coletados.
1. **Escala de Experiência (NRS):** Avaliação quantitativa individual (escala numérica de 0 a 10) sobre a experiência geral da oficina.

-----

## 👥 Divisão de Funções em Equipe (Equidade de Gênero)

Para promover o engajamento ativo e inclusivo de todas (🎓 Estudantes na Ciência), a ficha de campo exige a rotação explícita de papéis técnicos:

- **Pesquisadora / Analista:** Lidera o registro das hipóteses, acompanha os resultados e orienta a equipe na interpretação dos dados.
- **Operadora Solar:** Posiciona e inclina a miniplaca solar em relação à fonte de luz, testando diferentes ângulos e distâncias.
- **Observadora de Circuito:** Monitora o comportamento do LED (intensidade, estabilidade, apagamento) e comunica as observações à registradora.
- **Programadora:** Gerencia o código na micro:bit e realiza as substituições de LEDs durante as investigações.

-----

## ☀️ Estrutura Detalhada das Aulas (Guia do Professor)

A oficina está organizada em **2 Aulas de 50 minutos**:

### 💻 Aula 1 — Construção do Circuito e Primeiros Testes (50 min)

- **Momento 1 — Provocação Científica (10 min):** Discussão sobre energia solar no cotidiano (placas em telhados, calculadoras solares, satélites). Apresentação do efeito fotovoltaico de forma acessível: “como a luz vira eletricidade?”. Apresentação da miniplaca solar e dos LEDs como instrumentos de investigação.
- **Momento 2 — Montagem do Circuito e Programação (25 min):** Conexão da miniplaca solar aos pinos da micro:bit via cabos jacaré e jumper. Programação no MakeCode para leitura dos pinos e controle dos LEDs. Transferência do código e verificação do funcionamento básico.
- **Momento 3 — Primeiros Testes e Hipóteses (15 min):** Teste inicial do circuito com diferentes fontes de luz (luz natural, lanterna do celular, lâmpada). Distribuição das funções na equipe e preenchimento da hipótese inicial na ficha.

### 🔬 Aula 2 — Investigações, Análise e Conclusão (50 min)

- **Momento 1 — Investigação do Ângulo (15 min):** Teste sistemático de diferentes inclinações da placa solar. Registro dos resultados na tabela da ficha investigativa.
- **Momento 2 — Investigação dos LEDs (20 min):** Substituição dos LEDs e registro comparativo. Discussão sobre tensão de limiar e por que LEDs de cores diferentes têm comportamentos distintos.
- **Momento 3 — Conclusão, Anomalias e NRS (15 min):** Discussão coletiva sobre os resultados, retomada das hipóteses e preenchimento da avaliação NRS. O professor media a pergunta central: “para onde foi a energia luminosa que não acendeu o LED?”

-----

## 🧰 Planejamento e Materiais (Suporte ao Professor)

### Materiais Necessários:

- **Kits micro:bit (1 por equipe):** Placa micro:bit (V2 recomendada), cabo USB, case de bateria e 2 pilhas AAA.
- **Computadores/Notebooks (1 por equipe):** Com acesso à internet para uso da plataforma online do MakeCode.
- **Fichas de Investigação:** 1 cópia impressa por equipe. Guia do Professor: uso do professor.
- **Miniplaca solar 3V (1 por equipe):** R$50/kit com 5 unidades.
- **LEDs coloridos (1 de cada cor por equipe):** R$0,40/unidade.
- **Mini protoboard (1 por equipe):** R$30/kit com 6 unidades.
- **Cabos jumper (4 por equipe):** R$20/kit com 40 cabos.
- **Cabos jacaré (3 por equipe):** R$20/kit com 10.
- **Apoio para fichas** (prancheta ou caderno), canetas ou lápis.

> **Custo estimado (junho de 2026):** R$ 13,00 por equipe, considerando reuso dos componentes eletrônicos em outras turmas. Recomenda-se a organização de 4 equipes.

### ⚠️ Preparação Prévia Recomendada:

Monte o protótipo antes da aula e teste em ambientes com diferentes condições de iluminação. Dê preferência a ambientes mais escuros — o contraste entre LED aceso e apagado é mais evidente. A lanterna do celular funciona muito bem como fonte de luz controlável. Verifique previamente quais LEDs acendem com a placa solar que você tem: há variação entre cores e fabricantes.

-----

## 📊 Critérios de Avaliação (Rubrica de 15 Pontos)

O Guia do Professor estabelece uma rubrica de avaliação formativa baseada em 5 critérios (de 1 a 3 pontos cada):

1. **Montagem do Circuito:** Avalia a qualidade e autonomia na conexão da miniplaca solar, LEDs e cabos ao micro:bit — conexões corretas, estáveis e funcionais.
1. **Execução das Investigações:** Avalia a sistematicidade dos testes — se a equipe variou os ângulos e LEDs de forma organizada, registrando cada situação.
1. **Investigação (Ficha de Campo):** Avalia a qualidade científica das hipóteses, o preenchimento das tabelas e a coerência entre os dados observados e a retomada da hipótese.
1. **Trabalho em Equipe:** Avalia a cooperação, a divisão equitativa de funções e o revezamento prático de papéis técnicos.
1. **Análise dos Resultados:** Avalia a capacidade de relacionar o comportamento dos LEDs ao conceito de conversão de energia e ao efeito fotovoltaico, com linguagem acessível e baseada em evidências.

-----

## ⚠️ Erro Controlado

Nesta oficina, um LED que não acende não deve ser observado somente como uma falha — ele pode se tornar o dado mais importante da investigação. A pergunta “por que este não acendeu?” conduz as estudantes à compreensão de tensão de limiar, perdas energéticas e eficiência fotovoltaica. O circuito imperfeito é mais valioso pedagogicamente do que um circuito que funciona perfeitamente na primeira tentativa. Instigue a curiosidade antes de oferecer explicações.

-----

## 📂 Arquivos do Repositório

### 📁 Pasta `Oficina_03_Fisica_Circuitos_Placas_Solares`

- **`Oficina03_Guia_Professor.pdf`**: Documento de planejamento pedagógico passo a passo, com cronograma detalhado, orientações de montagem, competências curriculares e critérios de avaliação.
- **`Oficina03_Ficha_Investigativa.pdf`**: Diário de bordo das investigações, com tabelas para registro de ângulos, cores de LEDs e comportamento do circuito.
- **`Oficina03_painel_solar.js`**: Código-fonte em JavaScript para leitura dos pinos analógicos e controle dos LEDs via micro:bit.
- **`README.md`**: Este guia rápido de orientação da oficina.

-----

## 📎 Créditos e Inspiração

O código JavaScript e os materiais pedagógicos (Guia do Professor e Ficha Investigativa) são de autoria original do projeto **Meninas nas Exatas / UFRJ**.

-----

## 💻 Código do Circuito Solar (JavaScript)

```javascript
// O laço "forever" garante a leitura contínua.
// Além do feedback visual na matriz de LEDs (opcional),
// enviamos o dado bruto via Serial para o computador.

basic.forever(function () {
    // 1. Leitura do pino P0 (variando de 0 a 1023)
    let leitura = pins.analogReadPin(AnalogPin.P0)

    // 2. Envio para a Porta Serial (USB)
    // O comando "writeValue" é fundamental para a Ciência de Dados.
    // O MakeCode interpreta esse comando e gera um gráfico de linha 
    // em tempo real na aba "Show console Device".
    serial.writeValue("tensao", leitura)

    // 3. Feedback visual (Mantém o gráfico de barras na matriz de LEDs)
    led.plotBarGraph(leitura, 1023)
    // Pequena pausa (100ms) para não saturar a buffer serial 
    // e estabilizar o tempo de coleta (amostragem a 10Hz).
    basic.pause(100)
})
```

---

## 📄 Licença

Este material faz parte do repositório [Oficinas de Robótica Educacional com BBC Micro:bit](https://github.com/bjnobrega/oficinas-robotica-microbit) e está disponível sob **MIT License**. Consulte o arquivo LICENSE na raiz do repositório.
