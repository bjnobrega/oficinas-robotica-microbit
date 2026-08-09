# Oficina 00 — Formação de Multiplicadoras: Fundamentos de Eletrônica e Automação com Micro:bit

**Robótica Educacional com Micro:bit**

---

## 🎯 Objetivo Principal

O foco central desta oficina é a **formação de multiplicadoras** — estudantes que dominam os fundamentos práticos de eletrônica e programação com o BBC Micro:bit e se tornam capazes de ensinar e apoiar colegas nas oficinas subsequentes. Organizada em 4 capítulos progressivos, a oficina parte da compreensão da eletricidade básica (tensão, corrente e resistência), avança pela montagem do primeiro circuito em protoboard, introduz sensores inteligentes (LDR) com lógica condicional no MakeCode e culmina na construção de um **jogo de reação** que utiliza o corpo humano como condutor elétrico. A progressão é projetada para que, ao final do Capítulo 4, a multiplicadora tenha vivenciado todo o ciclo: teoria, hardware, software e aplicação lúdica.

---

## 🔬 O Ciclo Investigativo (Baseado nos Cadernos de Formação)

A oficina orienta as estudantes por um ciclo de aprendizagem prática estruturado nos 4 Cadernos de Formação:

1. **Capítulo 1 — Entendendo a Eletricidade:** Compreensão dos três pilares (Tensão, Corrente, Resistência) através de analogias visuais com água e canos. Conhecimento dos componentes físicos (protoboard, resistor, LED, multímetro). Desafio 1: mapeamento das trilhas internas da protoboard com o multímetro no modo continuidade.
2. **Capítulo 2 — Acendendo a Primeira Luz:** Conceito de circuito aberto vs. fechado. Desafio 2: montagem do primeiro circuito (Bateria → Resistor 220Ω → LED). Desafio 3: inserção do push button como interruptor físico. Desafio 4: substituição do botão pelo Micro:bit — a "ponte para o cérebro digital" — controlando o LED via MakeCode (`gravar pino P0 → 1/0`).
3. **Capítulo 3 — Ensinando o Robô a Sentir:** Introdução ao sensor LDR (fotorresistor) e ao divisor de tensão como "gangorra de energia". Lógica condicional SE/SENÃO no MakeCode. Desafio 5: criação do Alarme de Escuridão automático — o Micro:bit lê a luz ambiente pelo Pino P1 e acende o LED quando o valor cai abaixo do ponto de corte calibrado pela equipe.
4. **Capítulo 4 — O Desafio Final (Jogo de Reação):** Construção de um jogo competitivo para duas jogadoras usando pads de alumínio e cabos jacaré. O corpo humano fecha o circuito capacitivo entre os pinos P1/P2 e o GND. O código utiliza variáveis booleanas (`liberado`), eventos de toque (`onPinPressed`), pausa aleatória (`randint`) e condicionais para premiar ou punir.
5. **Levantamento e Retomada de Hipóteses:** Em cada capítulo, as multiplicadoras formulam previsões antes dos desafios e confrontam com os resultados reais.
6. **Questões de Fixação:** Verificações rápidas (V ou F, lacunas, múltipla escolha, cruzadinhas) integradas aos cadernos.
7. **Autoavaliação e Escala NRS:** Avaliação quantitativa individual ao final da formação.

---

## 👥 Divisão de Funções em Equipe (Equidade de Gênero)

Para promover o engajamento ativo e inclusivo de todas (🎓 Estudantes na Ciência), os cadernos de formação exigem a rotação explícita de papéis técnicos:

- **Programadora Principal:** Opera o MakeCode no computador e monta a lógica visual em blocos ou JavaScript.
- **Engenheira de Hardware:** Gerencia a conexão física na protoboard, cabos jumper e jacaré, alimentação por bateria e posicionamento dos componentes.
- **Relatora / Pesquisadora:** Documenta as observações, registra dados, conduz os testes de hipóteses e preenche as questões de fixação nos cadernos.

---

## 🧪 Estrutura Detalhada das Aulas (Guia da Facilitadora)

