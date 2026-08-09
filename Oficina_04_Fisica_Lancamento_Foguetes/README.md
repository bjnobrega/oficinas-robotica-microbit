# Oficina 04 — Foguete de Garraga PET com Telemetria: Física e Robótica em Voo
**Robótica Educacional com Micro:bit**

---

## 🎯 Objetivo Principal

Esta é a oficina mais desafiadora e mais recompensadora da sequência. Utilizando duas placas BBC micro:bit em comunicação via rádio, as estudantes instrumentam um foguete d'água para transmitir dados de aceleração (força G) em tempo real para uma estação de solo durante o voo. A placa embarcada no foguete coleta dados do acelerômetro e os envia via rádio; a placa receptora em solo exibe os dados e gera gráficos em tempo real no MakeCode. Ao final, os dados podem ser exportados e analisados em planilhas eletrônicas. Conceitos como força G, empuxo, trajetória e velocidade deixam de ser abstratos e passam a ter forma de curva no gráfico.

---

## 🔬 O Ciclo Investigativo (Baseado nas Fichas de Campo)

A oficina orienta as estudantes por um ciclo de investigação científica estruturado na Ficha de Investigação:

1. **Formulação de Hipóteses:** As estudantes registram previamente o que esperam observar nos dados de aceleração durante as fases do voo — lançamento, subida, apogeu e queda.
2. **Programação Dual:** Construção e transferência de dois códigos distintos — o da placa embarcada (emissora de dados via rádio) e o da placa receptora (estação de solo).
3. **Testes em Sala:** Antes do lançamento externo, a equipe testa as funções de rádio e acelerômetro em sala: joga a placa para cima, inventa desafios, verifica a comunicação entre as duas placas.
4. **Montagem do Foguete:** Instalação da placa embarcada protegida por espuma no interior do foguete d'água. Verificação das conexões e da bateria antes do fechamento.
5. **Lançamento e Coleta de Dados:** Execução do lançamento com a equipe em posições definidas. A placa receptora registra os dados de aceleração em tempo real durante o voo.
6. **Análise dos Dados:** Exportação do gráfico e análise em planilha eletrônica. Identificação das fases do voo na curva de aceleração.
7. **Retomada da Hipótese:** Análise crítica final para determinar se as predições iniciais foram *Confirmadas, Parciais ou Refutadas*, com justificativa baseada nos dados do gráfico.
8. **Escala de Experiência (NRS):** Avaliação quantitativa individual (escala numérica de 0 a 10) sobre a experiência geral da oficina.

---

## 👥 Divisão de Funções em Equipe (Equidade de Gênero)

Para promover o engajamento ativo e inclusivo de todas (🎓 Estudantes na Ciência), a ficha de campo exige a rotação explícita de papéis técnicos:

- **Programadora:** Responsável pela configuração e transferência dos códigos nas duas placas micro:bit. Verifica a comunicação via rádio antes do lançamento.
- **Operadora do Foguete:** Monta o foguete, instala a placa embarcada com proteção de espuma, pressuriza e executa o lançamento.
- **Controladora de Solo:** Opera a placa receptora durante o voo, monitora o gráfico em tempo real e sinaliza o início e fim da coleta.
- **Analista de Dados:** Registra as observações na ficha de investigação, exporta o gráfico e conduz a análise em planilha após o lançamento.

---

## 🚀 Estrutura Detalhada das Aulas (Guia do Professor)

A oficina está organizada em **2 Aulas de 50 minutos**:

### 💻 Aula 1 — Programação, Testes e Montagem (50 min)

