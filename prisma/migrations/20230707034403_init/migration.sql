-- CreateTable
CREATE TABLE "Products" (
    "id" TEXT NOT NULL,
    "productType" TEXT NOT NULL,
    "flavor" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "cost" INTEGER NOT NULL,
    "batch" TEXT NOT NULL,
    "productionDate" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "Sales" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "sellerName" TEXT NOT NULL,
    "customerName" TEXT NOT NULL,
    "Quantity" INTEGER NOT NULL,
    "cost" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "unitarySales" (
    "saleId" TEXT NOT NULL,
    "unitaryCost" INTEGER NOT NULL,
    "productId" TEXT NOT NULL,

    CONSTRAINT "unitarySales_pkey" PRIMARY KEY ("saleId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Products_id_key" ON "Products"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Sales_id_key" ON "Sales"("id");

-- AddForeignKey
ALTER TABLE "Sales" ADD CONSTRAINT "Sales_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "unitarySales" ADD CONSTRAINT "unitarySales_saleId_fkey" FOREIGN KEY ("saleId") REFERENCES "Sales"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "unitarySales" ADD CONSTRAINT "unitarySales_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
