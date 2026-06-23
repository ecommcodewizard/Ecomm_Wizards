-- Lead capture table. Run ONCE by hand in Hostinger hPanel -> Databases ->
-- phpMyAdmin -> SQL tab (after creating the database + user and granting it
-- access). The app does NOT create this on boot.
CREATE TABLE IF NOT EXISTS leads (
  id          BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  type        ENUM('audit','contact') NOT NULL,
  name        VARCHAR(255) NOT NULL,
  email       VARCHAR(320) NOT NULL,
  phone       VARCHAR(64)  NULL,
  company     VARCHAR(255) NULL,
  url         VARCHAR(512) NULL,
  situation   JSON         NULL,   -- audit: array of selected options
  source      VARCHAR(128) NULL,   -- audit.source OR contact.referral
  budget      VARCHAR(64)  NULL,   -- contact only
  services    VARCHAR(255) NULL,   -- contact only
  message     TEXT         NULL,   -- contact.project_details
  raw         JSON         NOT NULL, -- full submitted payload (safety net)
  ip          VARCHAR(45)  NULL,
  user_agent  VARCHAR(512) NULL,
  created_at  TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_created_at (created_at),
  KEY idx_type (type),
  KEY idx_email (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
