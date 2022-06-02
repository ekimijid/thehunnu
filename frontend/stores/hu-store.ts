import { makeAutoObservable, observable, runInAction } from 'mobx';

import { uiStore } from './app-store';
import { cacheable } from './cachable';
import Food from "Frontend/generated/be/eki/thehu/data/entity/Food";
import {FoodEndpoint} from "Frontend/generated/endpoints";
import FoodDataModel from "Frontend/generated/be/eki/thehu/data/endpoint/FoodEndpoint/FoodDataModel";


export class HuStore {
  foods: Food []=[];

  constructor() {
    makeAutoObservable(
      this,
      {
        initFromServer: false,
        foods: observable.shallow,
      },
      { autoBind: true }
    );

    this.initFromServer();
  }

  async initFromServer() {
    const data = await cacheable(
      FoodEndpoint.getFoodData,
      'crm',
      FoodDataModel.createEmptyValue()
    );

    runInAction(() => {
     // this.foods=data.get
    });
  }

  async saveContact(food:Food) {
    try {
      const saved = await FoodEndpoint.saveFood(food);
      if (saved) {
        this.saveLocal(saved);
        uiStore.showSuccess('Contact saved.');
      } else {
        uiStore.showError('Contact save failed.');
      }
    } catch (e) {
      console.log(e);
      uiStore.showError('Contact save failed.');
    }
  }

  async deleteContact(contact: Contact) {
    if (!contact.id) return;

    try {
      await CrmEndpoint.deleteContact(contact.id);
      this.deleteLocal(contact);
      uiStore.showSuccess('Contact deleted.');
    } catch (e) {
      uiStore.showError('Failed to delete contact.');
    }
  }

  private saveLocal(saved: Contact) {
    const contactExists = this.contacts.some((c) => c.id === saved.id);
    if (contactExists) {
      this.contacts = this.contacts.map((existing) => {
        if (existing.id === saved.id) {
          return saved;
        } else {
          return existing;
        }
      });
    } else {
      this.contacts.push(saved);
    }
  }

  private deleteLocal(contact: Contact) {
    this.contacts = this.contacts.filter((c) => c.id !== contact.id);
  }
}
