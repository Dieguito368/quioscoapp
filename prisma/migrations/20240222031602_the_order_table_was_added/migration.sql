-- DropIndex
DROP INDEX `product_category_id_fkey` ON `product`;

-- CreateTable
CREATE TABLE `order` (
    `id_order` INTEGER NOT NULL AUTO_INCREMENT,
    `name_order` VARCHAR(191) NOT NULL,
    `date_order` VARCHAR(191) NOT NULL,
    `total_order` DOUBLE NOT NULL,
    `pedido_order` JSON NOT NULL,

    PRIMARY KEY (`id_order`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `product` ADD CONSTRAINT `product_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `category`(`id_category`) ON DELETE RESTRICT ON UPDATE CASCADE;
