import { ensureElement } from "../../../utils/utils";
import { IEvents } from "../../base/Events";
import { Card } from "./Card";

export type TCardBasket = {
  index?: number;
};

export class CardBasket extends Card<TCardBasket> {
  protected indexElement: HTMLElement;
  protected deleteButton: HTMLButtonElement;

  constructor(container: HTMLElement, protected events: IEvents) {
    super(container);
    
    this.indexElement = ensureElement<HTMLElement>('.basket__item-index', this.container);
    this.deleteButton = ensureElement<HTMLButtonElement>('.basket__item-delete', this.container);

    this.deleteButton.addEventListener('click', () => { 
      const index = parseInt(this.indexElement.textContent || '1') - 1;
      this.events.emit('shopping-cart:remove', { index }); 
    }); 
  }

  set index(value: number) {
    this.indexElement.textContent = String(value);
  }
}
