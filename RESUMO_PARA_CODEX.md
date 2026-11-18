# Continuidade do Garagem em outro computador

SQL revisado em 17/11/2026; demais observacoes historicas de 12/11/2026. Leia este arquivo antes de propor mudancas.

## Objetivo e modo de trabalho

O usuário está aprendendo Java, JDBC e relacionamentos MySQL. Usa IntelliJ IDEA e toma `clinicaVeterinaria2` como exemplo de estudo. Quer construir o Garagem e entender cada etapa, especialmente cadastro de usuário, herança, PK/FK e proteção de senha/e-mail. Evite trocar a arquitetura por Spring/JPA sem um pedido: a base atual é Java simples com DAO e JDBC.

O produto Garagem é um guia/diretório para entusiastas de modificações automotivas, não um sistema de estacionamento. O escopo público está em https://github.com/SalixJs/Projeto_garagem. Guias de regularização, busca de oficinas e manutenção de catálogo fazem parte do planejamento. Os diagramas incluem entidades de fases futuras.

## O que existe de verdade

- `bancos/garagem.sql`: dump real do MySQL 8.0.46 local, com 15 tabelas e zero registros. Este é o esquema efetivamente criado.
- `bancos/garagem2.sql`: dump real de um segundo banco criado, ainda sem tabelas. Não dizer que a nova modelagem já foi aplicada.
- `bancos/garagem2-rascunho-nao-executado.sql`: conteúdo salvo da aba SQL aberta no Workbench. Agora contem as 15 tabelas do diagrama em ingles, incluindo vistos recentemente em `accesses`. IDs/FKs padronizados em BIGINT UNSIGNED, perfis com PK compartilhada, hash obrigatorio, CHECKs e regras de exclusao. Salvo do Workbench sem executar. Nao e um dump nem uma migracao aplicada.
- `java/Garagem`: classes `Model.User`, `Model.Enthusiast`, `Model.OwnerAutoRepairShop`, `Util.ConnectionFactory` e `DAO.EnthusiastDAO` (vazio). Não há ponto de entrada `main`, CRUD, autenticação ou geração de hash implementados.
- `java/clinicaVeterinaria2`: exemplo de herança `Employee` → `VeterinaryMedic`/`Secretary`, DAOs JDBC, interface Swing e controlador. Seu banco de referência se chama `clinica_veterinaria` e não foi exportado neste pacote.
- `site/garagem`: frontend estático responsivo, com navegação por hash, busca e filtros, guias de consulta, favoritos e checklist em localStorage. Catálogo de oficinas vazio por padrão, com opção de exemplos fictícios. Não está ligado aos bancos nem ao Java.
- `docs/chat-relacoes-mysql.md`: histórico textual de 15 interações, mensagens do usuário e assistente, mais o anexo em `docs/anexos/`. Não contém saídas de ferramentas nem raciocínio interno.

## Relações discutidas no chat

1. `usuario.id_usuario` gera a identidade. `entusiasta.id_entusiasta` é simultaneamente PK e FK para o mesmo ID. Não criar outro atributo `code` em Java: ele é herdado de `User`.
2. `dono_oficina.id_dono_oficina` também é PK/FK para `usuario` no esquema exportado. Um usuário pode ter ambos os perfis; as chaves não proíbem essa sobreposição.
3. `preferencias.fk_usuario` possui FK e `UNIQUE`, portanto cada usuário pode ter no máximo um registro de preferências. A última pergunta do chat foi como escrever essa constraint usando `fk_user`; os tipos e os nomes precisam coincidir com o esquema escolhido.
4. `PRIMARY KEY` e `FOREIGN KEY` são regras diferentes. `CONSTRAINT nome` apenas nomeia uma regra. Não recriar constraints que já existem.
5. O cadastro usuário + perfil precisa inserir o usuário, recuperar a chave gerada e inserir o perfil com o mesmo ID, usando uma única conexão/transação com commit/rollback.
6. O chat sugeriu uma FK de autoria em `guia` apenas como hipótese. Não foi confirmada a regra de que o entusiasta cria guias. No esquema completo, `acessa` registra consultas de `usuario` a `guia`; não inventar autoria.
7. O primeiro exemplo de `usuario`/`veiculo` no chat foi uma interpretação inicial corrigida pelo usuário. Não é o modelo adotado.
8. Houve uma proposta de tipos `BIGINT UNSIGNED`, `senha_hash`, e-mail único, datas de criação/alteração e valores monetários decimais. É proposta histórica, não uma migração aplicada ao banco `garagem`.

