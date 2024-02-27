/*
  Warnings:

  - The primary key for the `category` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_category` on the `category` table. All the data in the column will be lost.
  - You are about to drop the column `category_id` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `image_product` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `name_product` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `price_product` on the `product` table. All the data in the column will be lost.
  - Added the required column `id_categoria` to the `category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryId` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `product_category_id_fkey` ON `product`;

-- AlterTable
ALTER TABLE `category` DROP PRIMARY KEY,
    DROP COLUMN `id_category`,
    ADD COLUMN `id_categoria` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id_categoria`);

-- AlterTable
ALTER TABLE `product` DROP COLUMN `category_id`,
    DROP COLUMN `image_product`,
    DROP COLUMN `name_product`,
    DROP COLUMN `price_product`,
    ADD COLUMN `categoryId` INTEGER NOT NULL,
    ADD COLUMN `image` VARCHAR(191) NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `price` DOUBLE NOT NULL;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `category`(`id_categoria`) ON DELETE RESTRICT ON UPDATE CASCADE;
