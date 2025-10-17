import { Api } from '../base/Api';
import { IApi, IOrderRequest, IOrderResponse, IResult } from '../../types/index';

export class ServerApi {
  protected api: IApi;

  constructor(api: Api) {
    this.api = api;
  }

  async getProducts(): Promise<IResult> {
    return this.api.get('/product/');
  }

  async postOrder(orderRequest: IOrderRequest): Promise<IOrderResponse> {
    return this.api.post('/order/', orderRequest);
  }
}
