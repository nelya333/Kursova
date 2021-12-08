import React, { useState } from "react";
import SortComponent from "../components/sort-component/sort-component";
import CardItemComponent from "../components/card-item-component/CardItem-component";

const GoodsComponent = () => {
  const itemsList = [
    {
      id: 1,
      name: "Ocharovanie-zhenstvennosti",
      imgurl: "/imgs/fruits/cover_1_1_122.jpg",
      price: 320,
    },
    {
      id: 2,
      name: "Rich Dad Poor Dad",
      imgurl: "/imgs/fruits/72965_23136892.jpg",
      price: 220,
    },
    {
      id: 3,
      name: "The five love languages",
      imgurl: "/imgs/fruits/img_0477_15.jpg",
      price: 150,
    },
    {
      id: 4,
      name: "The Miracle Morning",
      imgurl: "/imgs/fruits/img_0111_10.jpg",
      price: 190,
    },
    { id: 5, name: "Kobzar", imgurl: "/imgs/fruits/img_50585.jpg", price: 155 },
    {
      id: 6,
      name: "Najbahatshyj cholovik",
      imgurl: "/imgs/fruits/C2Mcf57y-ipad.jpg",
      price: 200,
    },
  ];

  const [itemsToSell, setItemsToSell] = useState(itemsList);
  const [totalItems, setTotalItems] = useState([]);

  const addItem = (cardItem) => {
    setTotalItems([...totalItems, cardItem]);
  };

  const removeItem = (cardItem) => {
    let foundItemIndex;
    totalItems.forEach((item, index) => {
      if (item.id === cardItem.id) {
        foundItemIndex = index;
      }
    });
    totalItems.splice(foundItemIndex, 1);
    setTotalItems([...totalItems]);
  };

  const setSortTotalItems = (cards) => {
    setItemsToSell(cards);
  };

  return (
    <section className="mt-3 container">
      <div className="row my-5">
        <div className="col-12">
          <h1 className="text-end">
            Додано товарів в корзину - {totalItems.length} ціною -{" "}
            {totalItems.reduce((accumulator, item) => {
              return (accumulator += item.price);
            }, 0)}{" "}
            грн.
          </h1>
        </div>
      </div>
      <SortComponent
        itemsList={itemsList}
        totalItems={totalItems}
        setSortTotalItems={setSortTotalItems}
      />

      <div className="row">
        {itemsToSell.map((item) => {
          return (
            <CardItemComponent
              key={item.id}
              card={item}
              addItem={addItem}
              removeItem={removeItem}
              totalItems={totalItems.filter(
                (itemFilter) => itemFilter.id === item.id
              )}
            />
          );
        })}
      </div>
    </section>
  );
};

export default GoodsComponent;
