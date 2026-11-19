# Site Garagem — entrega e correspondência com o banco

Revisado em 18/11/2026. Alterações limitadas a `site/garagem/`, sem modificar Java, bancos ou diagramas. Paleta, fontes e assets preservados. HTML/CSS/JS puros; nenhum pacote, build ou backend necessário.

## Arquivos e funcionalidades

- **dados.js (novo):** 11 guias, oito oficinas fictícias e duas do protótipo em objetos JS simples.
- **app.js:** páginas por hash, filtros, detalhes, checklist específico, avaliações e cadastro demonstrativo.
- **index.html:** carrega dados.js antes de app.js e oferece acesso ao cadastro demonstrativo pelo rodapé.
- **style.css:** extensões para acomodar conteúdo, selos, perfis e formulários; variáveis originais de :root preservadas.
- **LEIA-ME.txt:** instruções de execução e limites atualizados.
- **VALIDACAO-E-MAPEAMENTO.md (novo):** esta documentação.

Rotas: `#guias`, `#guia/turbo`, `#salvos`, `#oficinas`, `#oficina/5`, `#oficina/5/avaliacoes` e `#cadastro`. Outros IDs de guias/oficinas seguem o mesmo padrão. Endereços inexistentes exibem estado de não encontrado.

Os seis IDs antigos dos guias foram preservados, mantendo favoritos existentes. Checklist novo usa chaves v2: marcações antigas não devem significar que os novos requisitos já foram revisados. Cada chave inclui o requisito textual, de modo que editar um requisito exige conferi-lo novamente.

## Filtros de oficinas

Busca, cidade, serviço, nota e distância são combinados (AND). Especialidades marcadas são alternativas entre si (OR). O botão Ver resultados aplica o painel; reabri-lo descarta edições não aplicadas. Limpar restaura todos os filtros, inclusive a busca. A opção de mostrar exemplos continua separada.

Ordenação por distância crescente, nota decrescente ou total de avaliações decrescente, com desempate por nome. Nos oito perfis fictícios, a nota vem dos relatos. Nos dois perfis do Figma, a nota e o total vêm do protótipo e a lista exibe três comentários ilustrativos por oficina.

Distância é simulada, sem geolocalização: até 1, 2, 3, 4, 5, 10 ou 15 km, e 20 km ou mais (>=20). Todas inclui também a faixa entre 15 e 20 km. Distâncias entre perfis de cidades diferentes não são distâncias reais a partir do visitante.

## Cadastro e avaliações: somente demonstração

Usuário tem a etapa de responsável. Dono de oficina tem cinco: responsável, dados da oficina, endereço, serviços e horários, logo e fotos. Não existe campo de senha ou criação de conta real. Há entrada rápida em sessão de demonstração, sem autenticação.

Os campos ficam apenas nos controles enquanto a demonstração está aberta. O site não grava nem envia e-mail, dados ou arquivos. Trocar de tipo de conta, sair da página, cancelar ou concluir descarta os campos; pagehide também limpa o formulário. Os valores digitados no cadastro não são persistidos. Além de favoritos e checklists, há sessão de demonstração, preferências e edições locais de oficinas em localStorage, conforme a seção abaixo. Nenhum formulário usa sessionStorage, cookies ou banco.

Validações: campos obrigatórios, e-mail por sintaxe, CEP por formato de oito dígitos, CNPJ por formato e dígitos verificadores (numérico e alfanumérico). Não há consulta cadastral, validação de titularidade nem consulta de CEP. Arquivos opcionais: um logo e até seis fotos PNG/JPEG/WebP, até 5 MB cada. Apenas metadados são conferidos; não há leitura de conteúdo, prévia ou upload.

Avaliações completas são relatos fictícios, sem opção de publicar. WhatsApp está desativado com a legenda de contato indisponível.

## Pendências de validação

