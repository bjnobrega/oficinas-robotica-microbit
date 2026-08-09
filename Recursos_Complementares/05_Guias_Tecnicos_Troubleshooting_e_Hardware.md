# Guia Técnico de Manutenção, Firmware e Solução de Problemas do Micro:bit

Este guia reúne procedimentos técnicos avançados para resolução de problemas com placas **BBC Micro:bit**, atualização de firmware, recuperação de placas travadas em modo de manutenção e diagnóstico de falhas de WebUSB.

---

## 🛠️ 1. O que Fazer se a Placa Exibir "MAINTENANCE" no Computador?

### O Problema:
Ao conectar a placa Micro:bit via USB, em vez de aparecer como uma unidade de disco nomeada `MICROBIT`, o computador a reconhece com o nome **`MAINTENANCE`**. Isso ocorre quando a placa entra acidentalmente no modo de atualização do chip de interface KL27Z (por ter o botão *Reset* pressionado no momento em que o cabo USB foi inserido).

### Procedimento de Recuperação (Passo a Passo):
1. **Não tente gravar projetos comuns `.hex` no modo MAINTENANCE.** Isso não funcionará.
2. Localize o arquivo de firmware de restauração de fábrica oficial na pasta do repositório:
   `Recursos_Complementares/troubleshooting/Firmware_Restore_v0255.hex`
3. Arraste e solte o arquivo `Firmware_Restore_v0255.hex` diretamente dentro da unidade **`MAINTENANCE`**.
4. O LED amarelo de status na parte traseira da placa começará a piscar rapidamente durante a gravação.
5. Quando o LED parar de piscar, desconecte a placa do USB e reconecte-a.
6. A placa reiniciará normalmente e será reconhecida como **`MICROBIT`**.

> 📄 **PDF de Suporte:** Consulte o manual em PDF no repositório:  
> [`Recursos_Complementares/troubleshooting/Troubleshooting_MAINTENANCE_Mode.pdf`](troubleshooting/Troubleshooting_MAINTENANCE_Mode.pdf)

---

## ⚡ 2. Atualização de Firmware da Placa Micro:bit

### Por que atualizar o Firmware?
Placas mais antigas ou que apresentam desconexões frequentes com o MakeCode beneficiam-se da atualização do chip de interface para a versão mais recente ($v0255$ ou superior), garantindo compatibilidade com o protocolo WebUSB do Chrome/Edge.

### Procedimento de Atualização:
1. Desconecte o cabo USB da placa Micro:bit.
2. Pressione e mantenha pressionado o botão **RESET** na traseira da placa.
3. Com o botão pressionado, conecte o cabo USB ao computador. Solte o botão assim que o LED piscar.
4. A placa abrirá a unidade `MAINTENANCE`.
5. Arraste o arquivo de firmware `Update_Firmware_Microbit.pdf` / `Firmware_Restore_v0255.hex` para a unidade.
6. Aguarde a conclusão da transferência.

> 📄 **PDF de Suporte:** Consulte o guia ilustrado:  
> [`Recursos_Complementares/troubleshooting/Update_Firmware_Microbit.pdf`](troubleshooting/Update_Firmware_Microbit.pdf)

---

## 🌐 3. Solução de Problemas de Download via WebUSB

### O Problema:
O botão *Baixar* do MakeCode não transfere o código direto para a placa e exige salvar o arquivo `.hex` na pasta de Downloads do computador para depois arrastá-lo manualmente.

### Procedimento de Pareamento Direto (WebUSB):
1. Certifique-se de que está utilizando o navegador **Google Chrome** ou **Microsoft Edge** (versão 79 ou superior).
2. Conecte a placa Micro:bit ao computador via cabo USB.
3. No MakeCode, clique no ícone de engrenagem ⚙️ (no canto superior direito) ou no menu ao lado de *Baixar* e selecione **"Parear dispositivo"** (*Pair device*).
4. Uma janela popup do navegador será exibida solicitando permissão.
5. Selecione **"BBC micro:bit CMSIS-DAP"** ou **"Micro:bit"** na lista e clique em **Conectar**.
6. A partir desse momento, ao clicar em *Baixar*, o código é gravado diretamente na placa em 3 segundos.

> 📄 **PDF de Suporte:** Consulte o guia visual completo:  
> [`Recursos_Complementares/troubleshooting/Troubleshooting_WebUSB_Downloads.pdf`](troubleshooting/Troubleshooting_WebUSB_Downloads.pdf)

---

## 📁 4. Arquivos de Suporte Técnico Disponíveis nesta Pasta

- **[`troubleshooting/Update_Firmware_Microbit.pdf`](troubleshooting/Update_Firmware_Microbit.pdf)**: Guia passo a passo de atualização de firmware.
- **[`troubleshooting/Troubleshooting_MAINTENANCE_Mode.pdf`](troubleshooting/Troubleshooting_MAINTENANCE_Mode.pdf)**: Manual de recuperação de placas travadas em modo de manutenção.
- **[`troubleshooting/Troubleshooting_WebUSB_Downloads.pdf`](troubleshooting/Troubleshooting_WebUSB_Downloads.pdf)**: Resolução de falhas de conexão direta via navegador.
- **[`troubleshooting/Firmware_Restore_v0255.hex`](troubleshooting/Firmware_Restore_v0255.hex)**: Arquivo `.hex` de firmware de restauração original.
