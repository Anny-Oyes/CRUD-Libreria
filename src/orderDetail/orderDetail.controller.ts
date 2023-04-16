import { Body, Controller, Get, Post, Patch, ParseUUIDPipe } from "@nestjs/common";
import { Delete, Param } from "@nestjs/common/decorators";
import { CreateOrderDetailDto } from "./dto/orderDetail.dto";
import { OrderDetailService } from "./orderDetail.service";

@Controller('orderDetail')

export class OrderDetailController {
    constructor (
        private readonly orderDetailServiceRepo: OrderDetailService
    ){}
        @Post()
        create(@Body() orderDto: CreateOrderDetailDto){
            return this.orderDetailServiceRepo.create(orderDto);
    }

    @Get()
    findAll(){
        return this.orderDetailServiceRepo.findAll();
    }

    @Get(':id')
    findOne(
        @Param('id', ParseUUIDPipe) id: string) {
            return this.orderDetailServiceRepo.findOne(id);
        }

    @Delete(':id')
    remove(@Param('id', ParseUUIDPipe) id: string) {
        return this.orderDetailServiceRepo.remove(id);
    }

    @Patch(':id')
    update(
      @Param('id', ParseUUIDPipe) id: string,
      @Body() updateOrderDetailDto: CreateOrderDetailDto
    ){
      return this.orderDetailServiceRepo.update(id, updateOrderDetailDto);
    }
  }
