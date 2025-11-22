-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "wced";

-- CreateTable
CREATE TABLE "wced"."entry" (
    "entryid" SERIAL NOT NULL,
    "word" VARCHAR(64) NOT NULL,
    "page" VARCHAR(8),
    "hom_number" INTEGER,

    CONSTRAINT "entry_pkey" PRIMARY KEY ("entryid")
);

-- CreateTable
CREATE TABLE "wced"."headword" (
    "headid" SERIAL NOT NULL,
    "entryid" INTEGER NOT NULL,
    "head" VARCHAR(64) NOT NULL,
    "normalized_head" VARCHAR(64) NOT NULL,
    "type" VARCHAR(8),
    "pos" VARCHAR(16),

    CONSTRAINT "headword_pkey" PRIMARY KEY ("headid")
);

-- CreateTable
CREATE TABLE "wced"."sense" (
    "senseid" SERIAL NOT NULL,
    "entryid" INTEGER NOT NULL,
    "number" INTEGER,
    "definition" TEXT,
    "dialect" VARCHAR(32),

    CONSTRAINT "sense_pkey" PRIMARY KEY ("senseid")
);

-- CreateTable
CREATE TABLE "wced"."translation" (
    "transid" SERIAL NOT NULL,
    "senseid" INTEGER NOT NULL,
    "lang" VARCHAR(8) NOT NULL,
    "translation" VARCHAR(255) NOT NULL,

    CONSTRAINT "translation_pkey" PRIMARY KEY ("transid")
);

-- CreateTable
CREATE TABLE "wced"."example" (
    "exampleid" SERIAL NOT NULL,
    "senseid" INTEGER NOT NULL,
    "text_cebuano" TEXT NOT NULL,
    "text_translation" TEXT,

    CONSTRAINT "example_pkey" PRIMARY KEY ("exampleid")
);

-- CreateTable
CREATE TABLE "wced"."xref" (
    "xrefid" SERIAL NOT NULL,
    "senseid" INTEGER NOT NULL,
    "target_word" VARCHAR(64) NOT NULL,
    "lang" VARCHAR(8) NOT NULL DEFAULT 'ceb',

    CONSTRAINT "xref_pkey" PRIMARY KEY ("xrefid")
);

-- AddForeignKey
ALTER TABLE "wced"."headword" ADD CONSTRAINT "headword_entryid_fkey" FOREIGN KEY ("entryid") REFERENCES "wced"."entry"("entryid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wced"."sense" ADD CONSTRAINT "sense_entryid_fkey" FOREIGN KEY ("entryid") REFERENCES "wced"."entry"("entryid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wced"."translation" ADD CONSTRAINT "translation_senseid_fkey" FOREIGN KEY ("senseid") REFERENCES "wced"."sense"("senseid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wced"."example" ADD CONSTRAINT "example_senseid_fkey" FOREIGN KEY ("senseid") REFERENCES "wced"."sense"("senseid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wced"."xref" ADD CONSTRAINT "xref_senseid_fkey" FOREIGN KEY ("senseid") REFERENCES "wced"."sense"("senseid") ON DELETE RESTRICT ON UPDATE CASCADE;
