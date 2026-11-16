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
    "oQueE": "Alterar a suspensão muda a forma como a carroceria se apoia nas rodas. Molas, amortecedores e geometria precisam trabalhar juntos; reduzir a altura não é apenas cortar espaço entre pneu e paralama.",
    "beneficios": [
      "Adequar a resposta do conjunto ao uso pretendido, quando o projeto é dimensionado corretamente.",
      "Personalizar a postura do carro com um conjunto compatível."
    ],
    "pontosAtencao": [
      "Menor curso pode aumentar impactos e contato com o solo.",
      "Pneus, mangueiras e outras peças precisam de folga em todo o movimento da suspensão.",
      "Confirme os requisitos para a categoria e o peso do veículo antes de comprar."
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
          "descricao": "Leve a proposta ao órgão de trânsito antes da intervenção e confirme a autorização aplicável.",
          "documentosNecessarios": [
            "Ficha com modelo, ano e configuração original",
            "Descrição do kit e da altura pretendida"
          ],
          "valor": "Faixa a validar — solicitar orçamento; não é taxa oficial"
        },
        {
          "numero": 2,
          "titulo": "Documentar a instalação e a inspeção",
          "descricao": "Planeje a instalação, o alinhamento e a avaliação do conjunto; confirme se haverá inspeção e CSV.",
          "documentosNecessarios": [
            "Especificação de molas e amortecedores",
            "Comprovantes de peças e serviço a consultar"
          ],
          "valor": "Faixa a validar — solicitar orçamento; não é taxa oficial"
        },
        {
          "numero": 3,
          "titulo": "Conferir o registro da alteração",
          "descricao": "Pergunte quais resultados e documentos devem acompanhar a atualização cadastral.",
          "documentosNecessarios": [
            "Relatório da inspeção, quando exigido",
            "CSV e documento do veículo, conforme orientação"
          ],
          "valor": "Faixa a validar — solicitar orçamento; não é taxa oficial"
        }
      ]
    },
    "fonte": {
      "nome": "Resolução CONTRAN nº 916/2022",
      "orgao": "CONTRAN / Senatran",
      "referencia": "https://www.gov.br/transportes/pt-br/assuntos/transito/conteudo-contran/resolucao-contran-no-916-de-28-de-marco-de-2022",
      "dataConsulta": "a validar"
    }
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
    "oQueE": "Rodas e pneus conectam o veículo ao solo. Diâmetro, largura, furação, deslocamento da roda e especificação do pneu influenciam encaixe, leitura de velocidade e comportamento.",
    "beneficios": [
      "Escolher um pneu adequado ao uso pode melhorar conforto e aderência.",
      "Personalizar o desenho das rodas mantendo um conjunto tecnicamente compatível."
    ],
    "pontosAtencao": [
      "Uma medida que cabe com o carro parado pode raspar em curvas ou com carga.",
      "Compare índices de carga e velocidade com as especificações do veículo.",
      "O selo não autoriza qualquer mudança de medida: o escopo de referência é reposição equivalente."
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
          "descricao": "Consulte o manual e registre as medidas e índices para comparação.",
          "documentosNecessarios": [
            "Ficha do veículo e especificações do manual",
            "Medidas e índices do pneu original"
          ],
          "valor": "Faixa a validar — solicitar orçamento; não é taxa oficial"
        },
        {
          "numero": 2,
          "titulo": "Comparar o novo conjunto",
          "descricao": "Peça uma análise de compatibilidade, folgas e aplicação; consulte o órgão se houver alteração de características.",
          "documentosNecessarios": [
            "Ficha técnica da roda pretendida",
            "Ficha técnica dos pneus pretendidos"
          ],
          "valor": "Faixa a validar — solicitar orçamento; não é taxa oficial"
        },
        {
          "numero": 3,
          "titulo": "Confirmar montagem e necessidade de registro",
          "descricao": "Combine montagem e balanceamento e registre a orientação recebida sobre eventual procedimento documental.",
          "documentosNecessarios": [
            "Orçamento de montagem e balanceamento",
            "Orientação do órgão sobre a mudança de medidas"
          ],
          "valor": "Faixa a validar — solicitar orçamento; não é taxa oficial"
        }
      ]
    },
    "fonte": {
      "nome": "Resolução CONTRAN nº 916/2022",
      "orgao": "CONTRAN / Senatran",
      "referencia": "https://www.gov.br/transportes/pt-br/assuntos/transito/conteudo-contran/resolucao-contran-no-916-de-28-de-marco-de-2022",
      "dataConsulta": "a validar"
    }
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
    "oQueE": "Pintura altera o revestimento da carroceria; envelopamento aplica uma película sobre ele. Uma alteração visual pode também mudar a cor identificada no documento do veículo.",
    "beneficios": [
      "Renovar a aparência e personalizar a combinação de cores.",
      "No envelopamento, experimentar um acabamento removível conforme as condições do material e da pintura."
    ],
    "pontosAtencao": [
      "A remoção do adesivo pode afetar uma pintura já comprometida.",
      "Peça instruções de limpeza, conservação e garantia.",
      "Confirme como a área alterada e a cor predominante afetam o registro, sem adotar percentuais não validados."
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
          "descricao": "Prepare uma simulação e identifique as partes que receberão acabamento.",
          "documentosNecessarios": [
            "Fotos da cor atual",
            "Esboço das áreas e da cor pretendida"
          ],
          "valor": "Faixa a validar — solicitar orçamento; não é taxa oficial"
        },
        {
          "numero": 2,
          "titulo": "Consultar a atualização documental",
          "descricao": "Pergunte ao órgão de trânsito sobre vistoria, autorização e atualização de cor aplicáveis.",
          "documentosNecessarios": [
            "Documento do veículo",
            "Orientação recebida para alteração de cor"
          ],
          "valor": "Faixa a validar — solicitar orçamento; não é taxa oficial"
        },
        {
          "numero": 3,
          "titulo": "Guardar os comprovantes do acabamento",
          "descricao": "Após o procedimento orientado, confira a correspondência entre aparência e registro.",
          "documentosNecessarios": [
            "Comprovante do serviço, se solicitado",
            "Resultado de vistoria, quando exigida"
          ],
          "valor": "Faixa a validar — solicitar orçamento; não é taxa oficial"
        }
      ]
    },
    "fonte": {
      "nome": "Resolução CONTRAN nº 916/2022",
      "orgao": "CONTRAN / Senatran",
      "referencia": "https://www.gov.br/transportes/pt-br/assuntos/transito/conteudo-contran/resolucao-contran-no-916-de-28-de-marco-de-2022",
      "dataConsulta": "a validar"
    }
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
    "oQueE": "O projeto pode envolver substituir um motor ou alterar seu funcionamento. A origem do componente, a identificação e a compatibilidade com transmissão, arrefecimento e freios precisam ser estudadas em conjunto.",
    "beneficios": [
      "Adequar a entrega de força a um objetivo definido.",
      "Planejar componentes compatíveis como um conjunto, reduzindo escolhas isoladas."
    ],
    "pontosAtencao": [
      "Maior esforço pode exigir rever arrefecimento e transmissão.",
      "Procedência e identificação do motor devem ser verificáveis.",
      "Nem toda combinação de motor e veículo poderá ser aceita."
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
          "descricao": "Separe reparação, substituição e preparação; consulte previamente o procedimento aplicável.",
          "documentosNecessarios": [
            "Identificação do motor atual",
            "Descrição e procedência do motor ou componentes propostos"
          ],
          "valor": "Faixa a validar — solicitar orçamento; não é taxa oficial"
        },
        {
          "numero": 2,
          "titulo": "Planejar avaliação técnica",
          "descricao": "Converse com profissionais sobre compatibilidade e sobre inspeção e CSV, se aplicáveis.",
          "documentosNecessarios": [
            "Memorial do projeto de motor",
            "Comprovantes de componentes e instalação a consultar"
          ],
          "valor": "Faixa a validar — solicitar orçamento; não é taxa oficial"
        },
        {
          "numero": 3,
          "titulo": "Conferir identificação e registro",
          "descricao": "Verifique com o órgão como registrar características e identificação após cumprir as exigências.",
          "documentosNecessarios": [
            "Documentos de procedência solicitados",
            "Resultados de inspeção e CSV, quando exigidos"
          ],
          "valor": "Faixa a validar — solicitar orçamento; não é taxa oficial"
        }
      ]
    },
    "fonte": {
      "nome": "Resolução CONTRAN nº 916/2022",
      "orgao": "CONTRAN / Senatran",
      "referencia": "https://www.gov.br/transportes/pt-br/assuntos/transito/conteudo-contran/resolucao-contran-no-916-de-28-de-marco-de-2022",
      "dataConsulta": "a validar"
    }
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
    "oQueE": "Farol, fonte luminosa e regulagem formam um sistema. Trocar somente a lâmpada pode alterar a distribuição da luz e causar ofuscamento, mesmo que a peça encaixe.",
    "beneficios": [
      "Recuperar a eficiência de componentes desgastados usando reposição adequada.",
      "Melhorar a conservação e a regulagem do conjunto original."
    ],
    "pontosAtencao": [
      "Brilho anunciado não demonstra qualidade do facho nem conformidade.",
      "Cores, funções e tecnologia precisam de verificação específica.",
      "Não presuma que instalar e depois pedir regularização seja possível."
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
          "descricao": "Registre peças e tecnologia originais antes de considerar alternativas.",
          "documentosNecessarios": [
            "Identificação do farol original",
            "Especificação da fonte luminosa prevista no manual"
          ],
          "valor": "Faixa a validar — solicitar orçamento; não é taxa oficial"
        },
        {
          "numero": 2,
          "titulo": "Consultar a admissibilidade da troca",
          "descricao": "Descreva a aplicação exata ao órgão; se não for admitida, reveja a proposta antes de instalar.",
          "documentosNecessarios": [
            "Ficha técnica do conjunto pretendido",
            "Resposta sobre aplicação e procedimento"
          ],
          "valor": "Faixa a validar — solicitar orçamento; não é taxa oficial"
        },
        {
          "numero": 3,
          "titulo": "Verificar regulagem e documentação",
          "descricao": "Para uma solução admissível, planeje regulagem e confira eventuais exigências documentais.",
          "documentosNecessarios": [
            "Registro de regulagem e serviço",
            "Orientação documental específica para iluminação"
          ],
          "valor": "Faixa a validar — solicitar orçamento; não é taxa oficial"
        }
      ]
    },
    "fonte": {
      "nome": "Resolução CONTRAN nº 916/2022",
      "orgao": "CONTRAN / Senatran",
      "referencia": "https://www.gov.br/transportes/pt-br/assuntos/transito/conteudo-contran/resolucao-contran-no-916-de-28-de-marco-de-2022",
      "dataConsulta": "a validar"
    }
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
    "oQueE": "Acessórios podem mudar a aparência e a função de partes externas. Uma peça decorativa, um suporte e uma intervenção estrutural têm impactos diferentes e não devem receber a mesma orientação automática.",
    "beneficios": [
      "Adaptar funções de transporte quando a aplicação for compatível.",
      "Personalizar acabamento e aparência com um projeto de fixação adequado."
    ],
    "pontosAtencao": [
      "Não obstrua visibilidade, iluminação ou identificação do veículo.",
      "Fixações e quinas podem representar risco a ocupantes e terceiros.",
      "Cortes e mudanças estruturais precisam de análise própria antes de qualquer intervenção."
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
          "descricao": "Liste função, posição, dimensões e pontos de fixação.",
          "documentosNecessarios": [
            "Desenho de posição dos acessórios",
            "Dimensões e instruções do fabricante"
          ],
          "valor": "Faixa a validar — solicitar orçamento; não é taxa oficial"
        },
        {
          "numero": 2,
          "titulo": "Consultar interferências e restrições",
          "descricao": "Apresente as alterações ao órgão e a um profissional antes de furar ou cortar a estrutura.",
          "documentosNecessarios": [
            "Fotos dos locais de instalação",
            "Descrição das interferências e fixações"
          ],
          "valor": "Faixa a validar — solicitar orçamento; não é taxa oficial"
        },
        {
          "numero": 3,
          "titulo": "Documentar o resultado admitido",
          "descricao": "Confirme inspeções e registro necessários para o escopo aprovado antes de concluir o projeto.",
          "documentosNecessarios": [
            "Comprovantes de instalação a consultar",
            "Documentação de inspeção exigida para o escopo"
          ],
          "valor": "Faixa a validar — solicitar orçamento; não é taxa oficial"
        }
      ]
    },
    "fonte": {
      "nome": "Resolução CONTRAN nº 916/2022",
      "orgao": "CONTRAN / Senatran",
      "referencia": "https://www.gov.br/transportes/pt-br/assuntos/transito/conteudo-contran/resolucao-contran-no-916-de-28-de-marco-de-2022",
      "dataConsulta": "a validar"
    }
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
    "oQueE": "Um turbocompressor usa a energia dos gases de escape para comprimir o ar de admissão. A instalação demanda estudo de combustível, lubrificação, temperatura, controle e limites mecânicos, não apenas a compra de um kit.",
    "beneficios": [
      "Possibilidade de mudar a entrega de torque em um projeto corretamente dimensionado.",
      "Definir metas de uso e medição para orientar a preparação."
    ],
    "pontosAtencao": [
      "Pressão de trabalho isolada não define segurança ou ganho de potência.",
      "Falhas de alimentação, lubrificação ou controle térmico podem danificar o motor.",
      "Consulte autorização e viabilidade antes de instalar; inspeção posterior não garante aprovação."
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
          "descricao": "Após confirmar previamente a viabilidade e a autorização aplicável, pergunte como agendar a avaliação técnica do projeto instalado. Esta sequência é um roteiro, não um procedimento oficial completo.",
          "documentosNecessarios": [
            "Descrição do kit turbo e da aplicação",
            "Comprovantes de peças e instalação",
            "Autorização prévia, quando exigida"
          ],
          "valor": "Faixa a validar — solicitar orçamento; não é taxa oficial"
        },
        {
          "numero": 2,
          "titulo": "Certificado de Segurança Veicular (CSV)",
          "descricao": "Confirme a exigência e a emissão do CSV vinculada à inspeção; não trate laudo e certificado como dois serviços obrigatoriamente cobrados separadamente.",
          "documentosNecessarios": [
            "Resultado da inspeção do conjunto turbo",
            "Identificação do veículo para o certificado"
          ],
          "valor": "Faixa a validar — solicitar orçamento; não é taxa oficial"
        },
        {
          "numero": 3,
          "titulo": "Registro no DETRAN",
          "descricao": "Consulte como apresentar os comprovantes e atualizar as características, caso a alteração seja admitida.",
          "documentosNecessarios": [
            "CSV, quando exigido",
            "Documento do veículo e comprovantes solicitados pelo órgão"
          ],
          "valor": "Faixa a validar — solicitar orçamento; não é taxa oficial"
        }
      ]
    },
    "fonte": {
      "nome": "Resolução CONTRAN nº 916/2022",
      "orgao": "CONTRAN / Senatran",
      "referencia": "https://www.gov.br/transportes/pt-br/assuntos/transito/conteudo-contran/resolucao-contran-no-916-de-28-de-marco-de-2022",
      "dataConsulta": "a validar"
    }
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
    "oQueE": "A suspensão pneumática usa ar pressurizado em bolsas para sustentar o veículo. Reservatório, válvulas e linhas fazem parte do sistema, que deve manter curso e condições de uso definidos no projeto.",
    "beneficios": [
      "Permitir ajustes de altura dentro das condições previstas para o sistema.",
      "Planejar a resposta e a acomodação de carga conforme a aplicação."
    ],
    "pontosAtencao": [
      "Vazamentos e falhas elétricas podem comprometer a altura de operação.",
      "O posicionamento de linhas e reservatório precisa evitar calor, atrito e impactos.",
      "A altura de exposição não deve ser confundida com uma condição permitida de circulação."
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
          "descricao": "Consulte a viabilidade antes de contratar, descrevendo bolsas, controle e alturas de operação.",
          "documentosNecessarios": [
            "Diagrama do circuito pneumático",
            "Especificação de bolsas, compressor e reservatório"
          ],
          "valor": "Faixa a validar — solicitar orçamento; não é taxa oficial"
        },
        {
          "numero": 2,
          "titulo": "Planejar instalação e inspeção",
          "descricao": "Peça testes de estanqueidade e segurança; consulte inspeção e CSV aplicáveis.",
          "documentosNecessarios": [
            "Plano de fixação e passagem das linhas",
            "Comprovantes do kit e instalação a consultar"
          ],
          "valor": "Faixa a validar — solicitar orçamento; não é taxa oficial"
        },
        {
          "numero": 3,
          "titulo": "Confirmar registro e uso",
          "descricao": "Confira a documentação exigida e registre as condições de operação orientadas.",
          "documentosNecessarios": [
            "Resultado de inspeção e CSV, se exigidos",
            "Manual de operação e manutenção do sistema"
          ],
          "valor": "Faixa a validar — solicitar orçamento; não é taxa oficial"
        }
      ]
    },
    "fonte": {
      "nome": "Resolução CONTRAN nº 916/2022",
      "orgao": "CONTRAN / Senatran",
      "referencia": "https://www.gov.br/transportes/pt-br/assuntos/transito/conteudo-contran/resolucao-contran-no-916-de-28-de-marco-de-2022",
      "dataConsulta": "a validar"
    }
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
    "oQueE": "O escapamento conduz gases e participa do controle de ruído e emissões. Alterar tubos, abafadores ou outros componentes pode afetar essas funções e a compatibilidade do veículo.",
    "beneficios": [
      "Escolher um conjunto compatível com o objetivo acústico, dentro das condições admitidas.",
      "Melhorar durabilidade e acabamento por meio de materiais e montagem adequados."
    ],
    "pontosAtencao": [
      "Som mais alto não comprova ganho de desempenho.",
      "Não trate remoção de catalisador ou supressão de controle de emissões como caminho de regularização.",
      "Ruído e emissões exigem verificação específica; não há limite numérico validado neste roteiro."
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
          "descricao": "Descreva o sistema original e os pontos que seriam substituídos.",
          "documentosNecessarios": [
            "Diagrama do escapamento original",
            "Ficha do conjunto proposto"
          ],
          "valor": "Faixa a validar — solicitar orçamento; não é taxa oficial"
        },
        {
          "numero": 2,
          "titulo": "Consultar ruído e emissões",
          "descricao": "Peça orientação sobre admissibilidade e critérios de avaliação antes da compra.",
          "documentosNecessarios": [
            "Especificações de abafadores e controle de emissões",
            "Resposta técnica sobre ensaios aplicáveis"
          ],
          "valor": "Faixa a validar — solicitar orçamento; não é taxa oficial"
        },
        {
          "numero": 3,
          "titulo": "Conferir montagem e procedimento",
          "descricao": "Para uma solução admitida, planeje fixação e estanqueidade e consulte eventual registro.",
          "documentosNecessarios": [
            "Comprovante de instalação a consultar",
            "Resultados de avaliações exigidas para o sistema"
          ],
          "valor": "Faixa a validar — solicitar orçamento; não é taxa oficial"
        }
      ]
    },
    "fonte": {
      "nome": "Resolução CONTRAN nº 916/2022",
      "orgao": "CONTRAN / Senatran",
      "referencia": "https://www.gov.br/transportes/pt-br/assuntos/transito/conteudo-contran/resolucao-contran-no-916-de-28-de-marco-de-2022",
      "dataConsulta": "a validar"
    }
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
    "oQueE": "Remap é uma alteração nos parâmetros de controle eletrônico do motor. Combustível, ignição e outros controles dependem da configuração, e um arquivo genérico não demonstra compatibilidade com qualquer veículo.",
    "beneficios": [
      "Ajustar a calibração a um conjunto tecnicamente estudado, se admitido.",
      "Definir medições comparáveis para avaliar a resposta antes e depois do projeto."
    ],
    "pontosAtencao": [
      "A alteração pode afetar emissões, garantia e durabilidade.",
      "Desativar diagnósticos ou controles de emissões não é uma solução de regularização.",
      "Não presuma dispensa de procedimento por a mudança não ser visível."
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
          "descricao": "Identifique módulo, versão e componentes atuais antes de discutir uma calibração.",
          "documentosNecessarios": [
            "Identificação do módulo e versão original",
            "Descrição do combustível e dos componentes atuais"
          ],
          "valor": "Faixa a validar — solicitar orçamento; não é taxa oficial"
        },
        {
          "numero": 2,
          "titulo": "Consultar admissibilidade e medições",
          "descricao": "Pergunte ao órgão e ao responsável técnico sobre características alteradas e avaliações necessárias.",
          "documentosNecessarios": [
            "Proposta de calibração e parâmetros afetados",
            "Plano de avaliação de funcionamento e emissões"
          ],
          "valor": "Faixa a validar — solicitar orçamento; não é taxa oficial"
        },
        {
          "numero": 3,
          "titulo": "Documentar a intervenção admitida",
          "descricao": "Registre o escopo executado e confirme os comprovantes exigidos, sem garantir que a alteração possa ser regularizada.",
          "documentosNecessarios": [
            "Relatório técnico da intervenção, se realizada",
            "Orientação sobre registro da alteração de características"
          ],
          "valor": "Faixa a validar — solicitar orçamento; não é taxa oficial"
        }
      ]
    },
    "fonte": {
      "nome": "Resolução CONTRAN nº 916/2022",
      "orgao": "CONTRAN / Senatran",
      "referencia": "https://www.gov.br/transportes/pt-br/assuntos/transito/conteudo-contran/resolucao-contran-no-916-de-28-de-marco-de-2022",
      "dataConsulta": "a validar"
    }
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
    "oQueE": "O sistema de freios reúne componentes hidráulicos, mecânicos e eletrônicos. Uma alteração precisa considerar equilíbrio entre eixos, capacidade térmica e interação com ABS e outros controles.",
    "beneficios": [
      "Dimensionar a capacidade térmica para uma aplicação estudada.",
      "Planejar componentes compatíveis, com manutenção e reposição documentadas."
    ],
    "pontosAtencao": [
      "Uma pinça maior não garante menor distância de parada.",
      "Rodas, mangueiras e comandos precisam ser compatíveis.",
      "Mudanças podem afetar ABS e distribuição de frenagem; diferencie manutenção de alteração do sistema."
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
          "descricao": "Descreva o sistema atual e peça análise antes de escolher um kit.",
          "documentosNecessarios": [
            "Identificação de discos, pinças e comandos originais",
            "Especificação do kit e aplicação pretendida"
          ],
          "valor": "Faixa a validar — solicitar orçamento; não é taxa oficial"
        },
        {
          "numero": 2,
          "titulo": "Consultar compatibilidade e admissibilidade",
          "descricao": "Verifique interação com controles eletrônicos, montagem e avaliações exigidas.",
          "documentosNecessarios": [
            "Estudo de compatibilidade entre eixos e ABS",
            "Orientação sobre procedimento e ensaios de frenagem"
          ],
          "valor": "Faixa a validar — solicitar orçamento; não é taxa oficial"
        },
        {
          "numero": 3,
          "titulo": "Registrar avaliações e manutenção",
          "descricao": "Se o projeto for admitido, documente instalação, avaliação e eventual atualização cadastral.",
          "documentosNecessarios": [
            "Relatório de instalação e avaliação do conjunto",
            "Plano de manutenção e documentos solicitados pelo órgão"
          ],
          "valor": "Faixa a validar — solicitar orçamento; não é taxa oficial"
        }
      ]
    },
    "fonte": {
      "nome": "Resolução CONTRAN nº 916/2022",
      "orgao": "CONTRAN / Senatran",
      "referencia": "https://www.gov.br/transportes/pt-br/assuntos/transito/conteudo-contran/resolucao-contran-no-916-de-28-de-marco-de-2022",
      "dataConsulta": "a validar"
    }
  }
];

