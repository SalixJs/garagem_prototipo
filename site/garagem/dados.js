'use strict';
// Roteiro editorial: TODO validar TODOS os textos, classificações, documentos e faixas.
// As faixas são exemplos fictícios; não são pesquisa de preços nem taxas oficiais.
// TODO conferir a referência 916/2022, alterações vigentes e a divergência 953/2022 no Figma.
// dataConsulta/dataAtualizacao permanecem 'a validar' até revisão humana.
const guias = [
  {
    "id": "suspensao",
    "titulo": "Suspensão e rebaixamento",
    "categoria": "Suspensão",
    "art": "suspension",
    "color": "",
    "custoEstimado": "R$ 3.000 a 10.000",
    "situacaoLegal": "exige-regularizacao",
    "descricao": "Planeje a altura, o curso e o conjunto de suspensão antes de escolher as peças.",
    "oQueE": "A suspensão sustenta o peso do carro e permite que as rodas acompanhem as irregularidades do piso. As molas recebem o movimento, enquanto os amortecedores controlam a oscilação que vem depois. Rebaixar pode reduzir o espaço disponível para esse trabalho, por isso as peças precisam ser escolhidas como um conjunto compatível. Na prática, o projeto deve considerar passageiros, bagagem, rampas e o estado das ruas, além da aparência com o veículo parado.",
    "beneficios": [
      "Adequar a resposta do conjunto ao uso planejado, com molas e amortecedores compatíveis.",
      "Escolher uma postura visual coerente com as condições de uso a confirmar.",
      "Organizar a revisão de componentes desgastados junto do projeto, evitando retrabalho.",
      "Definir critérios de conforto e comportamento para comparar o resultado com a configuração anterior."
    ],
    "pontosAtencao": [
      "Curso insuficiente pode causar impactos nos batentes e contato de partes do carro com o solo.",
      "Mudanças de geometria podem provocar desgaste irregular dos pneus; peça avaliação e plano de revisão do alinhamento.",
      "Confira folgas de pneus, mangueiras e peças também com esterço e carga.",
      "Peça ao órgão de trânsito a relação escrita de autorização, inspeção e documentos aplicáveis antes da instalação.",
      "Descreva a alteração à seguradora e pergunte por escrito como ela afeta aceitação e cobertura."
    ],
    "enquadramento": "Rótulo editorial para uma alteração de altura. Tipo de sistema, veículo e condições precisam ser confirmados com o órgão de trânsito.",
    "exigeRegularizacao": true,
    "statusConteudo": "conteúdo a validar",
    "custoObservacao": "Faixa fictícia de exemplo, a validar. Não é cotação nem valor oficial.",
    "legalizacao": {
      "dataAtualizacao": "a validar",
      "etapas": [
        {
          "numero": 1,
          "titulo": "Definir a altura e consultar o procedimento",
          "descricao": "Prepare uma ficha com modelo, ano, rodas atuais, carga habitual e altura pretendida. Leve-a com o documento do veículo e a identificação do kit ao canal oficial do órgão de trânsito; peça por escrito a admissibilidade da configuração e os passos prévios à instalação. Guarde o protocolo e não trate a resposta informal da oficina como autorização.",
          "documentosNecessarios": [
            "Ficha com modelo, ano e configuração original",
            "Descrição do kit e da altura pretendida"
          ],
          "valor": "R$ 100 a 250 (exemplo)",
          "valorExemplo": true
        },
        {
          "numero": 2,
          "titulo": "Documentar a instalação e a inspeção",
          "descricao": "Peça à oficina orçamento com peças, montagem, alinhamento e revisão, acompanhado das especificações de aplicação. Quando a orientação do órgão exigir inspeção, procure uma entidade habilitada para o serviço e solicite a lista de documentos e condições de apresentação do veículo. Arquive ordem de serviço, comprovantes e resultados da avaliação.",
          "documentosNecessarios": [
            "Especificação de molas e amortecedores",
            "Comprovantes de peças e serviço a consultar"
          ],
          "valor": "R$ 300 a 600 (exemplo)",
          "valorExemplo": true
        },
        {
          "numero": 3,
          "titulo": "Conferir o registro da alteração",
          "descricao": "Apresente ao órgão responsável os comprovantes indicados, incluindo inspeção e CSV quando exigidos. Peça protocolo e confira se as características registradas correspondem ao projeto executado. Guarde também a orientação escrita sobre o uso enquanto o procedimento estiver em andamento.",
          "documentosNecessarios": [
            "Relatório da inspeção, quando exigido",
            "CSV e documento do veículo, conforme orientação"
          ],
          "valor": "R$ 150 a 350 (exemplo)",
          "valorExemplo": true
        }
      ]
    },
    "fonte": {
      "nome": "Resolução CONTRAN nº 916/2022",
      "orgao": "CONTRAN / Senatran",
      "referencia": "https://www.gov.br/transportes/pt-br/assuntos/transito/conteudo-contran/resolucao-contran-no-916-de-28-de-marco-de-2022",
      "dataConsulta": "a validar"
    },
    "perguntasParaOficina": [
      "Qual conjunto é compatível com meu modelo e a carga que costumo levar?",
      "Como vocês verificam curso, folgas e contato dos pneus com a carroceria?",
      "O orçamento inclui alinhamento, peças de desgaste e revisão após a instalação?",
      "Quais especificações e comprovantes do serviço serão entregues?",
      "Que condições de uso e manutenção constarão na ordem de serviço?"
    ],
    "errosComuns": [
      "Escolher a altura apenas por fotos de outro carro.",
      "Comprar molas e amortecedores sem avaliar a combinação do conjunto.",
      "Procurar o procedimento documental somente depois da modificação."
    ]
  },
  {
    "id": "rodas",
    "titulo": "Rodas e pneus",
    "categoria": "Rodas e pneus",
    "art": "wheels",
    "color": "orange",
    "custoEstimado": "R$ 2.000 a 8.000",
    "situacaoLegal": "permitida",
    "descricao": "Compare medidas, capacidade de carga e compatibilidade do conjunto.",
    "oQueE": "A roda sustenta o pneu, e o pneu é a parte do conjunto que toca o piso durante a condução. As medidas descrevem dimensões, mas o encaixe também depende da furação, do apoio e da posição da roda em relação à suspensão. Um conjunto pode caber com o carro parado e encostar em peças ao esterçar ou carregar passageiros. Comece comparando a proposta com as especificações originais e distinguindo reposição equivalente de alteração de medidas.",
    "beneficios": [
      "Escolher pneus compatíveis com a carga e com o tipo de uso previsto para o veículo.",
      "Revisar válvulas, fixações e estado das rodas junto da substituição de pneus.",
      "Personalizar o desenho das rodas mantendo uma aplicação tecnicamente estudada.",
      "Comparar conforto, disponibilidade de reposição e manutenção antes da compra."
    ],
    "pontosAtencao": [
      "Furação, apoio ou fixadores incompatíveis podem comprometer a montagem, mesmo que a roda pareça encaixar.",
      "Mudanças de dimensões podem afetar leitura de velocidade e interação com sistemas eletrônicos.",
      "Confira folgas e índices de carga e velocidade para a aplicação, não apenas o diâmetro.",
      "Combine revisão de fixações, balanceamento e alinhamento conforme as instruções dos fabricantes.",
      "Consulte o órgão e a seguradora quando houver alteração; o selo editorial de reposição equivalente não autoriza qualquer medida."
    ],
    "enquadramento": "Hipótese editorial: reposição equivalente à especificação original. Alterações de medida exigem uma consulta específica; este selo não é autorização.",
    "exigeRegularizacao": false,
    "statusConteudo": "conteúdo a validar",
    "custoObservacao": "Faixa fictícia de exemplo, a validar. Não é cotação nem valor oficial.",
    "legalizacao": {
      "dataAtualizacao": "a validar",
      "etapas": [
        {
          "numero": 1,
          "titulo": "Registrar o conjunto original",
          "descricao": "Fotografe as inscrições dos pneus e reúna manual, documento do veículo e identificação das rodas atuais. Peça à oficina uma ficha comparando a configuração original e a proposta, com medidas e índices separados. Registre se o objetivo é reposição equivalente ou alteração de características.",
          "documentosNecessarios": [
            "Ficha do veículo e especificações do manual",
            "Medidas e índices do pneu original"
          ],
          "valor": "R$ 80 a 180 (exemplo)",
          "valorExemplo": true
        },
        {
          "numero": 2,
          "titulo": "Comparar o novo conjunto",
          "descricao": "Apresente as fichas técnicas a um profissional responsável pela aplicação e peça uma análise escrita de encaixe, folgas e fixação. Se houver mudança de características, encaminhe a comparação ao órgão de trânsito antes da compra e solicite a orientação documental. Guarde a resposta junto do orçamento.",
          "documentosNecessarios": [
            "Ficha técnica da roda pretendida",
            "Ficha técnica dos pneus pretendidos"
          ],
          "valor": "R$ 150 a 300 (exemplo)",
          "valorExemplo": true
        },
        {
          "numero": 3,
          "titulo": "Confirmar montagem e necessidade de registro",
          "descricao": "Autorize a montagem depois de resolver a compatibilidade e o procedimento aplicável. Peça ordem de serviço identificando peças, serviços e orientações de revisão; se houver inspeção ou atualização exigida, apresente os documentos e guarde o protocolo. Na retirada, confira se o conjunto corresponde ao orçamento.",
          "documentosNecessarios": [
            "Orçamento de montagem e balanceamento",
            "Orientação do órgão sobre a mudança de medidas"
          ],
          "valor": "R$ 200 a 450 (exemplo)",
          "valorExemplo": true
        }
      ]
    },
    "fonte": {
      "nome": "Resolução CONTRAN nº 916/2022",
      "orgao": "CONTRAN / Senatran",
      "referencia": "https://www.gov.br/transportes/pt-br/assuntos/transito/conteudo-contran/resolucao-contran-no-916-de-28-de-marco-de-2022",
      "dataConsulta": "a validar"
    },
    "perguntasParaOficina": [
      "Quais especificações do manual serão usadas na comparação?",
      "Como são conferidos furação, apoio, fixadores e espaço para as pinças?",
      "A checagem de folgas inclui esterço e condição de carga?",
      "O orçamento identifica modelo, medidas e índices dos pneus, além dos serviços?",
      "Que orientação de revisão e conservação receberei por escrito?"
    ],
    "errosComuns": [
      "Escolher o conjunto somente pelo diâmetro da roda.",
      "Tratar encaixe físico como prova de compatibilidade e regularidade.",
      "Ignorar disponibilidade e custo dos pneus de reposição."
    ]
  },
  {
    "id": "cor",
    "titulo": "Pintura e envelopamento",
    "categoria": "Visual",
    "art": "paint",
    "color": "slate",
    "custoEstimado": "R$ 2.500 a 12.000",
    "situacaoLegal": "exige-regularizacao",
    "descricao": "Defina a cor, a área de cobertura e o acabamento do seu projeto.",
    "oQueE": "A pintura forma um revestimento sobre a carroceria depois da preparação da superfície. O envelopamento aplica uma película adesiva sobre o acabamento existente, no carro inteiro ou em partes. O resultado depende do material, da condição da base e da execução de bordas, recortes e emendas. Antes de escolher a cor, registre as áreas que serão cobertas e avalie com o prestador se há repintura, descascamento ou outros defeitos a tratar.",
    "beneficios": [
      "Renovar a aparência dos painéis com um acabamento previamente definido.",
      "Comparar cores e texturas por amostras físicas antes da contratação.",
      "No envelopamento, experimentar outra aparência com possibilidade de remoção conforme material e condição da base.",
      "Planejar o trabalho por áreas, com preparação e cuidados posteriores documentados."
    ],
    "pontosAtencao": [
      "A remoção do adesivo pode destacar uma pintura já comprometida; registre a condição inicial.",
      "Desmontagem inadequada pode danificar presilhas, borrachas, sensores e acabamentos.",
      "Peça instruções de cura, lavagem, conservação e garantia específicas do material.",
      "Solicite ao órgão orientação escrita sobre a mudança de cor, sem adotar percentuais não validados neste roteiro.",
      "Consulte a seguradora sobre a alteração visual e os comprovantes necessários para avaliar a cobertura."
    ],
    "enquadramento": "Hipótese editorial para mudança da cor registrada. Adesivos pontuais e alterações parciais precisam de avaliação própria.",
    "exigeRegularizacao": true,
    "statusConteudo": "conteúdo a validar",
    "custoObservacao": "Faixa fictícia de exemplo, a validar. Não é cotação nem valor oficial.",
    "legalizacao": {
      "dataAtualizacao": "a validar",
      "etapas": [
        {
          "numero": 1,
          "titulo": "Descrever a nova cor",
          "descricao": "Fotografe o carro e marque as áreas que receberão pintura ou película. Leve as imagens e o documento do veículo ao órgão de trânsito, descreva a cor final e peça por escrito os casos de atualização e as providências anteriores ao serviço. Guarde a resposta sem presumir dispensa por cobertura parcial.",
          "documentosNecessarios": [
            "Fotos da cor atual",
            "Esboço das áreas e da cor pretendida"
          ],
          "valor": "R$ 80 a 200 (exemplo)",
          "valorExemplo": true
        },
        {
          "numero": 2,
          "titulo": "Consultar a atualização documental",
          "descricao": "Apresente à oficina as áreas, a cor e a orientação recebida. Peça orçamento com preparação, desmontagens, material, prazo e garantia, acompanhado de fotos dos defeitos preexistentes. Se houver vistoria indicada, solicite ao órgão a lista de comprovantes que o prestador deverá fornecer.",
          "documentosNecessarios": [
            "Documento do veículo",
            "Orientação recebida para alteração de cor"
          ],
          "valor": "R$ 200 a 500 (exemplo)",
          "valorExemplo": true
        },
        {
          "numero": 3,
          "titulo": "Guardar os comprovantes do acabamento",
          "descricao": "Na retirada, compare o acabamento com a ordem de serviço e peça comprovantes e instruções de conservação. Quando houver atualização exigida, apresente os documentos, acompanhe o protocolo e confira a informação de cor no registro concluído. Arquive fotos finais junto dos documentos do projeto.",
          "documentosNecessarios": [
            "Comprovante do serviço, se solicitado",
            "Resultado de vistoria, quando exigida"
          ],
          "valor": "R$ 150 a 300 (exemplo)",
          "valorExemplo": true
        }
      ]
    },
    "fonte": {
      "nome": "Resolução CONTRAN nº 916/2022",
      "orgao": "CONTRAN / Senatran",
      "referencia": "https://www.gov.br/transportes/pt-br/assuntos/transito/conteudo-contran/resolucao-contran-no-916-de-28-de-marco-de-2022",
      "dataConsulta": "a validar"
    },
    "perguntasParaOficina": [
      "Vocês fotografam a pintura e as peças que serão desmontadas?",
      "Qual material e acabamento estarão identificados no orçamento?",
      "Como serão tratados bordas, emendas, recortes e áreas internas?",
      "Quais condições de limpeza, garantia e remoção serão entregues por escrito?",
      "O prazo inclui preparação e conferência final comigo?"
    ],
    "errosComuns": [
      "Escolher a cor apenas pela tela, sem conferir amostra.",
      "Esperar que uma película corrija defeitos da superfície.",
      "Confundir garantia do material com garantia irrestrita da pintura original."
    ]
  },
  {
    "id": "motor",
    "titulo": "Motor e potência",
    "categoria": "Performance",
    "art": "engine",
    "color": "slate",
    "custoEstimado": "R$ 5.000 a 25.000",
    "situacaoLegal": "exige-regularizacao",
    "descricao": "Diferencie troca do motor, reparação e alteração de características.",
    "oQueE": "O motor transforma energia do combustível em movimento, que chega às rodas pela transmissão. Um projeto pode envolver reparação, substituição do motor ou mudanças em componentes que alteram sua entrega de força. Essas situações não são equivalentes: é preciso identificar o que será mantido, trocado e avaliado. Antes de buscar potência, a oficina deve conhecer o estado atual e considerar alimentação, arrefecimento, transmissão e freios no planejamento.",
    "beneficios": [
      "Definir uma entrega de força coerente com o uso pretendido.",
      "Separar defeitos de manutenção das mudanças desejadas por meio de diagnóstico inicial.",
      "Planejar componentes compatíveis entre motor, transmissão e arrefecimento.",
      "Registrar a configuração final para facilitar revisões e reposição das peças."
    ],
    "pontosAtencao": [
      "Origem ou identificação incerta pode inviabilizar a documentação; peça comprovantes antes da compra.",
      "Mais esforço e calor podem expor limitações da transmissão, lubrificação e arrefecimento.",
      "Alterações de alimentação e controle podem afetar funcionamento e emissões; combine avaliação profissional.",
      "Obtenha orientação prévia sobre admissibilidade, autorização, inspeção e registro do projeto.",
      "Peça resposta escrita da seguradora sobre a configuração e um plano de manutenção da oficina."
    ],
    "enquadramento": "Roteiro de consulta para alteração de características; a classificação não resolve a viabilidade de um projeto específico.",
    "exigeRegularizacao": true,
    "statusConteudo": "conteúdo a validar",
    "custoObservacao": "Faixa fictícia de exemplo, a validar. Não é cotação nem valor oficial.",
    "legalizacao": {
      "dataAtualizacao": "a validar",
      "etapas": [
        {
          "numero": 1,
          "titulo": "Identificar a mudança e sua procedência",
          "descricao": "Monte uma ficha separando motor atual, mudança pretendida e procedência dos componentes. Leve-a ao órgão de trânsito com o documento do veículo e solicite orientação escrita sobre identificação, comprovantes de origem e requisitos prévios. Peça à oficina um diagnóstico da condição atual antes de comprar peças.",
          "documentosNecessarios": [
            "Identificação do motor atual",
            "Descrição e procedência do motor ou componentes propostos"
          ],
          "valor": "R$ 200 a 400 (exemplo)",
          "valorExemplo": true
        },
        {
          "numero": 2,
          "titulo": "Planejar avaliação técnica",
          "descricao": "Apresente orientação e diagnóstico ao responsável pelo projeto e peça orçamento com configuração, interfaces com outros sistemas e critérios de avaliação. Quando houver inspeção exigida, procure entidade habilitada para a aplicação e peça a lista escrita de documentos e condições para apresentar o veículo. Registre compras e instalação em comprovantes identificáveis.",
          "documentosNecessarios": [
            "Memorial do projeto de motor",
            "Comprovantes de componentes e instalação a consultar"
          ],
          "valor": "R$ 400 a 800 (exemplo)",
          "valorExemplo": true
        },
        {
          "numero": 3,
          "titulo": "Conferir identificação e registro",
          "descricao": "Organize comprovantes de origem, relatórios e certificado quando exigido e apresente-os ao órgão. Peça protocolo e confira identificação e características no resultado do registro. Receba da oficina a lista de componentes e o plano de revisão e encaminhe a configuração à seguradora.",
          "documentosNecessarios": [
            "Documentos de procedência solicitados",
            "Resultados de inspeção e CSV, quando exigidos"
          ],
          "valor": "R$ 200 a 450 (exemplo)",
          "valorExemplo": true
        }
      ]
    },
    "fonte": {
      "nome": "Resolução CONTRAN nº 916/2022",
      "orgao": "CONTRAN / Senatran",
      "referencia": "https://www.gov.br/transportes/pt-br/assuntos/transito/conteudo-contran/resolucao-contran-no-916-de-28-de-marco-de-2022",
      "dataConsulta": "a validar"
    },
    "perguntasParaOficina": [
      "Que diagnóstico será feito antes de propor troca ou preparação?",
      "Como serão comprovadas a origem e a identificação das peças?",
      "Quais outros sistemas precisam ser avaliados para o motor proposto?",
      "O orçamento separa peças, montagem, avaliação e serviços adicionais?",
      "Que relatório da configuração e plano de manutenção serão entregues?"
    ],
    "errosComuns": [
      "Comprar o motor antes de verificar origem e compatibilidade.",
      "Usar potência anunciada como único critério de escolha.",
      "Autorizar serviços adicionais sem registrar escopo e orçamento revisados."
    ]
  },
  {
    "id": "iluminacao",
    "titulo": "Iluminação",
    "categoria": "Visual",
    "art": "light",
    "color": "",
    "custoEstimado": "R$ 300 a 4.000",
    "situacaoLegal": "restricao-relevante",
    "descricao": "Verifique o sistema óptico e a aplicação antes de trocar lâmpadas ou faróis.",
    "oQueE": "A iluminação reúne a fonte de luz, as peças ópticas e a regulagem que direciona o facho. O farol foi projetado para distribuir a luz de determinada forma, não apenas para produzir brilho. Uma lâmpada que encaixa no soquete pode iluminar de modo diferente do previsto e ofuscar outras pessoas. Comece identificando o conjunto original e distinguindo reposição compatível de mudança de tecnologia ou função.",
    "beneficios": [
      "Recuperar a iluminação de componentes desgastados com reposição adequada.",
      "Corrigir problemas de regulagem, vedação ou conexão encontrados na avaliação.",
      "Planejar conservação de lentes e componentes em vez de trocar peças por tentativa.",
      "Comparar alternativas pela aplicação e distribuição da luz, não só pelo brilho anunciado."
    ],
    "pontosAtencao": [
      "Fonte incompatível pode criar ofuscamento e áreas mal iluminadas mesmo parecendo mais forte.",
      "Adaptações elétricas podem sobrecarregar conexões ou prejudicar vedação.",
      "Cor, função e tecnologia exigem verificação específica, e certas propostas podem não ser admitidas.",
      "Guarde identificação das peças e orientação oficial; inspeção posterior não garante regularização de qualquer troca.",
      "Combine revisão da regulagem e consulte a seguradora sobre mudanças no conjunto óptico."
    ],
    "enquadramento": "Alerta editorial sobre substituição de tecnologia ou características do sistema. Consultar regras específicas de iluminação além da referência geral.",
    "exigeRegularizacao": true,
    "statusConteudo": "conteúdo a validar",
    "custoObservacao": "Faixa fictícia de exemplo, a validar. Não é cotação nem valor oficial.",
    "legalizacao": {
      "dataAtualizacao": "a validar",
      "etapas": [
        {
          "numero": 1,
          "titulo": "Identificar o sistema óptico",
          "descricao": "Reúna manual, identificação do farol e fotos das marcações das peças. Peça à oficina diagnóstico de regulagem, conexões e estado do conjunto antes de discutir troca. Solicite proposta escrita indicando se é reposição equivalente ou alteração de características.",
          "documentosNecessarios": [
            "Identificação do farol original",
            "Especificação da fonte luminosa prevista no manual"
          ],
          "valor": "R$ 80 a 180 (exemplo)",
          "valorExemplo": true
        },
        {
          "numero": 2,
          "titulo": "Consultar a admissibilidade da troca",
          "descricao": "Leve proposta e ficha técnica do componente ao canal oficial do órgão de trânsito. Pergunte sobre admissibilidade, regulamentação específica e documentos anteriores ao serviço; peça resposta ou protocolo por escrito. Se a solução não for admitida ou estiver indefinida, reveja a proposta antes de comprar.",
          "documentosNecessarios": [
            "Ficha técnica do conjunto pretendido",
            "Resposta sobre aplicação e procedimento"
          ],
          "valor": "R$ 100 a 250 (exemplo)",
          "valorExemplo": true
        },
        {
          "numero": 3,
          "titulo": "Verificar regulagem e documentação",
          "descricao": "Para uma aplicação admitida, peça ordem de serviço identificando peças e registros de avaliação e regulagem. Se houver inspeção ou atualização indicada, apresente os comprovantes e acompanhe o protocolo. Na entrega, receba instruções de revisão sem usar apenas a percepção de brilho como critério de aceitação.",
          "documentosNecessarios": [
            "Registro de regulagem e serviço",
            "Orientação documental específica para iluminação"
          ],
          "valor": "R$ 150 a 350 (exemplo)",
          "valorExemplo": true
        }
      ]
    },
    "fonte": {
      "nome": "Resolução CONTRAN nº 916/2022",
      "orgao": "CONTRAN / Senatran",
      "referencia": "https://www.gov.br/transportes/pt-br/assuntos/transito/conteudo-contran/resolucao-contran-no-916-de-28-de-marco-de-2022",
      "dataConsulta": "a validar"
    },
    "perguntasParaOficina": [
      "Qual identificação do farol e da fonte luminosa é prevista para meu carro?",
      "O orçamento distingue reposição equivalente de mudança de tecnologia?",
      "Como serão verificadas distribuição do facho, regulagem e vedação?",
      "A proposta altera chicote ou conectores, e por qual motivo?",
      "Quais especificações e registros do serviço serão entregues?"
    ],
    "errosComuns": [
      "Escolher a lâmpada apenas pela cor ou brilho da propaganda.",
      "Presumir compatibilidade porque soquete e conector encaixam.",
      "Instalar antes de verificar se a aplicação é admitida."
    ]
  },
  {
    "id": "carroceria",
    "titulo": "Carroceria e acessórios",
    "categoria": "Visual",
    "art": "body",
    "color": "orange",
    "custoEstimado": "R$ 500 a 10.000",
    "situacaoLegal": "restricao-relevante",
    "descricao": "Avalie fixação, dimensões e interferências de cada acessório externo.",
    "oQueE": "A carroceria dá forma ao veículo e abriga componentes de proteção, visibilidade e fixação de acessórios. Uma peça decorativa tem impactos diferentes de um suporte de carga ou de uma intervenção com corte e solda. O projeto precisa mostrar onde cada peça ficará e o que muda nas dimensões e no uso do carro. Não é possível avaliar todos os acessórios pela aparência nem aplicar a mesma orientação às alterações estruturais.",
    "beneficios": [
      "Planejar uma função de transporte ou apoio compatível com o uso pretendido.",
      "Personalizar a aparência com aplicação e fixação previamente definidas.",
      "Identificar interferências e custos antes de comprar acessórios isoladamente.",
      "Documentar peças e pontos de instalação para manutenção e eventual remoção."
    ],
    "pontosAtencao": [
      "Furos, cortes e soldas podem afetar estrutura e proteção contra corrosão.",
      "Avalie interferências em luzes, placa, sensores, visibilidade e abertura das partes móveis.",
      "Fixações, quinas e projeções podem criar riscos; peça análise de aplicação e carga.",
      "Apresente o desenho ao órgão de trânsito antes da intervenção e peça as exigências do escopo específico.",
      "Combine revisão das fixações e consulte a seguradora por escrito sobre a cobertura."
    ],
    "enquadramento": "Alerta editorial para intervenções em estrutura, dimensões e segurança. Não significa que todo acessório seja proibido.",
    "exigeRegularizacao": true,
    "statusConteudo": "conteúdo a validar",
    "custoObservacao": "Faixa fictícia de exemplo, a validar. Não é cotação nem valor oficial.",
    "legalizacao": {
      "dataAtualizacao": "a validar",
      "etapas": [
        {
          "numero": 1,
          "titulo": "Inventariar as peças externas",
          "descricao": "Liste acessórios com fotos, dimensões, função e posição pretendida. Leve as informações e instruções de aplicação a uma oficina experiente no tipo de intervenção e peça desenho dos pontos de fixação e interferências. Identifique separadamente cada corte, furo ou solda proposto.",
          "documentosNecessarios": [
            "Desenho de posição dos acessórios",
            "Dimensões e instruções do fabricante"
          ],
          "valor": "R$ 100 a 250 (exemplo)",
          "valorExemplo": true
        },
        {
          "numero": 2,
          "titulo": "Consultar interferências e restrições",
          "descricao": "Apresente desenho, documento do veículo e fichas dos acessórios ao órgão de trânsito antes de autorizar alterações. Solicite orientação escrita sobre admissibilidade, autorização e avaliação exigida; em intervenções estruturais, peça à oficina a identificação do responsável técnico e os documentos de entrega. Não execute enquanto essas condições não estiverem esclarecidas.",
          "documentosNecessarios": [
            "Fotos dos locais de instalação",
            "Descrição das interferências e fixações"
          ],
          "valor": "R$ 250 a 600 (exemplo)",
          "valorExemplo": true
        },
        {
          "numero": 3,
          "titulo": "Documentar o resultado admitido",
          "descricao": "Para o escopo admitido, peça ordem de serviço com materiais, fixações e tratamento das áreas trabalhadas. Reúna comprovantes e relatórios solicitados para inspeção ou atualização e guarde protocolos. Na retirada, confira interferências e receba instruções escritas de uso, carga e revisão.",
          "documentosNecessarios": [
            "Comprovantes de instalação a consultar",
            "Documentação de inspeção exigida para o escopo"
          ],
          "valor": "R$ 200 a 500 (exemplo)",
          "valorExemplo": true
        }
      ]
    },
    "fonte": {
      "nome": "Resolução CONTRAN nº 916/2022",
      "orgao": "CONTRAN / Senatran",
      "referencia": "https://www.gov.br/transportes/pt-br/assuntos/transito/conteudo-contran/resolucao-contran-no-916-de-28-de-marco-de-2022",
      "dataConsulta": "a validar"
    },
    "perguntasParaOficina": [
      "Quais pontos de fixação serão usados e haverá corte ou furo?",
      "Como serão avaliados carga, vibração e proteção contra corrosão?",
      "A peça interfere em luzes, placa, sensores ou visibilidade?",
      "Quais instruções e documentos do fabricante acompanham o acessório?",
      "O orçamento inclui tratamento das áreas trabalhadas e revisão das fixações?"
    ],
    "errosComuns": [
      "Tratar uma intervenção estrutural como simples acabamento.",
      "Improvisar fixação porque a peça parece leve.",
      "Ignorar dimensões finais e interferências com o carro em uso."
    ]
  },
  {
    "id": "turbo",
    "titulo": "Motor Turbo",
    "categoria": "Performance",
    "art": "engine",
    "color": "orange",
    "custoEstimado": "R$ 8.000 a 30.000",
    "situacaoLegal": "exige-regularizacao",
    "descricao": "Planeje sobrealimentação, alimentação e controle do motor como um sistema.",
    "oQueE": "O turbocompressor aproveita a passagem dos gases de escape para movimentar um conjunto que comprime o ar de admissão. O ar chega ao motor em condições diferentes das originais, por isso alimentação, controle eletrônico, lubrificação e temperatura precisam ser estudados juntos. Instalar apenas a turbina não define um projeto completo nem garante um ganho adequado ao uso do carro. Apresente um objetivo de uso e peça uma proposta que explique as mudanças e os limites do conjunto.",
    "beneficios": [
      "Planejar uma entrega de torque coerente com o uso e com a capacidade do conjunto.",
      "Escolher alimentação e arrefecimento a partir de um mesmo projeto.",
      "Definir medições iniciais e finais em condições documentadas para comparar funcionamento.",
      "Receber uma configuração identificada que facilite manutenção e reposição de componentes."
    ],
    "pontosAtencao": [
      "Falhas de alimentação, controle térmico ou lubrificação podem danificar motor e turbocompressor.",
      "Transmissão e freios precisam entrar na avaliação, sem presumir capacidade para qualquer mudança.",
      "Ruído e emissões também importam; suprimir controles não é solução automática para um projeto.",
      "Verifique viabilidade e exigências prévias: laudo ou CSV posterior não garante aprovação de qualquer instalação.",
      "Informe a configuração à seguradora por escrito e peça um plano de revisão e limites de uso documentados."
    ],
    "enquadramento": "Proposta editorial de regularização para sobrealimentação. Confirmar aceitação, autorização prévia e sequência aplicável ao veículo e ao estado.",
    "exigeRegularizacao": true,
    "statusConteudo": "conteúdo a validar",
    "custoObservacao": "Faixa fictícia de exemplo, a validar. Não é cotação nem valor oficial.",
    "legalizacao": {
      "dataAtualizacao": "a validar",
      "etapas": [
        {
          "numero": 1,
          "titulo": "Laudo / Inspeção Veicular",
          "descricao": "Antes de instalar, leve ao órgão de trânsito o documento do veículo e a descrição do conjunto turbo para obter a orientação e eventual autorização prévia por escrito. Com as condições esclarecidas, peça à oficina identificação das peças e comprovantes da instalação; procure a entidade habilitada para a inspeção aplicável e solicite a lista de documentos e o escopo da avaliação. Guarde o laudo ou resultado emitido, sem tratá-lo como aprovação automática do registro.",
          "documentosNecessarios": [
            "Descrição do kit turbo e da aplicação",
            "Comprovantes de peças e instalação",
            "Autorização prévia, quando exigida"
          ],
          "valor": "R$ 350 a 650 (exemplo)",
          "valorExemplo": true
        },
        {
          "numero": 2,
          "titulo": "Certificado de Segurança Veicular (CSV)",
          "descricao": "Com o resultado da inspeção e a identificação do veículo, peça à entidade responsável a orientação escrita sobre exigência e emissão do Certificado de Segurança Veicular. Confira os dados e o vínculo com a alteração antes de usar o documento no registro. Solicite orçamento que esclareça se a emissão já está incluída na inspeção: as faixas fictícias deste roteiro não devem ser somadas como cobranças obrigatórias.",
          "documentosNecessarios": [
            "Resultado da inspeção do conjunto turbo",
            "Identificação do veículo para o certificado"
          ],
          "valor": "R$ 200 a 400 (exemplo)",
          "valorExemplo": true
        },
        {
          "numero": 3,
          "titulo": "Registro no DETRAN",
          "descricao": "Apresente ao DETRAN os comprovantes indicados no procedimento do estado, incluindo autorização, documentos da instalação e CSV quando exigidos. Peça protocolo, acompanhe pendências e confira as características no registro concluído. Pergunte por escrito sobre as condições de uso do veículo enquanto o processo estiver em andamento.",
          "documentosNecessarios": [
            "CSV, quando exigido",
            "Documento do veículo e comprovantes solicitados pelo órgão"
          ],
          "valor": "R$ 150 a 350 (exemplo)",
          "valorExemplo": true
        }
      ]
    },
    "fonte": {
      "nome": "Resolução CONTRAN nº 916/2022",
      "orgao": "CONTRAN / Senatran",
      "referencia": "https://www.gov.br/transportes/pt-br/assuntos/transito/conteudo-contran/resolucao-contran-no-916-de-28-de-marco-de-2022",
      "dataConsulta": "a validar"
    },
    "perguntasParaOficina": [
      "Que diagnóstico será feito no motor antes de propor o conjunto?",
      "Como o projeto trata combustível, temperatura, lubrificação e controle eletrônico?",
      "Quais componentes de transmissão e freios precisam de avaliação adicional?",
      "Quais medições serão documentadas, sem prometer um ganho fixo?",
      "Quem fornece os documentos da instalação e quem realiza a inspeção aplicável?",
      "O orçamento esclarece se a emissão do certificado já está incluída na inspeção?"
    ],
    "errosComuns": [
      "Escolher apenas por pressão ou potência anunciadas.",
      "Comprar o kit sem diagnóstico e sem verificar a viabilidade documental.",
      "Confundir uma medição de desempenho com aprovação para circulação."
    ]
  },
  {
    "id": "suspensao-ar",
    "titulo": "Suspensão a Ar",
    "categoria": "Suspensão",
    "art": "suspension",
    "color": "slate",
    "custoEstimado": "R$ 6.000 a 18.000",
    "situacaoLegal": "exige-regularizacao",
    "descricao": "Entenda bolsas, compressor, reservatório e gerenciamento de altura.",
    "oQueE": "A suspensão a ar utiliza bolsas pneumáticas alimentadas por ar pressurizado para sustentar o veículo. Compressor, reservatório, válvulas e linhas trabalham juntos para alimentar e controlar essas bolsas. Mudar a altura altera as condições de trabalho, e a posição de exposição não deve ser confundida com uma condição adequada de circulação. O projeto precisa considerar carga, passagem das linhas e o comportamento previsto se ocorrer uma falha.",
    "beneficios": [
      "Planejar ajustes de altura dentro das condições definidas para a aplicação.",
      "Estudar a acomodação de carga e o comportamento com diferentes ocupações do carro.",
      "Organizar compressor, reservatório e controles com acesso para manutenção.",
      "Definir operação e inspeção periódica específicas do sistema instalado."
    ],
    "pontosAtencao": [
      "Vazamentos podem alterar sustentação e altura; peça plano de diagnóstico e manutenção.",
      "Linhas próximas de calor, atrito ou impactos podem falhar; avalie a instalação completa.",
      "Compressor e comandos exigem instalação elétrica compatível, com proteção e fixação adequadas.",
      "Peça ao órgão as condições admitidas para sistema e veículo, incluindo uso, inspeção e documentos.",
      "Informe a alteração à seguradora e obtenha instruções escritas de operação e resposta a falhas."
    ],
    "enquadramento": "Rótulo editorial; confirmar categoria, configuração pneumática e condições de circulação no órgão de trânsito.",
    "exigeRegularizacao": true,
    "statusConteudo": "conteúdo a validar",
    "custoObservacao": "Faixa fictícia de exemplo, a validar. Não é cotação nem valor oficial.",
    "legalizacao": {
      "dataAtualizacao": "a validar",
      "etapas": [
        {
          "numero": 1,
          "titulo": "Detalhar o sistema pneumático",
          "descricao": "Peça à oficina desenho do circuito, identificação das bolsas e posição de compressor, reservatório e linhas. Leve a proposta com o documento do veículo ao órgão de trânsito e solicite viabilidade e requisitos prévios por escrito. Registre as condições de operação que precisam constar no projeto.",
          "documentosNecessarios": [
            "Diagrama do circuito pneumático",
            "Especificação de bolsas, compressor e reservatório"
          ],
          "valor": "R$ 150 a 300 (exemplo)",
          "valorExemplo": true
        },
        {
          "numero": 2,
          "titulo": "Planejar instalação e inspeção",
          "descricao": "Solicite orçamento com montagem, proteção das linhas, instalação elétrica, verificação de estanqueidade e revisão. Apresente a orientação oficial ao prestador e, havendo inspeção exigida, peça à entidade habilitada os documentos e condições de apresentação. Guarde especificações, comprovantes e registros dos testes feitos pela oficina.",
          "documentosNecessarios": [
            "Plano de fixação e passagem das linhas",
            "Comprovantes do kit e instalação a consultar"
          ],
          "valor": "R$ 350 a 700 (exemplo)",
          "valorExemplo": true
        },
        {
          "numero": 3,
          "titulo": "Confirmar registro e uso",
          "descricao": "Reúna inspeção, CSV e demais documentos quando exigidos e protocole a atualização no órgão. Na entrega técnica, peça demonstração de operação e instruções escritas de manutenção e resposta a falhas. Confira a correspondência entre instalação, documentos e condições orientadas de uso.",
          "documentosNecessarios": [
            "Resultado de inspeção e CSV, se exigidos",
            "Manual de operação e manutenção do sistema"
          ],
          "valor": "R$ 200 a 400 (exemplo)",
          "valorExemplo": true
        }
      ]
    },
    "fonte": {
      "nome": "Resolução CONTRAN nº 916/2022",
      "orgao": "CONTRAN / Senatran",
      "referencia": "https://www.gov.br/transportes/pt-br/assuntos/transito/conteudo-contran/resolucao-contran-no-916-de-28-de-marco-de-2022",
      "dataConsulta": "a validar"
    },
    "perguntasParaOficina": [
      "Qual sistema foi dimensionado para meu modelo e carga habitual?",
      "Onde ficarão reservatório, compressor e linhas, e como serão protegidos?",
      "Como serão verificados vazamentos, folgas e alimentação elétrica?",
      "Qual condição de operação e procedimento de falha constarão no manual do projeto?",
      "Quais documentos e revisões estão incluídos no orçamento?"
    ],
    "errosComuns": [
      "Escolher a altura de circulação pela posição mais baixa usada em fotos.",
      "Esconder componentes sem acesso para manutenção.",
      "Desconsiderar vazamentos ou funcionamento anormal do compressor."
    ]
  },
  {
    "id": "escapamento",
    "titulo": "Escapamento esportivo",
    "categoria": "Performance",
    "art": "engine",
    "color": "slate",
    "custoEstimado": "R$ 800 a 6.000",
    "situacaoLegal": "restricao-relevante",
    "descricao": "Compare o projeto acústico, a aplicação e o controle de emissões.",
    "oQueE": "O escapamento conduz os gases que saem do motor e participa do controle de ruído e emissões. Tubos, abafadores, fixações e dispositivos de controle precisam trabalhar de forma compatível com o veículo. Trocar uma parte pode mudar o som e o comportamento do conjunto, mas som mais forte não comprova melhora de desempenho. O projeto deve identificar o que será substituído, preservado e avaliado.",
    "beneficios": [
      "Escolher materiais e montagem adequados às condições de uso e conservação.",
      "Planejar um objetivo acústico dentro das condições admitidas, sem depender de promessas de volume.",
      "Revisar fixações, folgas e estanqueidade junto da análise de substituição.",
      "Documentar aplicação das peças e critérios de avaliação antes de contratar."
    ],
    "pontosAtencao": [
      "Ruído e ressonância podem tornar a cabine desconfortável; peça critérios de avaliação.",
      "Vazamentos, calor próximo de partes sensíveis e fixações inadequadas criam riscos.",
      "Não aceite remoção de controle de emissões como caminho de regularização.",
      "Consulte exigências específicas de ruído, emissões e documentação; este roteiro não fixa limites legais.",
      "Pergunte à seguradora sobre a mudança e combine revisão das fixações e correção de problemas de montagem."
    ],
    "enquadramento": "Alerta editorial sobre ruído, emissões e componentes obrigatórios. A referência geral não substitui as normas específicas a conferir.",
    "exigeRegularizacao": true,
    "statusConteudo": "conteúdo a validar",
    "custoObservacao": "Faixa fictícia de exemplo, a validar. Não é cotação nem valor oficial.",
    "legalizacao": {
      "dataAtualizacao": "a validar",
      "etapas": [
        {
          "numero": 1,
          "titulo": "Identificar os componentes preservados",
          "descricao": "Peça à oficina a relação dos componentes originais e propostos, identificando partes de controle de ruído e emissões. Leve a ficha do conjunto e o documento do veículo ao órgão de trânsito e solicite orientação escrita sobre admissibilidade e avaliações necessárias. Não compre apenas pela demonstração sonora.",
          "documentosNecessarios": [
            "Diagrama do escapamento original",
            "Ficha do conjunto proposto"
          ],
          "valor": "R$ 100 a 250 (exemplo)",
          "valorExemplo": true
        },
        {
          "numero": 2,
          "titulo": "Consultar ruído e emissões",
          "descricao": "Apresente a orientação ao responsável pela aplicação e peça orçamento com material, montagem e critérios de avaliação de ruído, emissões e funcionamento quando aplicáveis. Solicite por escrito quem fará os ensaios exigidos e que documento será entregue. Se a proposta depender de suprimir controles obrigatórios, reveja o escopo antes de contratar.",
          "documentosNecessarios": [
            "Especificações de abafadores e controle de emissões",
            "Resposta técnica sobre ensaios aplicáveis"
          ],
          "valor": "R$ 250 a 550 (exemplo)",
          "valorExemplo": true
        },
        {
          "numero": 3,
          "titulo": "Conferir montagem e procedimento",
          "descricao": "Para uma proposta admitida, peça ordem de serviço com peças e verificações de montagem, folgas e estanqueidade. Encaminhe os comprovantes e resultados ao órgão se houver procedimento documental e guarde os protocolos. Receba instruções de revisão e condições para corrigir vibração ou ressonância.",
          "documentosNecessarios": [
            "Comprovante de instalação a consultar",
            "Resultados de avaliações exigidas para o sistema"
          ],
          "valor": "R$ 150 a 350 (exemplo)",
          "valorExemplo": true
        }
      ]
    },
    "fonte": {
      "nome": "Resolução CONTRAN nº 916/2022",
      "orgao": "CONTRAN / Senatran",
      "referencia": "https://www.gov.br/transportes/pt-br/assuntos/transito/conteudo-contran/resolucao-contran-no-916-de-28-de-marco-de-2022",
      "dataConsulta": "a validar"
    },
    "perguntasParaOficina": [
      "Quais componentes originais serão preservados ou substituídos?",
      "Como será verificada a compatibilidade com meu motor e os controles de emissões?",
      "Como vocês avaliam vazamentos, folgas, calor e ressonância na cabine?",
      "O orçamento identifica material, peças e condições para correções de ajuste?",
      "Quais comprovantes e resultados de avaliação serão entregues?"
    ],
    "errosComuns": [
      "Usar o vídeo de outro carro como garantia do som final.",
      "Aceitar retirada de controles de emissões como parte inevitável da troca.",
      "Avaliar somente o som com o veículo parado, sem um plano técnico para conferir a aplicação."
    ]
  },
  {
    "id": "remap",
    "titulo": "Remap",
    "categoria": "Performance",
    "art": "engine",
    "color": "",
    "custoEstimado": "R$ 1.000 a 5.000",
    "situacaoLegal": "restricao-relevante",
    "descricao": "Entenda o que muda na calibração eletrônica antes de aceitar promessas de ganho.",
    "oQueE": "A central eletrônica usa sensores e parâmetros de controle para comandar funções como alimentação e ignição do motor. Remap é uma alteração nessa calibração, que precisa ser compatível com a configuração mecânica e o combustível previsto. Um arquivo anunciado para o modelo não demonstra que o veículo está saudável ou que a aplicação é adequada. Antes da intervenção, identifique a versão original, os componentes atuais e o que a proposta pretende mudar.",
    "beneficios": [
      "Documentar uma calibração compatível com um conjunto estudado, quando a aplicação for admitida.",
      "Definir objetivos de resposta mais específicos que uma promessa genérica de potência.",
      "Planejar medições comparáveis do funcionamento antes e depois da intervenção.",
      "Organizar histórico de versões e serviços para facilitar diagnósticos posteriores."
    ],
    "pontosAtencao": [
      "Calibração inadequada pode aumentar solicitações térmicas e mecânicas além do previsto para o conjunto.",
      "Alterações podem afetar emissões e diagnósticos; desativar controles não é solução documental.",
      "Esclareça garantia e manutenção com os responsáveis, sem presumir que uma reversão elimine todo histórico.",
      "Consulte o órgão sobre mudança de características mesmo que ela não seja visível externamente.",
      "Informe a seguradora e peça relatório das funções afetadas e um plano de avaliação técnica."
    ],
    "enquadramento": "Classificação editorial cautelar. Confirmar se a alteração pretendida é admitida e como documentá-la.",
    "exigeRegularizacao": true,
    "statusConteudo": "conteúdo a validar",
    "custoObservacao": "Faixa fictícia de exemplo, a validar. Não é cotação nem valor oficial.",
    "legalizacao": {
      "dataAtualizacao": "a validar",
      "etapas": [
        {
          "numero": 1,
          "titulo": "Registrar a configuração eletrônica",
          "descricao": "Leve documento do veículo, histórico de manutenção e descrição dos componentes ao prestador. Peça identificação da central e versão original, diagnóstico inicial e proposta escrita das funções afetadas. Não autorize a intervenção apenas por um ganho anunciado.",
          "documentosNecessarios": [
            "Identificação do módulo e versão original",
            "Descrição do combustível e dos componentes atuais"
          ],
          "valor": "R$ 150 a 300 (exemplo)",
          "valorExemplo": true
        },
        {
          "numero": 2,
          "titulo": "Consultar admissibilidade e medições",
          "descricao": "Apresente a proposta ao órgão de trânsito e peça resposta escrita sobre admissibilidade e procedimento para a mudança de características. Solicite ao responsável técnico um plano de medições de funcionamento e emissões quando aplicáveis, identificando quem avalia e o relatório de entrega. Encaminhe o escopo à seguradora e esclareça condições antes de contratar.",
          "documentosNecessarios": [
            "Proposta de calibração e parâmetros afetados",
            "Plano de avaliação de funcionamento e emissões"
          ],
          "valor": "R$ 300 a 600 (exemplo)",
          "valorExemplo": true
        },
        {
          "numero": 3,
          "titulo": "Documentar a intervenção admitida",
          "descricao": "Se a intervenção for admitida, peça ordem de serviço, identificação da configuração executada e relatórios previstos. Apresente os comprovantes exigidos ao órgão e guarde protocolos; receba instruções de revisão e diagnóstico posterior. Não substitua essas verificações pela ausência de alertas no painel.",
          "documentosNecessarios": [
            "Relatório técnico da intervenção, se realizada",
            "Orientação sobre registro da alteração de características"
          ],
          "valor": "R$ 200 a 400 (exemplo)",
          "valorExemplo": true
        }
      ]
    },
    "fonte": {
      "nome": "Resolução CONTRAN nº 916/2022",
      "orgao": "CONTRAN / Senatran",
      "referencia": "https://www.gov.br/transportes/pt-br/assuntos/transito/conteudo-contran/resolucao-contran-no-916-de-28-de-marco-de-2022",
      "dataConsulta": "a validar"
    },
    "perguntasParaOficina": [
      "Como vocês identificam versão original e condição mecânica antes do serviço?",
      "Qual objetivo será registrado e quais funções serão alteradas?",
      "Como serão documentadas medições e condições de combustível e equipamento?",
      "Qual é o procedimento de diagnóstico posterior ou retorno à configuração original?",
      "O relatório explica o escopo e a preservação dos controles de diagnóstico e emissões?"
    ],
    "errosComuns": [
      "Comprar uma promessa de ganho sem diagnóstico ou escopo escrito.",
      "Aceitar apagamento de alertas como prova de defeito resolvido.",
      "Presumir que software dispensa análise documental e comunicação à seguradora."
    ]
  },
  {
    "id": "freios",
    "titulo": "Freios",
    "categoria": "Segurança",
    "art": "wheels",
    "color": "orange",
    "custoEstimado": "R$ 1.500 a 12.000",
    "situacaoLegal": "restricao-relevante",
    "descricao": "Avalie o equilíbrio do sistema antes de mudar discos, pinças ou comandos.",
    "oQueE": "Ao frear, o sistema transforma o movimento do carro em calor pelo atrito entre componentes. Pedal, comandos hidráulicos, discos, pastilhas e controles eletrônicos precisam funcionar como um conjunto. Aumentar uma peça isolada não garante frenagem melhor e pode mudar o equilíbrio entre os eixos ou a interação com os controles. Comece separando manutenção com peças equivalentes de alteração de projeto e avaliando o estado atual do veículo.",
    "beneficios": [
      "Planejar capacidade térmica compatível com uma aplicação estudada.",
      "Selecionar peças com reposição identificada e instruções claras de manutenção.",
      "Revisar o conjunto antes de decidir se a mudança desejada é necessária.",
      "Definir critérios de avaliação do resultado em vez de escolher somente pela aparência das pinças."
    ],
    "pontosAtencao": [
      "Combinações incompatíveis podem prejudicar equilíbrio de frenagem e atuação do ABS e outros controles.",
      "Discos, pinças e mangueiras precisam de espaço e aplicação corretos em relação a rodas e suspensão.",
      "Fluido, desgaste e montagem exigem avaliação profissional; este protótipo não ensina reparo de freios.",
      "Solicite orientação prévia sobre admissibilidade, responsabilidade técnica, inspeção e documentos da alteração.",
      "Combine revisões e comunique a proposta à seguradora; peça maior não comprova segurança por si só."
    ],
    "enquadramento": "Alerta editorial para mudança de projeto do sistema. Reposição equivalente e alteração de características devem ser analisadas separadamente.",
    "exigeRegularizacao": true,
    "statusConteudo": "conteúdo a validar",
    "custoObservacao": "Faixa fictícia de exemplo, a validar. Não é cotação nem valor oficial.",
    "legalizacao": {
      "dataAtualizacao": "a validar",
      "etapas": [
        {
          "numero": 1,
          "titulo": "Distinguir manutenção de alteração",
          "descricao": "Peça à oficina qualificada um diagnóstico com identificação de discos, pinças, comandos e controles eletrônicos. Reúna documento do veículo e ficha do kit e solicite uma proposta que diferencie manutenção de alteração. Não autorize adaptações antes de conhecer as condições de aplicação.",
          "documentosNecessarios": [
            "Identificação de discos, pinças e comandos originais",
            "Especificação do kit e aplicação pretendida"
          ],
          "valor": "R$ 150 a 300 (exemplo)",
          "valorExemplo": true
        },
        {
          "numero": 2,
          "titulo": "Consultar compatibilidade e admissibilidade",
          "descricao": "Leve a proposta ao órgão de trânsito e peça orientação escrita sobre admissibilidade e avaliação exigida. Solicite ao responsável pelo projeto estudo de compatibilidade entre eixos, rodas, suspensão e sistemas eletrônicos, com escopo dos ensaios e documentos de entrega. Registre no orçamento quem responde pela instalação e avaliação.",
          "documentosNecessarios": [
            "Estudo de compatibilidade entre eixos e ABS",
            "Orientação sobre procedimento e ensaios de frenagem"
          ],
          "valor": "R$ 350 a 700 (exemplo)",
          "valorExemplo": true
        },
        {
          "numero": 3,
          "titulo": "Registrar avaliações e manutenção",
          "descricao": "Para um projeto admitido, peça comprovantes das peças, ordem de serviço e relatório das avaliações previstas. Encaminhe os documentos ao órgão quando houver inspeção ou atualização exigida e acompanhe protocolos. Receba orientações escritas de manutenção, sem usar apenas a sensação do pedal como critério de aceitação.",
          "documentosNecessarios": [
            "Relatório de instalação e avaliação do conjunto",
            "Plano de manutenção e documentos solicitados pelo órgão"
          ],
          "valor": "R$ 200 a 450 (exemplo)",
          "valorExemplo": true
        }
      ]
    },
    "fonte": {
      "nome": "Resolução CONTRAN nº 916/2022",
      "orgao": "CONTRAN / Senatran",
      "referencia": "https://www.gov.br/transportes/pt-br/assuntos/transito/conteudo-contran/resolucao-contran-no-916-de-28-de-marco-de-2022",
      "dataConsulta": "a validar"
    },
    "perguntasParaOficina": [
      "O diagnóstico indica manutenção, reparação ou alteração de projeto, e por quê?",
      "Como serão verificadas compatibilidade entre eixos, comandos e controles eletrônicos?",
      "O conjunto cabe nas rodas atuais sem adaptações improvisadas?",
      "Quais avaliações serão realizadas pelo responsável antes da entrega?",
      "Que identificação de peças, relatórios e plano de revisão receberei?"
    ],
    "errosComuns": [
      "Escolher discos e pinças somente pelo tamanho ou aspecto esportivo.",
      "Misturar componentes sem analisar o sistema completo.",
      "Adiar manutenção esperando que um kit resolva qualquer problema de frenagem."
    ]
  }
];