A oficina está organizada em **4 encontros de ~90 minutos** (1 por capítulo):

### ⚡ Encontro 1 — Entendendo a Eletricidade (Cap. 1)

- **Momento 1 — Os 3 Pilares (20 min):** Apresentação de Tensão (Volts), Corrente (Amperes) e Resistência (Ohms) com analogias de água. Regra de Ouro: por que existe o resistor?
- **Momento 2 — Conhecendo as Peças (30 min):** Exploração física da protoboard, resistores (leitura de faixas), LEDs (polaridade: perna longa = anodo), push button e multímetro (modo continuidade/apito).
- **Momento 3 — Desafio 1: Raio-X da Protoboard (30 min):** Mapeamento das trilhas internas com multímetro. Verificação rápida V ou F.
- **Momento 4 — Fechamento (10 min):** Checklist de materiais e reflexão.

### 💡 Encontro 2 — Acendendo a Primeira Luz (Cap. 2)

- **Momento 1 — Circuito Aberto vs. Fechado (15 min):** Conceito do push button como comporta. Demonstração visual dos dois estados.
- **Momento 2 — Desafios 2 e 3 (30 min):** Montagem do primeiro circuito (Bateria → Resistor → LED) e inserção do interruptor físico.
- **Momento 3 — O Cérebro Digital (25 min):** Introdução à placa Micro:bit (GND, P0, P1). Desafio 4: controlar o LED pelo MakeCode com `gravar pino P0 → 1` (aceso) e `gravar pino P0 → 0` (apagado).
- **Momento 4 — Questões de Fixação (20 min):** Complete as lacunas e questão aberta sobre circuito.

### ☀️ Encontro 3 — Ensinando o Robô a Sentir (Cap. 3)

- **Momento 1 — Sensor LDR (20 min):** O que é o fotorresistor, como o Micro:bit "enxerga" a luz (valores 0–1023) e o conceito de divisor de tensão (gangorra de energia).
- **Momento 2 — Lógica SE/SENÃO no MakeCode (25 min):** Construção do algoritmo condicional. Analogia: SE chovendo → abro guarda-chuva; SENÃO → deixo fechado.
- **Momento 3 — Desafio 5: Alarme de Escuridão (30 min):** Calibração em duas fases (descobrir o ponto de corte e programar a lógica). Montagem do divisor de tensão com LDR + 10kΩ.
- **Momento 4 — Glossário, V ou F e Cruzadinha (15 min):** Mini glossário rápido (Anodo, GND, VCC, Digital, Analógico, Calibrar) e desafio bônus da palavra oculta.

### 🏆 Encontro 4 — O Desafio Final: Jogo de Reação (Cap. 4)

- **Bloco 1 — Investigação e Hardware (30 min):** Levantamento de hipóteses ("O corpo conduz energia?"), construção dos pads de papelão + alumínio, fiação com cabos jacaré (GND → pad central, P1 → pad lateral A, P2 → pad lateral B).
- **Bloco 2 — Lógica e Jogo (30 min):** Transferência do código JavaScript para o MakeCode. As duplas começam a competir. Análise de falsos arranques e controle inibitório.
- **Bloco 3 — Extensão e Partilha (30 min):** Debate sobre hardware vs. software, desafio para alterar tempos ou sons do jogo, roda de conversa final e encerramento.

---

## 🧰 Planejamento e Materiais (Suporte à Facilitadora)

### Materiais Necessários:

- **Kits Micro:bit (1 por equipe):** Placa Micro:bit (V2 recomendada — possui buzzer embutido), cabo USB, case de bateria e 2 pilhas AAA.
- **Computadores/Notebooks (1 por equipe):** Com acesso à internet para uso da plataforma online do MakeCode.
- **Cadernos de Formação (Capítulos 1 a 4):** 1 cópia impressa por equipe (arquivos HTML otimizados para impressão A4).
- **Mini protoboard (1 por equipe).**
- **LEDs coloridos (variados).**
- **Resistores 220Ω** (proteção de LED) e **Resistores 10kΩ** (divisor de tensão com LDR).
- **Sensor LDR (fotorresistor):** 1 por equipe.
- **Push button:** 1 por equipe.
- **Multímetro:** 1 por equipe (modo continuidade/apito).
- **Cabos jumper** (kit por equipe) e **cabos jacaré** (3 por equipe).
- **Suporte de pilha 3V** (para os circuitos sem Micro:bit nos Caps 1–2).
- **Papelão, papel alumínio e fita dupla face** (para os pads do Jogo de Reação no Cap 4).