## Problemas observados para retomar com o usuário

- Em `Enthusiast.java`, a assinatura usa `(code, name, passwordHash, email, city)` e chama `super` nessa ordem. `User` espera `(code, name, email, passwordHash, city)`. Os dois campos String podem ficar trocados; a compilação não detecta isso. Foi documentado, não corrigido nesta transferência.
- Os DAOs da clínica são material de estudo: métodos de inserção não fecham a conexão nem fazem rollback no catch; há risco de a interface anunciar sucesso apesar de o DAO engolir erros. Não copiar esses problemas para o Garagem.
- `Main2` usa `list.get(0)` sem verificar lista vazia e executa atualizações. Não rodar como teste inocente de conexão.

## Senhas e configuração

O histórico explica que `private` encapsula um campo e `passwordHash` é só um nome. Ainda é preciso implementar geração/verificação de hash com biblioteca adequada antes de persistir senha. Não usar senha em texto puro, nem apresentar o projeto como conforme à LGPD apenas por ter esses campos. E-mail não deve ir para listagens públicas ou logs.

Na cópia para o GitHub, os dois `ConnectionFactory.java` passaram a ler `DB_USER`, `DB_PASSWORD` e `DB_URL` do ambiente. A URL incorreta `jdbc:mysql//...` do Garagem foi corrigida para `jdbc:mysql://...`. As senhas reais foram excluídas do pacote. Os projetos originais não foram alterados.

## Próximos passos sugeridos (não executados)

1. Ler os dumps e comparar com os diagramas antes de alterar o banco.
2. Decidir se o exercício seguirá `garagem` em português ou a nova versão `garagem2` em inglês. Não misturar silenciosamente nomes e tipos.
3. Corrigir, em uma mudança separada, a ordem dos argumentos de `Enthusiast` e completar o DAO com transação, generated keys e tratamento de falhas.
4. Definir geração de hash, validação e unicidade de e-mail antes de construir cadastro/login.
5. Revisar o rascunho `garagem2` com o usuário e só então executar uma migração explícita.
6. Manter a integração do site com um backend como decisão posterior: o pedido que criou o site era somente frontend para XAMPP.

## Pedido pronto para o outro Codex

> Leia README.md, RESUMO_PARA_CODEX.md e docs/chat-relacoes-mysql.md deste repositório. Confira os dois dumps, o rascunho do Workbench, os diagramas e os projetos Java. Quero continuar aprendendo a relação usuario/entusiasta e o cadastro usando JDBC/DAO como no clinicaVeterinaria2. Distinga o que está implementado do que só foi discutido. Não recrie bancos existentes nem execute o rascunho sem antes explicar os ajustes. Comece conferindo a ordem dos argumentos de Enthusiast e o plano do DAO.

## Atualizacao SQL em 17/11/2026

- O usuario autorizou escrever e publicar o rascunho completo; nao autorizou executar SQL.
- As 15 tabelas cobrem contas, perfis, preferencias, guias, acessos, oficinas, servicos, fotos, avaliacoes, regularizacao, etapas e fontes.
- `accesses` guarda a ultima visita por par usuario/guia. Exemplos JDBC de registrar, listar e limpar historico ficam comentados.
- Um usuario pode ser entusiasta e dono. Uma avaliacao por entusiasta/oficina. Donos com oficinas nao podem ser excluidos antes de resolver os vinculos (RESTRICT).
- Hash, autorizacao por usuario, validacao de entradas, retencao e remocao dos arquivos de fotos dependem do backend. O schema nao comprova conformidade LGPD.
- Produto planejado para uso real, inicialmente sob responsabilidade de pessoa fisica, com proposta de cadastro apenas de adultos; mecanismo de verificacao ainda nao definido.
- Os dumps garagem.sql e garagem2.sql continuam sendo registros historicos e nao foram regenerados. Nenhum comando foi executado no MySQL nesta atualizacao.
- Verificacao desta alteracao: revisao estatica do SQL e diff; sem teste de execucao no banco por instrucao do usuario.
