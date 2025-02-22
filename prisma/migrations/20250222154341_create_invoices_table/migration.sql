-- CreateEnum
CREATE TYPE "InvoiceStatus" AS ENUM ('pending', 'draft', 'sent', 'paid', 'canceled');

-- CreateTable
CREATE TABLE "Invoice" (
    "id" SERIAL NOT NULL,
    "invoiceNumber" TEXT NOT NULL,
    "customerName" TEXT NOT NULL,
    "dueDate" TIMESTAMP(3) NOT NULL,
    "grandTotal" DECIMAL(65,30) NOT NULL,
    "items" JSONB NOT NULL,
    "status" "InvoiceStatus" NOT NULL,
    "uploadUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Invoice_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Invoice_invoiceNumber_key" ON "Invoice"("invoiceNumber");
