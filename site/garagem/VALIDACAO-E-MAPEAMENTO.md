# Site Garagem — entrega e correspondência com o banco

Edição de 16/11/2026. Alterações limitadas a `site/garagem/`, sem modificar Java, bancos ou diagramas. Paleta, fontes e assets preservados. HTML/CSS/JS puros; nenhum pacote, build ou backend necessário.

## Arquivos e funcionalidades

- **dados.js (novo):** 11 guias e oito oficinas fictícias em objetos JS simples.
- **app.js:** páginas por hash, filtros, detalhes, checklist específico, avaliações e cadastro demonstrativo.
- **index.html:** carrega dados.js antes de app.js e oferece acesso ao cadastro demonstrativo pelo rodapé.
- **style.css:** extensões para acomodar conteúdo, selos, perfis e formulários; variáveis originais de :root preservadas.
- **LEIA-ME.txt:** instruções de execução e limites atualizados.
- **VALIDACAO-E-MAPEAMENTO.md (novo):** esta documentação.

Rotas: `#guias`, `#guia/turbo`, `#salvos`, `#oficinas`, `#oficina/5`, `#oficina/5/avaliacoes` e `#cadastro`. Outros IDs de guias/oficinas seguem o mesmo padrão. Endereços inexistentes exibem estado de não encontrado.

Os seis IDs antigos dos guias foram preservados, mantendo favoritos existentes. Checklist novo usa chaves v2: marcações antigas não devem significar que os novos requisitos já foram revisados. Cada chave inclui o requisito textual, de modo que editar um requisito exige conferi-lo novamente.

## Filtros de oficinas

Busca, cidade, serviço, nota e distância são combinados (AND). Especialidades marcadas são alternativas entre si (OR). O botão Ver resultados aplica o painel; reabri-lo descarta edições não aplicadas. Limpar restaura todos os filtros, inclusive a busca. A opção de mostrar exemplos continua separada.

Ordenação: distância crescente, nota decrescente ou total de avaliações decrescente; empates por nome. Notas e totais correspondem aos relatos de cada exemplo.

Distância é simulada, sem geolocalização: até 1, 2, 3, 4, 5, 10 ou 15 km, e 20 km ou mais (>=20). Todas inclui também a faixa entre 15 e 20 km. Distâncias entre perfis de cidades diferentes não são distâncias reais a partir do visitante.

## Cadastro e avaliações: somente demonstração

Usuário tem a etapa de responsável. Dono de oficina tem cinco: responsável, dados da oficina, endereço, serviços e horários, logo e fotos. Não existe campo de senha, login ou criação de conta.

Os campos ficam apenas nos controles enquanto a demonstração está aberta. O site não grava nem envia e-mail, dados ou arquivos. Trocar de tipo de conta, sair da página, cancelar ou concluir descarta os campos; pagehide também limpa o formulário. Apenas favoritos e checklists usam localStorage. Nenhum formulário usa sessionStorage, cookies ou banco.

Validações: campos obrigatórios, e-mail por sintaxe, CEP por formato de oito dígitos, CNPJ por formato e dígitos verificadores (numérico e alfanumérico). Não há consulta cadastral, validação de titularidade nem consulta de CEP. Arquivos opcionais: um logo e até seis fotos PNG/JPEG/WebP, até 5 MB cada. Apenas metadados são conferidos; não há leitura de conteúdo, prévia ou upload.

Avaliações completas são relatos fictícios, sem opção de publicar. WhatsApp está desativado com a legenda de contato indisponível.

## Pendências de validação

1. **Legalidade:** todos os selos e roteiros são editoriais e a validar. O detalhe explica o escopo de cada selo. “Permitida” em Rodas e pneus refere-se à hipótese de reposição equivalente, não a qualquer alteração. Confirmar admissibilidade, veículo/categoria, autorização prévia, documentos, inspeção/CSV e sequência no órgão competente.
2. **Normas:** referência 916/2022 mantida conforme pedido. TODO em dados.js pede conferir a divergência 953/2022 do Figma, alterações posteriores e normas específicas de iluminação, ruído, emissões etc. Localizar a referência oficial não equivale a validar os guias.
3. **Datas:** dataConsulta e dataAtualizacao permanecem “a validar”; edição do código não é revisão jurídica.
4. **Custos:** faixas de projeto são exemplos fictícios, identificados assim em cards e detalhes. Não são cotações. Valores das etapas permanecem a validar; não foram inventadas taxas oficiais. Confirmar se inspeção e CSV têm cobrança conjunta antes de apresentar estimativas.
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

- **Guias:** situacaoLegal, oQueE, beneficios[], pontosAtencao[], enquadramento, statusConteudo, custoObservacao, art e color. Não sobrecarregar descricao silenciosamente para guardar esses campos.
- **Oficinas:** bairro, cidade, uf, especialidade, distanciaKm e ficticia. usuario.cidade NÃO representa a cidade da oficina. Especialidade principal não está definida pelo esquema de serviços.
- **Avaliações:** autor como nome de exibição e ficticia. Falta vínculo a um entusiasta real.
- **Favoritos/checklists/filtros:** não há tabelas equivalentes. acessa registra consultas, não favoritos ou checklist.

### Colunas SQL ausentes no catálogo local

- oficina.razao_social, cnpj, logo, complemento e fk_dono_oficina. Razão social/CNPJ só aparecem no formulário descartável; seleção de logo não cria URL salva. Não foram inventados donos de oficina.
- fotos.id_foto, imagem e fk_oficina: não há galeria persistida; escolher arquivo no formulário não cria registro nem caminho de imagem.
- servicos.id_servico, descricao e categoria não estão modelados na lista de nomes.
- avaliacao.fk_entusiasta é obrigatório; não se pode inserir os relatos fictícios sem resolver essa relação.
- dono_oficina.nome_responsavel e usuario.nome/email têm relação conceitual com os controles do formulário. Nenhum valor é persistido. usuario.senha não tem campo correspondente nesta demonstração.

## Verificação

- node --check em app.js e dados.js.
- 91 verificações funcionais em Chrome headless: 11 páginas de guias, checklists, busca sem acento, selos, favoritos, oito perfis, filtros combinados, ordenações, avaliações completas, rotas inválidas, formulário de usuário e cinco etapas da oficina, CNPJ/CEP/e-mail, arquivo inválido e descarte de dados.
- Em viewport efetivo de 390 px: 127 verificações, incluindo o fluxo funcional e checagem de transbordamento em cada rota visitada. O teste usa iframe isolado porque Chrome headless impõe largura mínima de janela de 500 px.
- Nova carga: favorito e checklist preservados; cadastro vazio (três verificações adicionais).
- Capturas de guia, perfil e cadastro revisadas. Testes usam perfil temporário isolado, sem tocar no navegador pessoal.
- Não foi validada a legalidade dos roteiros nem dados de empresas reais; não existem nesse catálogo.

## Referências

- Referência legal mantida: https://www.gov.br/transportes/pt-br/assuntos/transito/conteudo-contran/resolucao-contran-no-916-de-28-de-marco-de-2022
- Cálculo do CNPJ, Receita Federal: https://www.gov.br/receitafederal/pt-br/centrais-de-conteudo/publicacoes/documentos-tecnicos/cnpj/manual-dv-cnpj.pdf

O MANIFESTO.sha256 da raiz pertence ao pacote original. Ele não foi atualizado, pois esta tarefa está limitada à pasta do site.
