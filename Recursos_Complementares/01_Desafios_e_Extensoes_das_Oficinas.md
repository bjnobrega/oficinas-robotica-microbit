# Desafios de Extensão e Aprofundamento das Oficinas

Este documento reúne sugestões de **desafios extras, expansões de código e ampliações investigativas** para serem aplicados com estudantes que concluem as missões principais com facilidade ou para projetos de feira de ciências e clubes de robótica.

---

## 🔌 Oficina 00 — Formação de Multiplicadoras
**Conceito Extensão:** Cronometria de Precisão e Lógica Avançada de Eventos

### Desafio Extra 1 — Cronômetro de Reflexos em Milissegundos
- **Objetivo:** Transformar o Jogo de Reação (Capítulo 4) em um medidor quantitativo do tempo de resposta (em milissegundos).
- **Lógica no MakeCode:**
  - Criar uma variável `tempo_inicial` ao disparar o sinal (LED aceso).
  - Usar o bloco `tempo de execução (ms)` (`input.runningTime()`) para salvar o momento exato do sinal.
  - Ao pressionar o pad de alumínio (pino P1 ou P2), registrar `tempo_final = input.runningTime()`.
  - Exibir a diferença: `tempo_resposta = tempo_final - tempo_inicial`.
- **Investigação:** As estudantes comparam os tempos de resposta com a mão dominante vs. mão não dominante, ou sob estresse auditivo (música ambiente).

---

## 🧭 Oficina 01 — Bússola Digital e Telemetria
**Conceito Extensão:** Declinação Magnética e Indicador Sonoro de Orientação

### Desafio Extra 2 — Bússola Cega com Feedback Sonoro (Inclusão e Acessibilidade)
- **Objetivo:** Programar o Micro:bit para emitir um tom sonoro diferenciado quando o dispositivo apontar para o **Norte Magnético**, permitindo a navegação por pessoas com deficiência visual.
- **Lógica no MakeCode:**
  - Se a direção estiver entre $345^\circ$ e $15^\circ$, o buzzer embutido (ou pino P0 com fone de ouvido) toca uma frequência aguda constante (`880 Hz`).
  - Se estiver fora da faixa, o som permanece em silêncio ou emite um bipe grave intercalado.
- **Investigação:** Propor uma expedição de "navegação vendada", na qual a dupla navega no pátio da escola orientando-se exclusivamente pelo feedback sonoro da placa.

---

## 🧪 Oficina 02 — Data Logger de Temperatura
**Conceito Extensão:** Alarme de Segurança Térmica e Automação de Amostragem

### Desafio Extra 3 — Monitor de Segurança para Reações Exotérmicas
- **Objetivo:** Adicionar uma trava de segurança visual e sonora no Data Logger Térmico para alertar a equipe caso a reação exotérmica ultrapasse uma temperatura crítica (ex: $40^\circ\text{C}$).
- **Lógica no MakeCode:**
  - Dentro do laço `forever`, ler a temperatura da sonda DS18B20 (`temp`).
  - Se `temp > 40`, piscar o ícone de caveira/alerta na matriz de LEDs e acionar um bipe de emergência.
  - Enviar simultaneamente via porta serial o rótulo `"ALERTA_TEMPERATURA"`.
- **Investigação:** Investigar o conceito de **reações fora de controle (*runaway reactions*)** na indústria química e a importância dos sistemas de desligamento automático de emergência (ESD).

---

## ☀️ Oficina 03 — Energia Solar & Circuitos Responsivos
**Conceito Extensão:** Rastreador Solar Automatizado (*Single-Axis Solar Tracker*)

### Desafio Extra 4 — Servomotor Orientador de Placa Fotovoltaica
- **Objetivo:** Usar dois sensores LDR (ou a leitura diferencial da matriz de LEDs) para controlar um servomotor de 180° que inclina a miniplaca solar automaticamente em direção à fonte de luz mais intensa.
- **Lógica no MakeCode:**
  - Ler LDR_Esquerda (pino P1) e LDR_Direita (pino P2).
  - Se `LDR_Esquerda > LDR_Direita + margem`, girar o servo (pino P8) $5^\circ$ para a esquerda.
  - Se `LDR_Direita > LDR_Esquerda + margem`, girar o servo $5^\circ$ para a direita.
- **Investigação:** Comparar a geração de energia acumulada ao longo do dia em uma placa fixa vs. uma placa com rastreamento automatizado.

---

## 🚀 Oficina 04 — Foguete d'Água & Telemetria
**Conceito Extensão:** Registro de Apogeu e Cálculo Empírico da Força G Máxima

### Desafio Extra 5 — "Caixa Preta" de Apogeu e Registrador de Pico
- **Objetivo:** Fazer a placa embarcada no foguete memorizar e exibir na tela o valor máximo de aceleração atingido durante o voo, mesmo que o sinal de rádio sofra oscilação.
- **Lógica no MakeCode:**
  - Criar a variável `max_aceleracao = 0`.
  - A cada leitura do acelerômetro no eixo Z (`acel_atual`):
    - Se `acel_atual > max_aceleracao`, atualizar `max_aceleracao = acel_atual`.
  - Ao pressionar o Botão A na placa que retornou do pouso, exibir na tela o valor armazenado em `max_aceleracao`.
- **Investigação:** Comparar o pico de aceleração em lançamentos com diferentes volumes de água (ex: 1/3 da garrafa vs. 1/2 da garrafa) e diferentes pressões de bomba (40 PSI vs. 60 PSI).
