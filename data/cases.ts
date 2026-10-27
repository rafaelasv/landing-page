// Conteúdo dos estudos de caso. period: null = data ainda não confirmada (o campo não aparece no card).
export type Case = {
  num: string; slug: string; shortTitle: string; category: string; title: string; lead: string;
  role: string; period: string | null; type: string; stack: string;
  context: string; problem: string;
  steps: { title: string; text: string }[];
  results: { value: string; label: string }[];
  links: { label: string; href: string }[];
  sticker: string;
};

export const CASES: Case[] = [
  {
    "num": "01",
    "slug": "case-01",
    "category": "Automação · Produto",
    "title": "Infraestrutura de vendas — escola de idiomas",
    "lead": "Sistema que automatizou toda a entrada de uma aluna nova: do pagamento ao primeiro contato no WhatsApp.",
    "role": "Desenvolvedora & Integradora",
    "period": null,
    "type": "Freelance",
    "stack": "Python · n8n · WhatsApp API",
    "context": "Uma escola de idiomas online com fluxo de matrículas crescente operava todo o processo de forma manual, desde o envio de contratos por e-mail até a confirmação de pagamento feita na mão. Com o volume aumentando, o processo virou gargalo.",
    "problem": "Quando entrei no projeto, cada matrícula nova consumia cerca de uma hora de trabalho manual da equipe: enviar contrato, cobrar, confirmar pagamento, dar boas-vindas. Com 20 alunas por mês, era meio turno inteiro da semana gasto com processo, não com ensino.",
    "steps": [
      {
        "title": "Mapeei o fluxo de ponta a ponta",
        "text": "Entrevistei a cliente e documentei cada etapa manual, do interesse da aluna ao primeiro acesso ao curso, para identificar onde automatizar teria mais impacto imediato."
      },
      {
        "title": "Integrei pagamento e contrato automático",
        "text": "Conectei Asaas (cobranças recorrentes) com Assiny (assinatura digital) via webhooks e n8n. Ao confirmar o pagamento, o contrato é gerado, enviado e assinado sem intervenção humana."
      },
      {
        "title": "Criei o bot de onboarding no WhatsApp",
        "text": "Automação que dispara boas-vindas personalizadas, envia o link de acesso ao Guru e guia a aluna nas primeiras horas, no horário certo."
      }
    ],
    "results": [
      {
        "value": "0 min",
        "label": "tempo manual por matrícula"
      },
      {
        "value": "~1h",
        "label": "economizada por aluna (antes)"
      }
    ],
    "links": [],
    "sticker": "exclamation",
    "shortTitle": "Infraestrutura de vendas"
  },
  {
    "num": "02",
    "slug": "case-02",
    "category": "Frontend · Conteúdo",
    "title": "Sistema de conteúdo e distribuição",
    "lead": "Estrutura que deu identidade visual e organização à produção de conteúdo de uma marca com 80k seguidores.",
    "role": "Desenvolvedora Frontend",
    "period": null,
    "type": "Freelance",
    "stack": "HTML/CSS · JS · Google AppScript",
    "context": "Uma escola de idiomas com 80 mil seguidores no Instagram produzia conteúdo de forma descentralizada, sem guia visual, sem identidade consistente e sem estrutura de distribuição para outros canais.",
    "problem": "A marca produzia conteúdo toda semana, mas cada post era feito sem guia: paleta, tipografia e tom mudavam de um carrossel pro outro. Nos outros canais, nada era publicado. O conteúdo morria no feed.",
    "steps": [
      {
        "title": "Construí o sistema de identidade visual",
        "text": "Desenvolvi 8 páginas de guias de conteúdo cobrindo paleta, tipografia, tom de voz e diretrizes para cada formato, dando consistência a toda a produção."
      },
      {
        "title": "Criei as páginas de distribuição",
        "text": "Páginas de link in bio otimizadas para Instagram e TikTok, mais uma página de vendas do curso principal, tudo em HTML/CSS puro com carregamento rápido."
      },
      {
        "title": "Automatizei o pipeline de vídeo",
        "text": "Script em Google AppScript que aplica marca d'água nos vídeos automaticamente antes da publicação, eliminando o trabalho manual de edição básica."
      }
    ],
    "results": [
      {
        "value": "8 guias",
        "label": "de identidade visual: paleta, tipografia, tom de voz e diretrizes por formato"
      },
      {
        "value": "3 páginas",
        "label": "link in bio (Instagram e TikTok) + página de vendas do curso"
      }
    ],
    "links": [],
    "sticker": "star",
    "shortTitle": "Conteúdo e distribuição"
  },
  {
    "num": "03",
    "slug": "case-03",
    "category": "Automação · IA",
    "title": "Automação de processos contábeis",
    "lead": "Tarefas que tomavam 1 hora do time passaram a ser resolvidas em 5 minutos, sem intervenção manual.",
    "role": "Desenvolvedora & Automatizadora",
    "period": "2024 · CLT",
    "type": "CLT",
    "stack": "Python · Selenium · SQL · LLMs",
    "context": "Escritório de contabilidade com volume alto de tarefas operacionais repetitivas: download de documentos fiscais, geração de relatórios, atendimento de dúvidas recorrentes. O time gastava horas por semana em trabalho que poderia ser automatizado.",
    "problem": "O time executava as mesmas tarefas todo dia: baixar NFS-e, puxar dados de ERPs, responder as mesmas dúvidas por ticket. Uma hora por execução, cinco dias por semana. A documentação inexistente dificultava o treinamento de novos colaboradores.",
    "steps": [
      {
        "title": "Mapeei e priorizei os processos",
        "text": "Identifiquei as tarefas que mais consumiam tempo (downloads de NFS-e, relatórios em ERPs) e priorizei pela combinação de frequência e esforço manual."
      },
      {
        "title": "Automatizei com Python e Selenium",
        "text": "Scripts que executam tarefas em segundos: download em lote de NFS-e, extração de dados de ERPs (Bling, Tiny, Upseller) e geração automática de relatórios."
      },
      {
        "title": "Reduzi tickets com IA e documentação",
        "text": "Agente de IA treinado com as FAQs internas para responder dúvidas recorrentes, mais documentação detalhada em vídeo para onboarding de novos colaboradores."
      }
    ],
    "results": [
      {
        "value": "~1h → 5min",
        "label": "tempo por execução"
      },
      {
        "value": "Bling, Tiny, Upseller",
        "label": "ERPs com extração de dados automatizada"
      }
    ],
    "links": [
      {
        "label": "código no GitHub",
        "href": "https://github.com/rafaelasv/baixa-nfse"
      }
    ],
    "sticker": "rabbit",
    "shortTitle": "Processos contábeis"
  },
  {
    "num": "04",
    "slug": "case-04",
    "category": "IA · Automação",
    "title": "Sistema de comunicação e alertas via IA",
    "lead": "A equipe parou de checar grupos e planilhas na mão. Os avisos certos chegam sozinhos, na hora certa.",
    "role": "Desenvolvedora & Automatizadora",
    "period": null,
    "type": "Freelance",
    "stack": "Node.js · Claude · Gemini · Railway",
    "context": "Escola de idiomas online com equipe distribuída que dependia de checagem manual de 6 grupos de WhatsApp, planilhas de tráfego e formulários de alunas para tomar decisões diárias, gerando atraso e sobrecarga.",
    "problem": "A equipe começava o dia checando 6 grupos de WhatsApp, cruzando com planilhas de tráfego e formulários de alunas, tudo na mão. Isso atrasava a resposta a inadimplência, leads e aulas experimentais, e informação importante se perdia no ruído.",
    "steps": [
      {
        "title": "Eliminei a checagem manual de grupos",
        "text": "Configurei Claude Code CLI para ler e resumir automaticamente os 6 grupos de WhatsApp toda manhã, entregando um relatório consolidado no horário certo, sem precisar abrir nenhum chat."
      },
      {
        "title": "Automatizei cobranças e inadimplência",
        "text": "Sequência de cobrança de 7 dias com node-cron rodando no Railway: mensagens distintas para cartão e boleto, disparadas automaticamente sem intervenção humana."
      },
      {
        "title": "Integrei Gemini para nivelamento de alunas",
        "text": "IA que lê as respostas do formulário de cada aluna nova, determina o nível de inglês e gera uma mensagem personalizada de nivelamento, entregue automaticamente no grupo certo."
      }
    ],
    "results": [
      {
        "value": "6",
        "label": "grupos monitorados automaticamente"
      },
      {
        "value": "7 dias",
        "label": "de cobrança automática por aluna inadimplente"
      }
    ],
    "links": [],
    "sticker": "crow",
    "shortTitle": "Comunicação e alertas via IA"
  },
  {
    "num": "05",
    "slug": "case-05",
    "category": "Automação · Distribuição",
    "title": "Distribuição multi-plataforma de conteúdo",
    "lead": "O mesmo conteúdo passou a alcançar Instagram, TikTok e Pinterest de forma automática, sem trabalho repetido.",
    "role": "Desenvolvedora & Automatizadora",
    "period": null,
    "type": "Freelance",
    "stack": "Make · Python · ManyChat · Instagram API",
    "context": "Escola de idiomas com 80k seguidores no Instagram e produção constante de conteúdo. Todo o material ficava restrito a uma plataforma, sem aproveitamento no TikTok e Pinterest, e sem canal direto de engajamento com a base.",
    "problem": "Todo o conteúdo era produzido pro Instagram e ficava só lá. TikTok e Pinterest existiam como perfis vazios. Publicar nos três significaria triplicar o trabalho, então ninguém publicava.",
    "steps": [
      {
        "title": "Integrei Instagram → Pinterest via Make",
        "text": "Cada post publicado no Instagram é automaticamente republicado no Pinterest com título e descrição adaptados, sem trabalho extra."
      },
      {
        "title": "Estruturei o pipeline de Reels para TikTok",
        "text": "Sistema de organização e cronograma com gallery-dl e Python que facilita o upload em lote de Reels no TikTok, eliminando o trabalho duplicado de baixar e repostar manualmente."
      },
      {
        "title": "Criei canal de transmissão automatizado",
        "text": "ManyChat configurado para adicionar seguidoras ao canal de transmissão do Instagram a partir de gatilhos de DM, criando um canal direto com a base mais engajada."
      }
    ],
    "results": [
      {
        "value": "3 plataformas",
        "label": "Instagram, TikTok e Pinterest recebendo o mesmo conteúdo"
      },
      {
        "value": "Make + ManyChat",
        "label": "republicação no Pinterest e canal de transmissão alimentado por DMs"
      }
    ],
    "links": [],
    "sticker": "bow",
    "shortTitle": "Distribuição multi-plataforma"
  },
  {
    "num": "06",
    "slug": "case-06",
    "category": "IA · Automação",
    "title": "Agente de triagem de candidatos via WhatsApp",
    "lead": "Sistema que recebe candidatos no WhatsApp, conduz a triagem por conversa e extrai dados do currículo automaticamente, sem intervenção humana.",
    "role": "Desenvolvedora & Automatizadora",
    "period": "2026 · em andamento",
    "type": "Freelance",
    "stack": "n8n · Evolution API · DeepSeek · Redis · PostgreSQL",
    "context": "Uma empresa de recrutamento e estágios recebia candidatos por WhatsApp e fazia toda a triagem de forma manual: lendo mensagens, pedindo dados, avaliando perfis um por um. O volume de vagas abertas crescia, mas o processo continuava o mesmo.",
    "problem": "O recrutador recebia dezenas de mensagens no WhatsApp, lia uma por uma, pedia dados que o candidato já tinha mandado e copiava tudo pra planilha. Com várias vagas abertas ao mesmo tempo, o processo não escalava.",
    "steps": [
      {
        "title": "Criei o agente de triagem no WhatsApp",
        "text": "Agente conversacional que recebe o candidato, identifica a vaga de interesse, conduz a triagem com perguntas estruturadas e classifica automaticamente: apto, reprovado ou desistente. Usa DeepSeek como LLM com prompt customizado e exemplos few-shot, Redis para agrupar mensagens fragmentadas (debounce) e PostgreSQL para manter o estado da conversa. Reengajamento automático: 24h sem resposta gera lembrete, 72h encerra como desistência."
      },
      {
        "title": "Automatizei a extração de dados curriculares",
        "text": "Sub-workflow acionado quando o candidato envia o currículo pelo WhatsApp. A IA extrai 18 campos estruturados (nome, contato, formação, experiências, habilidades) direto do texto do documento, com os dados prontos para consulta no banco."
      },
      {
        "title": "Adaptei o portal de vagas",
        "text": "A partir de uma base existente, customizei o portal para o contexto do projeto, ajustando a estrutura para funcionar junto com o agente de triagem e o fluxo de candidaturas."
      }
    ],
    "results": [
      {
        "value": "18",
        "label": "campos curriculares extraídos por IA"
      },
      {
        "value": "24h / 72h",
        "label": "reengajamento automático: lembrete e encerramento por inatividade"
      },
      {
        "value": "3 status",
        "label": "apto, reprovado ou desistente, com aviso ao recrutador quando apto"
      }
    ],
    "links": [],
    "sticker": "exclamation",
    "shortTitle": "Triagem via WhatsApp"
  }
];
