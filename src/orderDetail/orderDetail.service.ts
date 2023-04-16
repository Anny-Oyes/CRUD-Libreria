import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateOrderDetailDto } from "./dto/orderDetail.dto";
import { OrderDetail } from "./entities/orderDetail.entity";

@Injectable()

export class OrderDetailService {
    constructor (
        @InjectRepository(OrderDetail)
        private readonly orderRepository: Repository<OrderDetail>
    ) {}

    async create(orderDto: CreateOrderDetailDto) {
        const orderDetail = this.orderRepository.create(orderDto);
        await this.orderRepository.save(orderDetail);

        return orderDetail;
    }

    findAll(){
        return this.orderRepository.find();
    }

    findOne(id: string) {
        return this.orderRepository.findOneBy({id});
    }

    async remove(id: string){
        const orderDetail = await this.findOne(id);
        await this.orderRepository.remove(orderDetail);
        return 'La orden se a eliminado correctamente'
    }

    async update(id: string, modificaciones: CreateOrderDetailDto) {
        const findOrder = await this.findOne(id);
        const updatedOrder = await this.orderRepository.merge(
          findOrder,
          modificaciones,
        );
    
        return this.orderRepository.save(updatedOrder);
      }
    }