### ⚠️ Preparação Prévia Recomendada:

Monte cada desafio você mesmo antes da formação — especialmente o Desafio 5 (calibração do LDR, que varia conforme a iluminação do ambiente) e o Jogo de Reação (verifique se os cabos jacaré não estão oxidados e se o alumínio faz bom contato). Separe os materiais por equipe em kits individuais antes do início. Garanta acesso ao MakeCode (online ou offline via app). Para a Micro:bit V1, os sons do jogo exigem fones de ouvido conectados ao pino P0.

---

## 📊 Critérios de Avaliação (Rubrica de 15 Pontos)

O Guia da Facilitadora estabelece uma rubrica de avaliação formativa baseada em 5 critérios (de 1 a 3 pontos cada):

1. **Compreensão dos Fundamentos:** Avalia a capacidade de identificar e explicar os três pilares da eletricidade (Tensão, Corrente, Resistência), a função do resistor e a polaridade do LED.
2. **Montagem de Circuitos:** Avalia a qualidade e autonomia na montagem dos circuitos em protoboard — do circuito básico (Cap 2) ao divisor de tensão com LDR (Cap 3) e ao circuito humano (Cap 4).
3. **Programação no MakeCode:** Avalia a capacidade de construir e transferir algoritmos — desde o controle direto do pino P0 até a lógica condicional SE/SENÃO e o jogo com eventos e variáveis booleanas.
4. **Trabalho em Equipe:** Avalia a cooperação, a divisão equitativa de funções e o revezamento prático de papéis técnicos.
5. **Investigação e Registro:** Avalia a qualidade do registro nos cadernos, o preenchimento das hipóteses, as questões de fixação e a coerência na retomada das hipóteses com base nos resultados dos desafios.

---

## ⚠️ Erro Controlado

Nesta oficina, o LED que não acende por estar invertido, o multímetro que não apita porque o furo da protoboard não está na trilha correta, o sensor LDR que dá leituras inesperadas porque o ambiente está claro demais — nada disso deve ser corrigido de imediato. Cada erro é um **dado para investigação**, não um problema a ser eliminado. A multiplicadora que aprende a diagnosticar por que o circuito não funciona está desenvolvendo a competência mais valiosa da robótica educacional: a **resiliência técnica**. Quando ela for aplicar as Oficinas 01 a 04 com suas colegas, precisará exatamente dessa capacidade de auditar, testar e resolver.

---

## 📂 Arquivos do Repositório

### 📁 Pasta `Oficina_00_Formacao_Multiplicadoras`

