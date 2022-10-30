/*
  Warnings:

  - You are about to drop the column `favorite_id` on the `items` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "items" DROP CONSTRAINT "items_favorite_id_fkey";

-- AlterTable
ALTER TABLE "items" DROP COLUMN "favorite_id";