1. **Legalidade:** todos os selos e roteiros são editoriais e a validar. O detalhe explica o escopo de cada selo. “Permitida” em Rodas e pneus refere-se à hipótese de reposição equivalente, não a qualquer alteração. Confirmar admissibilidade, veículo/categoria, autorização prévia, documentos, inspeção/CSV e sequência no órgão competente.
2. **Normas:** referência 916/2022 mantida conforme pedido. TODO em dados.js pede conferir a divergência 953/2022 do Figma, alterações posteriores e normas específicas de iluminação, ruído, emissões etc. Localizar a referência oficial não equivale a validar os guias.
3. **Datas:** dataConsulta e dataAtualizacao permanecem “a validar”; edição do código não é revisão jurídica.
4. **Custos:** faixas de projeto são exemplos fictícios, identificados assim em cards e detalhes. Não são cotações. As 33 etapas agora têm faixas fictícias de exemplo e valorExemplo: true, com aviso visível de que não são taxas oficiais, cotações ou cobranças obrigatórias. Uma etapa pode não ter cobrança própria. Não somar faixas: inspeção e emissão de CSV podem estar no mesmo serviço. Todos os valores continuam a validar.
5. **Oficinas:** validar identidade, endereço, serviços, horários, contato e autorização de publicação antes de substituir os exemplos por empresas reais. Notas, relatos e distâncias precisam de origem verificável.
6. **Fase 2:** para uso real ainda seriam necessários backend, autenticação, proteção de dados, moderação e fluxos reais de cadastro/avaliação. Nada disso está simulado como funcional.

## Mapeamento dados.js → garagem.sql

O SQL foi somente lido. Objetos aninhados são uma forma de apresentação; uma API terá de montar as relações. Não inserir diretamente esses objetos no banco.

| Campo no site | Coluna/relação SQL | Observação |
|---|---|---|
| guias[].id | guia.id_guia | Correspondência conceitual: o site usa slug textual, a PK SQL é INT. Precisa de mapeamento ou coluna slug futura. |
| titulo / descricao / categoria | guia.titulo / descricao / categoria | Direto. |
| custoEstimado | guia.custo_estimado | Faixa textual, VARCHAR(50). |
| exigeRegularizacao | guia.exige_regularizacao | Boolean no JS → 0/1 no SQL. Não representa sozinho os três selos. |
| legalizacao.dataAtualizacao | legalizacao.data_atualizacao | “a validar” → NULL; DATE não aceita esse texto. |
| legalizacao dentro do guia | legalizacao.fk_guia | id_legalizacao será gerado pelo banco. O SQL permite múltiplas legalizações por guia. |
| legalizacao.etapas[] | etapas.fk_legalizacao | id_etapa não existe no objeto local; numero não substitui a PK. |
| etapa.numero / titulo / descricao / valor | etapas.numero / titulo / descricao / valor | Direto; observar VARCHAR(50) de valor ao preparar a API. |
| etapa.valorExemplo | Sem coluna em etapas | Boolean editorial que identifica a faixa fictícia. Não persistir em valor nem interpretar como condição legal. |
| perguntasParaOficina[] / errosComuns[] | Sem colunas em guia | Listas editoriais específicas de cada tema; modelar separadamente antes de integração. |
| oficinas[].diferenciais[] / prazoMedioExemplo | Sem colunas em oficina | Lista de características e texto de prazo fictícios; não são avaliações verificadas nem disponibilidade real. |
| etapa.documentosNecessarios[] | etapas.documentos_necessarios | Array → TEXT: definir serialização (ex.: JSON) ou normalização futura. |
| fonte.nome / orgao / referencia | fonte.nome / orgao / referencia | Direto; referencia contém URL. id_fonte virá do banco. |
| fonte.dataConsulta | fonte.data_consulta | “a validar” → NULL. |
| fonte mostrada no guia | possui.fk_etapa + possui.fk_fonte | A associação SQL é POR ETAPA, não diretamente por guia. A API deve montar fontes por etapas, com suporte a múltiplas fontes. |
| oficinas[].id | oficina.id_oficina | IDs locais fictícios, não registros reais. |
| nomeFantasia / descricao / horarios | oficina.nome_fantasia / descricao / horarios | Direto. |
| cep / logradouro / numero | oficina.cep / logradouro / numero | Textos, inclusive numero. |
| servicos[] | servicos.nome + registra.fk_oficina / fk_servico | Lista local de nomes; API precisará fornecer IDs e associações. |
| avaliacoes[].id / data / estrelas / descricao | avaliacao.id_avaliacao / data / estrelas / descricao | Datas dos exemplos são NULL, sem datas de clientes inventadas. |
| avaliações dentro da oficina | avaliacao.fk_oficina | FK implícita no objeto aninhado, necessária na API. |
| avaliacoes[].autor | Não há coluna direta | Nome pode vir de fk_entusiasta → entusiasta → usuario.nome; exemplos não têm esse vínculo. |
| notaMedia / totalAvaliacoes | Agregações, sem colunas próprias | AVG(estrelas) e contagem; definir política para avaliações publicadas. |

