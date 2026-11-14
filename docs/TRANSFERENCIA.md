# Registro da transferência

Coleta: 12/11/2026, computador Windows de origem. Objetivo: novo repositório `garagem_prototipo` para continuidade em outro PC.

## Fontes

- MySQL Server 8.0.46 em `127.0.0.1:3306`: `garagem` e `garagem2`, exportados com mysqldump (estrutura, dados existentes, rotinas, eventos e triggers).
- Downloads: `GaragemBDLogico.PNG` e `GaragemBDConceitual.PNG`.
- IntelliJ: `IdeaProjects/Garagem` e `IdeaProjects/clinicaVeterinaria2`.
- XAMPP: `C:\xampp\htdocs\garagem`.
- Chat: “Criar relação entre tabelas no MySQL”, histórico de 15 interações. O ZIP mencionado na conversa não havia sido encontrado; as pastas locais são a fonte dos projetos.
- Workbench: aba SQL em edição preservada em `bancos/garagem2-rascunho-nao-executado.sql`, sem executar o conteúdo.

## Alterações feitas somente nas cópias

- Remoção de senhas literais de MySQL: `ConnectionFactory` usa variáveis de ambiente.
- Correção do prefixo JDBC inválido no `ConnectionFactory` do Garagem.
- Ajuste dos arquivos `.iml` para o driver JDBC incluído em caminho relativo, independente dos Downloads do computador original.
- Substituição dos números de CPF de exemplos em `Main.java`/`Main2.java` da clínica por `00000000000`.
- Inclusão de documentação, histórico textual, anexo, inventário e manifesto de integridade.

Os demais fontes Java, imagens e arquivos do site foram preservados. Não foram corrigidos os problemas de negócio/DAO descritos no resumo. A cópia não transforma o projeto de estudo em uma aplicação finalizada.

## Arquivos excluídos da entrega

Caches e preferências `.idea`, pastas de compilação `out`/`target`, classes compiladas locais, metadados `.git` de outras pastas, credenciais e configurações pessoais. O Connector/J é uma dependência de terceiros e foi incluído com sua própria licença, separada do código do projeto.

## Verificações

Os resultados finais de compilação e integridade estão em `VERIFICACAO.md`. Os bancos originais foram apenas lidos/exportados. Não foi executada nenhuma restauração sobre eles.

O SQL de `garagem2` parece pequeno porque o banco está vazio: esse é o estado real, não uma falha de exportação. A modelagem parcial fica no arquivo de rascunho.
