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

-- Call bookings captured from the Cal.com embed (bookingSuccessfulV2 event) on
-- the booking page. The Cal.com free plan has no server API/webhooks, so these
-- are captured client-side and POSTed to /api/bookings. Only bookings made
-- through the website embed are recorded, and the embed does NOT expose the
-- attendee's email. Unlike the leads table, the app AUTO-CREATES this one on
-- first use (ensureBookingsTable in lib/bookings.ts), so running it by hand is
-- optional -- kept here as documentation and a manual fallback.
CREATE TABLE IF NOT EXISTS bookings (
  id             BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  uid            VARCHAR(255)  NULL,        -- Cal.com booking uid (dedupe key)
  title          VARCHAR(512)  NULL,        -- "30 Min Meeting between Ecomm Wizards and John Doe"
  name           VARCHAR(255)  NULL,        -- best-effort attendee name parsed from title
  start_time     DATETIME      NULL,        -- booking start (UTC)
  end_time       DATETIME      NULL,        -- booking end (UTC)
  status         VARCHAR(64)   NULL,        -- Cal.com status at booking time (e.g. accepted)
  event_type_id  VARCHAR(64)   NULL,
  video_call_url VARCHAR(1024) NULL,        -- Cal video / meeting link
  raw            JSON          NOT NULL,    -- full embed event payload (safety net)
  created_at     TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uq_uid (uid),
  KEY idx_start_time (start_time)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
