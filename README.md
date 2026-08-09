# Oficinas de Robótica Educacional com BBC Micro:bit
## Protagonismo Feminino em STEM

Repositório de materiais produzidos no âmbito da pesquisa de Mestrado Profissional em **Formação de Professores em Ciências (PROFICIÊNCIAS)** — UFRJ / Campus Geraldo Cidade, Duque de Caxias, RJ.

---

## 🎯 Objetivo

Disponibilizar recursos e materiais didáticos testados empiricamente para uma intervenção pedagógica que une a **Robótica Educacional** e a plataforma **BBC Micro:bit** ao **Ensino de Ciências**, com foco especial em promover o protagonismo de meninas nas ciências exatas e combater barreiras e estereótipos de gênero no ambiente escolar.

O projeto tem como premissa:
- **Aprender fazendo** — cultura Maker e experimentação prática
- **Abordagem STEM** — integração de Ciência, Tecnologia, Engenharia e Matemática
- **Investigação científica** — as estudantes como pesquisadoras ativas, não consumidoras passivas de tecnologia
- **Viabilidade para escolas públicas** — materiais e componentes acessíveis do ponto de vista financeiro e logístico

---

## 📖 Produto Educacional: E-book Pedagógico

Na pasta `Produto_Educacional_Ebook` você encontrará o **Guia Prático de Robótica Educacional**, um e-book em HTML otimizado para impressão em formato A4. Este material consolida:

- Referencial teórico sobre robótica educacional, gênero em STEM e protagonismo feminino
- Articulação explícita com as habilidades da **Base Nacional Comum Curricular (BNCC)**
- Passo a passo ilustrado e pedagogicamente estruturado de cada oficina
- Fichas investigativas em formato de diário de bordo para as estudantes
- Recursos complementares: galeria de cientistas brasileiras, plataformas de código aberto, comunidades de educadores

O e-book é voltado para **docentes da educação básica** (Anos Finais do Ensino Fundamental e Ensino Médio) e pode ser usado de forma linear ou por seção, conforme a realidade da escola.

---

## 📂 Estrutura do Repositório

```
oficinas-robotica-microbit/
├── Oficina_00_Formacao_Multiplicadoras/
│   ├── README.md
│   ├── Oficina00_Cap1_Fundamentos_Eletricidade.pdf
│   ├── Oficina00_Cap2_Acendendo_Primeira_Luz.pdf
│   ├── Oficina00_Cap3_Ensinando_Robo_Sentir.pdf
│   ├── Oficina00_Cap4_Desafio_Final_Jogo_Reacao.pdf
│   ├── Oficina00_JogoReacao.js
│   ├── Oficina00_AlarmeLuz.js
│   └── assets/
├── Oficina_01_Bussola_e_Telemetria/
│   ├── README.md
│   ├── Oficina01_Guia_Professor.pdf
│   ├── Oficina01_Ficha_Investigativa.pdf
│   ├── Oficina01_Bussola.js
│   └── projeto_original_bussola_microbit.md
├── Oficina_02_Quimica_Sensores_Temperatura/
│   ├── README.md
│   ├── Oficina02_Guia_Professor.pdf
│   ├── Oficina02_Ficha_Investigativa.pdf
│   └── Oficina_02_data_logger.js
├── Oficina_03_Fisica_Circuitos_Placas_Solares/
│   ├── README.md
│   ├── Oficina03_Guia_Professor.pdf
│   ├── Oficina03_Ficha_Investigativa.pdf
│   ├── Oficina03_painel_solar.js
│   ├── Oficina03circuito.png
│   └── Oficina03codigo.png
├── Oficina_04_Fisica_Lancamento_Foguetes/
│   ├── README.md
│   ├── Oficina04_Guia_Professor.pdf
│   ├── Oficina04_Ficha_Investigativa.pdf
│   ├── Oficina04_codigo_foguete.js
│   ├── Oficina04_codigo_radar.js
│   ├── mao-na-massa-foguetes.pdf
│   └── tutorial-base-lancamento.pdf
├── Produto_Educacional_Ebook/
│   └── README.md
├── Recursos_Complementares/
│   └── README.md
└── README.md (este arquivo)
```

---

## 🧭 As Cinco Oficinas

### 🔌 Oficina 00 — Formação de Multiplicadoras: Fundamentos de Eletrônica e Automação
**Conceitos:** Eletricidade básica (tensão, corrente, resistência), circuitos, sensores, lógica condicional, circuito humano