// Todos os estabelecimentos, endereços, distâncias, horários e relatos abaixo são fictícios.
// Distâncias simuladas não usam localização e não são comparáveis entre cidades reais.
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
        "descricao": "Exemplo: o orçamento separava os serviços e explicava o que precisava ser confirmado.",
        "ficticia": true
      },
      {
        "id": 2,
        "autor": "Pessoa de exemplo 2",
        "data": null,
        "estrelas": 4,
        "descricao": "Exemplo: a conversa sobre compatibilidade ajudou a organizar as perguntas do projeto.",
        "ficticia": true
      },
      {
        "id": 3,
        "autor": "Pessoa de exemplo 3",
        "data": null,
        "estrelas": 4,
        "descricao": "Exemplo: gostaria de receber mais detalhes sobre os prazos e as etapas previstas.",
        "ficticia": true
      },
      {
        "id": 4,
        "autor": "Pessoa de exemplo 4",
        "data": null,
        "estrelas": 5,
        "descricao": "Exemplo: o atendimento mostrou os pontos de manutenção que deveriam ser observados.",
        "ficticia": true
      }
    ],
    "ficticia": true
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
        "descricao": "Exemplo: o orçamento separava os serviços e explicava o que precisava ser confirmado.",
        "ficticia": true
      },
      {
        "id": 12,
        "autor": "Pessoa de exemplo 2",
        "data": null,
        "estrelas": 4,
        "descricao": "Exemplo: a conversa sobre compatibilidade ajudou a organizar as perguntas do projeto.",
        "ficticia": true
      },
      {
        "id": 13,
        "autor": "Pessoa de exemplo 3",
        "data": null,
        "estrelas": 3,
        "descricao": "Exemplo: gostaria de receber mais detalhes sobre os prazos e as etapas previstas.",
        "ficticia": true
      }
    ],
    "ficticia": true
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
        "descricao": "Exemplo: o orçamento separava os serviços e explicava o que precisava ser confirmado.",
        "ficticia": true
      },
      {
        "id": 22,
        "autor": "Pessoa de exemplo 2",
        "data": null,
        "estrelas": 5,
        "descricao": "Exemplo: a conversa sobre compatibilidade ajudou a organizar as perguntas do projeto.",
        "ficticia": true
      },
      {
        "id": 23,
        "autor": "Pessoa de exemplo 3",
        "data": null,
        "estrelas": 5,
        "descricao": "Exemplo: gostaria de receber mais detalhes sobre os prazos e as etapas previstas.",
        "ficticia": true
      },
      {
        "id": 24,
        "autor": "Pessoa de exemplo 4",
        "data": null,
        "estrelas": 5,
        "descricao": "Exemplo: o atendimento mostrou os pontos de manutenção que deveriam ser observados.",
        "ficticia": true
      },
      {
        "id": 25,
        "autor": "Pessoa de exemplo 5",
        "data": null,
        "estrelas": 5,
        "descricao": "Exemplo: o escopo foi explicado antes de qualquer decisão sobre peças.",
        "ficticia": true
      }
    ],
    "ficticia": true
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
        "descricao": "Exemplo: o orçamento separava os serviços e explicava o que precisava ser confirmado.",
        "ficticia": true
      },
      {
        "id": 32,
        "autor": "Pessoa de exemplo 2",
        "data": null,
        "estrelas": 5,
        "descricao": "Exemplo: a conversa sobre compatibilidade ajudou a organizar as perguntas do projeto.",
        "ficticia": true
      },
      {
        "id": 33,
        "autor": "Pessoa de exemplo 3",
        "data": null,
        "estrelas": 4,
        "descricao": "Exemplo: gostaria de receber mais detalhes sobre os prazos e as etapas previstas.",
        "ficticia": true
      },
      {
        "id": 34,
        "autor": "Pessoa de exemplo 4",
        "data": null,
        "estrelas": 4,
        "descricao": "Exemplo: o atendimento mostrou os pontos de manutenção que deveriam ser observados.",
        "ficticia": true
      }
    ],
    "ficticia": true
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
        "descricao": "Exemplo: o orçamento separava os serviços e explicava o que precisava ser confirmado.",
        "ficticia": true
      },
      {
        "id": 42,
        "autor": "Pessoa de exemplo 2",
        "data": null,
        "estrelas": 4,
        "descricao": "Exemplo: a conversa sobre compatibilidade ajudou a organizar as perguntas do projeto.",
        "ficticia": true
      },
      {
        "id": 43,
        "autor": "Pessoa de exemplo 3",
        "data": null,
        "estrelas": 5,
        "descricao": "Exemplo: gostaria de receber mais detalhes sobre os prazos e as etapas previstas.",
        "ficticia": true
      }
    ],
    "ficticia": true
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
        "descricao": "Exemplo: o orçamento separava os serviços e explicava o que precisava ser confirmado.",
        "ficticia": true
      },
      {
        "id": 52,
        "autor": "Pessoa de exemplo 2",
        "data": null,
        "estrelas": 4,
        "descricao": "Exemplo: a conversa sobre compatibilidade ajudou a organizar as perguntas do projeto.",
        "ficticia": true
      },
      {
        "id": 53,
        "autor": "Pessoa de exemplo 3",
        "data": null,
        "estrelas": 4,
        "descricao": "Exemplo: gostaria de receber mais detalhes sobre os prazos e as etapas previstas.",
        "ficticia": true
      },
      {
        "id": 54,
        "autor": "Pessoa de exemplo 4",
        "data": null,
        "estrelas": 3,
        "descricao": "Exemplo: o atendimento mostrou os pontos de manutenção que deveriam ser observados.",
        "ficticia": true
      }
    ],
    "ficticia": true
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
        "descricao": "Exemplo: o orçamento separava os serviços e explicava o que precisava ser confirmado.",
        "ficticia": true
      },
      {
        "id": 62,
        "autor": "Pessoa de exemplo 2",
        "data": null,
        "estrelas": 4,
        "descricao": "Exemplo: a conversa sobre compatibilidade ajudou a organizar as perguntas do projeto.",
        "ficticia": true
      },
      {
        "id": 63,
        "autor": "Pessoa de exemplo 3",
        "data": null,
        "estrelas": 5,
        "descricao": "Exemplo: gostaria de receber mais detalhes sobre os prazos e as etapas previstas.",
        "ficticia": true
      }
    ],
    "ficticia": true
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
        "descricao": "Exemplo: o orçamento separava os serviços e explicava o que precisava ser confirmado.",
        "ficticia": true
      },
      {
        "id": 72,
        "autor": "Pessoa de exemplo 2",
        "data": null,
        "estrelas": 3,
        "descricao": "Exemplo: a conversa sobre compatibilidade ajudou a organizar as perguntas do projeto.",
        "ficticia": true
      },
      {
        "id": 73,
        "autor": "Pessoa de exemplo 3",
        "data": null,
        "estrelas": 3,
        "descricao": "Exemplo: gostaria de receber mais detalhes sobre os prazos e as etapas previstas.",
        "ficticia": true
      },
      {
        "id": 74,
        "autor": "Pessoa de exemplo 4",
        "data": null,
        "estrelas": 4,
        "descricao": "Exemplo: o atendimento mostrou os pontos de manutenção que deveriam ser observados.",
        "ficticia": true
      },
      {
        "id": 75,
        "autor": "Pessoa de exemplo 5",
        "data": null,
        "estrelas": 3,
        "descricao": "Exemplo: o escopo foi explicado antes de qualquer decisão sobre peças.",
        "ficticia": true
      }
    ],
    "ficticia": true
  }
];

window.GaragemDados = { guias, oficinas };
