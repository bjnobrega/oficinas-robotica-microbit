# Oficina 1 — Investigação de Campos Magnéticos com Micro:bit
**Robótica Educacional com Micro:bit**

---

## 🎯 Objetivo Principal

O foco central desta oficina é a **investigação científica por meio da formulação de hipóteses, experimentação ativa e análise de dados de sensores**. Utilizando o magnetômetro (sensor de campo magnético) do BBC Micro:bit, os estudantes investigam a ação de perturbações eletromagnéticas e anomalias provocadas por **ímãs de neodímio** e metais. A programação da bússola digital e a dinâmica prática de navegação (caça ao tesouro) são aplicações secundárias de engenharia e matemática usadas para testar e validar o comportamento do sensor no ambiente real.

---

## 🔬 O Ciclo Investigativo (Baseado nas Fichas de Campo)

Em vez de focar apenas no funcionamento da bússola, a oficina orienta os estudantes por um ciclo de investigação científica estruturado na **Ficha de Investigação**:

1.  **Formulação de Hipóteses:** Antes de realizar os testes físicos, os estudantes registram por escrito o que preveem que acontecerá ao aproximar um ímã de neodímio do sensor e se a indicação do Micro:bit se alinhará com a bússola de um celular.
2.  **Investigação 1 (O Efeito do Ímã):** Aproximação lenta do ímã de neodímio para observar e documentar o desvio das letras exibidas na tela de LEDs da placa Micro:bit e a recuperação de dados ao afastar o ímã.
3.  **Investigação 2 (Micro:bit vs. Smartphone):** Comparação em tempo real do alinhamento do Norte magnético entre o Micro:bit e um aplicativo de bússola digital no celular.
4.  **Validação em Campo (Navegação):** Execução de uma rota de navegação com direções cardeais e contagem rigorosa de passos no espaço da escola.
5.  **Diário de Bordo & Registro de Anomalias:** Coleta de dados qualitativos sobre desvios causados pela infraestrutura escolar (portões, grades, fiação elétrica).
6.  **Retomada da Hipótese:** Análise crítica final para determinar se as predições iniciais foram *Confirmadas, Parciais ou Refutadas*.
7.  **Escala de Experiência (NRS):** Avaliação quantitativa individual (escala numérica de 0 a 10) sobre a experiência geral da oficina.

---

## 👥 Divisão de Funções em Equipe (Equidade de Gênero)

Para promover o engajamento ativo e inclusivo de todos (`🎓 Estudantes na Ciência`), a ficha de campo exige a rotação explícita de papéis técnicos:
*   **Pesquisador(a) / Analista:** Lidera as hipóteses, acompanha a leitura de dados na ficha e compara o sensor com a bússola do celular.
*   **Navegador(a):** Segura o Micro:bit na horizontal e garante o alinhamento da direção (N, S, L, O).
*   **Escoteiro(a):** Executa o trajeto contando os passos rigorosamente.

---

## 🧭 Estrutura Detalhada das Aulas (Guia do Professor)

A oficina está organizada em **2 Aulas de 50 minutos** estruturadas nos seguintes momentos didáticos:

### 💻 Aula 1 — Construção da Bússola Digital (50 min)
*   **Momento 1 — Provocação Científica (10 min):** Discussão sobre a história da orientação espacial (navegadores antigos), o campo magnético invisível da Terra e apresentação do magnetômetro do Micro:bit.
*   **Momento 2 — Programação no MakeCode (25 min):** Construção do algoritmo em blocos lógicos usando estruturas condicionais encadeadas (`se / senão se`) para converter as leituras de graus ($0^{\circ}$ a $359^{\circ}$) em pontos cardeais básicos (N, S, L, O).
*   **Momento 3 — Calibração, Papéis e Hipótese (15 min):** Processo físico de calibração (*TILT TO FILL SCREEN*), distribuição de funções na equipe e preenchimento da hipótese inicial na Ficha de Investigação.

### 🔬 Aula 2 — Investigação, Expedição e Conclusão (50 min)
*   **Momento 1 — Investigações Práticas (15 min):** Teste de interferência direta com o ímã de neodímio, comparação de alinhamento com a bússola de smartphones e sistematização teórica rápida sobre forças magnéticas locais.
*   **Momento 2 — Missão Caça ao Tesouro (20 min):** Deslocamento prático dos grupos com intervalos coordenados pelo professor. Os alunos seguem a rota da ficha e aplicam o método de recalibração diante de barreiras ou estruturas de ferro.
*   **Momento 3 — Conclusão, Autoavaliação e NRS (15 min):** Discussão em sala sobre desvios e interferências, preenchimento do campo de retomada da hipótese e registro da avaliação na escala NRS (0 a 10).

---

## 🧰 Planejamento e Materiais (Suporte ao Professor)

