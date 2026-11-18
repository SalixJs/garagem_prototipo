# Garagem protótipo

Pacote de continuidade do projeto, reunido em **12/11/2026** para trabalhar em outro computador.

**Para continuar com outro Codex, comece por [RESUMO_PARA_CODEX.md](RESUMO_PARA_CODEX.md).**

## Organização

| Caminho | Conteúdo |
|---|---|
| `bancos/garagem.sql` | Exportação do MySQL 8.0.46: 15 tabelas, todas sem registros |
| `bancos/garagem2.sql` | Exportação do banco existente, ainda sem tabelas |
| `bancos/garagem2-rascunho-nao-executado.sql` | SQL em construção que estava aberto no Workbench; não confundir com o banco exportado |
| `bancos/inventario.json` | Contagem das tabelas e registros no momento da exportação |
| `diagramas/` | Imagens originais GaragemBDLogico e GaragemBDConceitual, dos Downloads |
| `java/Garagem/` | Projeto Java em desenvolvimento |
| `java/clinicaVeterinaria2/` | Projeto de estudo usado como referência de JDBC, DAO e herança |
| `dependencias/` | MySQL Connector/J local, com sua licença |
| `site/garagem/` | Cópia do site em `C:\xampp\htdocs\garagem` |
| `docs/chat-relacoes-mysql.md` | 15 interações do chat “Criar relação entre tabelas no MySQL” |
| `docs/anexos/` | Diagrama anexado ao chat |
| `docs/TRANSFERENCIA.md` | Ajustes feitos nas cópias, limitações e verificações |
| `MANIFESTO.sha256` | Hash SHA-256 dos arquivos entregues, exceto o próprio manifesto |

## Abrir o site no outro PC

1. Copie a pasta `site/garagem` para a pasta `htdocs` do seu XAMPP.
2. Inicie o Apache no painel do XAMPP.
3. Abra <http://localhost/garagem/>.

O site é HTML, CSS e JavaScript. Não precisa de MySQL, npm ou compilação. Favoritos e checklist são locais ao navegador e não estão sincronizados com o Java. Fontes do Google exigem internet; há fontes alternativas locais.

## Restaurar os bancos

Use **MySQL 8.0**, preferencialmente uma versão compatível com a 8.0.46 da origem. O banco incluído no XAMPP pode ser MariaDB; não presuma compatibilidade com os dumps MySQL, principalmente com a collation `utf8mb4_0900_ai_ci` de `garagem2`.

No MySQL Workbench, abra cada dump com **File → Open SQL Script**, conecte ao servidor de destino e execute. Os dumps já contêm `CREATE DATABASE` e `USE`.

**Importe em uma instalação de destino sem dados importantes nesses nomes:** o dump de `garagem` contém `DROP TABLE IF EXISTS` para restaurar as tabelas. Não execute o rascunho automaticamente.

## Abrir os projetos Java

Abra separadamente `java/Garagem` e `java/clinicaVeterinaria2` no IntelliJ. Selecione o JDK (a origem usava OpenJDK 26) e mantenha `src` como pasta de fontes. O driver JDBC está em `dependencias/mysql-connector-j-26.7.0/`, referenciado por caminho relativo nos arquivos `.iml`.

Configure no ambiente de execução do IntelliJ:

| Variável | Garagem | Clínica |
|---|---|---|
| `DB_URL` | `jdbc:mysql://localhost:3306/garagem2` | `jdbc:mysql://localhost:3306/clinica_veterinaria` |
| `DB_USER` | Usuário MySQL do computador de destino | Usuário MySQL do computador de destino |
| `DB_PASSWORD` | Senha local, não versionada | Senha local, não versionada |

Não basta criar um arquivo `.env`: estes projetos leem variáveis de ambiente com `System.getenv`.

Atualização Java de 18/11/2026: o Garagem possui `Main` vazio, `UserDAO.insert` e `EnthusiastDAO.insert` com transação. O construtor de `Enthusiast` agora recebe e-mail antes do hash. Ainda não há interface Java ou autenticação. O DAO usa `enthusiast(code)`, enquanto o rascunho SQL define `id_enthusiast`: é necessário alinhar essa coluna antes de executar o cadastro. Os IDs no modelo Java continuam `int`, enquanto o rascunho usa `BIGINT UNSIGNED`. A clínica possui `Main` (Swing) e `Main2` (exercício que altera registros); **o banco `clinica_veterinaria` não faz parte deste pacote**, pois foram solicitados apenas `garagem` e `garagem2`.

## Origem

Documentação inicial do produto: [SalixJs/Projeto_garagem](https://github.com/SalixJs/Projeto_garagem). Este repositório reúne o protótipo e o material de estudo, sem substituir aquele repositório.
