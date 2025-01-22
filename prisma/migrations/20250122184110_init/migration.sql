-- CreateTable
CREATE TABLE "tenant" (
    "id" SERIAL NOT NULL,
    "host" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "main_color" TEXT NOT NULL DEFAULT '#000',

    CONSTRAINT "tenant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "task" (
    "id" SERIAL NOT NULL,
    "tenant_id" INTEGER NOT NULL,
    "label" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "task_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tenant_host_key" ON "tenant"("host");

-- AddForeignKey
ALTER TABLE "task" ADD CONSTRAINT "task_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
