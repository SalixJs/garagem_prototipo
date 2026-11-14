# Verificação da entrega

Coleta realizada em 12/11/2026. Preparação para publicação em 13/11/2026.

- `garagem.sql`: exportação concluída pelo mysqldump do MySQL 8.0.46, 15 tabelas; inventário consultado no banco com zero registros em todas elas.
- `garagem2.sql`: exportação concluída, banco sem tabelas. O rascunho é separado e não foi executado.
- Projetos `Garagem` e `clinicaVeterinaria2`: compilação dos fontes do pacote com `javac 26.0.2`, sem erros. Classes geradas somente na área de trabalho temporária, fora do repositório.
- Site: `node --check` em `app.js`, sem erros. Os arquivos copiados foram comparados por SHA-256 com a pasta do XAMPP.
- Diagramas: arquivos comparados por SHA-256 com os originais nos Downloads.
- Credenciais de conexão literais: removidas dos dois `ConnectionFactory.java`; o pacote foi conferido contra as senhas existentes nos arquivos de origem sem imprimir essas senhas.
- Histórico textual: 15 interações do chat solicitado, em ordem cronológica, com o anexo disponível.
- O manifesto registra o SHA-256 de cada arquivo do pacote, exceto o próprio manifesto e metadados Git. `.gitattributes` preserva os bytes para permitir a conferência em outro sistema.

Compilação não significa que todas as regras funcionem: os problemas de lógica encontrados estão em `RESUMO_PARA_CODEX.md`. Não foram executados os programas Java que modificam dados, nem restaurados os dumps sobre os bancos originais. O banco da clínica não está incluído.
