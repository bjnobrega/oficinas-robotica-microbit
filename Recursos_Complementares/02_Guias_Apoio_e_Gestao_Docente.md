# Guia Prático de Gestão Docente e Manutenção de Hardware

Este documento oferece orientações logísticas, metodológicas e técnicas para professores e gestores escolares organizarem, conservarem e aplicarem os kits de robótica e insumos com turmas da educação básica.

---

## 📦 1. Gestão e Organização dos Kits na Escola Pública

### Organização dos Kits por Equipe (Caixas Organizadoras)
Para garantir a durabilidade e agilizar a montagem das aulas de 50 minutos:
- **Kits Individuais de Equipe:** Utilize caixas plásticas com divisórias (tipo caixa de pesca/parafusos — custo ~R$ 15/unidade).
- **Conteúdo Fixo de Cada Caixa (Identificada por Número ou Cor):**
  - 1x Placa BBC Micro:bit (com case protetor de silicone recomendado)
  - 1x Cabo Micro-USB reforçado (1 metro)
  - 1x Suporte de pilhas AAA com conector JST
  - 1x Mini protoboard (400 pontos)
  - 10x Cabos jumper macho-macho (cores sortidas)
  - 4x Cabos jacaré-macho ou jacaré-jacaré
  - 1x Kit básico de componentes (5 LEDs coloridos, 5 resistores 220Ω, 2 resistores 10kΩ, 1 LDR, 1 push button)

### Check-in e Check-out (Protocolo de 3 Minutos)
- **Início da Aula:** A relatora de cada equipe confere o checklist colado na tampa interna da caixa.
- **Fim da Aula (3 min finais):** Todos os componentes retornam às divisórias. A placa Micro:bit deve obrigatoriamente ser desconectada da bateria e do cabo USB para evitar curto-circuito no transporte.

---

## 🛠️ 2. Guia de Resolução de Problemas Técnicos (Troubleshooting)

### A. O Micro:bit não é reconhecido pelo computador
1. **Cabo de dados vs. Cabo de carga:** Muitos cabos Micro-USB de celular servem apenas para carregamento e não possuem as linhas de dados (D+ e D-). Certifique-se de usar cabos que transmitam dados.
2. **Conexão WebUSB no MakeCode:** No navegador (Chrome ou Edge), clique nos três pontinhos ao lado do botão *Baixar* e selecione **"Parear dispositivo"**. Escolha *BBC micro:bit* na lista flutuante.
3. **Resets da Placa:** Pressione o botão *RESET* localizado na parte traseira da placa (próximo à porta USB).

### B. Leitura errática de sensores na protoboard (Ruído / Oscilação)
1. **Mau contato nas trilhas:** Protoboards de baixo custo podem perder a pressão nas lâminas metálicas internas. Teste mover os componentes para colunas vizinhas.
2. **Resistor de Pull-Up / Pull-Down:** Certifique-se de que os sensores analógicos (LDR, sonda DS18B20) estão montados em esquema de divisor de tensão com o resistor correto (10kΩ para LDR, 4,7kΩ para DS18B20).
3. **Pinos soltos:** Verifique se as pernas dos resistores e LEDs estão inseridas profundamente até o fundo da protoboard.

### C. Fogo amigo e curtos-circuitos em potencial
1. **Aquecimento anormal da placa:** Se a placa esquentar repentinamente, desconecte a bateria imediatamente. Isso indica um curto direto entre o pino `3V` e o `GND` na protoboard.
2. **Inversão de Polaridade em LEDs:** Se o LED não acender no circuito direto, inverta a posição das pernas (anodo = perna maior = positivo `3V`; catodo = perna menor = `GND`).

---

## 🥽 3. Protocolos de Segurança para Experimentos Práticos

### Oficina 02 (Reações Químicas)
- **Óculos de Proteção:** Recomendado durante a manipulação do peróxido de hidrogênio (água oxigenada) e vinagre.
- **Prevenção de Espuma excessiva:** A mistura de água oxigenada com levedura pode efervescer rapidamente. Realize a mistura dentro de recipientes plásticos profundos sobre papel absorvente.
- **Descarte de Reagentes:** Os reagentes utilizados (vinagre, bicarbonato, fermento biológico, água oxigenada diluída) são não-tóxicos e biodegradáveis, podendo ser descartados diretamente na pia sob água corrente.

### Oficina 04 (Lançamento de Foguetes PET)
- **Área de Segurança:** O lançamento deve ocorrer em espaço aberto (quadra ou pátio sem cobertura), mantendo um raio de segurança de no mínimo 5 metros ao redor da base.
- **Trava da Base:** Verifique se a trava mecânica de soltura da garrafa está firme antes de iniciar a pressurização com a bomba de bicicleta.
- **Pressão Máxima:** Não ultrapasse a pressão de 60 PSI (libras) para garrafas PET retornáveis de 2L.