### Campos sem coluna direta

- **Guias:** situacaoLegal, oQueE, beneficios[], pontosAtencao[], perguntasParaOficina[], errosComuns[], enquadramento, statusConteudo, custoObservacao, art e color. Não sobrecarregar descricao silenciosamente para guardar esses campos.
- **Oficinas:** bairro, cidade, uf, especialidade, distanciaKm, diferenciais[], prazoMedioExemplo e ficticia. usuario.cidade NÃO representa a cidade da oficina. Especialidade principal não está definida pelo esquema de serviços.
- **Avaliações:** autor como nome de exibição e ficticia. Falta vínculo a um entusiasta real.
- **Favoritos/checklists/filtros:** não há tabelas equivalentes. acessa registra consultas, não favoritos ou checklist.

### Colunas SQL ausentes no catálogo local

- oficina.razao_social, cnpj, complemento e fk_dono_oficina. Razão social e CNPJ só aparecem no cadastro descartável. O catálogo prevê logo, hoje vazio nos exemplos. Selecionar um arquivo no editor não cria um caminho de imagem. Os donos de demonstração não possuem identidade SQL.
- fotos.id_foto, imagem e fk_oficina: não há galeria persistida; escolher arquivo no formulário não cria registro nem caminho de imagem.
- servicos.id_servico, descricao e categoria não estão modelados na lista de nomes.
- avaliacao.fk_entusiasta é obrigatório; não se pode inserir os relatos fictícios sem resolver essa relação.
- dono_oficina.nome_responsavel e usuario.nome/email têm relação conceitual com os controles do formulário. Nenhum valor é persistido. usuario.senha não tem campo correspondente nesta demonstração.

## Ampliação editorial

Os 11 guias têm quatro frases em “O que é”, quatro benefícios, cinco pontos de atenção, cinco perguntas (seis em Motor Turbo), três erros comuns e três etapas com ações concretas. Motor Turbo mantém Laudo/Inspeção, CSV e DETRAN. IDs, rotas, selos, fonte, datas “a validar”, paleta e estrutura foram preservados; não foram acrescentados números de normas.

Cada uma das 33 etapas tem valorExemplo: true e uma faixa com “(exemplo)”, dentro do limite VARCHAR(50). O detalhe exibe tanto um aviso geral quanto um aviso junto de cada valor. As faixas foram inventadas somente para demonstrar a interface; não resultam de pesquisa de preços, não são taxas reais e não devem orientar orçamento de contratação.

As oito oficinas têm três diferenciais fictícios, um prazo médio de exemplo e de três a cinco avaliações próprias, totalizando 31 relatos distintos. Notas, IDs e quantidades foram preservados. Prazos não indicam agenda ou promessa de entrega; diferenciais não são fatos verificados. Não há contato real.

## Verificação