// Todos os perfis, endereços, diferenciais, relatos, distâncias e prazos são fictícios.
const oficinas = [
  {
    "id": 1,
    "nomeFantasia": "Oficina Horizonte",
    "descricao": "Projetos de suspensão e revisão do conjunto de rodas.",
    "horarios": "Segunda a sexta, 8h às 18h; sábado, 8h às 12h; domingo fechado (exemplo)",
    "cep": "00000-000",
    "logradouro": "Rua Fictícia do Projeto 1",
    "numero": "100",
    "bairro": "Bairro de Exemplo",
    "cidade": "São Paulo",
    "uf": "SP",
    "servicos": [
      "Suspensão",
      "Freios",
      "Rodas e pneus"
    ],
    "especialidade": "Suspensão",
    "distanciaKm": 2.5,
    "notaMedia": 4.5,
    "totalAvaliacoes": 4,
    "avaliacoes": [
      {
        "id": 1,
        "autor": "Pessoa de exemplo 1",
        "data": null,
        "estrelas": 5,
        "descricao": "No atendimento fictício, levei a medida das rodas e a equipe explicou por que o kit de suspensão precisava ser escolhido junto dos amortecedores. O orçamento registrou os componentes e a revisão de entrega.",
        "ficticia": true
      },
      {
        "id": 2,
        "autor": "Pessoa de exemplo 2",
        "data": null,
        "estrelas": 4,
        "descricao": "Neste exemplo, o alinhamento ficou separado da montagem na proposta. Gostei da explicação sobre desgaste dos pneus, mas precisei pedir que o retorno para revisão aparecesse por escrito.",
        "ficticia": true
      },
      {
        "id": 3,
        "autor": "Pessoa de exemplo 3",
        "data": null,
        "estrelas": 4,
        "descricao": "A conversa simulada incluiu o uso do carro com passageiros e a rampa da garagem. A proposta indicou uma checagem de folgas; a explicação inicial do prazo poderia ser mais detalhada.",
        "ficticia": true
      },
      {
        "id": 4,
        "autor": "Pessoa de exemplo 4",
        "data": null,
        "estrelas": 5,
        "descricao": "No relato de exemplo, recebi uma ficha com peças e condições de uso do conjunto. A oficina explicou os pontos que precisariam ser acompanhados nas próximas revisões, sem prometer aprovação documental.",
        "ficticia": true
      }
    ],
    "ficticia": true,
    "diferenciais": [
      "Ficha de aplicação do conjunto de suspensão entregue com o orçamento.",
      "Conferência de folgas e alinhamento prevista na entrega.",
      "Revisão das fixações combinada na ordem de serviço."
    ],
    "prazoMedioExemplo": "2 a 4 dias úteis (exemplo)"
  },
  {
    "id": 2,
    "nomeFantasia": "Estúdio de Cor",
    "descricao": "Preparação de superfície, acabamento e envelopamento.",
    "horarios": "Segunda a sexta, 9h às 18h; sábado e domingo fechado (exemplo)",
    "cep": "00000-000",
    "logradouro": "Rua Fictícia do Projeto 2",
    "numero": "200",
    "bairro": "Bairro de Exemplo",
    "cidade": "Santos",
    "uf": "SP",
    "servicos": [
      "Estética",
      "Pintura",
      "Envelopamento"
    ],
    "especialidade": "Estética",
    "distanciaKm": 7,
    "notaMedia": 3.7,
    "totalAvaliacoes": 3,
    "avaliacoes": [
      {
        "id": 11,
        "autor": "Pessoa de exemplo 1",
        "data": null,
        "estrelas": 4,
        "descricao": "No orçamento fictício de envelopamento, vi amostras em vez de escolher só pela tela. As áreas de cobertura e as emendas ficaram descritas; precisei confirmar separadamente os cuidados de lavagem.",
        "ficticia": true
      },
      {
        "id": 12,
        "autor": "Pessoa de exemplo 2",
        "data": null,
        "estrelas": 4,
        "descricao": "Neste exemplo de pintura, as fotos mostraram riscos anteriores e as peças que seriam desmontadas. A preparação estava bem explicada, embora o prazo dependesse de uma avaliação da base.",
        "ficticia": true
      },
      {
        "id": 13,
        "autor": "Pessoa de exemplo 3",
        "data": null,
        "estrelas": 3,
        "descricao": "No atendimento simulado, a cor foi apresentada com clareza, mas as condições de remoção da película só apareceram depois de eu perguntar. Faltou explicar isso já na proposta inicial.",
        "ficticia": true
      }
    ],
    "ficticia": true,
    "diferenciais": [
      "Amostras de acabamento para comparar a cor antes do serviço.",
      "Registro fotográfico da condição inicial da pintura.",
      "Orientações de conservação previstas na entrega."
    ],
    "prazoMedioExemplo": "4 a 7 dias úteis (exemplo)"
  },
  {
    "id": 3,
    "nomeFantasia": "Box Performance",
    "descricao": "Diagnóstico e planejamento de alterações de motor.",
    "horarios": "Segunda a sexta, 8h às 18h; sábado, 8h às 12h; domingo fechado (exemplo)",
    "cep": "00000-000",
    "logradouro": "Rua Fictícia do Projeto 3",
    "numero": "300",
    "bairro": "Bairro de Exemplo",
    "cidade": "Campinas",
    "uf": "SP",
    "servicos": [
      "Motor",
      "Performance",
      "Remap"
    ],
    "especialidade": "Motor",
    "distanciaKm": 12,
    "notaMedia": 5,
    "totalAvaliacoes": 5,
    "avaliacoes": [
      {
        "id": 21,
        "autor": "Pessoa de exemplo 1",
        "data": null,
        "estrelas": 5,
        "descricao": "No cenário fictício de preparação, o diagnóstico veio antes da escolha das peças. A proposta distinguiu a manutenção necessária do projeto de desempenho, o que deixou o orçamento mais compreensível.",
        "ficticia": true
      },
      {
        "id": 22,
        "autor": "Pessoa de exemplo 2",
        "data": null,
        "estrelas": 5,
        "descricao": "Neste relato de exemplo, a equipe descreveu a relação entre arrefecimento e a configuração de motor proposta. Recebi uma lista das avaliações que fariam parte da entrega, sem promessa de potência fixa.",
        "ficticia": true
      },
      {
        "id": 23,
        "autor": "Pessoa de exemplo 3",
        "data": null,
        "estrelas": 5,
        "descricao": "O atendimento simulado organizou os comprovantes de origem dos componentes junto da ordem de serviço. Ficou claro quais informações eu deveria apresentar ao órgão antes de autorizar a alteração.",
        "ficticia": true
      },
      {
        "id": 24,
        "autor": "Pessoa de exemplo 4",
        "data": null,
        "estrelas": 5,
        "descricao": "No exemplo de orçamento, a parte de transmissão foi avaliada separadamente e as peças adicionais dependeriam de minha autorização. O escopo evitou a ideia de trocar o motor e resolver o restante depois.",
        "ficticia": true
      },
      {
        "id": 25,
        "autor": "Pessoa de exemplo 5",
        "data": null,
        "estrelas": 5,
        "descricao": "Neste cenário, a entrega incluía identificação dos componentes e plano de manutenção. As condições usadas para comparar o funcionamento estavam registradas no relatório de exemplo.",
        "ficticia": true
      }
    ],
    "ficticia": true,
    "diferenciais": [
      "Diagnóstico inicial separado das alterações desejadas.",
      "Proposta que relaciona motor, arrefecimento e transmissão.",
      "Relatório de configuração e revisões previsto na entrega."
    ],
    "prazoMedioExemplo": "5 a 10 dias úteis (exemplo)"
  },
  {
    "id": 4,
    "nomeFantasia": "Roda Livre",
    "descricao": "Análise de freios e compatibilidade de rodas e pneus.",
    "horarios": "Segunda a sexta, 9h às 18h; sábado e domingo fechado (exemplo)",
    "cep": "00000-000",
    "logradouro": "Rua Fictícia do Projeto 4",
    "numero": "400",
    "bairro": "Bairro de Exemplo",
    "cidade": "Curitiba",
    "uf": "PR",
    "servicos": [
      "Freios",
      "Rodas e pneus",
      "Suspensão"
    ],
    "especialidade": "Freios",
    "distanciaKm": 1,
    "notaMedia": 4.3,
    "totalAvaliacoes": 4,
    "avaliacoes": [
      {
        "id": 31,
        "autor": "Pessoa de exemplo 1",
        "data": null,
        "estrelas": 4,
        "descricao": "Na avaliação fictícia dos freios, a equipe explicou por que o diagnóstico vinha antes da escolha de pinças maiores. A proposta foi clara, mas pedi mais detalhes sobre as peças que poderiam ser reaproveitadas.",
        "ficticia": true
      },
      {
        "id": 32,
        "autor": "Pessoa de exemplo 2",
        "data": null,
        "estrelas": 5,
        "descricao": "Neste exemplo, a compatibilidade entre rodas e pinças foi discutida antes da compra. A ficha de aplicação também indicou quais controles eletrônicos precisariam entrar na avaliação.",
        "ficticia": true
      },
      {
        "id": 33,
        "autor": "Pessoa de exemplo 3",
        "data": null,
        "estrelas": 4,
        "descricao": "No relato simulado de troca de pneus, medidas e índices apareceram na ordem de serviço. Gostei de ver montagem e balanceamento discriminados; faltou apresentar o prazo de reposição logo na primeira conversa.",
        "ficticia": true
      },
      {
        "id": 34,
        "autor": "Pessoa de exemplo 4",
        "data": null,
        "estrelas": 4,
        "descricao": "O orçamento de exemplo separou revisão do sistema e eventual alteração de componentes. As orientações de manutenção estavam previstas, embora eu precisasse confirmar como seria agendado o retorno.",
        "ficticia": true
      }
    ],
    "ficticia": true,
    "diferenciais": [
      "Comparação entre manutenção equivalente e alteração de freios.",
      "Checagem de espaço entre rodas e componentes prevista no orçamento.",
      "Lista de componentes e plano de revisão na entrega."
    ],
    "prazoMedioExemplo": "1 a 3 dias úteis (exemplo)"
  },
  {
    "id": 5,
    "nomeFantasia": "Garagem dos Campos",
    "descricao": "Estudo de projetos turbo e preparação de documentação para consulta.",
    "horarios": "Segunda a sexta, 8h às 18h; sábado, 8h às 12h; domingo fechado (exemplo)",
    "cep": "00000-000",
    "logradouro": "Rua Fictícia do Projeto 5",
    "numero": "500",
    "bairro": "Bairro de Exemplo",
    "cidade": "Ponta Grossa",
    "uf": "PR",
    "servicos": [
      "Turbo",
      "Performance",
      "Legalização"
    ],
    "especialidade": "Turbo",
    "distanciaKm": 4,
    "notaMedia": 4.7,
    "totalAvaliacoes": 3,
    "avaliacoes": [
      {
        "id": 41,
        "autor": "Pessoa de exemplo 1",
        "data": null,
        "estrelas": 5,
        "descricao": "No projeto turbo fictício, a equipe perguntou sobre uso diário e condição do motor antes de sugerir componentes. O escopo incluiu alimentação e arrefecimento e deixou a consulta documental como etapa prévia.",
        "ficticia": true
      },
      {
        "id": 42,
        "autor": "Pessoa de exemplo 2",
        "data": null,
        "estrelas": 4,
        "descricao": "Neste relato de exemplo, a lista de comprovantes ajudou a organizar a consulta antes de instalar o kit. Precisei pedir uma explicação adicional sobre quais serviços de inspeção seriam feitos por terceiros.",
        "ficticia": true
      },
      {
        "id": 43,
        "autor": "Pessoa de exemplo 3",
        "data": null,
        "estrelas": 5,
        "descricao": "O orçamento simulado deixou claro que laudo, CSV e registro não são a mesma coisa. Também orientou a verificar se a emissão do certificado já estava incluída no serviço de inspeção, sem prometer aprovação.",
        "ficticia": true
      }
    ],
    "ficticia": true,
    "diferenciais": [
      "Proposta turbo com identificação dos sistemas envolvidos.",
      "Organização de comprovantes para consulta ao órgão de trânsito.",
      "Orçamento distingue instalação de serviços de avaliação externos."
    ],
    "prazoMedioExemplo": "7 a 15 dias úteis (exemplo)"
  },
  {
    "id": 6,
    "nomeFantasia": "Oficina Vale Azul",
    "descricao": "Planejamento de áudio e acabamento interno.",
    "horarios": "Segunda a sexta, 9h às 18h; sábado e domingo fechado (exemplo)",
    "cep": "00000-000",
    "logradouro": "Rua Fictícia do Projeto 6",
    "numero": "600",
    "bairro": "Bairro de Exemplo",
    "cidade": "Londrina",
    "uf": "PR",
    "servicos": [
      "Áudio",
      "Estética"
    ],
    "especialidade": "Áudio",
    "distanciaKm": 18,
    "notaMedia": 3.5,
    "totalAvaliacoes": 4,
    "avaliacoes": [
      {
        "id": 51,
        "autor": "Pessoa de exemplo 1",
        "data": null,
        "estrelas": 3,
        "descricao": "No atendimento fictício de áudio, a proposta indicou posição dos equipamentos, mas não explicou de início como ficaria o acesso para manutenção. Precisei solicitar um desenho antes de comparar o orçamento.",
        "ficticia": true
      },
      {
        "id": 52,
        "autor": "Pessoa de exemplo 2",
        "data": null,
        "estrelas": 4,
        "descricao": "Neste exemplo, cabos e acabamento apareceram separados na proposta. Gostei da explicação sobre integração ao interior, embora a disponibilidade das peças só fosse confirmada depois.",
        "ficticia": true
      },
      {
        "id": 53,
        "autor": "Pessoa de exemplo 3",
        "data": null,
        "estrelas": 4,
        "descricao": "O cenário simulado incluiu a preservação de comandos e partes móveis do painel. A lista de desmontagem ajudou a entender o serviço; pedi que o prazo fosse registrado com mais clareza.",
        "ficticia": true
      },
      {
        "id": 54,
        "autor": "Pessoa de exemplo 4",
        "data": null,
        "estrelas": 3,
        "descricao": "Na conversa de exemplo, o acabamento foi bem apresentado, mas faltaram detalhes sobre a revisão após a montagem. O orçamento precisou ser complementado para explicar esse retorno.",
        "ficticia": true
      }
    ],
    "ficticia": true,
    "diferenciais": [
      "Planejamento de posição dos equipamentos antes da desmontagem.",
      "Orçamento separa instalação elétrica e acabamento interno.",
      "Orientação sobre acesso futuro aos componentes de áudio."
    ],
    "prazoMedioExemplo": "2 a 5 dias úteis (exemplo)"
  },
  {
    "id": 7,
    "nomeFantasia": "Box Rota Sul",
    "descricao": "Avaliação de montagem e aplicação de sistemas de escapamento.",
    "horarios": "Segunda a sexta, 8h às 18h; sábado, 8h às 12h; domingo fechado (exemplo)",
    "cep": "00000-000",
    "logradouro": "Rua Fictícia do Projeto 7",
    "numero": "700",
    "bairro": "Bairro de Exemplo",
    "cidade": "Joinville",
    "uf": "SC",
    "servicos": [
      "Escapamento",
      "Motor",
      "Performance"
    ],
    "especialidade": "Escapamento",
    "distanciaKm": 24,
    "notaMedia": 4.3,
    "totalAvaliacoes": 3,
    "avaliacoes": [
      {
        "id": 61,
        "autor": "Pessoa de exemplo 1",
        "data": null,
        "estrelas": 4,
        "descricao": "No orçamento fictício do escapamento, material e componentes preservados estavam identificados. Pedi que a verificação de ressonância também fosse descrita para não comparar só o som de um vídeo.",
        "ficticia": true
      },
      {
        "id": 62,
        "autor": "Pessoa de exemplo 2",
        "data": null,
        "estrelas": 4,
        "descricao": "Neste exemplo de montagem, a equipe explicou as folgas em relação à carroceria e o cuidado com as fixações. A proposta foi clara, mas os documentos de aplicação precisaram ser solicitados à parte.",
        "ficticia": true
      },
      {
        "id": 63,
        "autor": "Pessoa de exemplo 3",
        "data": null,
        "estrelas": 5,
        "descricao": "O atendimento simulado não ofereceu retirar controles de emissões como solução. A conversa separou objetivo acústico e critérios de avaliação, com uma revisão prevista depois da montagem.",
        "ficticia": true
      }
    ],
    "ficticia": true,
    "diferenciais": [
      "Ficha do sistema original e das partes que serão preservadas.",
      "Conferência de folgas e fixações prevista na montagem.",
      "Orientação para avaliar ressonância e revisar o conjunto."
    ],
    "prazoMedioExemplo": "1 a 4 dias úteis (exemplo)"
  },
  {
    "id": 8,
    "nomeFantasia": "Ateliê do Motor",
    "descricao": "Exemplo de diagnóstico eletrônico e análise de calibração.",
    "horarios": "Segunda a sexta, 9h às 18h; sábado e domingo fechado (exemplo)",
    "cep": "00000-000",
    "logradouro": "Rua Fictícia do Projeto 8",
    "numero": "800",
    "bairro": "Bairro de Exemplo",
    "cidade": "Belo Horizonte",
    "uf": "MG",
    "servicos": [
      "Remap",
      "Motor",
      "Legalização"
    ],
    "especialidade": "Remap",
    "distanciaKm": 3,
    "notaMedia": 3,
    "totalAvaliacoes": 5,
    "avaliacoes": [
      {
        "id": 71,
        "autor": "Pessoa de exemplo 1",
        "data": null,
        "estrelas": 2,
        "descricao": "Neste relato fictício, a primeira proposta de remap destacava o resultado esperado, mas não detalhava as funções alteradas. Precisei insistir em um escopo escrito antes de considerar a contratação.",
        "ficticia": true
      },
      {
        "id": 72,
        "autor": "Pessoa de exemplo 2",
        "data": null,
        "estrelas": 3,
        "descricao": "No cenário de exemplo, a identificação da central foi registrada, porém as condições de comparação das medições ficaram pouco claras. Pedi que combustível e equipamento usados aparecessem no relatório.",
        "ficticia": true
      },
      {
        "id": 73,
        "autor": "Pessoa de exemplo 3",
        "data": null,
        "estrelas": 3,
        "descricao": "O atendimento simulado diferenciou diagnóstico de calibração, mas demorou a explicar o procedimento de retorno à configuração anterior. Essa informação deveria acompanhar a proposta desde o início.",
        "ficticia": true
      },
      {
        "id": 74,
        "autor": "Pessoa de exemplo 4",
        "data": null,
        "estrelas": 4,
        "descricao": "Neste exemplo, a conversa sobre histórico de manutenção foi útil e a proposta não tratou apagar alertas como conserto. Ainda precisei pedir detalhes sobre o acompanhamento após o serviço.",
        "ficticia": true
      },
      {
        "id": 75,
        "autor": "Pessoa de exemplo 5",
        "data": null,
        "estrelas": 3,
        "descricao": "No orçamento fictício, a orientação de consultar o órgão veio antes da intervenção. Faltou deixar mais evidente quais relatórios o prestador entregaria e quais avaliações dependeriam de terceiros.",
        "ficticia": true
      }
    ],
    "ficticia": true,
    "diferenciais": [
      "Identificação da versão da central na avaliação inicial.",
      "Escopo de calibração apresentado antes da intervenção.",
      "Histórico de configuração previsto para diagnóstico posterior."
    ],
    "prazoMedioExemplo": "1 a 3 dias úteis (exemplo)"
  }
];

window.GaragemDados = { guias, oficinas };
