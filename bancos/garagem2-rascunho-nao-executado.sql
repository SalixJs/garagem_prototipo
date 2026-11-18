-- GARAGEM2 - RASCUNHO: NAO EXECUTADO
-- Base: users, enthusiast e preferences fornecidos por voce.
-- Se alguma destas tabelas ja existir, revisar a estrutura antes de executar.
USE garagem2;

CREATE TABLE users (
    id_user BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(150) NOT NULL,
    email VARCHAR(254) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    city VARCHAR(100),
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- O perfil reutiliza o ID gerado em users: nao gera outro ID.
CREATE TABLE enthusiast (
    id_enthusiast BIGINT UNSIGNED PRIMARY KEY,
    CONSTRAINT fk_enthusiast_user
        FOREIGN KEY (id_enthusiast) REFERENCES users(id_user)
        ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE preferences (
    id_preference BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `language` VARCHAR(35) NOT NULL DEFAULT 'pt-BR',
    font_size SMALLINT UNSIGNED NOT NULL DEFAULT 16,
    color VARCHAR(30),
    source VARCHAR(50) COMMENT 'Nome da fonte tipografica',
    fk_user BIGINT UNSIGNED NOT NULL UNIQUE,
    CONSTRAINT chk_preferences_font_size CHECK (font_size > 0),
    CONSTRAINT fk_preferences_user
        FOREIGN KEY (fk_user) REFERENCES users(id_user)
        ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE guides (
    id_guide BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    description TEXT,
    category VARCHAR(50),
    estimated_cost DECIMAL(12,2),
    requires_regularization BOOLEAN NOT NULL DEFAULT FALSE,
    CONSTRAINT chk_guides_cost CHECK (estimated_cost >= 0),
    CONSTRAINT chk_guides_regularization
        CHECK (requires_regularization IN (0, 1))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- VISTOS RECENTEMENTE: uma linha por usuario + guia.
-- Uma nova visita atualiza accessed_at, sem duplicar o par.
CREATE TABLE accesses (
    fk_user BIGINT UNSIGNED NOT NULL,
    fk_guide BIGINT UNSIGNED NOT NULL,
    accessed_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (fk_user, fk_guide),
    CONSTRAINT fk_accesses_user
        FOREIGN KEY (fk_user) REFERENCES users(id_user)
        ON DELETE CASCADE,
    CONSTRAINT fk_accesses_guide
        FOREIGN KEY (fk_guide) REFERENCES guides(id_guide)
        ON DELETE CASCADE,
    INDEX idx_accesses_recent (fk_user, accessed_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/* EXEMPLOS PARA O DAO JAVA (PreparedStatement).
   Os ? sao parametros do Java, nao comandos para rodar diretamente aqui.

-- Registrar visita usando o ID do usuario autenticado:
INSERT INTO accesses (fk_user, fk_guide)
VALUES (?, ?)
ON DUPLICATE KEY UPDATE accessed_at = CURRENT_TIMESTAMP;

-- Listar os 20 guias mais recentes:
SELECT g.id_guide, g.title, a.accessed_at
FROM accesses a
JOIN guides g ON g.id_guide = a.fk_guide
WHERE a.fk_user = ?
ORDER BY a.accessed_at DESC, a.fk_guide DESC
LIMIT 20;

-- Limpar o historico do usuario autenticado:
DELETE FROM accesses WHERE fk_user = ?;
*/

-- PRIVACIDADE / IMPLEMENTACAO:
-- Gerar o hash da senha no Java; o nome password_hash nao gera o hash.
-- Nao retornar password_hash nas consultas publicas nem registra-lo em logs.
-- Autorizar no Java o acesso a preferencias e historico por usuario.
-- Definir prazo de retencao e rotina de limpeza do historico antes da publicacao.
-- LIMIT 20 limita a exibicao; nao apaga registros antigos.
-- Esta estrutura, sozinha, nao comprova conformidade com a LGPD.

-- COMPLEMENTO DO DIAGRAMA: oficinas, avaliacoes, servicos e regularizacao.
-- Todos os comandos abaixo continuam apenas como rascunho.

-- DONO DE OFICINA: nome, email e senha ficam em users.
-- Um usuario pode ser entusiasta e dono de oficina simultaneamente.
CREATE TABLE workshop_owners (
    id_owner BIGINT UNSIGNED PRIMARY KEY,
    phone VARCHAR(20) COMMENT 'Contato privado do responsavel',
    CONSTRAINT fk_workshop_owners_user
        FOREIGN KEY (id_owner) REFERENCES users(id_user)
        ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE workshops (
    id_workshop BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    trade_name VARCHAR(150) NOT NULL,
    legal_name VARCHAR(150) NOT NULL,
    cnpj CHAR(14) NOT NULL UNIQUE COMMENT 'Sem pontuacao; validar no Java',
    description TEXT,
    logo VARCHAR(512),
    opening_hours VARCHAR(255),
    public_phone VARCHAR(20) COMMENT 'Contato comercial para divulgacao',
    postal_code CHAR(8) NOT NULL,
    street VARCHAR(150) NOT NULL,
    address_number VARCHAR(10) NOT NULL,
    complement VARCHAR(100),
    neighborhood VARCHAR(100) NOT NULL,
    city VARCHAR(100) NOT NULL,
    state_code CHAR(2) NOT NULL,
    fk_owner BIGINT UNSIGNED NOT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_workshops_owner
        FOREIGN KEY (fk_owner) REFERENCES workshop_owners(id_owner)
        ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- RESTRICT evita apagar oficinas por acidente ao excluir o dono.
-- Antes de excluir a conta do dono, transferir ou remover suas oficinas.

CREATE TABLE reviews (
    id_review BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    stars TINYINT UNSIGNED NOT NULL,
    description TEXT,
    fk_enthusiast BIGINT UNSIGNED NOT NULL,
    fk_workshop BIGINT UNSIGNED NOT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT uq_reviews_author_workshop UNIQUE (fk_enthusiast, fk_workshop),
    CONSTRAINT chk_reviews_stars CHECK (stars BETWEEN 1 AND 5),
    CONSTRAINT fk_reviews_enthusiast
        FOREIGN KEY (fk_enthusiast) REFERENCES enthusiast(id_enthusiast)
        ON DELETE CASCADE,
    CONSTRAINT fk_reviews_workshop
        FOREIGN KEY (fk_workshop) REFERENCES workshops(id_workshop)
        ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Regra adotada: uma avaliacao por entusiasta em cada oficina.
-- Excluir o perfil de entusiasta tambem exclui suas avaliacoes.
CREATE TABLE services (
    id_service BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(100) NOT NULL,
    description TEXT,
    category VARCHAR(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Equivale a registra: varias oficinas oferecem varios servicos.
CREATE TABLE workshop_services (
    fk_workshop BIGINT UNSIGNED NOT NULL,
    fk_service BIGINT UNSIGNED NOT NULL,
    PRIMARY KEY (fk_workshop, fk_service),
    CONSTRAINT fk_workshop_services_workshop
        FOREIGN KEY (fk_workshop) REFERENCES workshops(id_workshop)
        ON DELETE CASCADE,
    CONSTRAINT fk_workshop_services_service
        FOREIGN KEY (fk_service) REFERENCES services(id_service)
        ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE photos (
    id_photo BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    image_path VARCHAR(512) NOT NULL COMMENT 'Chave ou caminho; nao salvar token de acesso',
    fk_workshop BIGINT UNSIGNED NOT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_photos_workshop
        FOREIGN KEY (fk_workshop) REFERENCES workshops(id_workshop)
        ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Excluir a linha de photos nao apaga o arquivo: implementar isso no backend.
CREATE TABLE legalizations (
    id_legalization BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    last_reviewed_on DATE NOT NULL,
    fk_guide BIGINT UNSIGNED NOT NULL,
    CONSTRAINT fk_legalizations_guide
        FOREIGN KEY (fk_guide) REFERENCES guides(id_guide)
        ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE steps (
    id_step BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    step_number SMALLINT UNSIGNED NOT NULL,
    title VARCHAR(150) NOT NULL,
    description TEXT,
    required_documents TEXT COMMENT 'Lista de documentos exigidos; nao arquivos pessoais',
    estimated_cost DECIMAL(12,2),
    fk_legalization BIGINT UNSIGNED NOT NULL,
    CONSTRAINT uq_steps_order UNIQUE (fk_legalization, step_number),
    CONSTRAINT chk_steps_number CHECK (step_number > 0),
    CONSTRAINT chk_steps_cost CHECK (estimated_cost >= 0),
    CONSTRAINT fk_steps_legalization
        FOREIGN KEY (fk_legalization) REFERENCES legalizations(id_legalization)
        ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE sources (
    id_source BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(150) NOT NULL,
    organization VARCHAR(150),
    reference TEXT NOT NULL,
    consulted_on DATE NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Equivale a possui: uma etapa pode citar varias fontes e vice-versa.
CREATE TABLE step_sources (
    fk_step BIGINT UNSIGNED NOT NULL,
    fk_source BIGINT UNSIGNED NOT NULL,
    PRIMARY KEY (fk_step, fk_source),
    CONSTRAINT fk_step_sources_step
        FOREIGN KEY (fk_step) REFERENCES steps(id_step)
        ON DELETE CASCADE,
    CONSTRAINT fk_step_sources_source
        FOREIGN KEY (fk_source) REFERENCES sources(id_source)
        ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- RESUMO DAS 15 TABELAS DO DIAGRAMA:
-- usuario -> users; entusiasta -> enthusiast; preferencias -> preferences
-- guia -> guides; acessa -> accesses; dono_oficina -> workshop_owners
-- oficina -> workshops; avaliacao -> reviews; servicos -> services
-- registra -> workshop_services; fotos -> photos; legalizacao -> legalizations
-- etapas -> steps; fonte -> sources; possui -> step_sources
-- CHECK requer MySQL 8.0.16+ para ser efetivamente aplicado.
-- Revisar as regras de exclusao e retencao antes de publicar o aplicativo.
-- FIM DO RASCUNHO: NENHUM COMANDO EXECUTADO.