- **`Oficina00_Cap1_Fundamentos_Eletricidade.pdf`**: Caderno de Formação impresso — Capítulo 1. Conceitos de eletricidade, componentes eletrônicos e Desafio 1 (Raio-X da Protoboard).
- **`Oficina00_Cap2_Acendendo_Primeira_Luz.pdf`**: Caderno de Formação impresso — Capítulo 2. Circuito aberto/fechado, Desafios 2, 3 e 4, introdução à Micro:bit e controle digital de LED.
- **`Oficina00_Cap3_Ensinando_Robo_Sentir.pdf`**: Caderno de Formação impresso — Capítulo 3. Sensor LDR, divisor de tensão, lógica SE/SENÃO e Desafio 5 (Alarme de Escuridão Automático).
- **`Oficina00_Cap4_Desafio_Final_Jogo_Reacao.pdf`**: Caderno de Formação impresso — Capítulo 4. Jogo de Reação com circuito humano, código completo, guia da facilitadora e troubleshooting.
- **`Cap1_Entendendo_Eletricidade.html`**: Versão HTML responsiva do Capítulo 1, otimizada para impressão A4 ou salvamento em PDF pelo navegador.
- **`Cap2_Primeira_Luz.html`**: Versão HTML responsiva do Capítulo 2, otimizada para impressão A4.
- **`Cap3_Robo_Sente.html`**: Versão HTML responsiva do Capítulo 3, otimizada para impressão A4.
- **`Cap4_Desafio_Final.html`**: Versão HTML responsiva do Capítulo 4, otimizada para impressão A4.
- **`Oficina00_JogoReacao.js`**: Código-fonte em JavaScript do Jogo de Reação (Capítulo 4) — variável `liberado`, eventos `onPinPressed`, pausa aleatória e sistema de punição.
- **`Oficina00_AlarmeLuz.js`**: Código-fonte em JavaScript do Alarme de Escuridão (Capítulo 3) — leitura analógica do LDR e controle condicional do LED.
- **`assets/`**: Imagens de apoio referenciadas nos cadernos HTML (diagramas de circuito, protoboard, polaridade do LED, placa Micro:bit, circuito humano, blocos MakeCode).
- **`README.md`**: Este guia de orientação da oficina.

---

## 📎 Créditos e Inspiração

O código JavaScript e os materiais pedagógicos (Cadernos de Formação) são de autoria original do projeto **Meninas nas Exatas / UFRJ**.

O Jogo de Reação (Capítulo 4) foi inspirado no projeto:
- [Reaction Game](https://makecode.microbit.org/projects/reaction-time) — Microsoft MakeCode / Micro:bit Educational Foundation

---

## 💻 Código do Jogo de Reação — Capítulo 4 (JavaScript)

```javascript
// ── JOGO DE REAÇÃO · micro:bit ──
let liberado = false // 'Semáforo'

// Árbitro: Prepara a rodada
input.onButtonPressed(Button.A, function () {
    liberado = false // Bloqueia toques no início
    basic.showIcon(IconNames.Square)
    // Pausa surpresa 2 a 5s
    basic.pause(randint(2000, 5000))
    // SINAL!
    liberado = true // Libera para ganhar ponto
    basic.showIcon(IconNames.Yes)
    music.playTone(880, 250)
    basic.pause(4000)
    liberado = false
    basic.clearScreen()
})

// Jogadora A (Pino P1)
input.onPinPressed(TouchPin.P1, function () {
    if (liberado == true) {
        liberado = false
        basic.showString("A")
        music.playMelody("C5 B A G ", 300)
    } else {
        basic.showIcon(IconNames.No)
        music.playTone(175, 250)
    }
})

// Jogadora B: Duplicar o bloco acima,
// trocar P1 para P2 e "A" para "B".
input.onPinPressed(TouchPin.P2, function () {
    if (liberado == true) {
        liberado = false
        basic.showString("B")
        music.playMelody("C5 B A G ", 300)
    } else {
        basic.showIcon(IconNames.No)
        music.playTone(175, 250)
    }
})
```

## 💻 Código do Alarme de Escuridão — Capítulo 3 (JavaScript)

```javascript
let Luz = 0

basic.forever(function () {
    // Lê o valor analógico do sensor LDR no Pino P1 (0 a 1023)
    Luz = pins.analogReadPin(AnalogPin.P1)

    // SE está escuro, acende o LED; SENÃO, apaga
    if (Luz < 500) {
        // Está escuro! Acende o LED no Pino P0
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else {
        // Tem luz! Apaga o LED
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
```

> ⚠️ O valor **500** é o ponto de corte padrão. Cada equipe deve calibrar esse valor conforme a iluminação do ambiente — consulte a Fase 1 (Calibragem) no Capítulo 3.

---

## 📄 Licença

Este material faz parte do repositório [Oficinas de Robótica Educacional com BBC Micro:bit](https://github.com/bjnobrega/oficinas-robotica-microbit) e está disponível sob **MIT License**. Consulte o arquivo LICENSE na raiz do repositório.