- node --check em app.js e dados.js.
- Verificação da estrutura editorial dos 11 guias: contagem de frases, benefícios, pontos de atenção, perguntas, erros comuns e etapas; manutenção de datas e status de validação; todos os valores de exemplo sinalizados e dentro do limite de 50 caracteres.
- 31 avaliações distintas, entre três e cinco por oficina; diferenciais e prazos preenchidos e perfis ainda fictícios.
- 176 verificações funcionais aprovadas em desktop e mais 176 em viewport efetivo de 390 px. Incluem todas as páginas, novos campos visíveis, avisos de preço, checklists, filtros, ordenações, avaliações, cadastro e checagem de transbordamento por rota.
- Cinco verificações adicionais em nova carga: favoritos e checklist preservados, cadastro vazio e layout das rotas visitadas.
- Capturas atualizadas de perfil e guia móvel revisadas. Os testes usam um perfil temporário isolado do Chrome. Em 390 px, um iframe de teste controla a largura porque a janela headless limita sua largura mínima.
- Essa ampliação editorial anterior atingiu dados.js, app.js e este documento. O incremento posterior de sessão/perfis também atualiza index.html, style.css e LEIA-ME.txt.
- Não foi validada a legalidade dos roteiros nem a realidade de preços, prazos ou empresas. O banco não foi alterado.

## Sessão, perfis e Minha oficina — 18/11/2026

**Modo demonstração: sem senha real, sem conta real.** Entradas rápidas para entusiasta, dono da Patrick (oficina 9) e dono da ACF (oficina 10). A sessão grava apenas tipo, nomeExibicao fixo e, para dono, oficinaId. Não usa dados digitados no cadastro, credenciais ou identificação pessoal. O comentário no código ressalta que login real exige backend Java/JDBC, hash de senha e autorização no servidor. As rotas são bloqueios de interface, não uma barreira de segurança.

Abas compartilhadas: Início, Oficinas, Guia e Perfil. Somente o dono ganha Minha oficina. Visitante é redirecionado ao login com mensagem; entusiasta recebe a mensagem de área exclusiva. O cadastro descartável oferece entrada com um perfil fixo ao concluir. Para dono, primeiro se escolhe a oficina do protótipo.

| Chave local | Conteúdo |
|---|---|
| garagem.demo.session | tipo, nomeExibicao e oficinaId apenas para dono |
| garagem.demo.preferencias | cidade e especialidades escolhidas das opções locais |
| garagem.demo.minhaOficina.9 / .10 | nomeFantasia, descricao, cep, logradouro, numero, bairro, cidade, uf, horariosPorDia, servicos e statusPublicacao visual |
| garagem.saved / garagem.checks | favoritos e marcações de preparação existentes |

Dados de sessão são reconstruídos a partir dos três perfis permitidos. Edições têm lista explícita de campos e validação; não podem alterar origem, verificação, notas, relatos ou contato. Não são persistidos arquivos nem seus metadados. Há bloqueio de padrões comuns de e-mail/documentos em texto livre, sem promessa de detectar toda informação pessoal: usar somente dados de exemplo. Sair remove a sessão, mas preserva preferências e edições; Restaurar exemplo original apaga a edição específica. Favoritos, preferências e checklists são compartilhados pelos perfis do mesmo navegador/origem.

### Origem e dados do protótipo

- ficticia: oito oficinas anteriores.
- prototipo-figma: Patrick Suspensões e ACF Performance, transcritas do material fornecido, sem validação de dados da empresa. CEP e distância não informados ficam vazios/null; sábado e domingo não foram inventados.
- real-verificada: reservado ao modelo comentado de dados.js. Selo Verificada exige verificadoEm em formato/data válidos. WhatsApp só é um link se também houver número válido no campo whatsapp. Nenhum perfil atual atende a essa condição.

Patrick mantém nota 4,8 e total 232; ACF mantém 4,9 e 521. Cada uma tem três relatos fictícios neutros, sem alegar atendimento real. O resumo mostra o primeiro; a lista mostra três, explicando “mostrando exemplos de N avaliações”. A média do Figma não é calculada desses relatos. Para origem real, a interface deriva nota/total dos relatos não fictícios; a lista vazia mostra Ainda sem avaliações.

O modelo real inclui origem, verificadoEm, fonteDosDados e autorizacaoPublicacao. Só preencher depois de o responsável verificar os dados e obter autorização. Seleção de arquivo no editor não substitui imagem pública. Logo local ausente ou inválido usa iniciais.

### Correspondência adicional com o SQL real

