'use strict';
// Catálogo local. Uma futura API poderá fornecer estes mesmos objetos.
const guias = [
  {id:'suspensao',titulo:'Suspensão e rebaixamento',categoria:'Suspensão',art:'suspension',color:'',descricao:'Planeje a mudança de altura e organize as dúvidas antes de modificar.',question:'Qual sistema de suspensão você pretende instalar e em qual modelo de veículo?',specific:'Consulte os limites e as condições aplicáveis à suspensão, ao peso e à categoria do seu veículo.'},
  {id:'rodas',titulo:'Rodas e pneus',categoria:'Rodas e pneus',art:'wheels',color:'orange',descricao:'Entenda o que consultar antes de escolher o próximo conjunto.',question:'Quais são as medidas originais e as medidas pretendidas para rodas e pneus?',specific:'Confirme a compatibilidade do conjunto e as condições permitidas para a categoria do veículo.'},
  {id:'cor',titulo:'Pintura e envelopamento',categoria:'Visual',art:'paint',color:'slate',descricao:'Uma nova identidade para o carro começa com um bom planejamento.',question:'Qual será a nova cor e qual área do veículo receberá pintura ou adesivo?',specific:'Pergunte quando a alteração de cor exige atualização do registro e quais documentos serão necessários.'},
  {id:'motor',titulo:'Motor e potência',categoria:'Performance',art:'engine',color:'slate',descricao:'Prepare as perguntas sobre mudanças de motor e desempenho.',question:'A mudança envolve substituição do motor ou alteração de suas características?',specific:'Confirme se a mudança pretendida é permitida e quais comprovantes de procedência e inspeções se aplicam.'},
  {id:'iluminacao',titulo:'Iluminação',categoria:'Visual',art:'light',color:'',descricao:'Pesquise a compatibilidade antes de trocar o sistema de iluminação.',question:'Você pretende substituir lâmpadas, faróis ou o sistema completo?',specific:'Verifique a regulamentação específica de iluminação e a compatibilidade com o sistema original; não presuma que uma troca é permitida.'},
  {id:'carroceria',titulo:'Carroceria e acessórios',categoria:'Visual',art:'body',color:'orange',descricao:'Organize seu projeto de alterações externas e acessórios.',question:'Quais peças serão acrescentadas ou quais características da carroceria serão alteradas?',specific:'Descreva cada mudança ao órgão de trânsito para confirmar as condições aplicáveis ao seu caso.'}
];
const oficinas = [
  {id:1,nomeFantasia:'Oficina Horizonte',cidade:'São Paulo',uf:'SP',especialidade:'Suspensão',bairro:'Zona oeste',descricao:'Exemplo de perfil com serviços de suspensão, alinhamento e montagem de rodas.'},
  {id:2,nomeFantasia:'Estúdio de Cor',cidade:'São Paulo',uf:'SP',especialidade:'Visual',bairro:'Zona sul',descricao:'Exemplo de perfil com pintura, envelopamento e acabamento automotivo.'},
  {id:3,nomeFantasia:'Box Performance',cidade:'Campinas',uf:'SP',especialidade:'Performance',bairro:'Região central',descricao:'Exemplo de perfil com diagnóstico e preparação de projetos de motor.'},
  {id:4,nomeFantasia:'Roda Livre',cidade:'Curitiba',uf:'PR',especialidade:'Rodas e pneus',bairro:'Região central',descricao:'Exemplo de perfil com montagem, balanceamento e serviços de rodas e pneus.'}
];

window.GaragemDados = { guias, oficinas };
