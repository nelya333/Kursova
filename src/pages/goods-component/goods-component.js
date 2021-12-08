import React, { useEffect, useState } from "react";
import SortComponent from "../../components/sort-component/sort-component";
import CardItemComponent from "../../components/card-item-component/CardItem-component";
import { LOCALSTORE_TOTALITEMS } from "../../models/constants";

const GoodsComponent = () => {
  const itemsList = [
    {
      id: 1,
      name: "Очарование женственности",
      imgurl: "/imgs/fruits/cover_1_1_122.jpg",
      price: 320,
    },
    {
      id: 2,
      name: "Багатий тато, бідний тато",
      imgurl: "/imgs/fruits/72965_23136892.jpg",
      price: 220,
    },
    {
      id: 3,
      name: "Пять языков любви",
      imgurl: "/imgs/fruits/img_0477_15.jpg",
      price: 150,
    },
    {
      id: 4,
      name: "Чудовий ранок",
      imgurl: "/imgs/fruits/img_0111_10.jpg",
      price: 190,
    },
    { id: 5, name: "Кобзар", imgurl: "/imgs/fruits/img_50585.jpg", price: 155 },
    {
      id: 6,
      name: "Найбагатший чоловік у Вавилоні",
      imgurl: "/imgs/fruits/C2Mcf57y-ipad.jpg",
      price: 200,
      },
      {
          id: 7,
          name: "Коли сніг пахне мандаринками",
          imgurl: "/imgs/fruits/Коли сніг.jpg",
          price: 178,
      },
      {
          id: 8,
          name: "Кафе на краю світу",
          imgurl: "/imgs/fruits/кафе.jpg",
          price: 150,
      },
      {
          id: 9,
          name: "Там де співають раки",
          imgurl: "/imgs/fruits/співають.jpg",
          price: 120,
      },
      {
          id: 10,
          name: "Мирослава та інші з нашого двору",
          imgurl: "/imgs/fruits/Мирослава.jpg",
          price: 99,
      },
      {
          id: 11,
          name: "Ми проти вас",
          imgurl: "/imgs/fruits/ми проти вас.jpg",
          price: 89,
      },
      {
          id: 12,
          name: "Залізний вовк",
          imgurl: "/imgs/fruits/вовк.jpg",
          price: 129,
      },
  ];

  const [itemsToSell, setItemsToSell] = useState(itemsList);
  const [totalItems, setTotalItems] = useState([]);

  const getLocalStore = () => {
    if (totalItems && totalItems.length > 0) {
      return;
    }
    let cardsLocal = window.localStorage.getItem(LOCALSTORE_TOTALITEMS);
    cardsLocal = cardsLocal ? JSON.parse(cardsLocal) : cardsLocal;
    if (cardsLocal && Array.isArray(cardsLocal) && cardsLocal.length > 0) {
      setTotalItems([...cardsLocal]);
    }
  };

  useEffect(() => {
    getLocalStore();
  });

  const addItem = (cardItem) => {
    setTotalItems([...totalItems, cardItem]);
    window.localStorage.setItem(
      LOCALSTORE_TOTALITEMS,
      JSON.stringify(totalItems)
    );
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
    window.localStorage.setItem(
      LOCALSTORE_TOTALITEMS,
      JSON.stringify(totalItems)
    );
  };

  const setSortTotalItems = (cards) => {
    setItemsToSell(cards);
  };

  return (
    <section className="mt-3 container">
      <div className="row my-2">
        <div className="col-12">
          <h1 className="text-end" style={{ fontSize: "22px" }}>
            Додано товарів в корзину - {totalItems.length}, ціною -{" "}
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
