export class HomeModel {
  images: Array<String>;
  popularproducts: Array<ProductItemModel>;
  popularshops: Array<ShopItemModel>;
  bestseller: Array<BestsellerModel>;
  lastvisit: Array<LastvisitModel>;
}

export class ProductItemModel {
  name: String;
  image: String;
  unitprice: Number;
}
export class ShopItemModel {
  name: String;
  image: String;
}
export class BestsellerModel {
  name: String;
  image: String;
  unitprice: Number;
}
export class LastvisitModel {
  name: String;
  image: String;
}