| Interface | Banco / limite |
|---|---|
| Tipo entusiasta | entusiasta.id_entusiasta é PK e FK para usuario.id_usuario; não existe coluna tipo em usuario |
| Tipo dono | dono_oficina.id_dono_oficina é PK e FK para usuario.id_usuario |
| Oficina administrada | oficina.fk_dono_oficina aponta para dono_oficina, não para outra oficina; oficinaId da sessão é ID da oficina, não do dono |
| Nome fixo da sessão | Não é identidade SQL e não deve criar usuario.nome automaticamente |
| Nome do responsável em cadastro real | dono_oficina.nome_responsavel; usuario também tem nome, email, senha e cidade |
| Propriedade da oficina | No backend, confirmar o dono autenticado pela FK em cada edição; não confiar no ID vindo do cliente |
| Horários por dia | Não há colunas separadas: serializar em oficina.horarios (VARCHAR 255). Editor limita cada trecho a 60 caracteres; composição completa cabe nesse limite |
| Serviços / categorias | servicos.nome e categoria, com relação registra; as listas de texto locais precisam de IDs da API |
| Status Rascunho/Publicada | Sem coluna correspondente; apenas visual, sem esconder ou publicar registros |
| origem, verificadoEm, fonteDosDados, autorizacaoPublicacao, whatsapp | Sem colunas equivalentes em oficina. dono_oficina.telefone é telefone do responsável, não deve ser tratado automaticamente como WhatsApp público |
| Bairro, cidade e UF da oficina | Sem colunas em oficina. usuario.cidade não substitui o endereço da oficina |
| Preferências de cidade/especialidades | Não existem em preferencias, que possui idioma, tamanho_letra, cor e fonte |

O esquema permite que o mesmo usuario pertença a entusiasta e dono_oficina; a escolha exclusiva dos botões é uma simplificação da demonstração. Uma pessoa dona pode ter várias oficinas: a FK não é UNIQUE. Uma avaliação exige fk_entusiasta, mesmo para um usuário que também seja dono. A sessão de exemplo não fornece nenhuma dessas identidades.

usuario.email e usuario.senha são NOT NULL: a sessão local não serve como inserção de usuário. O dump não impõe UNIQUE ao e-mail e não implementa hash por conter uma coluna chamada senha; essas decisões ficam para o backend. Não persistir senha em texto puro. O editor não pede CNPJ ou telefone; razao_social, complemento e o vínculo real do dono continuam fora dele.

### Verificação de compatibilidade

Comparação estática com as 15 tabelas de bancos/garagem.sql, sem executar SQL, importar dados ou alterar esquema. Campos VARCHAR/TEXT do catálogo que têm correspondência direta foram conferidos quanto a limites; estrelas são inteiras entre 1 e 5. As datas “a validar” precisam virar NULL e os slugs de guia precisam de associação aos IDs inteiros. Arrays de documentos precisam de serialização; fontes se relacionam a etapas por possui, não diretamente ao guia.

Os exemplos não podem ser inseridos diretamente: faltam FKs de usuário/dono/entusiasta e vários campos ainda não têm coluna. Isso não foi encoberto com IDs fictícios de usuários. Dados de protótipo não devem virar registros de empresas verificadas automaticamente.

### Testes deste incremento

256 verificações funcionais aprovadas em desktop e 256 em 390 px, incluindo entradas, abas e aria-current, bloqueios de rota, edição/restauração, limites dos horários, campos escapados, isolamento entre oficinas e metadados descartados. O cadastro de dono abre a escolha das duas oficinas. Nove verificações de recarga confirmam sessão e edição persistidas, favoritos/checklist mantidos e cadastro vazio. Os testes usam navegador isolado, sem dados pessoais.

A revisão visual reorganizou o login em duas colunas no desktop e uma no celular, ampliou os alvos de toque e destacou o foco do teclado na seleção do perfil. As regras de movimento reduzido continuam ativas. O verificador geral da Taste retornou `GATE: ERROR` ao iniciar o Chrome no ambiente restrito. O verificador de layout executado separadamente gerou capturas da página inicial a 390, 768, 1024 e 1440 px e apontou diferenças de alinhamento interno e de altura em relação ao padrão de uma seção por tela. A página inicial preserva a estrutura solicitada. Os três avisos do Impeccable sobre bordas laterais correspondem a marcações de aviso, orientação e erro.