- **Momento 1 — Provocação Científica (10 min):** Discussão sobre telemetria — como foguetes reais enviam dados durante o voo. Apresentação do conceito de força G e acelerômetro. Demonstração da comunicação via rádio entre duas micro:bits em sala.
- **Momento 2 — Programação Dual (25 min):** Construção e transferência dos dois códigos no MakeCode — placa emissora (embarcada no foguete) e placa receptora (estação de solo). Verificação da comunicação entre as placas e da leitura do acelerômetro.
- **Momento 3 — Testes em Sala e Montagem (15 min):** Testes práticos com as placas — jogar para cima, simular impactos, observar os dados no gráfico. Instalação da placa emissora com espuma no foguete. Distribuição das funções e preenchimento das hipóteses na ficha.

### 🔬 Aula 2 — Lançamento, Análise e Conclusão (50 min)

- **Momento 1 — Preparação e Lançamento (20 min):** Deslocamento para o espaço externo, posicionamento das equipes, pressurização do foguete e lançamento coordenado. A controladora de solo monitora o gráfico em tempo real durante o voo.
- **Momento 2 — Análise dos Dados (20 min):** Exportação do gráfico gerado, identificação das fases do voo na curva de aceleração e análise comparativa entre equipes.
- **Momento 3 — Conclusão e NRS (10 min):** Retomada coletiva das hipóteses, discussão sobre os conceitos físicos observados nos dados e preenchimento da avaliação NRS.

---

## 🧰 Planejamento e Materiais (Suporte ao Professor)

### Materiais Necessários:
- **2 kits micro:bit por equipe:** Placa micro:bit (V2 recomendada), cabo USB, case de bateria e 2 pilhas AAA — uma placa para o foguete, uma para a estação de solo.
- **Computadores/Notebooks (1 por equipe):** Com acesso à internet para uso da plataforma online do MakeCode.
- **Fichas de Investigação:** 1 cópia impressa por equipe. Guia do Professor: uso do professor.
- **Foguete d'água** (garrafa PET 2L + bocal de lançamento).
- **Espuma de proteção:** Para envolver a placa embarcada e amortecer o impacto do pouso.
- **Água** para pressurização do foguete.
- **Apoio para fichas** (prancheta ou caderno), canetas ou lápis.

### ⚠️ Preparação Prévia Recomendada:
Esta é a oficina que exige mais preparação prévia. Realize o lançamento de teste sozinho antes da aula para verificar o funcionamento do sistema de rádio e a fixação da placa no foguete. Defina o espaço de lançamento com antecedência — precisa de área aberta, sem obstáculos no trajeto de voo e com distância segura para os estudantes. Verifique a carga das baterias das duas placas antes de sair da sala.

---

## 📊 Critérios de Avaliação (Rubrica de 15 Pontos)

O Guia do Professor estabelece uma rubrica de avaliação formativa baseada em 5 critérios (de 1 a 3 pontos cada):

1. **Programação Dual:** Avalia a autonomia na construção e transferência dos dois códigos — emissora e receptora — e a verificação da comunicação via rádio antes do lançamento.
2. **Montagem e Segurança:** Avalia a qualidade da instalação da placa embarcada (proteção com espuma, fixação estável) e a atenção aos procedimentos de segurança no lançamento.
3. **Investigação (Ficha de Campo):** Avalia a qualidade científica das hipóteses, o registro das observações durante o voo e a coerência na retomada da hipótese com base nos dados do gráfico.
4. **Trabalho em Equipe:** Avalia a cooperação, a divisão equitativa de funções e a sincronização durante o lançamento e a coleta de dados.
5. **Análise dos Dados:** Avalia a capacidade de identificar as fases do voo na curva de aceleração e de relacionar os dados coletados aos conceitos de força G, empuxo e trajetória.

---

## ⚠️ Erro Controlado

Nesta oficina, nem tudo vai funcionar conforme o planejado — e este é exatamente o ponto. A placa pode não fixar bem na primeira tentativa, ser montada ao contrário, ter o canal setado de forma equivocada. O gráfico pode mostrar dados inesperados. O foguete pode voar numa direção diferente da prevista. Cada uma dessas situações é uma oportunidade de investigação real: o que aconteceu? Por quê? O que mudaria numa segunda tentativa? A resiliência diante do imprevisto é uma competência científica tão importante quanto acertar o experimento. É como se eu te dissesse que: "mais importante que a o destino, seria a viagem".