Oficina preparatória, organizada em 4 capítulos progressivos, que forma multiplicadoras com domínio prático dos fundamentos de eletrônica e programação com o Micro:bit. A progressão parte dos componentes físicos (protoboard, LED, resistor, multímetro) e avança até a construção de um **Jogo de Reação** onde o corpo humano fecha o circuito elétrico. Ao final, a multiplicadora vivenciou todo o ciclo — teoria, hardware, software e aplicação lúdica — e está pronta para apoiar colegas nas oficinas seguintes.

**Habilidades BNCC:** EF08CI02 (fenômenos elétricos), EF09CI14 (instrumentos de medição)

**Duração:** 4 encontros de ~90 minutos (1 por capítulo)

**Materiais principais:** 1 kit Micro:bit por equipe, protoboard, LEDs, resistores 220Ω e 10kΩ, sensor LDR, push button, multímetro, papelão e alumínio (Jogo de Reação)

---

### 🧭 Oficina 01 – Bússola Digital e Telemetria
**Conceitos:** Campos magnéticos, orientação espacial, Norte Magnético vs. Norte Geográfico

Introdução à plataforma Micro:bit focando no uso do **magnetômetro embarcado**. As estudantes investigam como perturbações eletromagnéticas (ímãs de neodímio) afetam a leitura de direção. A prática inclui calibração do sensor, comparação com bússola do celular e uma dinâmica de navegação (caça ao tesouro) que exige contagem rigorosa de passos e direcionamento cardeal.

**Habilidades BNCC:** EF09CI16 (fenômenos magnéticos), EF09CI14 (instrumentos de medição)

**Duração:** 2 aulas de 50 minutos

**Materiais principais:** 1 kit Micro:bit por equipe, ímãs de neodímio, bússola analógica/smartphone

---

### 🧪 Oficina 02 — Data Logger de Temperatura: Investigando Reações Químicas
**Conceitos:** Termodinâmica, reações endotérmicas e exotérmicas, coleta e análise de dados

Experimento prático interdisciplinar que coloca a placa micro:bit como **data logger** — um registrador contínuo de temperatura. Utilizando a sonda DS18B20, as estudantes investigam duas reações químicas reais:
- **Missão A Queda:** vinagre + bicarbonato de sódio (reação endotérmica — temperatura cai)
- **Missão A Escalada:** água oxigenada + levedura (reação exotérmica — temperatura sobe)

Os gráficos gerados em tempo real no MakeCode tornam as mudanças térmicas visíveis e discussíveis. O "pulo do gato" é a pergunta: *para onde foi a energia?*

**Habilidades BNCC:** EF08CI02 (ciclos biogeoquímicos), EF09CI02 (energia e transformações)

**Duração:** 2 aulas de 50 minutos

**Materiais principais:** 1 kit Micro:bit por equipe, sonda DS18B20, resistor 4,7kΩ, protoboard, reagentes (vinagre, bicarbonato, água oxigenada, levedura)

---

### ☀️ Oficina 03 – Energia Solar & Circuitos Responsivos
**Conceitos:** Energia fotovoltaica, conversão de energia, circuitos elétricos, tensão de limiar

Atividade focada em eletricidade e resolução de problemas. As estudantes montam um circuito em protoboard acoplado a uma **miniplaca solar de 3V** e investigam como a incidência e o ângulo da luz afetam a iluminação de LEDs coloridos. Perguntas investigativas simples estruturam a experiência:
- Qual LED acende melhor?
- Com qual inclinação consigo mais brilho?
- Por que este LED não acende?

Os LEDs funcionam como indicadores vivos, tornando o comportamento do circuito imediatamente observável.

**Habilidades BNCC:** EF08CI02 (fenômenos elétricos), EF09CI14 (instrumentos de medição)

**Duração:** 2 aulas de 50 minutos

**Materiais principais:** 1 kit Micro:bit por equipe, miniplaca solar 3V, LEDs coloridos, protoboard, jumpers

---

### 🚀 Oficina 04 – Foguete d'Água & Telemetria
**Conceitos:** Força G, aceleração, empuxo, trajetória, análise de dados em tempo real

A oficina mais desafiadora e mais recompensadora da sequência. Utilizando **duas placas Micro:bit em comunicação via rádio**, as estudantes instrumentam um foguete d'água para transmitir dados de aceleração em tempo real durante o voo. A placa embarcada (no foguete) envia dados do acelerômetro via rádio; a placa receptora (em solo) exibe os dados e gera gráficos instantâneos.

Conceitos de Física como força G, empuxo e trajetória deixam de ser abstratos e passam a ter forma de curva no gráfico. Os dados podem ser exportados em planilha eletrônica para análise posterior.