### Comparação com o banco planejado garagem2

O inventário exportado em 12/11 registra zero tabelas no dump de garagem2. O arquivo `bancos/garagem2-rascunho-nao-executado.sql`, atualizado em 17/11, descreve 15 tabelas em inglês. A comparação abaixo usa esse rascunho. O mapeamento em português acima se refere ao dump de `garagem`, onde 313 valores textuais do catálogo couberam nos limites examinados. O texto completo dos três horários editados chega a 218 caracteres para uma coluna de 255 nos dois esquemas.

| Informação na tela | Destino previsto em garagem2 | Resultado da conferência |
|---|---|---|
| Login e edição da oficina | `users`, `enthusiast`, `workshop_owners`, `workshops.fk_owner` | Os perfis reutilizam o ID de usuário. A sessão do navegador não fornece e-mail único, hash de senha nem vínculo autenticado. |
| Endereço e contato | `workshops.neighborhood`, `city`, `state_code`, `postal_code`, `public_phone` | Bairro, cidade e UF dos dez exemplos cabem nas colunas. Oito CEPs fictícios usam hífen, que precisa ser removido para CHAR(8). Os dois perfis do Figma não informam CEP. O telefone comercial e o telefone privado do dono têm finalidades distintas. |
| Cadastro de oficina | `workshops.legal_name`, `cnpj`, `fk_owner` | Obrigatórios. Os exemplos não fornecem esses três dados para uma inserção. O sinal de verificação, a autorização, o status de publicação e a indicação de WhatsApp ainda precisam de modelagem. |
| Custos de guias e etapas | `guides.estimated_cost`, `steps.estimated_cost` | São DECIMAL(12,2). As 11 faixas de guia e as 33 de etapa têm dois extremos. Preservar o intervalo e a marca de exemplo exige uma decisão de modelagem. |
| Regularização e fontes | `legalizations.last_reviewed_on`, `sources.consulted_on`, `steps`, `step_sources` | Ambas as datas são obrigatórias. Há 11 ocorrências de “a validar” em cada campo. Para gravar, obter datas verificadas ou revisar a nulabilidade. As etapas locais têm números positivos sem repetição por roteiro. |
| Serviços, imagens e avaliações | `services`, `workshop_services`, `photos`, `reviews` | Serviços precisam de categoria e IDs. Metadados do seletor não geram arquivo em `image_path`. Uma avaliação exige entusiasta e oficina, com um registro por par. Os totais do Figma e os comentários ilustrativos permanecem no protótipo. |
| Perfil, histórico e conteúdo editorial | `preferences`, `accesses`, `guides` | Preferências SQL cobrem idioma e apresentação. O histórico registra a última visita por usuário e guia. Favoritos, checklists, interesses e listas editoriais ainda precisam de armazenamento próprio se forem sincronizados. |

O site continua estático. A conferência leu os arquivos e exercitou as telas no navegador. Nenhum SQL foi executado e nenhuma conexão de login ou gravação no banco foi testada.

### Pendências do responsável

- Oficinas reais: autorização de publicação, fonte, data de verificação, endereço, horários, contato público e imagens autorizadas.
- Conteúdo legal, custos e prazos continuam a validar.
- Backend: autenticação, hash de senha, sessão real, autorização pela FK do dono, cadastros transacionais e avaliações vinculadas a entusiastas.
- Modelo de dados: decidir colunas/entidades para origem/verificação, endereço completo, status, preferências, conteúdo editorial, favoritos e checklists. Nenhuma migração foi executada.

## Referências

- Referência legal mantida: https://www.gov.br/transportes/pt-br/assuntos/transito/conteudo-contran/resolucao-contran-no-916-de-28-de-marco-de-2022
- Cálculo do CNPJ, Receita Federal: https://www.gov.br/receitafederal/pt-br/centrais-de-conteudo/publicacoes/documentos-tecnicos/cnpj/manual-dv-cnpj.pdf

O MANIFESTO.sha256 da raiz pertence ao pacote original. Ele não foi atualizado, pois esta tarefa está limitada à pasta do site.
