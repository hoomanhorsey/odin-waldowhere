/*
  Warnings:

  - A unique constraint covering the columns `[name,mapId]` on the table `Characters` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Characters_name_key";

-- CreateIndex
CREATE UNIQUE INDEX "Characters_name_mapId_key" ON "Characters"("name", "mapId");