**Habilidades BNCC:** EF09CI01 (movimentos e velocidades), EF09CI14 (instrumentos de medição), EF09CI15 (energia)

**Duração:** 2-3 aulas de 50 minutos (mais preparação externa)

**Materiais principais:** 2 kits Micro:bit por equipe (embarcado + solo), foguete d'água, espuma de proteção

---

## 🛠 Como Usar Este Repositório

### Para o Professor

1. **Comece pelo E-book** — Leia o Guia Prático de Robótica Educacional para contextualizar o projeto completo.
2. **Inicie pela Oficina 00** — Se as estudantes não tiverem experiência prévia com eletrônica, a Oficina 00 (Formação de Multiplicadoras) é o ponto de partida ideal. Ela forma os fundamentos que sustentam todas as demais.
3. **Escolha as oficinas seguintes** — As Oficinas 01–04 são independentes entre si, mas há uma progressão didática sugerida.
4. **Consulte o README de cada oficina** — Contém objetivo, ciclo investigativo, estrutura de aulas, materiais e critérios de avaliação.
5. **Baixe o Guia do Professor / Cadernos de Formação** — Documentos detalhados com cronograma de aula e orientações pedagógicas.
6. **Imprima as Fichas Investigativas / Cadernos** — Uma por equipe de estudantes. São diários de bordo que guiam a investigação.
7. **Acesse o código** — Arquivo `.js` pronto para copiar e colar no MakeCode. Nenhuma experiência prévia em programação é necessária.

### Para Estudantes

As fichas investigativas funcionam como guia autossuficiente. As estudantes devem:
1. Registrar suas hipóteses antes do experimento
2. Realizar as investigações conforme orientado
3. Coletar dados e observações
4. Analisar os resultados
5. Comparar com a hipótese inicial

---

## 💡 Pressupostos Pedagógicos

### Investigação Científica

As oficinas não são simples "receitas de fazer". Cada uma coloca as estudantes como **pesquisadoras ativas**, não consumidoras de tecnologia. O erro, o inesperado e as anomalias são **dados para investigação**, não problemas a evitar.

### Equidade de Gênero

Cada oficina exige rotação explícita de papéis técnicos (programadora, operadora, analista, etc.). Ninguém fica como "ajudante" — todas têm funções protagonistas e revezam responsabilidades.

### Viabilidade para Escolas Públicas

- Componentes eletrônicos com excelente custo-benefício (Micro:bit importada da China, sensores genéricos)
- Materiais consumíveis baratos ou reutilizáveis
- Sem necessidade de laboratorios sofisticados
- Sugestões de adaptações para diferentes contextos

---

## 📚 Referências e Créditos

Cada pasta de oficina contém referências completas em ABNT. Os principais projetos de inspiração incluem:

- **Micro:bit Educational Foundation** — projetos e documentação
- **Microsoft MakeCode** — plataforma de programação em blocos
- **Agência Espacial Brasileira (AEB)** — apostila "Mão na Massa: Foguetes"
- **Universidade de Caxias do Sul (UCS)** — tutoriais de base de lançamento
- **Instituto Mauá de Tecnologia** — vídeos de robótica educacional

---

## 📄 Licença

Este repositório está licenciado sob a **MIT License**. Consulte o arquivo `LICENSE` para os termos completos.

Copyright © 2026 Bruno José Donato da Nóbrega

Você é livre para usar, modificar, distribuir e sublicenciar os materiais, desde que a licença original e o aviso de copyright sejam mantidos em todas as cópias ou partes substanciais do Software.

---

## 🤝 Contribuições

Este é um projeto de pesquisa acadêmica. Melhorias, correções e sugestões são bem-vindas. Abra uma *issue* ou envie um *pull request*.

---

## 📞 Contato

**Pesquisador:** Bruno J. Nóbrega  
**Orientadora:** Profa. Dra. Mônica de Mesquita Lacerda  
**Instituição:** Mestrado Profissional em Formação de Professores em Ciências (PROFICIÊNCIAS)  
**Campus:** UFRJ — Campus Geraldo Cidade, Duque de Caxias, RJ

---

## 🎓 Citação

Se você utilizar estes materiais em pesquisa ou publicação, cite como:

> NÓBREGA, Bruno J. **Oficinas de Robótica Educacional com BBC Micro:bit: Protagonismo Feminino em STEM**. Repositório de materiais do Mestrado Profissional em Formação de Professores em Ciências (PROFICIÊNCIAS). UFRJ, Campus Duque de Caxias, 2025.

---

**Última atualização:** agosto de 2026
**Status:** Produto Educacional completo e pronto para uso em escolas públicas