### Materiais Necessários:
*   **Kits Micro:bit (1 por grupo):** Placa Micro:bit (V2 recomendada), cabo USB, case de bateria e 2 pilhas AAA.
*   **Computadores/Notebooks (1 por grupo):** Com acesso à internet para uso da plataforma online do MakeCode.
*   **Fichas de Investigação de Campo:** 1 cópia impressa por grupo.
*   **Ímãs de Neodímio (1 a 3 para a turma):** Utilizados no teste prático de indução de anomalias no sensor.
*   **Recompensas ("Tesouros"):** Balas, doces ou lembranças escondidas nos destinos finais definidos pelo professor.

### ⚠️ Preparação Prévia Recomendada:
Antes de iniciar a Aula 2, o professor deve caminhar pela escola e mapear de 2 a 5 trajetos (ex: da sala de aula ao refeitório, biblioteca ou pátio) utilizando apenas pontos cardeais e passos como métrica de distância. Esses trajetos devem ser anotados à mão na tabela de rota das fichas dos alunos antes da distribuição, personalizando o desafio para a arquitetura local.

---

## 📊 Critérios de Avaliação (Rubrica de 15 Pontos)

O Guia do Professor estabelece uma rubrica de avaliação formativa baseada em 5 critérios (de 1 a 3 pontos cada):

1.  **Construção Lógica (Algoritmo):** Avalia a autonomia na montagem das condicionais de graus no MakeCode e transferência do código.
2.  **Leitura do Instrumento:** Avalia a postura física de manuseio do Micro:bit (placa na horizontal) e a realização correta da calibração inicial.
3.  **Investigação (Ficha de Campo):** Avalia a qualidade científica do registro das hipóteses, preenchimento das medições e coerência na retomada da hipótese.
4.  **Trabalho em Equipe:** Avalia a cooperação, divisão equitativa de funções e o revezamento prático de tarefas técnicas.
5.  **Resiliência na Missão:** Avalia a postura frente a anomalias do sensor, buscando recalibrações ou análise lógica do ambiente em vez da desistência.

---

## ⚠️ Erro Controlado

Nesta expedição, o ruído dos dados físicos provocado pela estrutura do ambiente (grades de metal, celulares, concreto armado) não deve ser considerado somente uma falha, mas deve ser interpretado como parte do fazer científico, sendo o **centro do processo de ensino-aprendizagem**. Os alunos deixam de ser simples consumidores passivos de informação e passam a agir como pensadores de fato, auditando as respostas dos sensores digitais e compreendendo a importância da calibração, interferências e do isolamento magnético.

---

## 📂 Arquivos do Repositório

### 📁 Pasta `Oficina_01_Bussola_e_Telemetria`
*   **`Oficina01_Guia_Professor.pdf`**: Documento de planejamento pedagógico passo a passo, incluindo cronograma detalhado de momentos, competências curriculares e critérios de avaliação.
*   **`Oficina01_Ficha_Investigativa.pdf`**: Diário de bordo físico e roteiro de campo distribuído para preenchimento dos estudantes.
*   **`Oficina01_Bussola.js`**: Arquivo com o código-fonte em JavaScript para calibração e condicional de pontos cardeais.
*   **`README.md`**: Este guia rápido de orientação da oficina.

---

## 📎 Créditos e Inspiração

Esta oficina foi desenvolvida a partir da adaptação dos seguintes projetos de referência:

- [Bússola micro:bit](https://microbit.org/pt-br/projects/make-it-code-it/compass-bearing/) 
  — Micro:bit Educational Foundation
- [Compass](https://cardboard.lofirobot.com/compass-2/) 
  — Cardboard Robots (Maciej Wojnicki)

O código JavaScript e os materiais pedagógicos (Guia do Professor e Ficha 
Investigativa) são de autoria original do projeto Meninas nas Exatas / UFRJ.

---

## 💻 Código da Bússola (JavaScript)

```javascript
let graus = 0

// Calibração do sensor magnético (exibe a mensagem "TILT TO FILL SCREEN" na primeira execução)
input.calibrateCompass()

basic.forever(function () {
    // Leitura contínua da direção em graus (0 a 359)
    graus = input.compassHeading()
    
    // Lógica para determinar os 4 pontos cardeais
    if (graus < 45 || graus > 315) {
        basic.showString("N") // Norte (315° a 45°)
    } else if (graus < 135) {
        basic.showString("L") // Leste (45° a 135°)
    } else if (graus < 225) {
        basic.showString("S") // Sul (135° a 225°)
    } else {
        basic.showString("O") // Oeste (225° a 315°)
    }
})
```

---

## 📄 Licença

Este material faz parte do repositório [Oficinas de Robótica Educacional com BBC Micro:bit](https://github.com/bjnobrega/oficinas-robotica-microbit) e está disponível sob **MIT License**. Consulte o arquivo LICENSE na raiz do repositório.