---

## 📂 Arquivos do Repositório

### 📁 Pasta `Oficina_04_Foguete_Telemetria`
- **`Oficina04_Guia_Professor.pdf`**: Documento de planejamento pedagógico passo a passo, com cronograma detalhado, orientações de segurança, montagem do foguete, competências curriculares e critérios de avaliação.
- **`Oficina04_Ficha_Investigativa.pdf`**: Diário de bordo do lançamento, com seções para hipóteses, registro das fases do voo, análise do gráfico e retomada da hipótese.
- **`Oficina04_codigo_foguete.js`**: Código-fonte em JavaScript para a placa embarcada no foguete — leitura do acelerômetro e envio de dados via rádio.
- **`Oficina04_codigo_radar.js`**: Código-fonte em JavaScript para a placa receptora em solo — recepção dos dados via rádio e geração do gráfico serial.
- **`mao-na-massa-foguetes.pdf`**: Apostila da AEB com tutoriais de construção de foguetes.
- **`tutorial-base-lancamento.pdf`**: Tutorial da UCS para confecção da base de lançamento.
- **`README.md`**: Este guia rápido de orientação da oficina.

---

## 📎 Créditos e Inspiração

Esta oficina foi desenvolvida a partir da adaptação dos seguintes projetos e materiais de referência:

**Vídeos:**
- [Science Experiments 08: Rocket Acceleration](https://www.youtube.com/watch?v=m9ntqxh8FvQ) — Microsoft MakeCode
- [Aprenda a fazer um Foguete de garrafa PET! Mauá na Prática](https://youtu.be/GBnMXap0Jwg) — Instituto Mauá de Tecnologia

**Materiais Educacionais:**
- [Mão na Massa - Foguetes](https://www.gov.br/aeb/pt-br/centrais-de-conteudo/publicacoes/material_educacional/apostilas-pdf/5mao-na-massa-foguetes.pdf) — Agência Espacial Brasileira (AEB)
- [Tutorial para a Confecção da Base de Lançamentos](https://www.ucs.br/site/midia/arquivos/tutorial-base-lancamento.pdf) — Universidade de Caxias do Sul (UCS)

O código JavaScript e os materiais pedagógicos (Guia do Professor e Ficha Investigativa) são de autoria original do projeto **Meninas nas Exatas / UFRJ**.

---

## 💻 Código da Placa Embarcada — Foguete (JavaScript)

let aceleracao_z = 0

// Configura a comunicação por rádio.
radio.setGroup(255)
radio.setTransmitPower(7)

// Configura o acelerômetro para medir até 8g.
input.setAccelerometerRange(AcceleratorRange.EightG)

// Indica que a placa está pronta.
basic.showIcon(IconNames.Yes)

// Realiza leituras contínuas do eixo Z.
basic.forever(function () {

  // Lê a aceleração no eixo Z.
  aceleracao_z = input.acceleration(Dimension.Z)

  // Envia o valor para a segunda Micro:bit.
  radio.sendValue("aceleracao_z", aceleracao_z)

  // Pequena pausa entre as leituras.
  basic.pause(20)
  })

## 💻 Código da Estação de Solo (JavaScript)

radio.onReceivedValue(function (name, value) {
  serial.writeValue(name, value)
  led.toggle(2, 2)
  })
radio.setGroup(255)
basic.showIcon(IconNames.Happy)

---

## 📄 Licença

Este material faz parte do repositório [Oficinas de Robótica Educacional com BBC Micro:bit](https://github.com/bjnobrega/oficinas-robotica-microbit) e está disponível sob **MIT License**. Consulte o arquivo LICENSE na raiz do repositório.
