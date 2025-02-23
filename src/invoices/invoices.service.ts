import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateInvoiceDto } from './dtos/createInvoiceDto';
import { UpdateInvoiceDto } from './dtos/updateInvoiceDto';

@Injectable()
export class InvoicesService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateInvoiceDto) {

    data.invoiceNumber = Math.floor(Math.random() * 1000000).toString();
    return this.prisma.invoice.create({ data });
  }

  async findAll(filters: {
    status?: string;
    startDate?: string;
    endDate?: string;
  }) {
    const { status, startDate, endDate } = filters;

    // Build the query dynamically
    const where = {};
    if (status) {
      where['status'] = status;
    }
    if (startDate) {
      where['dueDate'] = { gte: new Date(startDate) }; // Greater than or equal to startDate
    }
    if (endDate) {
      where['dueDate'] = { ...where['due_date'], lte: new Date(endDate) }; // Less than or equal to endDate
    }

    // Fetch all matching invoices
    const invoices = await this.prisma.invoice.findMany({
      where,
      orderBy: { createdAt: 'desc' }, // Order by createdAt in descending order
    });

    return invoices;
  }


//   find invoice by id
  async findOne(id: number) {
    const invoice = await this.prisma.invoice.findUnique({
      where: { id }
    });

    if (!invoice) {
      throw new NotFoundException(`Invoice with ID ${id} not found`);
    }

    return invoice;
  }


  async update(id: number, updateInvoiceDto: UpdateInvoiceDto) {
    const invoice = await this.prisma.invoice.findUnique({
      where: { id },
    });

    if (!invoice) {
      throw new NotFoundException(`Invoice with ID ${id} not found`);
    }

    return this.prisma.invoice.update({
      where: { id },
      data: updateInvoiceDto,
    });
  }



  async remove(id: number) {
    const invoice = await this.prisma.invoice.findUnique({
      where: { id },
    });

    if (!invoice) {
      throw new NotFoundException(`Invoice with ID ${id} not found`);
    }

   
  await this.prisma.invoice.delete({
    where: { id },
  });

  return {
    message: `Invoice with ID ${id} has been successfully deleted`,
    success: true,
  };

    
  }
//   async filterInvoices(dateRange: { start: Date; end: Date }, paymentStatus: string) {
//     return this.prisma.invoice.findMany({
//       where: {
//         date: {
//           gte: dateRange.start,
//           lte: dateRange.end,
//         },
//         paymentStatus,
//       },
//     });
//   }
}